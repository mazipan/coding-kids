import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Lesson, GameState } from '../types'
import type { World } from '../types'
import { useLanguage } from '../i18n/LanguageProvider'

interface GameGridProps {
  lesson: Lesson
  world: World
  gameState: GameState
  maxSize?: number
}

export function GameGrid({ lesson, world, gameState, maxSize = 400 }: GameGridProps) {
  const { t } = useLanguage()
  const cellSize = Math.min(
    Math.floor(maxSize / Math.max(lesson.gridCols, lesson.gridRows)),
    72
  )
  const gridWidth = cellSize * lesson.gridCols
  const gridHeight = cellSize * lesson.gridRows

  const { charPos, collectedIds, status } = gameState
  const isSuccess = status === 'success'
  const isCrash = status === 'crashed'

  // Some character emoji (e.g. 🏎️, ⛵, 🏊) have a real inherent left/right facing in their
  // standard glyph design. GameGrid mirrors those horizontally to face the direction they're
  // actually travelling, since gameplay defaults to moving rightward. `facingRight` starts
  // `true` and updates only on a genuine column change or a fresh run — see the effect below.
  const [facingRight, setFacingRight] = useState(true)
  const prevColRef = useRef(charPos[1])
  const prevStatusRef = useRef(status)

  useEffect(() => {
    const justStartedRun = status === 'running' && prevStatusRef.current !== 'running'
    if (justStartedRun) {
      setFacingRight(true)
    } else if (charPos[1] > prevColRef.current) {
      setFacingRight(true)
    } else if (charPos[1] < prevColRef.current) {
      setFacingRight(false)
    }
    prevColRef.current = charPos[1]
    prevStatusRef.current = status
  }, [charPos, status])

  const mirrored = world.facingDefault === 'left' && facingRight

  // Coordinate Cove renders a labelled chart: the coordinate is read off the
  // gutter, never inferred by counting cells. Labels are 1-based so they match
  // what the position sensor blocks return (COORD_ORIGIN in the engine).
  const showCoords = lesson.showCoords === true
  const gutter = showCoords ? Math.max(18, Math.round(cellSize * 0.45)) : 0
  const labelSize = Math.max(10, Math.round(cellSize * 0.26))

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
            {t('game.success')}
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

      {/* Chart with row/column labels */}
      <div style={{ display: 'grid', gridTemplateColumns: `${gutter}px ${gridWidth}px`, gridTemplateRows: `${gutter}px ${gridHeight}px` }}>
        {/* Empty corner */}
        <div />
        {/* Column labels */}
        <div style={{ display: showCoords ? 'flex' : 'none', height: gutter }}>
          {Array.from({ length: lesson.gridCols }, (_, col) => (
            <div
              key={`col-${col}`}
              className="flex items-end justify-center font-black"
              style={{ width: cellSize, fontSize: labelSize, color: world.theme.accentColor, paddingBottom: 2 }}
            >
              {col + 1}
            </div>
          ))}
        </div>
        {/* Row labels */}
        <div style={{ display: showCoords ? 'flex' : 'none', flexDirection: 'column', width: gutter }}>
          {Array.from({ length: lesson.gridRows }, (_, row) => (
            <div
              key={`row-${row}`}
              className="flex items-center justify-end font-black"
              style={{ height: cellSize, fontSize: labelSize, color: world.theme.accentColor, paddingRight: 4 }}
            >
              {row + 1}
            </div>
          ))}
        </div>

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
        {lesson.items.map((item, index) => {
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
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.5, opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))' }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: (index % 4) * 0.4 }}
                  >
                    {world.itemEmoji}
                  </motion.span>
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
            top: 0,
            left: 0,
            width: cellSize,
            height: cellSize,
            fontSize: cellSize * 0.55,
          }}
          animate={{
            x: charPos[1] * cellSize,
            y: charPos[0] * cellSize,
            scale: isCrash ? [1, 1.3, 0.8] : isSuccess ? [1, 1.2, 1] : 1,
          }}
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 25 },
            y: { type: 'spring', stiffness: 300, damping: 25 },
            scale: { duration: 0.4 },
          }}
        >
          <motion.span
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))',
              display: 'block',
            }}
            animate={{
              scaleX: mirrored ? -1 : 1,
              y: status === 'idle' ? [0, -4, 0] : 0,
            }}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              scaleX: { duration: 0.2, ease: 'easeOut' },
            }}
          >
            {world.character}
          </motion.span>
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
      </div>

      {/* Live position readout — the coordinate is readable, not counted */}
      {showCoords && (
        <div
          className="text-xs sm:text-sm font-black px-3 py-1 rounded-full"
          style={{ color: world.theme.accentColor, background: `${world.theme.accentColor}18` }}
        >
          {t('game.coords.readout', { row: String(charPos[0] + 1), col: String(charPos[1] + 1) })}
        </div>
      )}

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
