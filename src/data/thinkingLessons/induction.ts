import type { ThinkingLesson } from '../../types'

export const inductionLessons: ThinkingLesson[] = [
  // ── Inductive Reasoning (Rule Finder) ─────────────────────────────────

  {
    id: 'induction-0',
    worldId: 'induction',
    number: 0,
    title: { en: 'Spot the Even Numbers', id: 'Temukan Bilangan Genap' },
    mascotMessage: {
      en: 'Look at these numbers: 2, 4, 6, 8. They all share a secret rule! Can you find which others belong? 🔬',
      id: 'Lihat angka-angka ini: 2, 4, 6, 8. Mereka semua punya aturan rahasia! Bisakah kamu menemukan yang lain? 🔬',
    },
    xpReward: 10,
    tutorial: {
      title: { en: 'What is Inductive Reasoning?', id: 'Apa itu Penalaran Induktif?' },
      body: {
        en: 'Inductive reasoning means: look at several examples, find what they all share, form a rule, then apply it to new cases. You go from specific examples to a general rule!',
        id: 'Penalaran induktif berarti: lihat beberapa contoh, temukan kesamaannya, bentuk aturan, lalu terapkan ke kasus baru. Kamu bergerak dari contoh spesifik ke aturan umum!',
      },
      example: {
        en: 'Examples: 2, 4, 6, 8. Rule: "These are even numbers." New case: Is 10 even? Yes, it fits the rule!',
        id: 'Contoh: 2, 4, 6, 8. Aturan: "Ini bilangan genap." Kasus baru: Apakah 10 genap? Ya, cocok dengan aturannya!',
      },
    },
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: '2, 4, 6, 8 all follow the same rule. Which of these also follow it?',
        id: '2, 4, 6, 8 semua mengikuti aturan yang sama. Mana yang juga mengikutinya?',
      },
      items: [
        { id: 'n10', emoji: '🔟', label: { en: '10', id: '10' } },
        { id: 'n11', emoji: '1️⃣', label: { en: '11', id: '11' } },
        { id: 'n12', emoji: '2️⃣', label: { en: '12', id: '12' } },
        { id: 'n13', emoji: '3️⃣', label: { en: '13', id: '13' } },
        { id: 'n14', emoji: '4️⃣', label: { en: '14', id: '14' } },
        { id: 'n15', emoji: '5️⃣', label: { en: '15', id: '15' } },
      ],
      correctIds: ['n10', 'n12', 'n14'],
    },
  },

  {
    id: 'induction-1',
    worldId: 'induction',
    number: 1,
    title: { en: 'Hot Things', id: 'Benda Panas' },
    mascotMessage: {
      en: 'Fire, the Sun, and chilli are all HOT. Look for the same quality in the other options! 🌶️',
      id: 'Api, Matahari, dan cabai semuanya PANAS. Carilah kualitas yang sama pada pilihan lainnya! 🌶️',
    },
    xpReward: 10,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: '🔥 Fire, ☀️ Sun, 🌶️ Chilli are all HOT. Which of these are also hot?',
        id: '🔥 Api, ☀️ Matahari, 🌶️ Cabai semuanya PANAS. Mana yang juga panas?',
      },
      items: [
        { id: 'ice', emoji: '🧊', label: { en: 'Ice', id: 'Es' } },
        { id: 'steam', emoji: '♨️', label: { en: 'Steam', id: 'Uap' } },
        { id: 'candle', emoji: '🕯️', label: { en: 'Candle flame', id: 'Nyala lilin' } },
        { id: 'snow', emoji: '❄️', label: { en: 'Snow', id: 'Salju' } },
        { id: 'hottea', emoji: '🍵', label: { en: 'Hot tea', id: 'Teh panas' } },
        { id: 'wind', emoji: '🌬️', label: { en: 'Cold wind', id: 'Angin dingin' } },
      ],
      correctIds: ['steam', 'candle', 'hottea'],
    },
  },

  {
    id: 'induction-2',
    worldId: 'induction',
    number: 2,
    title: { en: 'Shape Sides Rule', id: 'Aturan Sisi Bentuk' },
    mascotMessage: {
      en: 'Triangle = 3, Square = 4, Pentagon = 5... Do you see the rule hiding in the names? 🔺',
      id: 'Segitiga = 3, Persegi = 4, Pentagon = 5... Apakah kamu melihat aturan yang tersembunyi di nama-namanya? 🔺',
    },
    xpReward: 15,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'Triangle = 3 sides, Square = 4 sides, Pentagon = 5 sides. Hexagon = ___ sides',
        id: 'Segitiga = 3 sisi, Persegi = 4 sisi, Pentagon = 5 sisi. Heksagon = ___ sisi',
      },
      visual: '🔺🟥⬠ → ❓',
      answer: '6',
      inputType: 'numeric',
    },
  },

  {
    id: 'induction-3',
    worldId: 'induction',
    number: 3,
    title: { en: "Hunter's Rule", id: 'Aturan Pemangsa' },
    mascotMessage: {
      en: 'A lion eats a zebra. A wolf eats a deer. A shark eats a fish. Three examples — what general rule do they all share? 🦁',
      id: 'Singa memakan zebra. Serigala memakan rusa. Hiu memakan ikan. Tiga contoh — aturan umum apa yang mereka miliki bersama? 🦁',
    },
    xpReward: 15,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'You observe: a lion eats a zebra, a wolf eats a deer, a shark eats a fish. Using induction, which rule fits ALL these examples?',
        id: 'Kamu mengamati: singa makan zebra, serigala makan rusa, hiu makan ikan. Menggunakan induksi, aturan mana yang cocok untuk SEMUA contoh ini?',
      },
      options: [
        { id: 'predators', emoji: '🦁', label: { en: 'Many large animals hunt and eat other animals',  id: 'Banyak hewan besar berburu dan memakan hewan lain' } },
        { id: 'only-lion', emoji: '❌', label: { en: 'Only lions eat other animals',                    id: 'Hanya singa yang memakan hewan lain' } },
        { id: 'fish-only', emoji: '❌', label: { en: 'Animals only ever eat fish',                      id: 'Hewan hanya makan ikan' } },
        { id: 'all-plants',emoji: '🌿', label: { en: 'All animals prefer to eat plants',               id: 'Semua hewan lebih suka makan tumbuhan' } },
      ],
      answerId: 'predators',
    },
  },

  {
    id: 'induction-4',
    worldId: 'induction',
    number: 4,
    title: { en: 'Break the Rule', id: 'Langgar Aturan' },
    mascotMessage: {
      en: 'Most of these animals CAN fly — but one sneaked in that cannot! Find the exception! 🕵️',
      id: 'Sebagian besar hewan ini BISA terbang — tapi ada satu yang tidak bisa! Temukan pengecualiannya! 🕵️',
    },
    xpReward: 15,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: {
        en: 'Rule: all these animals should be able to fly. Which one breaks the rule?',
        id: 'Aturan: semua hewan ini seharusnya bisa terbang. Mana yang melanggar aturan?',
      },
      items: [
        { id: 'eagle',     emoji: '🦅', label: { en: 'Eagle',     id: 'Elang' } },
        { id: 'butterfly', emoji: '🦋', label: { en: 'Butterfly', id: 'Kupu-kupu' } },
        { id: 'penguin',   emoji: '🐧', label: { en: 'Penguin',   id: 'Pinguin' } },
        { id: 'bee',       emoji: '🐝', label: { en: 'Bee',       id: 'Lebah' } },
      ],
      correctIds: ['penguin'],
    },
  },

  {
    id: 'induction-5',
    worldId: 'induction',
    number: 5,
    title: { en: 'The Melting Rule', id: 'Aturan Pencairan' },
    mascotMessage: {
      en: 'Butter melts in the sun. Chocolate melts in the sun. Ice melts in the sun. Three examples — what rule connects them all? ☀️',
      id: 'Mentega mencair di bawah matahari. Coklat mencair di bawah matahari. Es mencair di bawah matahari. Tiga contoh — aturan apa yang menghubungkannya? ☀️',
    },
    xpReward: 20,
    tutorial: {
      title: { en: 'Forming a Rule from Examples', id: 'Membentuk Aturan dari Contoh' },
      body: {
        en: 'When the same thing happens every time you observe a pattern, you can form a general rule. The rule should cover ALL the examples you saw.',
        id: 'Ketika hal yang sama terjadi setiap kali kamu mengamati pola, kamu bisa membentuk aturan umum. Aturan harus mencakup SEMUA contoh yang kamu lihat.',
      },
      example: {
        en: 'Observation: 🍎 falls down, 🪨 falls down, 🍂 falls down. Rule: "Things fall down when dropped." This covers all examples!',
        id: 'Pengamatan: 🍎 jatuh ke bawah, 🪨 jatuh ke bawah, 🍂 jatuh ke bawah. Aturan: "Benda jatuh ke bawah ketika dijatuhkan." Ini mencakup semua contoh!',
      },
    },
    puzzle: {
      type: 'if-then',
      condition: {
        en: '☀️ Butter in the sun melts · ☀️ Chocolate in the sun melts · ☀️ Ice in the sun melts. Which rule fits ALL observations?',
        id: '☀️ Mentega di bawah matahari mencair · ☀️ Coklat di bawah matahari mencair · ☀️ Es di bawah matahari mencair. Aturan mana yang cocok untuk SEMUA pengamatan?',
      },
      options: [
        { id: 'heat-melts',  emoji: '🌡️', label: { en: 'Heat from the sun can melt certain solid things',  id: 'Panas dari matahari bisa mencairkan benda padat tertentu' } },
        { id: 'sun-all',     emoji: '❌',  label: { en: 'The sun melts EVERYTHING it touches',              id: 'Matahari mencairkan SEMUA yang disentuhnya' } },
        { id: 'only-ice',    emoji: '🧊',  label: { en: 'Only ice can melt',                                id: 'Hanya es yang bisa mencair' } },
        { id: 'night-melts', emoji: '🌙',  label: { en: 'Melting only happens at night',                    id: 'Pencairan hanya terjadi di malam hari' } },
      ],
      answerId: 'heat-melts',
    },
  },

  {
    id: 'induction-6',
    worldId: 'induction',
    number: 6,
    title: { en: 'Sweet Flowers', id: 'Bunga Harum' },
    mascotMessage: {
      en: 'You smell roses — sweet! Jasmine — sweet! Lavender — sweet! What general rule can you form? 🌸',
      id: 'Kamu mencium mawar — harum! Melati — harum! Lavender — harum! Aturan umum apa yang bisa kamu buat? 🌸',
    },
    xpReward: 20,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'You observe: roses smell sweet, jasmine smells sweet, lavender smells sweet. Based on these examples, what general rule can you form by induction?',
        id: 'Kamu mengamati: mawar harum, melati harum, lavender harum. Berdasarkan contoh-contoh ini, aturan umum apa yang bisa kamu bentuk secara induktif?',
      },
      options: [
        { id: 'many',  emoji: '🌸', label: { en: 'Many flowers have a sweet smell',          id: 'Banyak bunga memiliki aroma harum' } },
        { id: 'all',   emoji: '🌺', label: { en: 'ALL things in nature smell sweet',          id: 'SEMUA benda di alam berbau harum' } },
        { id: 'never', emoji: '🚫', label: { en: 'Flowers never smell sweet',                 id: 'Bunga tidak pernah berbau harum' } },
        { id: 'only',  emoji: '🌻', label: { en: 'Only yellow flowers smell sweet',           id: 'Hanya bunga kuning yang berbau harum' } },
      ],
      answerId: 'many',
    },
  },

  {
    id: 'induction-7',
    worldId: 'induction',
    number: 7,
    title: { en: 'Reasonable Conclusion?', id: 'Kesimpulan yang Masuk Akal?' },
    mascotMessage: {
      en: 'You\'ve observed something 6 times and it\'s ALWAYS the same. Can you make a general rule? 🌅',
      id: 'Kamu sudah mengamati sesuatu 6 kali dan SELALU sama. Bisakah kamu membuat aturan umum? 🌅',
    },
    xpReward: 20,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'You observe 6 sunsets: Monday west, Tuesday west, Wednesday west, Thursday west, Friday west, Saturday west. Is it reasonable to conclude "The sun sets in the west"?',
        id: 'Kamu mengamati 6 matahari terbenam: Senin barat, Selasa barat, Rabu barat, Kamis barat, Jumat barat, Sabtu barat. Apakah masuk akal menyimpulkan "Matahari terbenam di barat"?',
      },
      answer: true,
    },
  },

  {
    id: 'induction-8',
    worldId: 'induction',
    number: 8,
    title: { en: 'Match the Rule', id: 'Cocokkan Aturannya' },
    mascotMessage: {
      en: 'Each set of examples follows a rule. Can you match every example group to its correct rule? 🎯',
      id: 'Setiap kumpulan contoh mengikuti sebuah aturan. Bisakah kamu mencocokkan setiap kelompok contoh dengan aturan yang benar? 🎯',
    },
    xpReward: 20,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'ex-even', leftEmoji: '🔢', leftLabel: { en: '2, 4, 6, 8...', id: '2, 4, 6, 8...' },
          rightId: 'rule-even', rightEmoji: '✌️', rightLabel: { en: 'Even numbers', id: 'Bilangan genap' },
        },
        {
          leftId: 'ex-red', leftEmoji: '🍎', leftLabel: { en: '🍎 🍓 🍒 🌹', id: '🍎 🍓 🍒 🌹' },
          rightId: 'rule-red', rightEmoji: '❤️', rightLabel: { en: 'Red things', id: 'Benda merah' },
        },
        {
          leftId: 'ex-3', leftEmoji: '3️⃣', leftLabel: { en: '3, 6, 9, 12...', id: '3, 6, 9, 12...' },
          rightId: 'rule-3', rightEmoji: '✖️', rightLabel: { en: 'Multiples of 3', id: 'Kelipatan 3' },
        },
        {
          leftId: 'ex-wild', leftEmoji: '🦁', leftLabel: { en: '🦁 🐯 🐺 🦊', id: '🦁 🐯 🐺 🦊' },
          rightId: 'rule-wild', rightEmoji: '🌿', rightLabel: { en: 'Wild animals', id: 'Hewan liar' },
        },
      ],
    },
  },

  {
    id: 'induction-9',
    worldId: 'induction',
    number: 9,
    title: { en: 'Squares Pattern', id: 'Pola Kuadrat' },
    mascotMessage: {
      en: '1×1=1, 2×2=4, 3×3=9, 4×4=16... There\'s a pattern here. Can you extend the rule? 🧮',
      id: '1×1=1, 2×2=4, 3×3=9, 4×4=16... Ada pola di sini. Bisakah kamu memperluas aturannya? 🧮',
    },
    xpReward: 30,
    puzzle: {
      type: 'math',
      question: {
        en: '1×1=1, 2×2=4, 3×3=9, 4×4=16. Using the same rule, what is 5×5?',
        id: '1×1=1, 2×2=4, 3×3=9, 4×4=16. Menggunakan aturan yang sama, berapa 5×5?',
      },
      visual: '1️⃣ 4️⃣ 9️⃣ 1️⃣6️⃣ ❓',
      options: ['20', '25', '30', '35'],
      answer: '25',
    },
  },
]
