import type { ThinkingLesson } from '../../types'

export const numbersLessonsAdvanced: ThinkingLesson[] = [
  // ── Number Ninja · tier two ──────────────────────────────────
  // Tier one: single-step counting rules. Tier two: two-operation rules, alternating
  // rules, primes, powers, negative steps and jumping straight to the 20th term.
  {
    id: 'numbers-10',
    worldId: 'numbers',
    number: 10,
    title: { en: 'Double Then Take One', id: 'Gandakan Lalu Kurangi Satu' },
    mascotMessage: {
      en: 'One jump is not enough to explain this. Try TWO things happening each step. ⚡',
      id: 'Satu lompatan tidak cukup menjelaskan ini. Coba DUA hal yang terjadi setiap langkah. ⚡',
    },
    xpReward: 28,
    puzzle: {
      type: 'math',
      question: { en: '3, 5, 9, 17, 33, ___?', id: '3, 5, 9, 17, 33, ___?' },
      options: ['65', '49', '66', '64'],
      answer: '65',
    },
  },
  {
    id: 'numbers-11',
    worldId: 'numbers',
    number: 11,
    title: { en: 'Two Rules Taking Turns', id: 'Dua Aturan Bergantian' },
    mascotMessage: {
      en: 'No single rule fits every jump. What if the sequence uses one rule, then a different one, then back again? 🔁',
      id: 'Tidak ada satu aturan yang cocok untuk semua lompatan. Bagaimana kalau barisannya memakai satu aturan, lalu aturan lain, lalu kembali lagi? 🔁',
    },
    xpReward: 30,
    puzzle: {
      type: 'math',
      question: { en: '1, 4, 2, 8, 4, 16, 8, ___?', id: '1, 4, 2, 8, 4, 16, 8, ___?' },
      options: ['32', '16', '24', '12'],
      answer: '32',
    },
  },
  {
    id: 'numbers-12',
    worldId: 'numbers',
    number: 12,
    title: { en: 'The Odd One Is Not Prime', id: 'Yang Ganjil Bukan Prima' },
    mascotMessage: {
      en: 'A prime number can only be divided by 1 and by itself. Test each one! 🔢',
      id: 'Bilangan prima hanya bisa dibagi 1 dan dirinya sendiri. Uji satu per satu! 🔢',
    },
    xpReward: 32,
    puzzle: {
      type: 'math',
      question: {
        en: 'Which of these numbers is NOT prime?',
        id: 'Angka mana yang BUKAN bilangan prima?',
      },
      options: ['9', '7', '13', '19'],
      answer: '9',
    },
  },
  {
    id: 'numbers-13',
    worldId: 'numbers',
    number: 13,
    title: { en: 'The Sequence Detective', id: 'Detektif Barisan' },
    mascotMessage: {
      en: 'Guess a rule from the first jump. Then TEST it on the next jump before you trust it! 🔍',
      id: 'Tebak aturannya dari lompatan pertama. Lalu UJI pada lompatan berikutnya sebelum mempercayainya! 🔍',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'Finding a rule is really three jobs: guess it, test it, then use it. This puzzle asks you to do all three, one after the other.',
        id: 'Menemukan aturan sebenarnya tiga tugas: menebak, menguji, lalu menggunakannya. Teka-teki ini memintamu melakukan ketiganya, satu per satu.',
      },
      example: {
        en: 'Every step must be right, or the chain restarts from the beginning.',
        id: 'Setiap langkah harus benar, atau rantainya diulang dari awal.',
      },
    },
    xpReward: 34,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'A sequence goes: 5, 11, 23, 47, ...',
        id: 'Sebuah barisan berbunyi: 5, 11, 23, 47, ...',
      },
      steps: [
        {
          id: 'guess',
          prompt: { en: 'How do you get from 5 to 11?', id: 'Bagaimana caranya dari 5 ke 11?' },
          options: [
            { id: 'doubleplus', emoji: '⚡', label: { en: 'Double it, then add 1', id: 'Gandakan, lalu tambah 1' } },
            { id: 'addsix', emoji: '➕', label: { en: 'Add 6', id: 'Tambah 6' } },
            { id: 'double', emoji: '✖️', label: { en: 'Just double it', id: 'Cukup digandakan' } },
            { id: 'addfive', emoji: '➕', label: { en: 'Add 5, then add 1', id: 'Tambah 5, lalu tambah 1' } },
          ],
          answerId: 'doubleplus',
        },
        {
          id: 'test',
          prompt: {
            en: 'Does that same rule take you from 11 to 23?',
            id: 'Apakah aturan yang sama membawamu dari 11 ke 23?',
          },
          options: [
            { id: 'yes', emoji: '✅', label: { en: 'Yes — 11 doubled is 22, plus 1 is 23', id: 'Ya — 11 digandakan jadi 22, tambah 1 jadi 23' } },
            { id: 'no', emoji: '❌', label: { en: 'No — the rule breaks here', id: 'Tidak — aturannya rusak di sini' } },
            { id: 'addsix', emoji: '➕', label: { en: 'No, this jump is just adding 12', id: 'Tidak, lompatan ini hanya menambah 12' } },
            { id: 'maybe', emoji: '🤷', label: { en: 'It is impossible to tell', id: 'Tidak mungkin ditentukan' } },
          ],
          answerId: 'yes',
        },
        {
          id: 'use',
          prompt: { en: 'So what comes after 47?', id: 'Jadi apa yang muncul setelah 47?' },
          options: [
            { id: 'ninetyfive', emoji: '🎯', label: { en: '95', id: '95' } },
            { id: 'ninetyfour', emoji: '🎯', label: { en: '94', id: '94' } },
            { id: 'ninetyone', emoji: '🎯', label: { en: '91', id: '91' } },
            { id: 'fiftythree', emoji: '🎯', label: { en: '53', id: '53' } },
          ],
          answerId: 'ninetyfive',
        },
      ],
    },
  },
  {
    id: 'numbers-14',
    worldId: 'numbers',
    number: 14,
    title: { en: 'Powers in Order', id: 'Urutkan Perpangkatan' },
    mascotMessage: {
      en: 'A small number up high can beat a big number down low. Work out what each one is really worth! 🥷',
      id: 'Angka kecil di atas bisa mengalahkan angka besar di bawah. Hitung nilai sebenarnya dari masing-masing! 🥷',
    },
    xpReward: 35,
    puzzle: {
      type: 'sort',
      items: ['5²', '2³', '3³', '3²', '2⁴'],
      answer: ['2³', '3²', '2⁴', '5²', '3³'],
    },
  },
  {
    id: 'numbers-15',
    worldId: 'numbers',
    number: 15,
    title: { en: 'Past Zero', id: 'Melewati Nol' },
    mascotMessage: {
      en: 'The steps are the same size all the way down — even when you go below zero. 🥶',
      id: 'Ukuran langkahnya sama sampai ke bawah — bahkan ketika melewati nol. 🥶',
    },
    xpReward: 36,
    puzzle: {
      type: 'math',
      question: { en: '20, 13, 6, ___, -8?', id: '20, 13, 6, ___, -8?' },
      options: ['-1', '0', '1', '-2'],
      answer: '-1',
    },
  },
  {
    id: 'numbers-16',
    worldId: 'numbers',
    number: 16,
    title: { en: 'Jump to the 20th', id: 'Lompat ke Suku ke-20' },
    mascotMessage: {
      en: 'Do not write out twenty numbers. How many jumps happen between the 1st and the 20th? 🎯',
      id: 'Jangan tulis dua puluh angka. Berapa lompatan yang terjadi antara suku ke-1 dan ke-20? 🎯',
    },
    xpReward: 38,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'In the sequence 4, 7, 10, 13, ... what is the 20th number?',
        id: 'Dalam barisan 4, 7, 10, 13, ... berapa angka ke-20?',
      },
      answer: '61',
      inputType: 'numeric',
    },
  },
  {
    id: 'numbers-17',
    worldId: 'numbers',
    number: 17,
    title: { en: 'The Doubling Purse', id: 'Dompet yang Menggandakan' },
    mascotMessage: {
      en: 'Doubling starts small and gets scary fast. Work out one day, then add up all the days. 🪙',
      id: 'Penggandaan dimulai kecil dan cepat sekali membesar. Hitung satu hari dulu, lalu jumlahkan semua harinya. 🪙',
    },
    xpReward: 38,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'On day 1 a magic purse gives you 1 coin. Every day after that it gives you double what it gave the day before.',
        id: 'Pada hari 1 sebuah dompet ajaib memberimu 1 koin. Setiap hari berikutnya ia memberi dua kali lipat dari hari sebelumnya.',
      },
      visual: '🪙',
      steps: [
        {
          id: 'day5',
          prompt: { en: 'How many coins does it give you on day 5?', id: 'Berapa koin yang diberikannya pada hari ke-5?' },
          options: [
            { id: 'sixteen', emoji: '🪙', label: { en: '16 coins', id: '16 koin' } },
            { id: 'ten', emoji: '🪙', label: { en: '10 coins', id: '10 koin' } },
            { id: 'thirtytwo', emoji: '🪙', label: { en: '32 coins', id: '32 koin' } },
            { id: 'eight', emoji: '🪙', label: { en: '8 coins', id: '8 koin' } },
          ],
          answerId: 'sixteen',
        },
        {
          id: 'total',
          prompt: {
            en: 'How many coins do you have in total after those 5 days?',
            id: 'Berapa total koin yang kamu punya setelah 5 hari itu?',
          },
          options: [
            { id: 'thirtyone', emoji: '💰', label: { en: '31 coins', id: '31 koin' } },
            { id: 'thirtytwo', emoji: '💰', label: { en: '32 coins', id: '32 koin' } },
            { id: 'thirty', emoji: '💰', label: { en: '30 coins', id: '30 koin' } },
            { id: 'sixteen', emoji: '💰', label: { en: '16 coins', id: '16 koin' } },
          ],
          answerId: 'thirtyone',
        },
      ],
    },
  },
  {
    id: 'numbers-18',
    worldId: 'numbers',
    number: 18,
    title: { en: 'Down, Up, Down, Up', id: 'Turun, Naik, Turun, Naik' },
    mascotMessage: {
      en: 'Every second jump goes the other way. Find BOTH jump sizes before you answer. ↕️',
      id: 'Setiap lompatan kedua berbalik arah. Temukan KEDUA ukuran lompatannya sebelum menjawab. ↕️',
    },
    xpReward: 38,
    puzzle: {
      type: 'math',
      question: { en: '50, 42, 45, 37, 40, 32, ___?', id: '50, 42, 45, 37, 40, 32, ___?' },
      options: ['35', '24', '29', '40'],
      answer: '35',
    },
  },
  {
    id: 'numbers-19',
    worldId: 'numbers',
    number: 19,
    title: { en: 'Which Step Passes 200?', id: 'Langkah Mana yang Melewati 200?' },
    mascotMessage: {
      en: 'Count the steps, not the numbers. The first number, 3, is step 1. 🚀',
      id: 'Hitung langkahnya, bukan angkanya. Angka pertama, 3, adalah langkah 1. 🚀',
    },
    xpReward: 40,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'A pattern starts at 3, and at every step you multiply by 3. At which step does it FIRST go past 200?',
        id: 'Sebuah pola dimulai dari 3, dan setiap langkah dikalikan 3. Pada langkah ke berapa ia PERTAMA kali melewati 200?',
      },
      answer: '5',
      inputType: 'numeric',
    },
  },
]
