import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Star, ArrowRight, ArrowLeft, Check, BookOpen } from 'lucide-react'
import type { ThinkingLesson, ThinkingWorld, LessonProgress, PatternPuzzle, IfThenPuzzle, MathPuzzle, SequencePuzzle, TrueFalsePuzzle, SortPuzzle, FillInPuzzle, MatchPuzzle, AbstractionPuzzle } from '../types'
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

type GraphemeSegmenter = {
  segment: (input: string) => Iterable<{ segment: string }>
}

function splitGraphemes(text: string): string[] {
  const SegmenterCtor = (Intl as typeof Intl & {
    Segmenter?: new (
      locales?: string | string[],
      options?: { granularity?: 'grapheme' | 'word' | 'sentence' },
    ) => GraphemeSegmenter
  }).Segmenter

  if (typeof SegmenterCtor === 'function') {
    return [...new SegmenterCtor(undefined, { granularity: 'grapheme' }).segment(text)].map(
      (part) => part.segment,
    )
  }
  return Array.from(text)
}

function emojiClusterSizeClass(count: number, surface: 'sequence' | 'option'): string {
  if (surface === 'sequence') {
    if (count <= 1) return 'text-3xl sm:text-4xl'
    if (count <= 3) return 'text-2xl sm:text-3xl'
    return 'text-xl sm:text-2xl'
  }
  if (count <= 2) return 'text-3xl sm:text-4xl'
  if (count <= 4) return 'text-2xl sm:text-3xl'
  return 'text-xl sm:text-2xl'
}

