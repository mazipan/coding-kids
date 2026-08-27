import type { ThinkingLesson } from '../../types'

export const memoryLessons: ThinkingLesson[] = [
  // ── Memory Maze ──────────────────────────────────────────────
  // Memory Maze focuses on RECALLING associations and positions — NOT predicting what comes next.
  // Blanks are placed at position 0, 1, or mid-sequence (never at the end, which is Patterns World).
  // Match and sort puzzles reinforce associative memory.
  {
    id: 'memory-0',
    worldId: 'memory',
    number: 0,
    title: { en: 'Who Says What?', id: 'Siapa yang Bersuara Apa?' },
    mascotMessage: { en: 'Match each animal to the sound it makes! 🎶', id: 'Cocokkan setiap hewan dengan suaranya! 🎶' },
    xpReward: 10,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'cow', leftEmoji: '🐮', leftLabel: { en: 'Cow', id: 'Sapi' },
          rightId: 'moo', rightEmoji: '💬', rightLabel: { en: 'Moo!', id: 'Muuu!' },
        },
        {
          leftId: 'frog', leftEmoji: '🐸', leftLabel: { en: 'Frog', id: 'Katak' },
          rightId: 'ribbit', rightEmoji: '💬', rightLabel: { en: 'Ribbit!', id: 'Kwek!' },
        },
        {
          leftId: 'lion', leftEmoji: '🦁', leftLabel: { en: 'Lion', id: 'Singa' },
          rightId: 'roar', rightEmoji: '💬', rightLabel: { en: 'Roar!', id: 'Rawr!' },
        },
      ],
    },
  },
  {
    id: 'memory-1',
    worldId: 'memory',
    number: 1,
    title: { en: 'What Was First?', id: 'Apa yang Pertama?' },
    mascotMessage: { en: 'The FIRST sea creature is missing! What was it? 🌊', id: 'Makhluk laut PERTAMA hilang! Apa itu? 🌊' },
    xpReward: 10,
    puzzle: {
      type: 'pattern',
      items: ['?', '🦑', '🐙', '🐠', '🦑', '🐙'],
      blankIndex: 0,
      options: ['🐠', '🦀', '🐡', '🦞'],
      answer: '🐠',
    },
  },
  {
    id: 'memory-2',
    worldId: 'memory',
    number: 2,
    title: { en: 'Second in Line', id: 'Kedua dalam Barisan' },
    mascotMessage: { en: 'These tools keep repeating — but the SECOND one went missing! 🔧', id: 'Alat-alat ini terus berulang — tapi yang KEDUA hilang! 🔧' },
    xpReward: 12,
    puzzle: {
      type: 'pattern',
      items: ['🔨', '?', '🪛', '🔨', '🔧', '🪛'],
      blankIndex: 1,
      options: ['🔧', '🪛', '🔩', '⚙️'],
      answer: '🔧',
    },
  },
  {
    id: 'memory-3',
    worldId: 'memory',
    number: 3,
    title: { en: 'Sport Spot', id: 'Temukan Olahraga' },
    mascotMessage: { en: 'Four sports repeat in a long chain. The SECOND sport is hiding! 🏅', id: 'Empat olahraga berulang dalam rantai panjang. Olahraga KEDUA bersembunyi! 🏅' },
    xpReward: 12,
    puzzle: {
      type: 'pattern',
      items: ['⚽', '?', '🎾', '🏈', '⚽', '🏀', '🎾', '🏈'],
      blankIndex: 1,
      options: ['🏀', '🎾', '🏈', '🏐'],
      answer: '🏀',
    },
  },
  {
    id: 'memory-4',
    worldId: 'memory',
    number: 4,
    title: { en: 'Season Fun', id: 'Kesenangan Musim' },
    mascotMessage: { en: 'Each season has its own activity! Can you remember which goes with which? 🍂', id: 'Setiap musim punya aktivitasnya sendiri! Bisakah kamu mengingat yang mana? 🍂' },
    xpReward: 15,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'winter', leftEmoji: '❄️', leftLabel: { en: 'Winter', id: 'Musim Dingin' },
          rightId: 'ski', rightEmoji: '⛷️', rightLabel: { en: 'Skiing', id: 'Bermain Ski' },
        },
        {
          leftId: 'summer', leftEmoji: '☀️', leftLabel: { en: 'Summer', id: 'Musim Panas' },
          rightId: 'swim', rightEmoji: '🏊', rightLabel: { en: 'Swimming', id: 'Berenang' },
        },
        {
          leftId: 'spring', leftEmoji: '🌸', leftLabel: { en: 'Spring', id: 'Musim Semi' },
          rightId: 'garden', rightEmoji: '🌺', rightLabel: { en: 'Gardening', id: 'Berkebun' },
        },
      ],
    },
  },
  {
    id: 'memory-5',
    worldId: 'memory',
    number: 5,
    title: { en: 'Hidden Feelings', id: 'Perasaan Tersembunyi' },
    mascotMessage: { en: 'Three faces repeat — one is hiding DEEP in the middle! 😊', id: 'Tiga wajah berulang — satu bersembunyi JAUH di tengah! 😊' },
    xpReward: 15,
    puzzle: {
      type: 'pattern',
      items: ['😀', '😢', '😡', '😀', '?', '😡', '😀', '😢', '😡'],
      blankIndex: 4,
      options: ['😢', '😀', '😡', '😲'],
      answer: '😢',
    },
  },
  {
    id: 'memory-6',
    worldId: 'memory',
    number: 6,
    title: { en: 'Tiny to Giant', id: 'Kecil ke Raksasa' },
    mascotMessage: { en: 'Put these animals in order from SMALLEST to BIGGEST! 🐘', id: 'Urutkan hewan-hewan ini dari yang TERKECIL ke yang TERBESAR! 🐘' },
    xpReward: 18,
    puzzle: {
      type: 'sort',
      items: ['🐘', '🐜', '🐄', '🐝', '🐈'],
      answer: ['🐜', '🐝', '🐈', '🐄', '🐘'],
    },
  },
  {
    id: 'memory-7',
    worldId: 'memory',
    number: 7,
    title: { en: 'Where Does It Come From?', id: 'Dari Mana Asalnya?' },
    mascotMessage: { en: 'Match each food to where it actually comes from! 🌾', id: 'Cocokkan setiap makanan dengan asalnya yang sebenarnya! 🌾' },
    xpReward: 20,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'apple', leftEmoji: '🍎', leftLabel: { en: 'Apple', id: 'Apel' },
          rightId: 'tree', rightEmoji: '🌳', rightLabel: { en: 'Grows on a tree', id: 'Tumbuh di pohon' },
        },
        {
          leftId: 'egg', leftEmoji: '🥚', leftLabel: { en: 'Egg', id: 'Telur' },
          rightId: 'chicken', rightEmoji: '🐔', rightLabel: { en: 'Laid by a chicken', id: 'Dari ayam' },
        },
        {
          leftId: 'butter', leftEmoji: '🧈', leftLabel: { en: 'Butter', id: 'Mentega' },
          rightId: 'cow', rightEmoji: '🐄', rightLabel: { en: 'Made from cow milk', id: 'Dari susu sapi' },
        },
        {
          leftId: 'honey', leftEmoji: '🍯', leftLabel: { en: 'Honey', id: 'Madu' },
          rightId: 'bee', rightEmoji: '🐝', rightLabel: { en: 'Made by bees', id: 'Dibuat oleh lebah' },
        },
      ],
    },
  },
  {
    id: 'memory-8',
    worldId: 'memory',
    number: 8,
    title: { en: 'Kitchen Mystery', id: 'Misteri Dapur' },
    mascotMessage: { en: 'Four kitchen items repeat — one near the start went missing! Can you recall it? 🍳', id: 'Empat alat dapur berulang — satu di dekat awal hilang! Bisakah kamu mengingatnya? 🍳' },
    xpReward: 22,
    puzzle: {
      type: 'pattern',
      items: ['🍲', '🥄', '?', '🍴', '🍲', '🥄', '🔪', '🍴'],
      blankIndex: 2,
      options: ['🔪', '🍴', '🥄', '🍳'],
      answer: '🔪',
    },
  },
  {
    id: 'memory-9',
    worldId: 'memory',
    number: 9,
    title: { en: 'Shape Sequence', id: 'Urutan Bentuk' },
    mascotMessage: { en: 'Five shapes repeat in a long chain! The missing one is buried in the middle — stay sharp! 🔶', id: 'Lima bentuk berulang dalam rantai panjang! Yang hilang terkubur di tengah — tetap tajam! 🔶' },
    xpReward: 25,
    puzzle: {
      type: 'pattern',
      items: ['🔺', '🟦', '⭐', '?', '🔵', '🔺', '🟦', '⭐', '🔶', '🔵'],
      blankIndex: 3,
      options: ['🔶', '🔵', '🟦', '🟣'],
      answer: '🔶',
    },
  },
]
