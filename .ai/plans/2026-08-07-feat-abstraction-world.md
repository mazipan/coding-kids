# Plan: Abstraction World — odd-one-out and category-match puzzles

**Slug:** `feat-abstraction-world`  
**Date:** 2026-08-07  
**Status:** draft

---

## Request

> A new thinking-path world teaching abstraction — the CT skill of identifying what things have in common and ignoring irrelevant details. Puzzles ask kids to find the odd one out, group items by a hidden rule, or name the category.
>
> Proposed puzzle types: odd-one-out (tap the one that doesn't belong), category-match (tap all that fit a category label). World metadata: id `abstraction`, emoji 🔍, ageRange 7–11, color `teal`, unlockAtXP 0 (per INV-L3).

---

## Decision

Add an `abstraction` thinking world with a new `AbstractionPuzzle` type that has two subtypes: `odd-one-out` (single-select, tap the item that doesn't belong) and `category-match` (multi-select, tap all items that fit, then submit with a Check button). Implement 10 lessons graded from simple single-select to harder multi-select. Skip the "rule-finder" subtype proposed in the issue — it is better expressed by existing `if-then` or `math` types and would add UI complexity for minimal educational gain.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Implement rule-finder subtype | Adds a third UX variant; same concept covered by `if-then`/`math`. Keep scope bounded. |
| Reuse `if-then` for odd-one-out | `if-then` shows a condition banner, which changes the framing. Abstraction puzzles need a clean item grid without a conditional frame. |
| Multi-select without a Check button | Auto-submitting multi-select fires on the first tap, which doesn't work when 2+ items are correct. |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | All data is static |
| INV-P2 no data exfiltration | no | |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | |
| INV-PR1 progress never decreases | no | `completeLesson` is unchanged |
| INV-PR2 stars are best-of | no | Same stars logic used for all thinking lessons |
| INV-PR3 XP is delta-only | no | Same delta logic |
| INV-PR4 badges are permanent | no | No new badges |
| INV-L1 sequential lesson unlock | yes | Abstraction lessons 1–9 follow the same sequential unlock as other thinking worlds. Lesson 0 always accessible. Verified by existing `isLessonUnlocked` logic — no code change needed. |
| INV-L2 world unlock by XP | no | Applies only to blocks path |
| INV-L3 thinking worlds always unlocked | yes | `unlockAtXP: 0` required — enforced in the world data entry |
| INV-G1 bounded grid | no | No grid; thinking path only |
| INV-G2 obstacle collision | no | |
| INV-G3 action cap | no | |
| INV-G4 sandbox | no | |
| INV-C1 TypeScript strict | yes | New types and component must pass `tsc -b` |
| INV-C2 no hardcoded strings | yes | All puzzle questions use `LocalizedString`; new prompt UI keys go through `t()` |
| INV-C3 build passes | yes | `bun run build` must pass before commit |
| INV-C4 localStorage only | no | No storage schema changes |
| INV-C5 lucide-react only icon library | no | No new icon libraries; emoji used for items |
| INV-I1 all keys have EN value | yes | All new translation keys must have non-empty EN and ID strings |
| INV-I2 no layout assumptions | yes | Item grid uses flex/wrap; labels truncate |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/types/index.ts` | edit | Add `'abstraction'` to `ThinkingWorldId`, add `AbstractionPuzzle` interface, add to `ThinkingPuzzle` union |
| `src/data/thinkingWorlds.ts` | edit | Append abstraction world entry |
| `src/data/thinkingLessons.ts` | edit | Append 10 abstraction lessons |
| `src/screens/ThinkingLesson.tsx` | edit | Add `AbstractionPuzzleView`, wire `isAnswerCorrect` for `'abstraction'`, render in puzzle block |
| `src/screens/ThinkingHome.tsx` | edit | Add `teal` color entry to `getWorldTheme` lookup |
| `src/i18n/translations.ts` | edit | Add 3 new translation keys (EN + ID) for abstraction prompt and check label |
| `.ai/specs/worlds.md` | edit | Add abstraction row to thinking worlds table |

---

## Spec changes

### `.ai/specs/worlds.md`

Add to the thinking worlds table (between `decomposition` and any future row):

```
| abstraction | 🔍 | Abstraction | 7–11 | 0 | 10 |
```

Also update the `ThinkingWorldId` note if present (it lists the union type values).

### `.ai/specs/invariants.md`

Update INV-L3 to include `abstraction` in the listed world IDs:

Current: `All thinking worlds ('patterns', 'logic', 'counting', 'memory', 'nature', 'numbers', 'decomposition') have unlockAtXP: 0...`

Updated: Add `'abstraction'` to the list.

---

## Implementation steps

### 1. Update `src/types/index.ts`

**a.** Extend `ThinkingWorldId` union:
```ts
export type ThinkingWorldId = 'patterns' | 'logic' | 'counting' | 'memory' | 'nature' | 'numbers' | 'decomposition' | 'abstraction'
```

**b.** Add `AbstractionPuzzle` interface after `MatchPuzzle`:
```ts
export interface AbstractionPuzzle {
  type: 'abstraction'
  subtype: 'odd-one-out' | 'category-match'
  items: Array<{ id: string; emoji: string; label: LocalizedString }>
  question: LocalizedString
  correctIds: string[]
}
```

**c.** Add `AbstractionPuzzle` to the `ThinkingPuzzle` union:
```ts
export type ThinkingPuzzle = PatternPuzzle | IfThenPuzzle | MathPuzzle | SequencePuzzle | TrueFalsePuzzle | SortPuzzle | FillInPuzzle | MatchPuzzle | AbstractionPuzzle
```

---

### 2. Update `src/screens/ThinkingHome.tsx`

Add `teal` to the `getWorldTheme` lookup map (insert between `orange` and the closing brace):
```ts
teal: { bgGradient: 'linear-gradient(135deg, #042f2e 0%, #0f766e 50%, #0d9488 100%)', accentColor: '#2dd4bf', textColor: '#99f6e4' },
```

---

### 3. Update `src/i18n/translations.ts`

Add to the `en` block (near the other `thinking.*` keys):
```ts
'thinking.abstraction.odd.prompt': "Tap the one that doesn't belong!",
'thinking.abstraction.category.prompt': 'Tap all that fit! Then press Check.',
'thinking.abstraction.check': 'Check',
```

Add to the `id` block:
```ts
'thinking.abstraction.odd.prompt': 'Ketuk yang tidak termasuk!',
'thinking.abstraction.category.prompt': 'Ketuk semua yang sesuai! Lalu tekan Cek.',
'thinking.abstraction.check': 'Cek',
```

---

### 4. Update `src/data/thinkingWorlds.ts`

Append to `THINKING_WORLDS` array:
```ts
{
  id: 'abstraction',
  name: { en: 'Think Alike', id: 'Berpikir Serupa' },
  emoji: '🔍',
  tagline: { en: "Find what fits — and what doesn't!", id: 'Temukan yang cocok dan yang tidak!' },
  ageRange: '7–11',
  concept: { en: 'Abstraction', id: 'Abstraksi' },
  color: 'teal',
  bgGradient: 'from-teal-900/50 to-cyan-900/30',
  unlockAtXP: 0,
  lessonCount: 10,
},
```

---

### 5. Add 10 lessons to `src/data/thinkingLessons.ts`

Append a new `// ── Think Alike (Abstraction) ────────────────────────────` section.

Lessons by design:

| # | Subtype | Theme | Odd/Correct |
|---|---------|-------|-------------|
| 0 | odd-one-out | Animals vs transport | 🚗 car |
| 1 | odd-one-out | Fruits vs vegetable | 🥕 carrot |
| 2 | odd-one-out | Wet/liquid things vs dry | 🔥 fire |
| 3 | category-match | Things that fly (2 correct) | 🦅 eagle, 🚀 rocket |
| 4 | odd-one-out | Round things vs angular | 🎮 controller |
| 5 | odd-one-out | Cold things vs hot | 🔥 fire (in a different set) |
| 6 | category-match | Living things (3 correct) | 🌳 tree, 🐸 frog, 🐝 bee |
| 7 | odd-one-out | Even numbers vs odd | 5 (others are 2, 4, 6) |
| 8 | category-match | Kitchen items (2 correct) | 🍳 pan, 🥄 spoon |
| 9 | odd-one-out | Things with 4 legs vs other | 🦜 parrot (2 legs; others dog/tiger/elephant have 4) |

Detailed lesson data:

```ts
// ── Think Alike (Abstraction) ─────────────────────────────────
{
  id: 'abstraction-0',
  worldId: 'abstraction',
  number: 0,
  title: { en: 'Odd One Out!', id: 'Yang Berbeda!' },
  mascotMessage: { en: 'Three of these belong together. Which one is different? 🔍', id: 'Tiga di antara ini saling cocok. Yang mana yang berbeda? 🔍' },
  xpReward: 10,
  puzzle: {
    type: 'abstraction',
    subtype: 'odd-one-out',
    question: { en: 'Which one does NOT belong with the animals?', id: 'Mana yang BUKAN termasuk hewan?' },
    items: [
      { id: 'dog',  emoji: '🐶', label: { en: 'Dog',  id: 'Anjing' } },
      { id: 'cat',  emoji: '🐱', label: { en: 'Cat',  id: 'Kucing' } },
      { id: 'bird', emoji: '🐦', label: { en: 'Bird', id: 'Burung' } },
      { id: 'car',  emoji: '🚗', label: { en: 'Car',  id: 'Mobil' } },
    ],
    correctIds: ['car'],
  },
},
{
  id: 'abstraction-1',
  worldId: 'abstraction',
  number: 1,
  title: { en: 'Fruit or Not?', id: 'Buah atau Bukan?' },
  mascotMessage: { en: 'Three are fruits. One is NOT a fruit — can you spot it? 🍎', id: 'Tiga adalah buah. Satu BUKAN buah — bisakah kamu menemukannya? 🍎' },
  xpReward: 10,
  puzzle: {
    type: 'abstraction',
    subtype: 'odd-one-out',
    question: { en: 'Which one is NOT a fruit?', id: 'Mana yang BUKAN buah?' },
    items: [
      { id: 'apple',   emoji: '🍎', label: { en: 'Apple',   id: 'Apel' } },
      { id: 'banana',  emoji: '🍌', label: { en: 'Banana',  id: 'Pisang' } },
      { id: 'carrot',  emoji: '🥕', label: { en: 'Carrot',  id: 'Wortel' } },
      { id: 'orange',  emoji: '🍊', label: { en: 'Orange',  id: 'Jeruk' } },
    ],
    correctIds: ['carrot'],
  },
},
{
  id: 'abstraction-2',
  worldId: 'abstraction',
  number: 2,
  title: { en: 'Wet Things', id: 'Benda Basah' },
  mascotMessage: { en: 'Three things are wet or liquid. One is not — find the odd one out! 💧', id: 'Tiga benda basah atau cair. Satu tidak — temukan yang berbeda! 💧' },
  xpReward: 12,
  puzzle: {
    type: 'abstraction',
    subtype: 'odd-one-out',
    question: { en: 'Which one is NOT wet or liquid?', id: 'Mana yang TIDAK basah atau cair?' },
    items: [
      { id: 'rain',  emoji: '🌧️', label: { en: 'Rain',  id: 'Hujan' } },
      { id: 'sea',   emoji: '🌊', label: { en: 'Sea',   id: 'Laut' } },
      { id: 'fire',  emoji: '🔥', label: { en: 'Fire',  id: 'Api' } },
      { id: 'juice', emoji: '🧃', label: { en: 'Juice', id: 'Jus' } },
    ],
    correctIds: ['fire'],
  },
},
{
  id: 'abstraction-3',
  worldId: 'abstraction',
  number: 3,
  title: { en: 'Things That Fly', id: 'Benda yang Terbang' },
  mascotMessage: { en: 'Two of these can fly up in the sky — tap BOTH of them! ✈️', id: 'Dua dari ini bisa terbang di langit — ketuk KEDUANYA! ✈️' },
  xpReward: 15,
  puzzle: {
    type: 'abstraction',
    subtype: 'category-match',
    question: { en: 'Tap all the things that can FLY!', id: 'Ketuk semua benda yang bisa TERBANG!' },
    items: [
      { id: 'eagle', emoji: '🦅', label: { en: 'Eagle', id: 'Elang' } },
      { id: 'rocket', emoji: '🚀', label: { en: 'Rocket', id: 'Roket' } },
      { id: 'car',   emoji: '🚗', label: { en: 'Car',   id: 'Mobil' } },
      { id: 'fish',  emoji: '🐟', label: { en: 'Fish',  id: 'Ikan' } },
    ],
    correctIds: ['eagle', 'rocket'],
  },
},
{
  id: 'abstraction-4',
  worldId: 'abstraction',
  number: 4,
  title: { en: 'Round Shapes', id: 'Bentuk Bulat' },
  mascotMessage: { en: 'Most of these are round! Which one is NOT a round shape? ⭕', id: 'Sebagian besar bulat! Mana yang BUKAN bentuk bulat? ⭕' },
  xpReward: 15,
  puzzle: {
    type: 'abstraction',
    subtype: 'odd-one-out',
    question: { en: 'Which one is NOT round?', id: 'Mana yang TIDAK bulat?' },
    items: [
      { id: 'ball',       emoji: '⚽', label: { en: 'Ball',       id: 'Bola' } },
      { id: 'earth',      emoji: '🌍', label: { en: 'Earth',      id: 'Bumi' } },
      { id: 'controller', emoji: '🎮', label: { en: 'Controller', id: 'Kontroler' } },
      { id: 'pizza',      emoji: '🍕', label: { en: 'Pizza',      id: 'Pizza' } },
    ],
    correctIds: ['controller'],
  },
},
{
  id: 'abstraction-5',
  worldId: 'abstraction',
  number: 5,
  title: { en: 'Cold Things', id: 'Benda Dingin' },
  mascotMessage: { en: 'Three things are cold. One is HOT — which is the odd one out? ❄️', id: 'Tiga benda dingin. Satu PANAS — mana yang berbeda? ❄️' },
  xpReward: 18,
  puzzle: {
    type: 'abstraction',
    subtype: 'odd-one-out',
    question: { en: 'Which one is NOT cold?', id: 'Mana yang TIDAK dingin?' },
    items: [
      { id: 'ice',    emoji: '🧊', label: { en: 'Ice',    id: 'Es' } },
      { id: 'snow',   emoji: '❄️', label: { en: 'Snow',   id: 'Salju' } },
      { id: 'candle', emoji: '🕯️', label: { en: 'Candle', id: 'Lilin' } },
      { id: 'berg',   emoji: '🏔️', label: { en: 'Iceberg', id: 'Gunung Es' } },
    ],
    correctIds: ['candle'],
  },
},
{
  id: 'abstraction-6',
  worldId: 'abstraction',
  number: 6,
  title: { en: 'Living Things', id: 'Makhluk Hidup' },
  mascotMessage: { en: 'Three of these are ALIVE. One is not — tap all the living things! 🌱', id: 'Tiga di sini HIDUP. Satu tidak — ketuk semua makhluk hidup! 🌱' },
  xpReward: 20,
  puzzle: {
    type: 'abstraction',
    subtype: 'category-match',
    question: { en: 'Tap all the LIVING things!', id: 'Ketuk semua MAKHLUK HIDUP!' },
    items: [
      { id: 'tree',  emoji: '🌳', label: { en: 'Tree',  id: 'Pohon' } },
      { id: 'rock',  emoji: '🪨', label: { en: 'Rock',  id: 'Batu' } },
      { id: 'frog',  emoji: '🐸', label: { en: 'Frog',  id: 'Katak' } },
      { id: 'bee',   emoji: '🐝', label: { en: 'Bee',   id: 'Lebah' } },
    ],
    correctIds: ['tree', 'frog', 'bee'],
  },
},
{
  id: 'abstraction-7',
  worldId: 'abstraction',
  number: 7,
  title: { en: 'Even Numbers', id: 'Angka Genap' },
  mascotMessage: { en: 'Even numbers are 2, 4, 6, 8... which number breaks the rule? 🔢', id: 'Angka genap adalah 2, 4, 6, 8... angka mana yang melanggar aturan? 🔢' },
  xpReward: 20,
  puzzle: {
    type: 'abstraction',
    subtype: 'odd-one-out',
    question: { en: 'Which number does NOT belong with the even numbers?', id: 'Angka mana yang BUKAN angka genap?' },
    items: [
      { id: 'two',  emoji: '2️⃣', label: { en: '2', id: '2' } },
      { id: 'four', emoji: '4️⃣', label: { en: '4', id: '4' } },
      { id: 'five', emoji: '5️⃣', label: { en: '5', id: '5' } },
      { id: 'six',  emoji: '6️⃣', label: { en: '6', id: '6' } },
    ],
    correctIds: ['five'],
  },
},
{
  id: 'abstraction-8',
  worldId: 'abstraction',
  number: 8,
  title: { en: 'In the Kitchen', id: 'Di Dapur' },
  mascotMessage: { en: 'Which items belong in a KITCHEN? Tap all of them! 🍳', id: 'Benda apa yang ada di DAPUR? Ketuk semuanya! 🍳' },
  xpReward: 22,
  puzzle: {
    type: 'abstraction',
    subtype: 'category-match',
    question: { en: 'Tap all the things found in a KITCHEN!', id: 'Ketuk semua benda yang ada di DAPUR!' },
    items: [
      { id: 'pan',    emoji: '🍳', label: { en: 'Frying Pan', id: 'Wajan' } },
      { id: 'bed',    emoji: '🛏️', label: { en: 'Bed',        id: 'Kasur' } },
      { id: 'spoon',  emoji: '🥄', label: { en: 'Spoon',      id: 'Sendok' } },
      { id: 'shower', emoji: '🚿', label: { en: 'Shower',     id: 'Shower' } },
    ],
    correctIds: ['pan', 'spoon'],
  },
},
{
  id: 'abstraction-9',
  worldId: 'abstraction',
  number: 9,
  title: { en: 'Four Legs', id: 'Empat Kaki' },
  mascotMessage: { en: 'Dogs, tigers, and elephants all have 4 legs. Which animal is different? 🐾', id: 'Anjing, harimau, dan gajah semuanya punya 4 kaki. Hewan mana yang berbeda? 🐾' },
  xpReward: 25,
  puzzle: {
    type: 'abstraction',
    subtype: 'odd-one-out',
    question: { en: 'Which one does NOT have 4 legs?', id: 'Mana yang TIDAK punya 4 kaki?' },
    items: [
      { id: 'dog',      emoji: '🐕', label: { en: 'Dog',      id: 'Anjing' } },
      { id: 'tiger',    emoji: '🐅', label: { en: 'Tiger',    id: 'Harimau' } },
      { id: 'parrot',   emoji: '🦜', label: { en: 'Parrot',   id: 'Beo' } },
      { id: 'elephant', emoji: '🐘', label: { en: 'Elephant', id: 'Gajah' } },
    ],
    correctIds: ['parrot'],
  },
},
```

---

### 6. Add `AbstractionPuzzleView` to `src/screens/ThinkingLesson.tsx`

**a.** Import `AbstractionPuzzle` in the import line at the top (add alongside existing types).

**b.** Add the view component before `ThinkingLessonScreen`. It handles both subtypes in one component using a local `selectedItems: string[]` state for `category-match`:

```tsx
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

  // Reset local selection when parent clears (wrong answer reset)
  useEffect(() => {
    if (selected === null && !completed) setSelectedItems([])
  }, [selected, completed])

  const isOdd = puzzle.subtype === 'odd-one-out'
  const prompt = isOdd ? oddPrompt : categoryPrompt

  const handleTap = (id: string) => {
    if (completed) return
    if (isOdd) {
      onAnswer(id)
    } else {
      setSelectedItems(prev =>
        prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
      )
    }
  }

  const handleCheck = () => {
    if (completed || selectedItems.length === 0) return
    onAnswer([...selectedItems].sort().join(','))
  }

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="bg-teal-900/40 border border-teal-500/30 rounded-2xl p-5 text-center">
        <p className="text-lg sm:text-xl font-bold text-teal-100">
          {localize(puzzle.question, language as 'en' | 'id')}
        </p>
      </div>

      <p className="text-center text-white/60 text-sm font-bold">{prompt}</p>

      {/* Item grid */}
      <motion.div
        className="grid grid-cols-2 gap-3"
        animate={isCorrect === false ? { x: [-4, 4, -4, 4, 0] } : {}}
        transition={{ duration: 0.3 }}
      >
        {puzzle.items.map((item, i) => {
          const isItemSelected = isOdd
            ? selected === item.id
            : selectedItems.includes(item.id)
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
              <span className={`text-xs font-bold text-center leading-tight ${
                correct ? 'text-green-200' : wrong ? 'text-red-200' : 'text-white/80'
              }`}>
                {localize(item.label, language as 'en' | 'id')}
              </span>
            </motion.button>
          )
        })}
      </motion.div>

      {/* Check button for category-match */}
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
```

**c.** Update `isAnswerCorrect` in `ThinkingLessonScreen` to handle `'abstraction'`:
```ts
if (p.type === 'abstraction') {
  if (p.subtype === 'odd-one-out') return value === p.correctIds[0]
  return value === [...p.correctIds].sort().join(',')
}
```

**d.** Add the render block in the puzzle section (after the `match` block):
```tsx
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
```

---

### 7. Run `bun run build` — must pass before committing

---

## Rollback

Revert the commit. No localStorage schema changes; no migration needed. The `progress.lessons` record only gains new keys when players play abstraction lessons — no existing keys are touched.

---

## Review notes

_(to be filled by reviewer-code)_

---

## Implementation notes

_(to be filled by builder after implementation)_
