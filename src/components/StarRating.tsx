import { motion } from 'framer-motion'

interface StarRatingProps {
  stars: number
  maxStars?: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animate?: boolean
}

const SIZE_MAP = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-4xl',
  xl: 'text-5xl',
}

export function StarRating({ stars, maxStars = 3, size = 'md', animate = false }: StarRatingProps) {
  const sizeClass = SIZE_MAP[size]

  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: maxStars }, (_, i) => {
        const filled = i < stars
        return animate && filled ? (
          <motion.span
            key={i}
            className={sizeClass}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.2, type: 'spring', stiffness: 300, damping: 15 }}
          >
            ⭐
          </motion.span>
        ) : (
          <span
            key={i}
            className={`${sizeClass} ${filled ? '' : 'opacity-30 grayscale'}`}
          >
            ⭐
          </span>
        )
      })}
    </div>
  )
}
