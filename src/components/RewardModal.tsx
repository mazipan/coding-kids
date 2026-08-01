import { motion } from 'framer-motion'
import { Dialog, Modal, ModalOverlay } from 'react-aria-components'
import { StarRating } from './StarRating'
import { Confetti } from './Confetti'
import { useLanguage } from '../i18n/LanguageProvider'

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

export function RewardModal({ open, stars, xpEarned, leveledUp, newLevelName, newLevelBadge, onNext, onRetry, onHome }: RewardModalProps) {
  const { t } = useLanguage()
  const msgVariant = Math.floor(Math.random() * 3)
  const message = t(`reward.msg.${stars}.${msgVariant}`) || t('reward.fallback')

  return (
    <>
      <Confetti active={open && stars >= 2} />
      {/* ModalOverlay provides focus trap, body-scroll lock, and portal rendering.
          isDismissable=false keeps the modal open until the player explicitly acts. */}
      <ModalOverlay
        isOpen={open}
        isDismissable={false}
        className="ck-overlay fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      >
        <Modal>
          <Dialog aria-label={message} className="outline-none">
            <motion.div
              className="relative bg-gradient-to-b from-[#1C1440] to-[#130D2E] rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-purple-500/30 shadow-2xl text-center"
              initial={{ scale: 0.5, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <motion.div
                className="text-6xl sm:text-7xl mb-2"
                animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {stars === 3 ? '🏆' : stars === 2 ? '🥈' : '🥉'}
              </motion.div>

              <h2 className="text-2xl sm:text-3xl font-black text-white mb-1">{message}</h2>

              <div className="flex justify-center my-4">
                <StarRating stars={stars} size="xl" animate />
              </div>

              <motion.div
                className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 text-yellow-300 px-4 py-2 rounded-full font-bold text-lg mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: 'spring' }}
              >
                {t('common.xp.reward', { xp: `+${xpEarned}` })}
              </motion.div>

              {leveledUp && (
                <motion.div
                  className="bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border border-yellow-400/40 rounded-2xl p-3 mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9, type: 'spring' }}
                >
                  <div className="text-2xl mb-1">{newLevelBadge}</div>
                  <div className="text-yellow-200 font-bold text-sm">{t('reward.levelup')}</div>
                  <div className="text-yellow-100 font-black text-lg">{newLevelName}</div>
                </motion.div>
              )}

              <div className="flex gap-3 mt-2">
                <button
                  onClick={onRetry}
                  className="flex-1 py-3 rounded-xl font-bold text-white/70 border border-white/20 hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                  {t('reward.retry')}
                </button>
                <button
                  onClick={onHome}
                  className="py-3 px-4 rounded-xl font-bold text-white/70 border border-white/20 hover:bg-white/10 transition-colors"
                >
                  🏠
                </button>
                <button
                  onClick={onNext}
                  className="flex-1 py-3 rounded-xl font-black text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 transition-all shadow-lg shadow-purple-900/50 text-sm sm:text-base"
                >
                  {t('reward.next')}
                </button>
              </div>
            </motion.div>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </>
  )
}
