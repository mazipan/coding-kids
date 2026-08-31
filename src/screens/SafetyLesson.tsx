import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Star, ArrowRight, ArrowLeft, BookOpen } from 'lucide-react'
import type { SafetyLesson, SafetyWorld, LessonProgress } from '../types'
import { useLanguage } from '../i18n/LanguageProvider'
import { localize } from '../i18n/localize'
import type { useProgress } from '../store/useProgress'
import { PuzzlePlayer, isPuzzleAnswerCorrect } from '../components/PuzzlePlayer'

interface SafetyLessonProps {
  lesson: SafetyLesson
  world: SafetyWorld
  completeLesson: ReturnType<typeof useProgress>['completeLesson']
  existingProgress: LessonProgress | undefined
  nextLessonNumber?: number
}

/**
 * Mirrors `ThinkingLessonScreen`'s chrome (header, tutorial card, mascot message,
 * completion card) but navigates under `/app/safety/...`. Deliberately reuses the
 * `thinking.*` translation keys for puzzle-interaction copy ("Correct!", attempt counter,
 * etc.) — the rendered text is domain-neutral; see the plan's "Alternatives considered"
 * for why a parallel `safety.*` copy of the same ~20 keys wasn't worth the duplication.
 */
export function SafetyLessonScreen({
  lesson,
  world,
  completeLesson,
  existingProgress,
  nextLessonNumber,
}: SafetyLessonProps) {
  const { t, language } = useLanguage()
  const navigate = useNavigate()
  const [showTutorial, setShowTutorial] = useState(!!lesson.tutorial)
  const [attempts, setAttempts] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [completed, setCompleted] = useState(false)
  const [earnedStars, setEarnedStars] = useState(0)

  const handleAnswer = (value: string) => {
    if (completed) return
    const newAttempts = attempts + 1
    setAttempts(newAttempts)
    setSelected(value)
    const correct = isPuzzleAnswerCorrect(lesson.puzzle, value)
    setIsCorrect(correct)

    if (correct) {
      const stars = newAttempts === 1 ? 3 : newAttempts === 2 ? 2 : 1
      setEarnedStars(stars)
      setCompleted(true)
      completeLesson(lesson.id, stars, lesson.xpReward)
    } else {
      setTimeout(() => {
        setSelected(null)
        setIsCorrect(null)
      }, 700)
    }
  }

  const handleNext = () => {
    if (nextLessonNumber !== undefined) {
      navigate(`/app/safety/world/${lesson.worldId}/${nextLessonNumber}`)
    } else {
      navigate(`/app/safety/world/${lesson.worldId}`)
    }
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      {/* World tag + lesson title */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-xs font-bold text-white/60 mb-3">
          <span>{world.emoji}</span>
          <span>{localize(world.name, language)}</span>
        </div>
        <h1 className="text-xl font-black text-white">{localize(lesson.title, language)}</h1>
      </motion.div>

      {/* Tutorial card */}
      <AnimatePresence>
        {showTutorial && lesson.tutorial && (
          <motion.div
            className="bg-amber-900/40 border border-amber-500/30 rounded-2xl p-5 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-amber-300 font-black text-sm">
                {localize(lesson.tutorial.title, language)}
              </span>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed mb-3">
              {localize(lesson.tutorial.body, language)}
            </p>
            {lesson.tutorial.example && (
              <p className="text-amber-300/80 text-xs leading-relaxed mb-4 italic">
                {localize(lesson.tutorial.example, language)}
              </p>
            )}
            <button
              onClick={() => setShowTutorial(false)}
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-black text-sm transition-colors"
            >
              {t('thinking.tutorial.dismiss')} <ArrowRight className="inline w-4 h-4 ml-1" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascot message */}
      <motion.div
        className="bg-purple-900/30 border border-purple-500/20 rounded-2xl p-4 text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <p className="text-purple-200 text-sm">{localize(lesson.mascotMessage, language)}</p>
      </motion.div>

      {/* Puzzle */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <PuzzlePlayer
          puzzle={lesson.puzzle}
          onAnswer={handleAnswer}
          selected={selected}
          isCorrect={isCorrect}
          completed={completed}
        />
      </motion.div>

      {/* Attempt counter */}
      {!completed && attempts > 0 && (
        <div className="text-center text-xs text-white/40 mb-4">
          {t('thinking.attempt').replace('{n}', String(attempts))}
        </div>
      )}

      {/* Feedback + completion */}
      <AnimatePresence mode="wait">
        {isCorrect === false && !completed && (
          <motion.div
            key="wrong"
            className="text-center text-red-300 font-bold text-sm mb-4"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {t('thinking.wrong')}
          </motion.div>
        )}

        {completed && (
          <motion.div
            key="done"
            className="bg-green-900/40 border border-green-500/30 rounded-2xl p-5 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="text-2xl font-black text-green-300 mb-1">{t('thinking.correct')}</div>
            {attempts === 1 && (
              <div className="text-xs text-yellow-300 mb-2">{t('thinking.first.try')}</div>
            )}

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array.from({ length: 3 }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: i * 0.12, type: 'spring', stiffness: 400 }}
                >
                  <Star
                    className={`w-7 h-7 ${i < earnedStars ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}`}
                  />
                </motion.div>
              ))}
            </div>

            <div className="text-xs text-green-300 mb-4">
              {t('thinking.xp').replace('{xp}', String(lesson.xpReward))}
            </div>

            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm"
            >
              {nextLessonNumber !== undefined
                ? <><span>{t('thinking.next')}</span><ArrowRight className="w-4 h-4" /></>
                : <><ArrowLeft className="w-4 h-4" /><span>{t('thinking.back.world')}</span></>}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
