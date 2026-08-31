import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import type { PatternPuzzle, IfThenPuzzle, MathPuzzle, SequencePuzzle, TrueFalsePuzzle, SortPuzzle, FillInPuzzle, MatchPuzzle, AbstractionPuzzle, SpatialPuzzle, SpatialGrid, MultiStepPuzzle, GridSelectPuzzle, ThinkingPuzzle } from '../types'
import { useLanguage } from '../i18n/LanguageProvider'
import { localize } from '../i18n/localize'

/**
 * Renders any `ThinkingPuzzle` (also used as `SafetyPuzzle` — the puzzle shapes are
 * domain-agnostic) and grades the answer. Shared by `ThinkingLessonScreen` and
 * `SafetyLessonScreen` so the twelve puzzle-type renderers exist in exactly one place.
 */

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

/** Cell alphabet for `SpatialGrid`. See the type doc in `src/types/index.ts`. */
const SPATIAL_FILLED = '#'
const SPATIAL_MARKER = 'o'

function hasSpatialMarker(grid: SpatialGrid): boolean {
  return grid.some(row => row.includes(SPATIAL_MARKER))
}

/**
 * Draws a `SpatialGrid` as a CSS grid of square cells. No image is loaded (INV-P1).
 * The marker cell carries a centred dot rather than a colour, so orientation survives
 * greyscale and colourblind vision.
 */
