import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Star, ArrowRight, ArrowLeft } from 'lucide-react'
import type { ThinkingLesson, ThinkingWorld, LessonProgress, PatternPuzzle, IfThenPuzzle, MathPuzzle, SequencePuzzle } from '../types'
import { useLanguage } from '../i18n/LanguageProvider'
import { localize } from '../i18n/localize'
import type { useProgress } from '../store/useProgress'

interface ThinkingLessonProps {
  lesson: ThinkingLesson
  world: ThinkingWorld
  completeLesson: ReturnType<typeof useProgress>['completeLesson']
  existingProgress: LessonProgress | undefined
  nextLessonNumber?: number
}

function PatternPuzzleView({
  puzzle,
  onAnswer,
  selected,
  isCorrect,
  completed,
}: {
  puzzle: PatternPuzzle
  onAnswer: (option: string) => void
  selected: string | null
  isCorrect: boolean | null
  completed: boolean
}) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {puzzle.items.map((item, i) => (
          <motion.div
            key={i}
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl font-bold ${
              i === puzzle.blankIndex
                ? 'bg-purple-500/30 border-2 border-purple-400 border-dashed text-purple-300'
                : 'bg-white/10 border border-white/20'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06 }}
          >
            {i === puzzle.blankIndex ? '?' : item}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {puzzle.options.map((option, i) => {
          const isSelected = selected === option
          const correct = completed && option === puzzle.answer
          const wrong = isSelected && isCorrect === false
          return (
            <motion.button
              key={i}
              onClick={() => !completed && onAnswer(option)}
              disabled={completed}
              className={`h-16 sm:h-20 rounded-2xl text-4xl sm:text-5xl flex items-center justify-center border-2 transition-all font-bold ${
                correct
                  ? 'bg-green-500/30 border-green-400 text-green-300'
                  : wrong
                  ? 'bg-red-500/30 border-red-400'
                  : isSelected
                  ? 'bg-purple-500/30 border-purple-400'
                  : 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40'
              } ${completed ? 'cursor-default' : 'cursor-pointer'}`}
              animate={wrong ? { x: [-4, 4, -4, 4, 0] } : {}}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {option}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

function IfThenPuzzleView({
  puzzle,
  onAnswer,
  selected,
  isCorrect,
  completed,
  language,
}: {
  puzzle: IfThenPuzzle
  onAnswer: (id: string) => void
  selected: string | null
  isCorrect: boolean | null
  completed: boolean
  language: string
}) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-900/40 border border-blue-500/30 rounded-2xl p-5 text-center">
        <p className="text-lg sm:text-xl font-bold text-blue-100">
          {localize(puzzle.condition, language as 'en' | 'id')}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {puzzle.options.map((option, i) => {
          const isSelected = selected === option.id
          const correct = completed && option.id === puzzle.answerId
          const wrong = isSelected && isCorrect === false
          return (
            <motion.button
              key={option.id}
              onClick={() => !completed && onAnswer(option.id)}
              disabled={completed}
              className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${
                correct
                  ? 'bg-green-500/30 border-green-400'
                  : wrong
                  ? 'bg-red-500/30 border-red-400'
                  : isSelected
                  ? 'bg-blue-500/30 border-blue-400'
                  : 'bg-white/8 border-white/20 hover:bg-white/15 hover:border-white/40'
              } ${completed ? 'cursor-default' : 'cursor-pointer'}`}
              animate={wrong ? { x: [-4, 4, -4, 4, 0] } : {}}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-3xl">{option.emoji}</span>
              <span className={`text-xs font-bold text-center leading-tight ${
                correct ? 'text-green-200' : wrong ? 'text-red-200' : 'text-white/80'
              }`}>
                {localize(option.label, language as 'en' | 'id')}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

function MathPuzzleView({
  puzzle,
  onAnswer,
  selected,
  isCorrect,
  completed,
  language,
}: {
  puzzle: MathPuzzle
  onAnswer: (option: string) => void
  selected: string | null
  isCorrect: boolean | null
  completed: boolean
  language: string
}) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        {puzzle.visual && <div className="text-4xl mb-3">{puzzle.visual}</div>}
        <div className="bg-emerald-900/40 border border-emerald-500/30 rounded-2xl p-5">
          <p className="text-2xl sm:text-3xl font-black text-emerald-100 tracking-wider">
            {localize(puzzle.question, language as 'en' | 'id')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {puzzle.options.map((option, i) => {
          const isSelected = selected === option
          const correct = completed && option === puzzle.answer
          const wrong = isSelected && isCorrect === false
          return (
            <motion.button
              key={i}
              onClick={() => !completed && onAnswer(option)}
              disabled={completed}
              className={`h-16 sm:h-20 rounded-2xl text-2xl sm:text-3xl font-black flex items-center justify-center border-2 transition-all ${
                correct
                  ? 'bg-green-500/30 border-green-400 text-green-200'
                  : wrong
                  ? 'bg-red-500/30 border-red-400 text-red-200'
                  : isSelected
                  ? 'bg-emerald-500/30 border-emerald-400 text-white'
                  : 'bg-white/8 border-white/20 text-white hover:bg-white/15 hover:border-white/40'
              } ${completed ? 'cursor-default' : 'cursor-pointer'}`}
              animate={wrong ? { x: [-4, 4, -4, 4, 0] } : {}}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {option}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

function SequencePuzzleView({
  puzzle,
  onAnswer,
  selected,
  isCorrect,
  completed,
  language,
  prompt,
}: {
  puzzle: SequencePuzzle
  onAnswer: (value: string) => void
  selected: string | null
  isCorrect: boolean | null
  completed: boolean
  language: string
  prompt: string
}) {
  const [orderedIds, setOrderedIds] = useState<string[]>([])

  const shuffled = useMemo(
    () => [...puzzle.steps].sort(() => 0.5 - Math.random()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useEffect(() => {
    if (selected === null && !completed) {
      setOrderedIds([])
    }
  }, [selected, completed])

  const handleTap = (id: string) => {
    if (completed || orderedIds.includes(id)) return
    const next = [...orderedIds, id]
    setOrderedIds(next)
    if (next.length === puzzle.steps.length) {
      onAnswer(next.join(','))
    }
  }

  const stepById = (id: string) => puzzle.steps.find(s => s.id === id)!

  return (
    <div className="space-y-6">
      <p className="text-center text-white/60 text-sm font-bold">{prompt}</p>

      {/* Sequence slots */}
      <motion.div
        className="flex items-start justify-center gap-3 flex-wrap"
        animate={isCorrect === false ? { x: [-6, 6, -6, 6, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        {puzzle.steps.map((_, i) => {
          const filledId = orderedIds[i]
          const step = filledId ? stepById(filledId) : null
          return (
            <div
              key={i}
              className={`w-20 h-24 rounded-2xl flex flex-col items-center justify-center gap-1 border-2 transition-all ${
                step
                  ? isCorrect === false
                    ? 'bg-red-500/30 border-red-400'
                    : 'bg-orange-500/30 border-orange-400'
                  : 'bg-white/8 border-white/20 border-dashed'
              }`}
            >
              {step ? (
                <>
                  <span className="text-2xl">{step.emoji}</span>
                  <span className="text-xs font-bold text-center leading-tight text-white/80 px-1">
                    {localize(step.label, language as 'en' | 'id')}
                  </span>
                </>
              ) : (
                <span className="text-lg font-black text-white/25">{i + 1}</span>
              )}
            </div>
          )
        })}
      </motion.div>

      {/* Tappable step cards */}
      <div className="grid grid-cols-2 gap-3">
        {shuffled.map(step => {
          const isUsed = orderedIds.includes(step.id)
          return (
            <motion.button
              key={step.id}
              onClick={() => handleTap(step.id)}
              disabled={isUsed || completed}
              className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${
                isUsed
                  ? 'bg-white/5 border-white/10 opacity-30 cursor-default'
                  : completed
                  ? 'bg-white/10 border-white/20 cursor-default'
                  : 'bg-white/10 border-white/20 hover:bg-orange-500/20 hover:border-orange-400 cursor-pointer active:scale-95'
              }`}
              animate={{ opacity: isUsed ? 0.3 : 1 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: isUsed ? 0.3 : 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-3xl">{step.emoji}</span>
              <span className="text-xs font-bold text-center leading-tight text-white/80">
                {localize(step.label, language as 'en' | 'id')}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

export function ThinkingLessonScreen({
  lesson,
  world,
  completeLesson,
  existingProgress,
  nextLessonNumber,
}: ThinkingLessonProps) {
  const { t, language } = useLanguage()
  const navigate = useNavigate()
  const [attempts, setAttempts] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [completed, setCompleted] = useState(false)
  const [earnedStars, setEarnedStars] = useState(0)

  const isAnswerCorrect = (value: string): boolean => {
    const p = lesson.puzzle
    if (p.type === 'pattern') return value === p.answer
    if (p.type === 'if-then') return value === p.answerId
    if (p.type === 'math') return value === p.answer
    if (p.type === 'sequence') return value === p.steps.map(s => s.id).join(',')
    return false
  }

  const handleAnswer = (value: string) => {
    if (completed) return
    const newAttempts = attempts + 1
    setAttempts(newAttempts)
    setSelected(value)
    const correct = isAnswerCorrect(value)
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
      navigate(`/app/thinking/world/${lesson.worldId}/${nextLessonNumber}`)
    } else {
      navigate(`/app/thinking/world/${lesson.worldId}`)
    }
  }

  const puzzle = lesson.puzzle

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
        {puzzle.type === 'pattern' && (
          <PatternPuzzleView
            puzzle={puzzle as PatternPuzzle}
            onAnswer={handleAnswer}
            selected={selected}
            isCorrect={isCorrect}
            completed={completed}
          />
        )}
        {puzzle.type === 'if-then' && (
          <IfThenPuzzleView
            puzzle={puzzle as IfThenPuzzle}
            onAnswer={handleAnswer}
            selected={selected}
            isCorrect={isCorrect}
            completed={completed}
            language={language}
          />
        )}
        {puzzle.type === 'math' && (
          <MathPuzzleView
            puzzle={puzzle as MathPuzzle}
            onAnswer={handleAnswer}
            selected={selected}
            isCorrect={isCorrect}
            completed={completed}
            language={language}
          />
        )}
        {puzzle.type === 'sequence' && (
          <SequencePuzzleView
            puzzle={puzzle as SequencePuzzle}
            onAnswer={handleAnswer}
            selected={selected}
            isCorrect={isCorrect}
            completed={completed}
            language={language}
            prompt={t('thinking.sequence.prompt')}
          />
        )}
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
