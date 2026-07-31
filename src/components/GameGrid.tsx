import { motion, AnimatePresence } from 'framer-motion'
import type { Lesson, GameState } from '../types'
import type { World } from '../types'

interface GameGridProps {
  lesson: Lesson
  world: World
  gameState: GameState
  maxSize?: number
}

const FACING_ROTATE: Record<string, number> = {
  move_right: 0,
  move_left: 180,
  move_up: -90,
  move_down: 90,
}

export function GameGrid({ lesson, world, gameState, maxSize = 400 }: GameGridProps) {
  const cellSize = Math.min(
    Math.floor(maxSize / Math.max(lesson.gridCols, lesson.gridRows)),
    72
  )
  const gridWidth = cellSize * lesson.gridCols
  const gridHeight = cellSize * lesson.gridRows

  const { charPos, collectedIds, status } = gameState
  const isSuccess = status === 'success'
  const isCrash = status === 'crashed'

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Status message */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center font-bold text-green-300 text-lg bg-green-500/20 px-4 py-2 rounded-full border border-green-400/30"
          >
            🎉 Amazing! You did it!
          </motion.div>
        )}
        {isCrash && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center font-bold text-red-300 text-sm bg-red-500/20 px-4 py-2 rounded-full border border-red-400/30"
          >
            💥 {gameState.errorMessage ?? 'Oops! Try again!'}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid container */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          width: gridWidth,
          height: gridHeight,
          background: world.theme.bgGradient,
          boxShadow: `0 0 40px ${world.theme.accentColor}40`,
        }}
      >
        {/* Grid cells */}
        {Array.from({ length: lesson.gridRows }, (_, row) =>
          Array.from({ length: lesson.gridCols }, (_, col) => {
            const cellType = lesson.cells[row]?.[col] ?? 'empty'
            const isObstacle = cellType === 'obstacle'

            return (
              <div
                key={`${row}-${col}`}
                className="absolute flex items-center justify-center text-2xl select-none"
                style={{
                  top: row * cellSize,
                  left: col * cellSize,
                  width: cellSize,
                  height: cellSize,
                  background: isObstacle ? `${world.theme.accentColor}30` : world.theme.cellBg,
                  border: `1px solid ${world.theme.cellBorder}`,
                  fontSize: cellSize * 0.45,
                }}
              >
                {isObstacle && (
                  <span style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
                    {world.obstacleEmoji}
                  </span>
                )}
              </div>
            )
          })
        )}

        {/* Items (bananas, stars, gems etc.) */}
        {lesson.items.map(item => {
          const collected = collectedIds.has(item.id)
          return (
            <AnimatePresence key={item.id}>
              {!collected && (
                <motion.div
                  className="absolute flex items-center justify-center pointer-events-none"
                  style={{
                    top: item.pos[0] * cellSize,
                    left: item.pos[1] * cellSize,
                    width: cellSize,
                    height: cellSize,
                    fontSize: cellSize * 0.5,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 1.1, 1], opacity: 1 }}
                  exit={{ scale: 1.5, opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <span style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))' }}>
                    {world.itemEmoji}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          )
        })}

        {/* Collection sparkle */}
        {lesson.items.map(item => {
          const collected = collectedIds.has(item.id)
          return collected ? (
            <motion.div
              key={`spark-${item.id}`}
              className="absolute flex items-center justify-center pointer-events-none text-yellow-300"
              style={{
                top: item.pos[0] * cellSize,
                left: item.pos[1] * cellSize,
                width: cellSize,
                height: cellSize,
                fontSize: cellSize * 0.4,
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              ✨
            </motion.div>
          ) : null
        })}

        {/* Character */}
        <motion.div
          className="absolute flex items-center justify-center pointer-events-none z-10"
          style={{
            width: cellSize,
            height: cellSize,
            fontSize: cellSize * 0.55,
          }}
          animate={{
            top: charPos[0] * cellSize,
            left: charPos[1] * cellSize,
            scale: isCrash ? [1, 1.3, 0.8] : isSuccess ? [1, 1.2, 1] : 1,
          }}
          transition={{
            top: { type: 'spring', stiffness: 300, damping: 25 },
            left: { type: 'spring', stiffness: 300, damping: 25 },
            scale: { duration: 0.4 },
          }}
        >
          <span
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))',
              display: 'block',
            }}
          >
            {world.character}
          </span>
          {/* Trail effect when moving */}
          {status === 'running' && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ background: `${world.theme.accentColor}40` }}
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
          )}
        </motion.div>

        {/* Success overlay */}
        {isSuccess && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="absolute inset-0 bg-green-500/10 rounded-2xl" />
            <motion.div
              className="text-6xl z-10"
              animate={{ scale: [0, 1.3, 1], rotate: [0, 20, 0] }}
              transition={{ duration: 0.6 }}
            >
              🏆
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Legend */}
      <div className="flex gap-3 text-xs text-white/50 flex-wrap justify-center">
        <span>{world.character} = {world.characterName}</span>
        <span>{world.itemEmoji} = collect these</span>
        {lesson.cells.some(row => row.includes('obstacle')) && (
          <span>{world.obstacleEmoji} = obstacle</span>
        )}
      </div>
    </div>
  )
}