function SpatialFigureView({
  grid,
  surface,
}: {
  grid: SpatialGrid
  surface: 'prompt' | 'option'
}) {
  const cols = grid.reduce((widest, row) => Math.max(widest, row.length), 0)
  if (cols === 0) return null

  return (
    <div
      className={`w-full mx-auto grid gap-1 ${surface === 'prompt' ? 'max-w-[180px]' : 'max-w-[124px]'}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {grid.flatMap((row, r) =>
        Array.from({ length: cols }, (_, c) => {
          const cell = row[c]
          const filled = cell === SPATIAL_FILLED || cell === SPATIAL_MARKER
          return (
            <div
              key={`${r}-${c}`}
              className={`aspect-square rounded-[4px] flex items-center justify-center ${
                filled
                  ? 'bg-white/85 border border-white shadow-sm'
                  : 'border border-dashed border-white/15'
              }`}
            >
              {cell === SPATIAL_MARKER && (
                <span className="block w-1/2 h-1/2 rounded-full bg-slate-900" />
              )}
            </div>
          )
        }),
      )}
    </div>
  )
}

function SpatialPuzzleView({
  puzzle,
  onAnswer,
  selected,
  isCorrect,
  completed,
  language,
  prompt,
  markerHint,
}: {
  puzzle: SpatialPuzzle
  onAnswer: (id: string) => void
  selected: string | null
  isCorrect: boolean | null
  completed: boolean
  language: string
  prompt: string
  markerHint: string
}) {
  return (
    <div className="space-y-6">
      <div className="bg-fuchsia-900/40 border border-fuchsia-500/30 rounded-2xl p-5 text-center space-y-4">
        <p className="text-lg sm:text-xl font-bold text-fuchsia-100">
          {localize(puzzle.question, language as 'en' | 'id')}
        </p>
        <SpatialFigureView grid={puzzle.figure} surface="prompt" />
        {puzzle.note ? (
          <p className="text-xs text-fuchsia-200/70 leading-relaxed">
            {localize(puzzle.note, language as 'en' | 'id')}
          </p>
        ) : (
          hasSpatialMarker(puzzle.figure) && (
            <p className="text-xs text-fuchsia-200/70 leading-relaxed">{markerHint}</p>
          )
        )}
      </div>

      <p className="text-center text-white/60 text-sm font-bold">{prompt}</p>

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
              className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${
                correct
                  ? 'bg-green-500/30 border-green-400'
                  : wrong
                  ? 'bg-red-500/30 border-red-400'
                  : isSelected
                  ? 'bg-fuchsia-500/30 border-fuchsia-400'
                  : 'bg-white/8 border-white/20 hover:bg-white/15 hover:border-white/40'
              } ${completed ? 'cursor-default' : 'cursor-pointer'}`}
              animate={wrong ? { x: [-4, 4, -4, 4, 0] } : {}}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <SpatialFigureView grid={option.grid} surface="option" />
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

/**
 * A chain of linked questions. Each pick reveals the next step; the chain is only
 * submitted once every step has a pick, so one wrong link fails the whole chain and the
 * player rebuilds it from step 1. Answered steps stay on screen as chips, because the
 * point of the model is carrying an earlier answer forward.
 */
function MultiStepPuzzleView({
  puzzle,
  onAnswer,
  selected,
  isCorrect,
  completed,
  language,
  stepLabel,
  brokenLabel,
}: {
  puzzle: MultiStepPuzzle
  onAnswer: (value: string) => void
  selected: string | null
  isCorrect: boolean | null
  completed: boolean
  language: string
  stepLabel: string
  brokenLabel: string
}) {
  const [picks, setPicks] = useState<string[]>([])

  // The parent clears `selected` a beat after a wrong answer — that is the cue to reset
  // the chain, which keeps the wrong links visible while the shake plays.
  useEffect(() => {
    if (selected === null && !completed) {
      setPicks([])
    }
  }, [selected, completed])

  const total = puzzle.steps.length
  const activeIndex = Math.min(picks.length, total - 1)

  const handlePick = (optionId: string) => {
    if (completed || picks.length >= total) return
    const next = [...picks, optionId]
    setPicks(next)
    if (next.length === total) {
      onAnswer(next.join(','))
    }
  }

  return (
    <div className="space-y-5">
      <div className="bg-sky-900/40 border border-sky-500/30 rounded-2xl p-5 text-center space-y-3">
        <p className="text-base sm:text-lg font-bold text-sky-100">
          {localize(puzzle.intro, language as 'en' | 'id')}
        </p>
        {puzzle.visual && (
          <div className="flex items-center justify-center">
            <EmojiCluster text={puzzle.visual} surface="sequence" />
          </div>
        )}
      </div>

      <div className="space-y-3">
        {puzzle.steps.map((step, stepIndex) => {
          const pick = picks[stepIndex]
          const isActive = stepIndex === activeIndex && picks.length < total && !completed
          const isLocked = stepIndex > picks.length
          if (isLocked) return null

          const stepWrong = isCorrect === false && pick !== undefined && pick !== step.answerId

          return (
            <motion.div
              key={step.id}
              className={`rounded-2xl border-2 p-4 ${
                stepWrong
                  ? 'bg-red-500/15 border-red-400/60'
                  : pick !== undefined
                  ? 'bg-white/5 border-white/15'
                  : 'bg-sky-500/10 border-sky-400/40'
              }`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-[11px] font-black tracking-wide text-sky-300/80 mb-1">
                {stepLabel.replace('{n}', String(stepIndex + 1)).replace('{total}', String(total))}
              </div>
              <p className="text-sm sm:text-base font-bold text-white/90 mb-3">
                {localize(step.prompt, language as 'en' | 'id')}
              </p>

              {isActive || pick === undefined ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {step.options.map(option => (
                    <motion.button
                      key={option.id}
                      onClick={() => handlePick(option.id)}
                      className="text-left px-3 py-2.5 rounded-xl border-2 bg-white/8 border-white/20 hover:bg-white/15 hover:border-white/40 transition-all flex items-center gap-2 cursor-pointer"
                      whileTap={{ scale: 0.97 }}
                    >
                      {option.emoji && <span className="text-xl shrink-0">{option.emoji}</span>}
                      <span className="text-xs font-bold text-white/85 leading-tight">
                        {localize(option.label, language as 'en' | 'id')}
                      </span>
                    </motion.button>
                  ))}
                </div>
              ) : (
                <div
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl border-2 ${
                    completed || pick === step.answerId
                      ? 'bg-green-500/25 border-green-400/60'
                      : 'bg-red-500/25 border-red-400/60'
                  }`}
                >
                  {completed || pick === step.answerId ? (
                    <Check className="w-4 h-4 text-green-300 shrink-0" />
                  ) : (
                    <X className="w-4 h-4 text-red-300 shrink-0" />
                  )}
                  <span className="text-xs font-bold text-white/90 leading-tight">
                    {localize(
                      (step.options.find(o => o.id === pick) ?? step.options[0]).label,
                      language as 'en' | 'id',
                    )}
                  </span>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {isCorrect === false && !completed && (
        <p className="text-center text-red-300/80 text-xs font-bold">{brokenLabel}</p>
      )}
    </div>
  )
}

/**
 * Tap-many-squares. The answer is a set of places rather than one of four options, so
 * the player builds a shape or marks every spot a rule allows, then presses Check.
 */
function GridSelectPuzzleView({
  puzzle,
  onAnswer,
  isCorrect,
  completed,
  language,
  prompt,
  checkLabel,
}: {
  puzzle: GridSelectPuzzle
  onAnswer: (value: string) => void
  isCorrect: boolean | null
  completed: boolean
  language: string
  prompt: string
  checkLabel: string
}) {
  const [picked, setPicked] = useState<string[]>([])

  const cols = puzzle.cells.reduce((widest, row) => Math.max(widest, row.length), 0)
  const answerSet = useMemo(() => new Set(puzzle.answer), [puzzle.answer])

  const toggle = (key: string) => {
    if (completed) return
    setPicked(prev => (prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]))
  }

  const handleCheck = () => {
    if (completed || picked.length === 0) return
    onAnswer([...picked].sort().join(','))
  }

  return (
    <div className="space-y-6">
      <div className="bg-fuchsia-900/40 border border-fuchsia-500/30 rounded-2xl p-5 text-center space-y-3">
        <p className="text-lg sm:text-xl font-bold text-fuchsia-100">
          {localize(puzzle.question, language as 'en' | 'id')}
        </p>
        {puzzle.note && (
          <p className="text-xs text-fuchsia-200/70 leading-relaxed">
            {localize(puzzle.note, language as 'en' | 'id')}
          </p>
        )}
      </div>

      <p className="text-center text-white/60 text-sm font-bold">{prompt}</p>

      <motion.div
        className="mx-auto grid gap-1.5 max-w-[320px]"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        animate={isCorrect === false ? { x: [-4, 4, -4, 4, 0] } : {}}
        transition={{ duration: 0.3 }}
      >
        {puzzle.cells.flatMap((row, r) =>
          Array.from({ length: cols }, (_, c) => {
            const key = `${r}-${c}`
            const content = row[c] ?? ''
            const isPicked = picked.includes(key)
            const shouldBePicked = answerSet.has(key)
            const correct = completed && shouldBePicked
            const wrong = !completed && isCorrect === false && isPicked && !shouldBePicked

            return (
              <button
                key={key}
                type="button"
                onClick={() => toggle(key)}
                disabled={completed}
                className={`aspect-square rounded-lg border-2 flex items-center justify-center text-xl sm:text-2xl transition-all ${
                  correct
                    ? 'bg-green-500/30 border-green-400'
                    : wrong
                    ? 'bg-red-500/30 border-red-400'
                    : isPicked
                    ? 'bg-fuchsia-500/35 border-fuchsia-400'
                    : 'bg-white/8 border-white/15 hover:bg-white/15 hover:border-white/35'
                } ${completed ? 'cursor-default' : 'cursor-pointer'}`}
              >
                {content}
              </button>
            )
          }),
        )}
      </motion.div>

      {!completed && (
        <motion.button
          onClick={handleCheck}
          disabled={picked.length === 0}
          className="w-full py-3 rounded-2xl font-black text-white bg-fuchsia-600 hover:bg-fuchsia-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors border-2 border-fuchsia-500"
          whileTap={{ scale: 0.97 }}
        >
          {checkLabel}
        </motion.button>
      )}
    </div>
  )
}

/** Grades a submitted answer value against the puzzle's correct answer. */
export function isPuzzleAnswerCorrect(puzzle: ThinkingPuzzle, value: string): boolean {
  if (puzzle.type === 'pattern') return value === puzzle.answer
  if (puzzle.type === 'if-then') return value === puzzle.answerId
  if (puzzle.type === 'math') return value === puzzle.answer
  if (puzzle.type === 'sequence') return value === puzzle.steps.map(s => s.id).join(',')
  if (puzzle.type === 'true-false') return value === String(puzzle.answer)
  if (puzzle.type === 'sort') return value === puzzle.answer.join(',')
  if (puzzle.type === 'fill-in') return value.trim().toLowerCase() === puzzle.answer.trim().toLowerCase()
  if (puzzle.type === 'match') return value === 'matched'
  if (puzzle.type === 'spatial') return value === puzzle.answerId
  if (puzzle.type === 'multi-step') return value === puzzle.steps.map(s => s.answerId).join(',')
  if (puzzle.type === 'grid-select') return value === [...puzzle.answer].sort().join(',')
  if (puzzle.type === 'abstraction') {
    if (puzzle.subtype === 'odd-one-out') return value === puzzle.correctIds[0]
    return value === [...puzzle.correctIds].sort().join(',')
  }
  return false
}

interface PuzzlePlayerProps {
  puzzle: ThinkingPuzzle
  onAnswer: (value: string) => void
  selected: string | null
  isCorrect: boolean | null
  completed: boolean
}

/** Renders the puzzle-type-appropriate view, resolving its own `t()`/`language` from context. */
export function PuzzlePlayer({ puzzle, onAnswer, selected, isCorrect, completed }: PuzzlePlayerProps) {
  const { t, language } = useLanguage()

  if (puzzle.type === 'pattern') {
    return <PatternPuzzleView puzzle={puzzle} onAnswer={onAnswer} selected={selected} isCorrect={isCorrect} completed={completed} />
  }
  if (puzzle.type === 'if-then') {
    return <IfThenPuzzleView puzzle={puzzle} onAnswer={onAnswer} selected={selected} isCorrect={isCorrect} completed={completed} language={language} />
  }
  if (puzzle.type === 'math') {
    return <MathPuzzleView puzzle={puzzle} onAnswer={onAnswer} selected={selected} isCorrect={isCorrect} completed={completed} language={language} />
  }
  if (puzzle.type === 'sequence') {
    return <SequencePuzzleView puzzle={puzzle} onAnswer={onAnswer} selected={selected} isCorrect={isCorrect} completed={completed} language={language} prompt={t('thinking.sequence.prompt')} />
  }
  if (puzzle.type === 'true-false') {
    return <TrueFalsePuzzleView puzzle={puzzle} onAnswer={onAnswer} selected={selected} isCorrect={isCorrect} completed={completed} language={language} trueLabel={t('thinking.true')} falseLabel={t('thinking.false')} />
  }
  if (puzzle.type === 'sort') {
    return <SortPuzzleView puzzle={puzzle} onAnswer={onAnswer} selected={selected} isCorrect={isCorrect} completed={completed} prompt={puzzle.prompt ? localize(puzzle.prompt, language) : t('thinking.sort.prompt')} />
  }
  if (puzzle.type === 'fill-in') {
    return (
      <FillInPuzzleView
        puzzle={puzzle}
        onAnswer={onAnswer}
        isCorrect={isCorrect}
        completed={completed}
        language={language}
        checkLabel={t('thinking.fill.check')}
      />
    )
  }
  if (puzzle.type === 'match') {
    return <MatchPuzzleView puzzle={puzzle} onAnswer={onAnswer} completed={completed} language={language} prompt={t('thinking.match.prompt')} />
  }
  if (puzzle.type === 'abstraction') {
    return (
      <AbstractionPuzzleView
        puzzle={puzzle}
        onAnswer={onAnswer}
        selected={selected}
        isCorrect={isCorrect}
        completed={completed}
        language={language}
        oddPrompt={t('thinking.abstraction.odd.prompt')}
        categoryPrompt={t('thinking.abstraction.category.prompt')}
        checkLabel={t('thinking.abstraction.check')}
      />
    )
  }
  if (puzzle.type === 'multi-step') {
    return (
      <MultiStepPuzzleView
        puzzle={puzzle}
        onAnswer={onAnswer}
        selected={selected}
        isCorrect={isCorrect}
        completed={completed}
        language={language}
        stepLabel={t('thinking.multistep.step')}
        brokenLabel={t('thinking.multistep.broken')}
      />
    )
  }
  if (puzzle.type === 'grid-select') {
    return (
      <GridSelectPuzzleView
        puzzle={puzzle}
        onAnswer={onAnswer}
        isCorrect={isCorrect}
        completed={completed}
        language={language}
        prompt={t('thinking.grid.prompt')}
        checkLabel={t('thinking.grid.check')}
      />
    )
  }
  if (puzzle.type === 'spatial') {
    return (
      <SpatialPuzzleView
        puzzle={puzzle}
        onAnswer={onAnswer}
        selected={selected}
        isCorrect={isCorrect}
        completed={completed}
        language={language}
        prompt={t('thinking.spatial.prompt')}
        markerHint={t('thinking.spatial.marker')}
      />
    )
  }
  return null
}