function EmojiCluster({
  text,
  surface,
}: {
  text: string
  surface: 'sequence' | 'option'
}) {
  const parts = splitGraphemes(text)
  return (
    <span
      className={`inline-flex items-center justify-center gap-0.5 leading-none ${emojiClusterSizeClass(parts.length, surface)}`}
    >
      {parts.map((part, i) => (
        <span key={i} className="shrink-0">
          {part}
        </span>
      ))}
    </span>
  )
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
            className={`min-w-14 h-14 sm:min-w-16 sm:h-16 px-2 rounded-2xl flex items-center justify-center font-bold ${
              i === puzzle.blankIndex
                ? 'bg-purple-500/30 border-2 border-purple-400 border-dashed text-purple-300 text-3xl sm:text-4xl'
                : 'bg-white/10 border border-white/20'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06 }}
          >
            {i === puzzle.blankIndex ? '?' : <EmojiCluster text={item} surface="sequence" />}
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
              className={`min-h-16 sm:min-h-20 px-2 py-2 rounded-2xl flex items-center justify-center border-2 transition-all font-bold ${
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
              <EmojiCluster text={option} surface="option" />
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

function TrueFalsePuzzleView({
  puzzle,
  onAnswer,
  selected,
  isCorrect,
  completed,
  language,
  trueLabel,
  falseLabel,
}: {
  puzzle: TrueFalsePuzzle
  onAnswer: (value: string) => void
  selected: string | null
  isCorrect: boolean | null
  completed: boolean
  language: string
  trueLabel: string
  falseLabel: string
}) {
  return (
    <div className="space-y-8">
      <div className="bg-indigo-900/40 border border-indigo-500/30 rounded-2xl p-6 text-center">
        <p className="text-lg sm:text-xl font-bold text-indigo-100 leading-relaxed">
          {localize(puzzle.statement, language as 'en' | 'id')}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {(['true', 'false'] as const).map((val) => {
          const isSelected = selected === val
          const correct = completed && String(puzzle.answer) === val
          const wrong = isSelected && isCorrect === false
          const isTrue = val === 'true'
          return (
            <motion.button
              key={val}
              onClick={() => !completed && onAnswer(val)}
              disabled={completed}
              className={`h-20 sm:h-24 rounded-2xl text-xl font-black border-2 transition-all flex items-center justify-center ${
                correct
                  ? 'bg-green-500/30 border-green-400 text-green-200'
                  : wrong
                  ? 'bg-red-500/30 border-red-400 text-red-200'
                  : isSelected
                  ? isTrue
                    ? 'bg-emerald-500/30 border-emerald-400 text-white'
                    : 'bg-rose-500/30 border-rose-400 text-white'
                  : isTrue
                  ? 'bg-emerald-900/30 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400'
                  : 'bg-rose-900/30 border-rose-500/40 text-rose-300 hover:bg-rose-500/20 hover:border-rose-400'
              } ${completed ? 'cursor-default' : 'cursor-pointer'}`}
              animate={wrong ? { x: [-4, 4, -4, 4, 0] } : {}}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {isTrue ? trueLabel : falseLabel}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

function SortPuzzleView({
  puzzle,
  onAnswer,
  selected,
  isCorrect,
  completed,
  prompt,
}: {
  puzzle: SortPuzzle
  onAnswer: (value: string) => void
  selected: string | null
  isCorrect: boolean | null
  completed: boolean
  prompt: string
}) {
  const [orderedItems, setOrderedItems] = useState<string[]>([])

  useEffect(() => {
    if (selected === null && !completed) {
      setOrderedItems([])
    }
  }, [selected, completed])

  const handleTap = (item: string) => {
    if (completed || orderedItems.includes(item)) return
    const next = [...orderedItems, item]
    setOrderedItems(next)
    if (next.length === puzzle.items.length) {
      onAnswer(next.join(','))
    }
  }

  return (
    <div className="space-y-6">
      <p className="text-center text-white/60 text-sm font-bold">{prompt}</p>

      <motion.div
        className="flex items-center justify-center gap-2 flex-wrap"
        animate={isCorrect === false ? { x: [-6, 6, -6, 6, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        {puzzle.items.map((_, i) => {
          const filled = orderedItems[i]
          return (
            <div
              key={i}
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border-2 transition-all font-black text-lg ${
                filled
                  ? isCorrect === false
                    ? 'bg-red-500/30 border-red-400 text-white'
                    : 'bg-indigo-500/30 border-indigo-400 text-white'
                  : 'bg-white/8 border-white/20 border-dashed text-white/25'
              }`}
            >
              {filled ?? (i + 1)}
            </div>
          )
        })}
      </motion.div>

      <div className="flex flex-wrap gap-3 justify-center">
        {puzzle.items.map(item => {
          const isUsed = orderedItems.includes(item)
          return (
            <motion.button
              key={item}
              onClick={() => handleTap(item)}
              disabled={isUsed || completed}
              className={`w-16 h-16 rounded-2xl text-xl font-black border-2 transition-all ${
                isUsed
                  ? 'bg-white/5 border-white/10 text-white/20 cursor-default'
                  : completed
                  ? 'bg-white/10 border-white/20 text-white cursor-default'
                  : 'bg-white/10 border-white/20 text-white hover:bg-indigo-500/20 hover:border-indigo-400 cursor-pointer active:scale-95'
              }`}
              animate={{ opacity: isUsed ? 0.25 : 1 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: isUsed ? 0.25 : 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

function FillInPuzzleView({
  puzzle,
  onAnswer,
  isCorrect,
  completed,
  language,
  checkLabel,
}: {
  puzzle: FillInPuzzle
  onAnswer: (value: string) => void
  isCorrect: boolean | null
  completed: boolean
  language: string
  checkLabel: string
}) {
  const [input, setInput] = useState('')

  useEffect(() => {
    if (isCorrect === null && !completed) {
      setInput('')
    }
  }, [isCorrect, completed])

  const handleSubmit = () => {
    if (!input.trim() || completed) return
    onAnswer(input.trim())
  }

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

      <motion.div
        className="flex gap-3"
        animate={isCorrect === false ? { x: [-4, 4, -4, 4, 0] } : {}}
        transition={{ duration: 0.3 }}
      >
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          disabled={completed}
          className="flex-1 bg-white/10 border-2 border-white/20 rounded-2xl text-center text-3xl font-black text-white px-4 py-4 focus:outline-none focus:border-purple-400 transition-colors disabled:opacity-50"
          inputMode={puzzle.inputType === 'text' ? 'text' : 'numeric'}
          autoComplete="off"
        />
        <motion.button
          onClick={handleSubmit}
          disabled={!input.trim() || completed}
          className="px-6 rounded-2xl font-black text-white bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors border-2 border-purple-500"
          whileTap={{ scale: 0.97 }}
        >
          {checkLabel}
        </motion.button>
      </motion.div>
    </div>
  )
}

const MATCH_COLORS = [
  { bg: 'bg-blue-500/30', border: 'border-blue-400', text: 'text-blue-200' },
  { bg: 'bg-green-500/30', border: 'border-green-400', text: 'text-green-200' },
  { bg: 'bg-purple-500/30', border: 'border-purple-400', text: 'text-purple-200' },
  { bg: 'bg-amber-500/30', border: 'border-amber-400', text: 'text-amber-200' },
]

function MatchPuzzleView({
  puzzle,
  onAnswer,
  completed,
  language,
  prompt,
}: {
  puzzle: MatchPuzzle
  onAnswer: (value: string) => void
  completed: boolean
  language: string
  prompt: string
}) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [matched, setMatched] = useState<Record<string, string>>({})
  const [wrongPair, setWrongPair] = useState<string | null>(null)
  const [wrongRight, setWrongRight] = useState<string | null>(null)
  const [pairColors, setPairColors] = useState<Record<string, number>>({})

  const shuffledRight = useMemo(
    () => [...puzzle.pairs].sort(() => 0.5 - Math.random()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const matchedRightIds = Object.values(matched)

  const handleLeft = (leftId: string) => {
    if (matched[leftId] !== undefined || completed) return
    setSelectedLeft(prev => prev === leftId ? null : leftId)
  }

  const handleRight = (rightId: string) => {
    if (!selectedLeft || matchedRightIds.includes(rightId) || completed) return
    const pair = puzzle.pairs.find(p => p.leftId === selectedLeft)!

    if (pair.rightId === rightId) {
      const colorIdx = Object.keys(pairColors).length
      const newMatched = { ...matched, [selectedLeft]: rightId }
      const newColors = { ...pairColors, [selectedLeft]: colorIdx }
      setMatched(newMatched)
      setPairColors(newColors)
      setSelectedLeft(null)
      if (Object.keys(newMatched).length === puzzle.pairs.length) {
        setTimeout(() => onAnswer('matched'), 300)
      }
    } else {
      setWrongPair(selectedLeft)
      setWrongRight(rightId)
      setSelectedLeft(null)
      setTimeout(() => { setWrongPair(null); setWrongRight(null) }, 600)
    }
  }

  const getLeftStyle = (leftId: string) => {
    const colorIdx = pairColors[leftId]
    if (colorIdx !== undefined) return MATCH_COLORS[colorIdx % MATCH_COLORS.length]
    if (wrongPair === leftId) return { bg: 'bg-red-500/30', border: 'border-red-400', text: 'text-red-200' }
    if (selectedLeft === leftId) return { bg: 'bg-yellow-500/30', border: 'border-yellow-400', text: 'text-yellow-100' }
    return { bg: 'bg-white/8', border: 'border-white/20', text: 'text-white/80' }
  }

  const getRightStyle = (rightId: string) => {
    const leftIdForRight = Object.entries(matched).find(([, rid]) => rid === rightId)?.[0]
    if (leftIdForRight !== undefined) return MATCH_COLORS[pairColors[leftIdForRight] % MATCH_COLORS.length]
    if (wrongRight === rightId) return { bg: 'bg-red-500/30', border: 'border-red-400', text: 'text-red-200' }
    return { bg: 'bg-white/8', border: 'border-white/20', text: 'text-white/80' }
  }

  return (
    <div className="space-y-5">
      <p className="text-center text-white/60 text-sm font-bold">{prompt}</p>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-3">
          {puzzle.pairs.map(pair => {
            const style = getLeftStyle(pair.leftId)
            const isMatched = matched[pair.leftId] !== undefined
            return (
              <motion.button
                key={pair.leftId}
                onClick={() => handleLeft(pair.leftId)}
                disabled={isMatched || completed}
                className={`w-full p-3 rounded-2xl border-2 flex items-center gap-2 transition-all text-left ${style.bg} ${style.border} ${isMatched || completed ? 'cursor-default' : 'cursor-pointer'}`}
                animate={wrongPair === pair.leftId ? { x: [-4, 4, -4, 4, 0] } : {}}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl shrink-0">{pair.leftEmoji}</span>
                <span className={`text-sm font-bold leading-tight ${style.text}`}>{localize(pair.leftLabel, language as 'en' | 'id')}</span>
                {isMatched && <Check className="w-4 h-4 ml-auto shrink-0 text-white/70" />}
              </motion.button>
            )
          })}
        </div>

        <div className="space-y-3">
          {shuffledRight.map(pair => {
            const style = getRightStyle(pair.rightId)
            const isMatched = matchedRightIds.includes(pair.rightId)
            return (
              <motion.button
                key={pair.rightId}
                onClick={() => handleRight(pair.rightId)}
                disabled={isMatched || completed || !selectedLeft}
                className={`w-full p-3 rounded-2xl border-2 flex items-center gap-2 transition-all text-left ${style.bg} ${style.border} ${isMatched || completed ? 'cursor-default' : selectedLeft ? 'cursor-pointer' : 'cursor-default opacity-60'}`}
                animate={wrongRight === pair.rightId ? { x: [-4, 4, -4, 4, 0] } : {}}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl shrink-0">{pair.rightEmoji}</span>
                <span className={`text-sm font-bold leading-tight ${style.text}`}>{localize(pair.rightLabel, language as 'en' | 'id')}</span>
                {isMatched && <Check className="w-4 h-4 ml-auto shrink-0 text-white/70" />}
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function AbstractionPuzzleView({
  puzzle,
  onAnswer,
  selected,
  isCorrect,
  completed,
  language,
  oddPrompt,
  categoryPrompt,
  checkLabel,
}: {
  puzzle: AbstractionPuzzle
  onAnswer: (value: string) => void
  selected: string | null
  isCorrect: boolean | null
  completed: boolean
  language: string
  oddPrompt: string
  categoryPrompt: string
  checkLabel: string
}) {
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const isOdd = puzzle.subtype === 'odd-one-out'

  useEffect(() => {
    if (selected === null && !completed) setSelectedItems([])
  }, [selected, completed])

  const handleTap = (id: string) => {
    if (completed) return
    if (isOdd) {
      onAnswer(id)
    } else {
      setSelectedItems(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]))
    }
  }

  const handleCheck = () => {
    if (completed || selectedItems.length === 0) return
    onAnswer([...selectedItems].sort().join(','))
  }

  return (
    <div className="space-y-6">
      <div className="bg-teal-900/40 border border-teal-500/30 rounded-2xl p-5 text-center">
        <p className="text-lg sm:text-xl font-bold text-teal-100">
          {localize(puzzle.question, language as 'en' | 'id')}
        </p>
      </div>

      <p className="text-center text-white/60 text-sm font-bold">
        {isOdd ? oddPrompt : categoryPrompt}
      </p>

      <motion.div
        className="grid grid-cols-2 gap-3"
        animate={isCorrect === false ? { x: [-4, 4, -4, 4, 0] } : {}}
        transition={{ duration: 0.3 }}
      >
        {puzzle.items.map((item, i) => {
          const isItemSelected = isOdd ? selected === item.id : selectedItems.includes(item.id)
          const correct = completed && puzzle.correctIds.includes(item.id)
          const wrong = isOdd
            ? isItemSelected && isCorrect === false
            : completed && isCorrect === false && selectedItems.includes(item.id) && !puzzle.correctIds.includes(item.id)
          return (
            <motion.button
              key={item.id}
              onClick={() => !completed && handleTap(item.id)}
              disabled={completed}
              className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${
                correct
                  ? 'bg-green-500/30 border-green-400'
                  : wrong
                  ? 'bg-red-500/30 border-red-400'
                  : isItemSelected
                  ? 'bg-teal-500/30 border-teal-400'
                  : 'bg-white/8 border-white/20 hover:bg-white/15 hover:border-white/40'
              } ${completed ? 'cursor-default' : 'cursor-pointer'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl">{item.emoji}</span>
              <span
                className={`text-xs font-bold text-center leading-tight ${
                  correct ? 'text-green-200' : wrong ? 'text-red-200' : 'text-white/80'
                }`}
              >
                {localize(item.label, language as 'en' | 'id')}
              </span>
            </motion.button>
          )
        })}
      </motion.div>

      {!isOdd && !completed && (
        <motion.button
          onClick={handleCheck}
          disabled={selectedItems.length === 0}
          className="w-full py-3 rounded-2xl font-black text-white bg-teal-600 hover:bg-teal-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors border-2 border-teal-500"
          whileTap={{ scale: 0.97 }}
        >
          {checkLabel}
        </motion.button>
      )}
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
  const [showTutorial, setShowTutorial] = useState(!!lesson.tutorial)
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
    if (p.type === 'true-false') return value === String(p.answer)
    if (p.type === 'sort') return value === p.answer.join(',')
    if (p.type === 'fill-in') return value.trim().toLowerCase() === p.answer.trim().toLowerCase()
    if (p.type === 'match') return value === 'matched'
    if (p.type === 'abstraction') {
      if (p.subtype === 'odd-one-out') return value === p.correctIds[0]
      return value === [...p.correctIds].sort().join(',')
    }
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
        {puzzle.type === 'true-false' && (
          <TrueFalsePuzzleView
            puzzle={puzzle as TrueFalsePuzzle}
            onAnswer={handleAnswer}
            selected={selected}
            isCorrect={isCorrect}
            completed={completed}
            language={language}
            trueLabel={t('thinking.true')}
            falseLabel={t('thinking.false')}
          />
        )}
        {puzzle.type === 'sort' && (
          <SortPuzzleView
            puzzle={puzzle as SortPuzzle}
            onAnswer={handleAnswer}
            selected={selected}
            isCorrect={isCorrect}
            completed={completed}
            prompt={t('thinking.sort.prompt')}
          />
        )}
        {puzzle.type === 'fill-in' && (
          <FillInPuzzleView
            puzzle={puzzle as FillInPuzzle}
            onAnswer={handleAnswer}
            isCorrect={isCorrect}
            completed={completed}
            language={language}
            checkLabel={t('thinking.fill.check')}
          />
        )}
        {puzzle.type === 'match' && (
          <MatchPuzzleView
            puzzle={puzzle as MatchPuzzle}
            onAnswer={handleAnswer}
            completed={completed}
            language={language}
            prompt={t('thinking.match.prompt')}
          />
        )}
        {puzzle.type === 'abstraction' && (
          <AbstractionPuzzleView
            puzzle={puzzle as AbstractionPuzzle}
            onAnswer={handleAnswer}
            selected={selected}
            isCorrect={isCorrect}
            completed={completed}
            language={language}
            oddPrompt={t('thinking.abstraction.odd.prompt')}
            categoryPrompt={t('thinking.abstraction.category.prompt')}
            checkLabel={t('thinking.abstraction.check')}
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
