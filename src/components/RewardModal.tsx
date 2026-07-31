import { motion, AnimatePresence } from 'framer-motion'
import { StarRating } from './StarRating'
import { Confetti } from './Confetti'

interface RewardModalProps {
  open: boolean
  stars: number
  xpEarned: number
  leveledUp: boolean
  newLevelName?: string
  newLevelBadge?: string
  onNext: () => void
  onRetry: () => void
  onHome: () => void
}

const MESSAGES = [
  ['Keep going! 💪', 'Nice try! ⭐', 'Getting there! 🎯'],
  ['Well done! 👏', 'Great job! 🎊', 'You\'re improving! 📈'],
  ['Amazing! 🤩', 'PERFECT! 🏆', 'YOU\'RE A STAR! 🌟'],
]

export function RewardModal({ open, stars, xpEarned, leveledUp, newLevelName, newLevelBadge, onNext, onRetry, onHome }: RewardModalProps) {
  const message = MESSAGES[stars - 1]?.[Math.floor(Math.random() * 3)] ?? 'Done!'

  return (
    <>
      <Confetti active={open && stars >= 2} />
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
              className="relative bg-gradient-to-b from-[#1C1440] to-[#130D2E] rounded-3xl p-8 max-w-sm w-full border border-purple-500/30 shadow-2xl text-center"
              initial={{ scale: 0.5, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Trophy */}
              <motion.div
                className="text-7xl mb-2"
                animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {stars === 3 ? '🏆' : stars === 2 ? '🥈' : '🥉'}
              </motion.div>

              <h2 className="text-3xl font-black text-white mb-1">{message}</h2>

              {/* Stars */}
              <div className="flex justify-center my-4">
                <StarRating stars={stars} size="xl" animate />
              </div>

              {/* XP gained */}
              <motion.div
                className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full font-bold text-lg mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: 'spring' }}
              >
                ⚡ +{xpEarned} XP
              </motion.div>

              {/* Level up banner */}
              {leveledUp && (
                <motion.div
                  className="bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border border-yellow-400/40 rounded-2xl p-3 mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, type: 'spring' }}
                >
                  <div className="text-2xl mb-1">{newLevelBadge}</div>
                  <div className="text-yellow-200 font-bold text-sm">🎉 LEVEL UP!</div>
                  <div className="text-yellow-100 font-black text-lg">{newLevelName}</div>
                </motion.div>
              )}

              {/* Actions */}
              <div className="flex gap-3 mt-2">
                <button
                  onClick={onRetry}
                  className="flex-1 py-3 rounded-xl font-bold text-white/70 border border-white/20 hover:bg-white/10 transition-colors"
                >
                  🔄 Retry
                </button>
                <button
                  onClick={onHome}
                  className="py-3 px-4 rounded-xl font-bold text-white/70 border border-white/20 hover:bg-white/10 transition-colors"
                >
                  🏠
                </button>
                <button
                  onClick={onNext}
                  className="flex-1 py-3 rounded-xl font-black text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 transition-all shadow-lg shadow-purple-900/50"
                >
                  Next ➡️
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
