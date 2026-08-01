import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, Loader2, Play, RotateCcw } from 'lucide-react'
import type { Lesson, GameState, AppState } from '../types'
import type { World } from '../types'
import { BlocklyWorkspace, type BlocklyWorkspaceHandle } from '../components/BlocklyWorkspace'
import { GameGrid } from '../components/GameGrid'
import { Mascot } from '../components/Mascot'
import { RewardModal } from '../components/RewardModal'
import { StarRating } from '../components/StarRating'
import {
  buildInitialState,
  parseCodeToActions,
  applyAction,
  checkWin,
} from '../engine/gameEngine'
import { calculateStars, calculateXPReward, getLevelInfo, XP_LEVELS } from '../data/xpSystem'
import { playSuccess, playError, playMove, playCollect, playLevelUp } from '../utils/sounds'
import type { useProgress } from '../store/useProgress'
import { useLanguage } from '../i18n/LanguageProvider'
import { localize } from '../i18n/localize'

const STEP_DELAY = 350

interface LessonScreenProps {
  lesson: Lesson
  world: World
  onNavigate: (state: Partial<AppState>) => void
  completeLesson: ReturnType<typeof useProgress>['completeLesson']
  existingProgress?: { stars: number; completed: boolean }
  nextLessonId?: string
}

