import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Lesson, GameState, AppState } from '../types'
import type { World } from '../types'
import { BlocklyWorkspace } from '../components/BlocklyWorkspace'
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
  const [gameState, setGameState] = useState<GameState>(buildInitialState(lesson))
  const [currentCode, setCurrentCode] = useState('')
  const [currentBlockCount, setCurrentBlockCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [hintIndex, setHintIndex] = useState(0)
  const [showReward, setShowReward] = useState(false)
  const [rewardData, setRewardData] = useState({ stars: 0, xp: 0, leveledUp: false, newLevel: '', newBadge: '' })
  const [mascotMessage, setMascotMessage] = useState(lesson.mascotMessage)
  const [mascotMood, setMascotMood] = useState<'happy' | 'thinking' | 'excited' | 'sad'>('happy')
  const runningRef = useRef(false)

  const handleCodeChange = useCallback((code: string, blockCount: number) => {
    setCurrentCode(code)
    setCurrentBlockCount(blockCount)
  }, [])

  const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

  const runCode = async () => {
    if (isRunning || runningRef.current) return
    if (!currentCode.trim()) {
      setMascotMessage("There are no blocks yet! Drag some blocks into the workspace first! 😄")
      setMascotMood('thinking')
      return
    }

    setIsRunning(true)
    runningRef.current = true
    setShowReward(false)
    setShowHint(false)

    // Reset game state
    const initial = buildInitialState(lesson)
    setGameState({ ...initial, status: 'running' })
    setMascotMessage("Here we go! Watching your code run... 👀")
    setMascotMood('thinking')

    await sleep(300)

    const { actions, error } = parseCodeToActions(currentCode)

    if (error) {
      setGameState(s => ({ ...s, status: 'crashed', errorMessage: `Code error: ${error}` }))
      setMascotMessage(`Oops! Something went wrong with the code. Try again! 😅`)
      setMascotMood('sad')
      playError()
      setIsRunning(false)
      runningRef.current = false
      return
    }

    if (actions.length === 0) {
      setGameState(s => ({ ...s, status: 'failure' }))
      setMascotMessage("No movement blocks detected! Add some Move blocks! 🤔")
      setMascotMood('thinking')
      setIsRunning(false)
      runningRef.current = false
      return
    }

    // Execute actions step by step
    let state: GameState = { ...initial, status: 'running' }
    for (const action of actions) {
      if (!runningRef.current) break

      const next = applyAction(state, action, lesson)

      // Play sound based on action
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

    // Check win
    if (state.status !== 'crashed') {
      const won = checkWin(state, lesson)

      if (won) {
        const stars = calculateStars(currentBlockCount, lesson.starThresholds)
        const xpEarned = calculateXPReward(lesson.xpReward, stars)

        setGameState(s => ({ ...s, status: 'success' }))
        playSuccess()

        setMascotMessage(
          stars === 3
            ? "PERFECT! 🌟 You're an absolute coding superstar!"
            : stars === 2
            ? "Awesome job! 🎊 You solved it! Can you do it with fewer blocks?"
            : "You did it! 🎉 Great work! Try to use fewer blocks for more stars!"
        )
        setMascotMood('excited')

        await sleep(800)

        const result = completeLesson(lesson.id, stars, xpEarned)

        if (result.leveledUp) playLevelUp()

        // Look up level info by level number (levels are 1-indexed)
        const newLevelInfo = getLevelInfo(XP_LEVELS[result.newLevel - 1]?.minXP ?? 0)

        setRewardData({
          stars,
          xp: xpEarned,
          leveledUp: result.leveledUp,
          newLevel: newLevelInfo.name,
          newBadge: newLevelInfo.badge,
        })
        setShowReward(true)
      } else {
        setGameState(s => ({ ...s, status: 'failure' }))
        playError()
        setMascotMessage("Not quite! I didn't reach all the items. Check your path and try again! 💪")
        setMascotMood('sad')
      }
    }

    setIsRunning(false)
    runningRef.current = false
  }

  const resetGame = () => {
    runningRef.current = false
    setIsRunning(false)
    setGameState(buildInitialState(lesson))
    setMascotMessage(lesson.mascotMessage)
    setMascotMood('happy')
  }

  const showNextHint = () => {
    setShowHint(true)
    const next = (hintIndex + 1) % lesson.hints.length
    setHintIndex(next)
    setMascotMessage(`💡 Hint: ${lesson.hints[hintIndex]}`)
    setMascotMood('thinking')
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
    <div className="max-w-7xl mx-auto px-4 py-4 h-[calc(100vh-80px)] flex flex-col gap-4">
      {/* Lesson header */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-black"
          style={{ background: `${world.theme.accentColor}30`, color: world.theme.accentColor }}
        >
          {lesson.number}
        </div>
        <div>
          <h1 className="text-xl font-black text-white leading-tight">{lesson.title}</h1>
          <p className="text-white/50 text-xs">{world.name} · {world.concept}</p>
        </div>
        <div className="ml-auto flex items-center gap-3">
          {existingStars > 0 && (
            <StarRating stars={existingStars} size="sm" />
          )}
          <span className="text-sm font-bold text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
            ⚡ {lesson.xpReward} XP
          </span>
        </div>
      </motion.div>

      {/* Main content: Blockly + Game */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
        {/* LEFT: Blockly */}
        <motion.div
          className="flex flex-col rounded-2xl overflow-hidden border border-purple-900/40 bg-[#130D2E]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          style={{ minHeight: 400 }}
        >
          <BlocklyWorkspace
            categories={lesson.availableCategories}
            onCodeChange={handleCodeChange}
          />
        </motion.div>

        {/* RIGHT: Game + Mascot */}
        <motion.div
          className="flex flex-col gap-4"
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
                💡 {lesson.hints[hintIndex]}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Controls bar */}
      <motion.div
        className="flex gap-3 items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Story */}
        <div className="flex-1 text-xs text-white/40 leading-relaxed hidden sm:block truncate">
          {lesson.story}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 ml-auto">
          {/* Hint */}
          <button
            onClick={showNextHint}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-yellow-400/30 text-yellow-200 hover:bg-yellow-500/20 transition-colors font-bold text-sm disabled:opacity-50"
          >
            💡 Hint
          </button>

          {/* Reset */}
          <button
            onClick={resetGame}
            disabled={false}
            className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/20 text-white/60 hover:bg-white/10 transition-colors font-bold text-sm"
          >
            🔄 Reset
          </button>

          {/* RUN */}
          <motion.button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center gap-2 px-8 py-3 rounded-xl font-black text-white text-base relative overflow-hidden disabled:opacity-70"
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
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  ⚙️
                </motion.span>
                Running...
              </>
            ) : (
              <>▶ Run Code</>
            )}
          </motion.button>
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
        onHome={() => { setShowReward(false); onNavigate({ screen: 'home' }) }}
      />
    </div>
  )
}
