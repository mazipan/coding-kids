import { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bug, Lightbulb, Loader2, Play, RotateCcw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import type { Lesson, GameState } from '../types'
import type { World } from '../types'
import { BlocklyWorkspace, type BlocklyWorkspaceHandle } from '../components/BlocklyWorkspace'
import { BlocklyWalkthrough } from '../components/BlocklyWalkthrough'
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
import { calculateStars, calculateXPReward, getLevelInfo, getMissingCategories, maxStarsForThresholds, XP_LEVELS } from '../data/xpSystem'
import { playSuccess, playError, playMove, playCollect, playLevelUp } from '../utils/sounds'
import type { useProgress } from '../store/useProgress'
import { useLanguage } from '../i18n/LanguageProvider'
import { localize } from '../i18n/localize'

const STEP_DELAY = 350

interface LessonScreenProps {
  lesson: Lesson
  world: World
  completeLesson: ReturnType<typeof useProgress>['completeLesson']
  existingProgress?: { stars: number; completed: boolean }
  nextLessonNumber?: number
  nextWorld?: World
}

export function LessonScreen({ lesson, world, completeLesson, existingProgress, nextLessonNumber, nextWorld }: LessonScreenProps) {
  const navigate = useNavigate()
  const { t, language } = useLanguage()
  const [gameState, setGameState] = useState<GameState>(buildInitialState(lesson))
  const [currentCode, setCurrentCode] = useState('')
  const [currentBlockCount, setCurrentBlockCount] = useState(0)
  const [currentUsedBlockTypes, setCurrentUsedBlockTypes] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [hintIndex, setHintIndex] = useState(0)
  const [showReward, setShowReward] = useState(false)
  const [showTutorialComplete, setShowTutorialComplete] = useState(false)
  const [showWalkthrough, setShowWalkthrough] = useState(
    () => lesson.isTutorial === true
  )
  const [rewardData, setRewardData] = useState({ stars: 0, xp: 0, leveledUp: false, newLevel: '', newBadge: '', missingCategories: [] as string[] })
  const [mascotMessage, setMascotMessage] = useState(() => localize(lesson.mascotMessage, language))
  const [mascotMood, setMascotMood] = useState<'happy' | 'thinking' | 'excited' | 'sad'>('happy')
  const [activeTab, setActiveTab] = useState<'blocks' | 'game'>('blocks')
  const runningRef = useRef(false)
  const blocklyRef = useRef<BlocklyWorkspaceHandle>(null)

  useEffect(() => {
    if (lesson.isBuggy === true && lesson.buggyState) {
      blocklyRef.current?.loadState(lesson.buggyState)
    }
  }, [])

  const handleWalkthroughLoadState = useCallback((state: object) => {
    blocklyRef.current?.loadState(state)
    requestAnimationFrame(() => { blocklyRef.current?.resize() })
  }, [])

  const handleWalkthroughSwitchTab = useCallback((tab: 'blocks' | 'game') => {
    setActiveTab(tab)
    if (tab === 'blocks') {
      requestAnimationFrame(() => { blocklyRef.current?.resize() })
    }
  }, [])

  const handleCodeChange = useCallback((code: string, blockCount: number, usedBlockTypes: string[]) => {
    setCurrentCode(code)
    setCurrentBlockCount(blockCount)
    setCurrentUsedBlockTypes(usedBlockTypes)
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

      if (next.collectedIds.size > state.collectedIds.size) {
        playCollect()
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
        setGameState(s => ({ ...s, status: 'success' }))
        playSuccess()
        setMascotMood('excited')

        if (lesson.isTutorial) {
          setMascotMessage(t('tutorial.complete.title'))
          await sleep(600)
          completeLesson(lesson.id, 1, 0)
          setIsRunning(false)
          runningRef.current = false
          setShowTutorialComplete(true)
          return
        }

        const stars = calculateStars(currentBlockCount, lesson.starThresholds, currentUsedBlockTypes, lesson.requiredCategories)
        const xpEarned = calculateXPReward(lesson.xpReward, stars)
        const missing = lesson.requiredCategories && stars < 3
          ? getMissingCategories(currentUsedBlockTypes, lesson.requiredCategories)
          : []

        const mascotKey = stars === 1 && missing.length > 0
          ? 'mascot.success.1.criteria'
          : `mascot.success.${stars}`
        setMascotMessage(t(mascotKey))

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
          missingCategories: missing,
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
    setShowReward(false)
    if (nextLessonNumber) {
      navigate(`/app/blocks/world/${lesson.worldId}/${nextLessonNumber}`)
    } else if (nextWorld) {
      navigate(`/app/blocks/world/${nextWorld.id}`)
    } else {
      navigate(`/app/blocks/world/${lesson.worldId}`)
    }
  }

  const handleRetry = () => {
    setShowReward(false)
    resetGame()
  }

  const existingStars = existingProgress?.stars ?? 0
  const maxStars = maxStarsForThresholds(lesson.starThresholds)

  return (
    <div className="max-w-7xl mx-auto px-4 pt-4 pb-24 lg:pb-4 h-[calc(100vh-80px)] flex flex-col gap-4">
      {/* Lesson header */}
      <motion.div
        className="flex items-start gap-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {lesson.isTutorial === true ? (
          <div
            className="px-2 py-1 rounded-xl text-xs font-black shrink-0 mt-1"
            style={{ background: world.theme.accentColor, color: '#0a0618' }}
          >
            {t('tutorial.badge')}
          </div>
        ) : lesson.isBuggy === true ? (
          <div
            className="px-2 py-1 rounded-xl text-xs font-black shrink-0 mt-1 bg-amber-500/30 text-amber-300 border border-amber-400/40"
          >
            {t('debug.badge')}
          </div>
        ) : (
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-black shrink-0 mt-0.5"
            style={{ background: `${world.theme.accentColor}30`, color: world.theme.accentColor }}
          >
            {lesson.number}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h1 className="text-lg sm:text-xl font-black text-white leading-tight">{localize(lesson.title, language)}</h1>
          <p className="text-white/50 text-xs mb-1">{localize(world.name, language)} · {localize(world.concept, language)}</p>
          <div className="flex items-center gap-2 flex-wrap">
            {existingStars > 0 && <StarRating stars={existingStars} maxStars={maxStars} size="sm" />}
            <span className="text-xs font-bold text-purple-300 bg-purple-500/20 px-2.5 py-1 rounded-full">
              ⚡ {lesson.xpReward} XP
            </span>
            {!lesson.isTutorial && lesson.requiredCategories?.includes('loops') && (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: `${world.theme.accentColor}25`, color: world.theme.accentColor }}>
                {t('game.efficiency.badge', { n: String(lesson.starThresholds[1]) })}
              </span>
            )}
          </div>
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
          {lesson.isBuggy === true && (
            <div className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold bg-amber-500/20 border-b border-amber-400/30 text-amber-300 shrink-0">
              <Bug className="w-4 h-4 shrink-0" />
              {t('debug.banner')}
            </div>
          )}
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
              }}
              animate={
                isRunning
                  ? { boxShadow: '0 0 0 rgba(0,0,0,0)' }
                  : currentBlockCount > 0
                    ? { boxShadow: ['0 4px 24px rgba(124,58,237,0.5)', '0 4px 36px rgba(236,72,153,0.8)', '0 4px 24px rgba(124,58,237,0.5)'] }
                    : { boxShadow: '0 4px 20px rgba(124,58,237,0.3)' }
              }
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={!isRunning ? { scale: 1.05, transition: { type: 'spring', stiffness: 400, damping: 20 } } : {}}
              whileTap={!isRunning ? { scale: 0.95, transition: { type: 'spring', stiffness: 400, damping: 20 } } : {}}
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

      {/* Tutorial complete overlay */}
      <AnimatePresence>
        {showTutorialComplete && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(10,6,24,0.92)', backdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative rounded-3xl p-8 max-w-sm w-full text-center overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${world.theme.accentColor}20, ${world.theme.accentColor}08)`,
                border: `2px solid ${world.theme.accentColor}60`,
                boxShadow: `0 0 60px ${world.theme.accentColor}30`,
              }}
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: 'spring', damping: 15 }}
            >
              <motion.div
                className="text-7xl mb-4 block"
                animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                {world.character}
              </motion.div>
              <h2 className="text-2xl font-black text-white mb-3">{t('tutorial.complete.title')}</h2>
              <p className="text-white/70 text-sm font-semibold leading-relaxed mb-8">
                {t('tutorial.complete.subtitle', { concept: localize(world.concept, language) })}
              </p>
              <motion.button
                onClick={() => {
                  setShowTutorialComplete(false)
                  if (nextLessonNumber) {
                    navigate(`/app/blocks/world/${lesson.worldId}/${nextLessonNumber}`)
                  } else {
                    navigate(`/app/blocks/world/${lesson.worldId}`)
                  }
                }}
                className="w-full py-4 rounded-2xl font-black text-lg text-[#0a0618] relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${world.theme.accentColor}, ${world.theme.accentColor}cc)` }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {t('tutorial.complete.cta')}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reward modal */}
      <RewardModal
        open={showReward}
        stars={rewardData.stars}
        maxStars={maxStars}
        xpEarned={rewardData.xp}
        leveledUp={rewardData.leveledUp}
        newLevelName={rewardData.newLevel}
        newLevelBadge={rewardData.newBadge}
        missingCategories={rewardData.missingCategories}
        isWorldComplete={!nextLessonNumber}
        nextWorldEmoji={nextWorld?.emoji}
        nextWorldName={nextWorld ? localize(nextWorld.name, language) : undefined}
        onNext={handleNext}
        onRetry={handleRetry}
      />

      {/* Concept walkthrough — shown on tutorial lessons (first visit) */}
      {showWalkthrough && (
        <BlocklyWalkthrough
          world={world}
          onDone={() => {
            setShowWalkthrough(false)
            setActiveTab('blocks')
            requestAnimationFrame(() => { blocklyRef.current?.resize() })
          }}
          onLoadState={handleWalkthroughLoadState}
          onSwitchTab={handleWalkthroughSwitchTab}
        />
      )}
    </div>
  )
}