export function LessonScreen({ lesson, world, onNavigate, completeLesson, existingProgress, nextLessonId }: LessonScreenProps) {
  const { t, language } = useLanguage()
  const [gameState, setGameState] = useState<GameState>(buildInitialState(lesson))
  const [currentCode, setCurrentCode] = useState('')
  const [currentBlockCount, setCurrentBlockCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [hintIndex, setHintIndex] = useState(0)
  const [showReward, setShowReward] = useState(false)
  const [rewardData, setRewardData] = useState({ stars: 0, xp: 0, leveledUp: false, newLevel: '', newBadge: '' })
  const [mascotMessage, setMascotMessage] = useState(() => localize(lesson.mascotMessage, language))
  const [mascotMood, setMascotMood] = useState<'happy' | 'thinking' | 'excited' | 'sad'>('happy')
  const [activeTab, setActiveTab] = useState<'blocks' | 'game'>('blocks')
  const runningRef = useRef(false)
  const blocklyRef = useRef<BlocklyWorkspaceHandle>(null)

  const handleCodeChange = useCallback((code: string, blockCount: number) => {
    setCurrentCode(code)
    setCurrentBlockCount(blockCount)
  }, [])

  const switchToTab = (tab: 'blocks' | 'game') => {
    setActiveTab(tab)
    if (tab === 'blocks') {
      // Re-render Blockly after the container becomes visible
      requestAnimationFrame(() => {
        blocklyRef.current?.resize()
      })
    }
  }

  const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

  const runCode = async () => {
    if (isRunning || runningRef.current) return
    if (!currentCode.trim()) {
      setMascotMessage(t('game.no.blocks'))
      setMascotMood('thinking')
      switchToTab('game')
      return
    }

    setIsRunning(true)
    runningRef.current = true
    setShowReward(false)
    setShowHint(false)
    switchToTab('game')

    const initial = buildInitialState(lesson)
    setGameState({ ...initial, status: 'running' })
    setMascotMessage(t('mascot.running'))
    setMascotMood('thinking')

    await sleep(300)

    const { actions, error } = parseCodeToActions(currentCode)

    if (error) {
      setGameState(s => ({ ...s, status: 'crashed', errorMessage: `Code error: ${error}` }))
      setMascotMessage(t('mascot.error'))
      setMascotMood('sad')
      playError()
      setIsRunning(false)
      runningRef.current = false
      return
    }

    if (actions.length === 0) {
      setGameState(s => ({ ...s, status: 'failure' }))
      setMascotMessage(t('game.fail.noactions'))
      setMascotMood('thinking')
      setIsRunning(false)
      runningRef.current = false
      return
    }

    let state: GameState = { ...initial, status: 'running' }
    for (const action of actions) {
      if (!runningRef.current) break

      const next = applyAction(state, action, lesson)

      if (action.type === 'collect') {
        if (next.collectedIds.size > state.collectedIds.size) playCollect()
      } else {
        playMove()
      }

      state = next
      setGameState({ ...state })

      if (state.status === 'crashed') break

      await sleep(STEP_DELAY)
    }

    if (state.status !== 'crashed') {
      const won = checkWin(state, lesson)

      if (won) {
        const stars = calculateStars(currentBlockCount, lesson.starThresholds)
        const xpEarned = calculateXPReward(lesson.xpReward, stars)

        setGameState(s => ({ ...s, status: 'success' }))
        playSuccess()

        setMascotMessage(t(`mascot.success.${stars}`))
        setMascotMood('excited')

        await sleep(800)

        const result = completeLesson(lesson.id, stars, xpEarned)

        if (result.leveledUp) playLevelUp()

        const newLevelInfo = getLevelInfo(XP_LEVELS[result.newLevel - 1]?.minXP ?? 0)

        setRewardData({
          stars,
          xp: xpEarned,
          leveledUp: result.leveledUp,
          newLevel: localize(newLevelInfo.name, language),
          newBadge: newLevelInfo.badge,
        })
        setShowReward(true)
      } else {
        setGameState(s => ({ ...s, status: 'failure' }))
        playError()
        setMascotMessage(t('game.fail.path'))
        setMascotMood('sad')
      }
    } else {
      const msg = state.errorMessage ?? ''
      if (msg.includes('edge') || msg.includes('bounds')) {
        setMascotMessage(t('game.fail.edge'))
      } else {
        setMascotMessage(t('game.fail.obstacle'))
      }
      setMascotMood('sad')
    }

    setIsRunning(false)
    runningRef.current = false
  }

  const resetGame = () => {
    runningRef.current = false
    setIsRunning(false)
    setGameState(buildInitialState(lesson))
    setMascotMessage(localize(lesson.mascotMessage, language))
    setMascotMood('happy')
  }

  const showNextHint = () => {
    setShowHint(true)
    const next = (hintIndex + 1) % lesson.hints.length
    setHintIndex(next)
    setMascotMessage(`${t('mascot.hint.prefix')} ${localize(lesson.hints[hintIndex], language)}`)
    setMascotMood('thinking')
    switchToTab('game')
  }

  const handleNext = () => {
    if (nextLessonId) {
      onNavigate({ screen: 'lesson', currentLessonId: nextLessonId, currentWorldId: lesson.worldId })
    } else {
      onNavigate({ screen: 'home', currentWorldId: lesson.worldId })
    }
    setShowReward(false)
  }

  const handleRetry = () => {
    setShowReward(false)
    resetGame()
  }

  const existingStars = existingProgress?.stars ?? 0

  return (
    <div className="max-w-7xl mx-auto px-4 pt-4 pb-24 lg:pb-4 h-[calc(100vh-80px)] flex flex-col gap-4">
      {/* Lesson header */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-black shrink-0"
          style={{ background: `${world.theme.accentColor}30`, color: world.theme.accentColor }}
        >
          {lesson.number}
        </div>
        <div className="min-w-0">
          <h1 className="text-lg sm:text-xl font-black text-white leading-tight truncate">{localize(lesson.title, language)}</h1>
          <p className="text-white/50 text-xs truncate">{localize(world.name, language)} · {localize(world.concept, language)}</p>
        </div>
        <div className="ml-auto flex items-center gap-3 shrink-0">
          {existingStars > 0 && <StarRating stars={existingStars} size="sm" />}
          <span className="text-sm font-bold text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
            ⚡ {lesson.xpReward} XP
          </span>
        </div>
      </motion.div>

      {/* Mobile tab switcher (hidden on lg+) */}
      <div className="flex lg:hidden gap-2 bg-[#130D2E] rounded-xl p-1 border border-purple-900/40">
        <button
          onClick={() => switchToTab('blocks')}
          className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === 'blocks' ? 'bg-purple-600 text-white shadow' : 'text-purple-300 hover:text-white'}`}
        >
          {t('game.blocks.tab')}
        </button>
        <button
          onClick={() => switchToTab('game')}
          className={`flex-1 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === 'game' ? 'bg-purple-600 text-white shadow' : 'text-purple-300 hover:text-white'}`}
        >
          {t('game.game.tab')}
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
        {/* LEFT: Blockly — visible when tab=blocks on mobile, always on desktop */}
        <motion.div
          className={`flex flex-col rounded-2xl overflow-hidden border border-purple-900/40 bg-[#130D2E] ${activeTab === 'blocks' ? 'flex' : 'hidden'} lg:flex`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          style={{ minHeight: 340 }}
        >
          <BlocklyWorkspace
            ref={blocklyRef}
            categories={lesson.availableCategories}
            onCodeChange={handleCodeChange}
          />
        </motion.div>

        {/* RIGHT: Game + Mascot — visible when tab=game on mobile, always on desktop */}
        <motion.div
          className={`flex-col gap-4 ${activeTab === 'game' ? 'flex' : 'hidden'} lg:flex`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
        >
          {/* Mascot */}
          <div
            className="rounded-2xl p-4 border"
            style={{
              background: `${world.theme.accentColor}15`,
              borderColor: `${world.theme.accentColor}30`,
            }}
          >
            <Mascot
              character={world.character}
              characterName={world.characterName}
              message={mascotMessage}
              mood={mascotMood}
              accentColor={world.theme.accentColor}
            />
          </div>

          {/* Game grid */}
          <div
            className="flex-1 rounded-2xl p-4 border flex items-center justify-center"
            style={{
              background: 'rgba(10,6,24,0.6)',
              borderColor: `${world.theme.accentColor}30`,
            }}
          >
            <GameGrid
              lesson={lesson}
              world={world}
              gameState={gameState}
              maxSize={320}
            />
          </div>

          {/* Hint panel */}
          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="rounded-xl p-3 bg-yellow-500/10 border border-yellow-400/30 text-yellow-200 text-sm font-semibold overflow-hidden"
              >
                💡 {localize(lesson.hints[hintIndex], language)}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Controls bar — fixed floating on mobile, inline on desktop */}
      <motion.div
        className="fixed bottom-0 inset-x-0 z-20 bg-[#0A0618]/95 backdrop-blur-md border-t border-purple-900/30 lg:static lg:inset-auto lg:bg-transparent lg:backdrop-blur-none lg:border-0"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="flex-1 text-xs text-white/40 leading-relaxed hidden lg:block truncate">
            {localize(lesson.story, language)}
          </div>

          <div className="flex gap-2 w-full lg:w-auto lg:ml-auto">
            <button
              onClick={showNextHint}
              disabled={isRunning}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-3 rounded-xl border border-yellow-400/30 text-yellow-200 hover:bg-yellow-500/20 transition-colors font-bold text-sm disabled:opacity-50"
            >
              <Lightbulb className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">{t('game.hint')}</span>
            </button>

            <button
              onClick={resetGame}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-3 rounded-xl border border-white/20 text-white/60 hover:bg-white/10 transition-colors font-bold text-sm"
            >
              <RotateCcw className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">{t('game.reset')}</span>
            </button>

            <motion.button
              onClick={runCode}
              disabled={isRunning}
              className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-xl font-black text-white text-base relative overflow-hidden disabled:opacity-70"
              style={{
                background: isRunning
                  ? 'rgba(139,92,246,0.5)'
                  : 'linear-gradient(135deg, #7C3AED, #EC4899)',
                boxShadow: isRunning ? 'none' : '0 4px 24px rgba(124,58,237,0.5)',
              }}
              whileHover={!isRunning ? { scale: 1.05 } : {}}
              whileTap={!isRunning ? { scale: 0.95 } : {}}
            >
              {isRunning ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                  <span className="hidden sm:inline">{t('game.running')}</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 shrink-0" />
                  {t('game.run')}
                </>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Reward modal */}
      <RewardModal
        open={showReward}
        stars={rewardData.stars}
        xpEarned={rewardData.xp}
        leveledUp={rewardData.leveledUp}
        newLevelName={rewardData.newLevel}
        newLevelBadge={rewardData.newBadge}
        onNext={handleNext}
        onRetry={handleRetry}
      />
    </div>
  )
}
