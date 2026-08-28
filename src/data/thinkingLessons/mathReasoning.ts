import type { ThinkingLesson } from '../../types'

export const mathReasoningLessons: ThinkingLesson[] = [
  // ── Penalaran Matematika (Math Reasoning) ──────────────────────────────

  {
    id: 'math_reasoning-0',
    worldId: 'math_reasoning',
    number: 0,
    title: { en: 'Which Group is Bigger?', id: 'Kelompok Mana yang Lebih Besar?' },
    mascotMessage: {
      en: 'Math reasoning means thinking about WHY numbers work. Let\'s start by finding the bigger group! 🔢',
      id: 'Penalaran matematika artinya berpikir MENGAPA angka bekerja. Mari kita mulai dengan menemukan kelompok yang lebih besar! 🔢',
    },
    xpReward: 10,
    tutorial: {
      title: { en: 'Welcome to Math Reasoning!', id: 'Selamat Datang di Penalaran Matematika!' },
      body: {
        en: 'Math reasoning is about thinking through number problems using clues. We don\'t just calculate — we think about what the numbers mean!',
        id: 'Penalaran matematika adalah tentang memikirkan soal angka menggunakan petunjuk. Kita tidak hanya menghitung — kita berpikir tentang apa arti angka-angka itu!',
      },
      example: {
        en: 'Example: "Which numbers are bigger than 5?" Look at each number and ask: is it MORE than 5?',
        id: 'Contoh: "Angka mana yang lebih besar dari 5?" Lihat setiap angka dan tanya: apakah lebih dari 5?',
      },
    },
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: { en: 'Which numbers are bigger than 5?', id: 'Angka mana yang lebih besar dari 5?' },
      items: [
        { id: 'n3', emoji: '3️⃣', label: { en: '3', id: '3' } },
        { id: 'n7', emoji: '7️⃣', label: { en: '7', id: '7' } },
        { id: 'n2', emoji: '2️⃣', label: { en: '2', id: '2' } },
        { id: 'n9', emoji: '9️⃣', label: { en: '9', id: '9' } },
        { id: 'n4', emoji: '4️⃣', label: { en: '4', id: '4' } },
        { id: 'n6', emoji: '6️⃣', label: { en: '6', id: '6' } },
      ],
      correctIds: ['n7', 'n9', 'n6'],
    },
  },

  {
    id: 'math_reasoning-1',
    worldId: 'math_reasoning',
    number: 1,
    title: { en: 'Number Bonds to 10', id: 'Pasangan Angka untuk 10' },
    mascotMessage: {
      en: 'Number bonds are pairs of numbers that add up to 10. Can you match them all? 🤝',
      id: 'Pasangan angka adalah sepasang angka yang jumlahnya 10. Bisakah kamu mencocokkan semuanya? 🤝',
    },
    xpReward: 10,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'l1', leftEmoji: '1️⃣', leftLabel: { en: '1', id: '1' },
          rightId: 'r9', rightEmoji: '9️⃣', rightLabel: { en: '9', id: '9' },
        },
        {
          leftId: 'l3', leftEmoji: '3️⃣', leftLabel: { en: '3', id: '3' },
          rightId: 'r7', rightEmoji: '7️⃣', rightLabel: { en: '7', id: '7' },
        },
        {
          leftId: 'l4', leftEmoji: '4️⃣', leftLabel: { en: '4', id: '4' },
          rightId: 'r6', rightEmoji: '6️⃣', rightLabel: { en: '6', id: '6' },
        },
        {
          leftId: 'l2', leftEmoji: '2️⃣', leftLabel: { en: '2', id: '2' },
          rightId: 'r8', rightEmoji: '8️⃣', rightLabel: { en: '8', id: '8' },
        },
      ],
    },
  },

  {
    id: 'math_reasoning-2',
    worldId: 'math_reasoning',
    number: 2,
    title: { en: 'Doubling Numbers', id: 'Melipatgandakan Angka' },
    mascotMessage: {
      en: 'Doubling means adding a number to itself! Double 3 = 3 + 3 = 6. Easy! 🪞',
      id: 'Melipatgandakan artinya menjumlahkan angka dengan dirinya sendiri! Dua kali 3 = 3 + 3 = 6. Mudah! 🪞',
    },
    xpReward: 15,
    puzzle: {
      type: 'math',
      question: { en: 'What is double 7?', id: 'Berapa dua kali lipat 7?' },
      visual: '7️⃣ + 7️⃣ = ?',
      options: ['12', '13', '14', '16'],
      answer: '14',
    },
  },

  {
    id: 'math_reasoning-3',
    worldId: 'math_reasoning',
    number: 3,
    title: { en: 'Find the Missing Number', id: 'Temukan Angka yang Hilang' },
    mascotMessage: {
      en: 'Something is missing from this equation! Think about what number makes it true. 🔍',
      id: 'Ada sesuatu yang hilang dari persamaan ini! Pikirkan angka apa yang membuatnya benar. 🔍',
    },
    xpReward: 15,
    tutorial: {
      title: { en: 'Missing Number Problems', id: 'Soal Angka yang Hilang' },
      body: {
        en: 'When a number is missing from an equation, we ask: "What number makes this balanced?" Try each option and check!',
        id: 'Ketika sebuah angka hilang dari persamaan, kita bertanya: "Angka apa yang membuat ini seimbang?" Coba setiap pilihan dan cek!',
      },
      example: {
        en: 'Example: 5 + ? = 8. Try 2: 5+2=7, not yet. Try 3: 5+3=8, that\'s it!',
        id: 'Contoh: 5 + ? = 8. Coba 2: 5+2=7, belum pas. Coba 3: 5+3=8, itu dia!',
      },
    },
    puzzle: {
      type: 'fill-in',
      question: { en: '6 + ___ = 11', id: '6 + ___ = 11' },
      visual: '6️⃣ + ❓ = 1️⃣1️⃣',
      answer: '5',
      inputType: 'numeric',
    },
  },

  {
    id: 'math_reasoning-4',
    worldId: 'math_reasoning',
    number: 4,
    title: { en: 'Order These Numbers', id: 'Urutkan Angka-angka Ini' },
    mascotMessage: {
      en: 'Tap the numbers from SMALLEST to LARGEST. Think carefully before you tap! 📊',
      id: 'Ketuk angka-angka dari yang TERKECIL ke TERBESAR. Pikirkan dengan hati-hati sebelum mengetuk! 📊',
    },
    xpReward: 15,
    puzzle: {
      type: 'sort',
      items: ['15', '3', '8', '21', '7'],
      answer: ['3', '7', '8', '15', '21'],
    },
  },

  {
    id: 'math_reasoning-5',
    worldId: 'math_reasoning',
    number: 5,
    title: { en: 'Number Story', id: 'Cerita Angka' },
    mascotMessage: {
      en: 'Read the story carefully — the numbers are hiding inside! 📖',
      id: 'Baca ceritanya dengan hati-hati — angka-angka tersembunyi di dalamnya! 📖',
    },
    xpReward: 20,
    puzzle: {
      type: 'math',
      question: {
        en: 'Budi has 8 🍎. He eats 3, then his mom gives him 2 more. How many does he have?',
        id: 'Budi punya 8 🍎. Dia makan 3, lalu ibunya memberi 2 lagi. Berapa yang dia punya?',
      },
      options: ['5', '6', '7', '9'],
      answer: '7',
    },
  },

  {
    id: 'math_reasoning-6',
    worldId: 'math_reasoning',
    number: 6,
    title: { en: 'Equal Groups', id: 'Kelompok yang Sama' },
    mascotMessage: {
      en: 'When groups are equal, we can multiply! Count the groups and how many are in each. 📦',
      id: 'Ketika kelompok sama rata, kita bisa mengalikan! Hitung kelompoknya dan berapa yang ada di masing-masing. 📦',
    },
    xpReward: 20,
    tutorial: {
      title: { en: 'Multiplication = Equal Groups', id: 'Perkalian = Kelompok yang Sama' },
      body: {
        en: 'Multiplication is just a fast way to count equal groups! If you have 3 bags with 4 oranges each, that\'s 3 × 4 = 12 oranges total.',
        id: 'Perkalian hanyalah cara cepat menghitung kelompok yang sama! Jika kamu punya 3 tas dengan 4 jeruk masing-masing, itu 3 × 4 = 12 jeruk total.',
      },
      example: {
        en: '2 boxes × 5 🍪 each = 10 cookies total',
        id: '2 kotak × 5 🍪 masing-masing = 10 kue total',
      },
    },
    puzzle: {
      type: 'math',
      question: {
        en: '4 baskets with 3 🍊 each. How many oranges total?',
        id: '4 keranjang dengan 3 🍊 masing-masing. Berapa total jeruk?',
      },
      visual: '🧺🧺🧺🧺',
      options: ['10', '12', '14', '16'],
      answer: '12',
    },
  },

  {
    id: 'math_reasoning-7',
    worldId: 'math_reasoning',
    number: 7,
    title: { en: 'Half and Whole', id: 'Setengah dan Seluruhnya' },
    mascotMessage: {
      en: 'Half means dividing into 2 equal parts. Half of 10 is 5 because 5 + 5 = 10! ✂️',
      id: 'Setengah artinya membagi menjadi 2 bagian yang sama. Setengah dari 10 adalah 5 karena 5 + 5 = 10! ✂️',
    },
    xpReward: 20,
    puzzle: {
      type: 'fill-in',
      question: { en: 'Half of 18 is ___', id: 'Setengah dari 18 adalah ___' },
      visual: '🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕',
      answer: '9',
      inputType: 'numeric',
    },
  },

  {
    id: 'math_reasoning-8',
    worldId: 'math_reasoning',
    number: 8,
    title: { en: 'Double Clue Hunt', id: 'Berburu Dua Clue' },
    mascotMessage: {
      en: 'You need to find numbers that satisfy TWO rules at the same time — even AND greater than 4! 🎯',
      id: 'Kamu harus menemukan angka yang memenuhi DUA aturan sekaligus — genap DAN lebih dari 4! 🎯',
    },
    xpReward: 20,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Tap ALL numbers that are EVEN and GREATER THAN 4!',
        id: 'Ketuk SEMUA angka yang GENAP dan LEBIH DARI 4!',
      },
      items: [
        { id: 'n1', emoji: '1️⃣', label: { en: '1', id: '1' } },
        { id: 'n3', emoji: '3️⃣', label: { en: '3', id: '3' } },
        { id: 'n6', emoji: '6️⃣', label: { en: '6', id: '6' } },
        { id: 'n8', emoji: '8️⃣', label: { en: '8', id: '8' } },
        { id: 'n5', emoji: '5️⃣', label: { en: '5', id: '5' } },
        { id: 'n2', emoji: '2️⃣', label: { en: '2', id: '2' } },
      ],
      correctIds: ['n6', 'n8'],
    },
  },

  {
    id: 'math_reasoning-9',
    worldId: 'math_reasoning',
    number: 9,
    title: { en: 'Apple Boxes', id: 'Kotak Apel' },
    mascotMessage: {
      en: 'This one needs TWO steps — multiply first, then subtract. Plan before you calculate! 🍎',
      id: 'Yang ini perlu DUA langkah — kalikan dulu, lalu kurangi. Rencanakan sebelum kamu hitung! 🍎',
    },
    xpReward: 30,
    puzzle: {
      type: 'math',
      question: {
        en: 'Layla has 4 boxes. Each box holds 6 apples. She gives away 5 apples. How many apples does she have left?',
        id: 'Layla punya 4 kotak. Setiap kotak berisi 6 apel. Dia memberikan 5 apel. Berapa apel yang tersisa?',
      },
      visual: '🍎',
      options: ['14', '19', '24', '29'],
      answer: '19',
    },
  },
]
