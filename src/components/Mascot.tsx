import { motion, AnimatePresence } from 'framer-motion'

interface MascotProps {
  character: string
  characterName: string
  message: string
  mood?: 'happy' | 'thinking' | 'excited' | 'sad'
  accentColor?: string
}

const MOOD_EMOJI = {
  happy: '',
  thinking: '🤔',
  excited: '🎉',
  sad: '😢',
}

export function Mascot({ character, characterName, message, mood = 'happy', accentColor = '#8B5CF6' }: MascotProps) {
  return (
    <div className="flex gap-3 items-start">
      {/* Character */}
      <motion.div
        className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-4xl relative"
        style={{ background: `${accentColor}33`, border: `2px solid ${accentColor}66` }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {character}
        {mood !== 'happy' && (
          <span className="absolute -top-2 -right-2 text-base">{MOOD_EMOJI[mood]}</span>
        )}
      </motion.div>

      {/* Speech bubble */}
      <div className="flex-1 relative">
        {/* Arrow */}
        <div
          className="absolute left-0 top-4 w-0 h-0 -translate-x-2"
          style={{
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderRight: `10px solid ${accentColor}33`,
          }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={message}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl rounded-tl-sm p-3 text-sm font-semibold leading-relaxed"
            style={{
              background: `${accentColor}22`,
              border: `1px solid ${accentColor}44`,
              color: 'white',
            }}
          >
            <span className="text-xs font-bold opacity-60 block mb-0.5">{characterName} says:</span>
            {message}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
