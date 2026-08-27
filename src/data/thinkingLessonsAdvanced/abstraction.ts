import type { ThinkingLesson } from '../../types'

export const abstractionLessonsAdvanced: ThinkingLesson[] = [
  // ── Think Alike · tier two ───────────────────────────────────
  // Tier one: grouping by what things look like. Tier two: grouping by what things DO,
  // by what they are made of, by two properties at once, and naming the group itself.
  {
    id: 'abstraction-10',
    worldId: 'abstraction',
    number: 10,
    title: { en: 'Two Ways to Group', id: 'Dua Cara Mengelompokkan' },
    mascotMessage: {
      en: 'The same thing can belong to more than one group at the same time! 🍓',
      id: 'Benda yang sama bisa masuk lebih dari satu kelompok sekaligus! 🍓',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'This puzzle asks you three questions in a row. The first two find a group each — then the last one asks you to put the two groups together.',
        id: 'Teka-teki ini menanyakan tiga pertanyaan berturut-turut. Dua yang pertama masing-masing menemukan satu kelompok — lalu yang terakhir memintamu menggabungkan keduanya.',
      },
    },
    xpReward: 28,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Look carefully at two different groups of things.',
        id: 'Perhatikan baik-baik dua kelompok benda yang berbeda.',
      },
      steps: [
        {
          id: 'red',
          prompt: {
            en: 'Group 1 is 🍎 🌹 🚒 🍓. What do they all share?',
            id: 'Kelompok 1 adalah 🍎 🌹 🚒 🍓. Apa kesamaan mereka?',
          },
          options: [
            { id: 'red', emoji: '🔴', label: { en: 'They are all red', id: 'Semuanya berwarna merah' } },
            { id: 'fruit', emoji: '🍇', label: { en: 'They are all fruit', id: 'Semuanya buah' } },
            { id: 'sweet', emoji: '🍬', label: { en: 'They all taste sweet', id: 'Semuanya rasanya manis' } },
            { id: 'move', emoji: '🚀', label: { en: 'They can all move by themselves', id: 'Semuanya bisa bergerak sendiri' } },
          ],
          answerId: 'red',
        },
        {
          id: 'fruit',
          prompt: {
            en: 'Group 2 is 🍎 🍌 🍓 🍇. What do they all share?',
            id: 'Kelompok 2 adalah 🍎 🍌 🍓 🍇. Apa kesamaan mereka?',
          },
          options: [
            { id: 'fruit', emoji: '🍇', label: { en: 'They are all fruit', id: 'Semuanya buah' } },
            { id: 'red', emoji: '🔴', label: { en: 'They are all red', id: 'Semuanya berwarna merah' } },
            { id: 'round', emoji: '⚪', label: { en: 'They are all round', id: 'Semuanya bulat' } },
            { id: 'grow', emoji: '🌳', label: { en: 'They all grow on tall trees', id: 'Semuanya tumbuh di pohon tinggi' } },
          ],
          answerId: 'fruit',
        },
        {
          id: 'both',
          prompt: {
            en: 'Which one belongs to BOTH groups?',
            id: 'Mana yang termasuk KEDUA kelompok?',
          },
          options: [
            { id: 'strawberry', emoji: '🍓', label: { en: 'The strawberry', id: 'Stroberi' } },
            { id: 'banana', emoji: '🍌', label: { en: 'The banana', id: 'Pisang' } },
            { id: 'rose', emoji: '🌹', label: { en: 'The rose', id: 'Mawar' } },
            { id: 'engine', emoji: '🚒', label: { en: 'The fire engine', id: 'Mobil pemadam' } },
          ],
          answerId: 'strawberry',
        },
      ],
    },
  },
  {
    id: 'abstraction-11',
    worldId: 'abstraction',
    number: 11,
    title: { en: 'Three Give Light', id: 'Tiga Memberi Cahaya' },
    mascotMessage: {
      en: 'Do not look at the shape. Ask what each one DOES on its own. 💡',
      id: 'Jangan lihat bentuknya. Tanyakan apa yang DILAKUKAN masing-masing dengan sendirinya. 💡',
    },
    xpReward: 28,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: {
        en: 'Three of these make light all by themselves. Which one does NOT?',
        id: 'Tiga dari benda ini menghasilkan cahaya dengan sendirinya. Mana yang TIDAK?',
      },
      items: [
        { id: 'candle', emoji: '🕯️', label: { en: 'A candle', id: 'Lilin' } },
        { id: 'torch', emoji: '🔦', label: { en: 'A torch', id: 'Senter' } },
        { id: 'bulb', emoji: '💡', label: { en: 'A light bulb', id: 'Bola lampu' } },
        { id: 'battery', emoji: '🔋', label: { en: 'A battery', id: 'Baterai' } },
      ],
      correctIds: ['battery'],
    },
  },
  {
    id: 'abstraction-12',
    worldId: 'abstraction',
    number: 12,
    title: { en: 'What Does It Measure?', id: 'Mengukur Apa?' },
    mascotMessage: {
      en: 'Every one of these tools answers a different question about the world. 📏',
      id: 'Setiap alat ini menjawab pertanyaan yang berbeda tentang dunia. 📏',
    },
    xpReward: 30,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'thermometer',
          leftEmoji: '🌡️',
          leftLabel: { en: 'Thermometer', id: 'Termometer' },
          rightId: 'temp',
          rightEmoji: '🔥',
          rightLabel: { en: 'How hot or cold something is', id: 'Seberapa panas atau dinginnya sesuatu' },
        },
        {
          leftId: 'stopwatch',
          leftEmoji: '⏱️',
          leftLabel: { en: 'Stopwatch', id: 'Stopwatch' },
          rightId: 'time',
          rightEmoji: '⏳',
          rightLabel: { en: 'How long something takes', id: 'Berapa lama sesuatu berlangsung' },
        },
        {
          leftId: 'scales',
          leftEmoji: '⚖️',
          leftLabel: { en: 'Scales', id: 'Timbangan' },
          rightId: 'weight',
          rightEmoji: '🪨',
          rightLabel: { en: 'How heavy something is', id: 'Seberapa berat sesuatu' },
        },
        {
          leftId: 'ruler',
          leftEmoji: '📏',
          leftLabel: { en: 'Ruler', id: 'Penggaris' },
          rightId: 'length',
          rightEmoji: '📐',
          rightLabel: { en: 'How long something is', id: 'Seberapa panjang sesuatu' },
        },
      ],
    },
  },
  {
    id: 'abstraction-13',
    worldId: 'abstraction',
    number: 13,
    title: { en: 'Both Things at Once', id: 'Dua Hal Sekaligus' },
    mascotMessage: {
      en: 'Two rules, and an answer must pass BOTH of them. Check each one twice! 🌊',
      id: 'Dua aturan, dan jawabannya harus lolos KEDUANYA. Periksa masing-masing dua kali! 🌊',
    },
    xpReward: 32,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Tap everything that is BOTH an animal AND lives in the sea.',
        id: 'Ketuk semua yang MERUPAKAN hewan DAN hidup di laut.',
      },
      items: [
        { id: 'fish', emoji: '🐟', label: { en: 'Fish', id: 'Ikan' } },
        { id: 'dolphin', emoji: '🐬', label: { en: 'Dolphin', id: 'Lumba-lumba' } },
        { id: 'bird', emoji: '🐦', label: { en: 'Garden bird', id: 'Burung taman' } },
        { id: 'octopus', emoji: '🐙', label: { en: 'Octopus', id: 'Gurita' } },
        { id: 'seaweed', emoji: '🌿', label: { en: 'Seaweed', id: 'Rumput laut' } },
        { id: 'boat', emoji: '🚤', label: { en: 'Speedboat', id: 'Perahu cepat' } },
      ],
      correctIds: ['fish', 'dolphin', 'octopus'],
    },
  },
  {
    id: 'abstraction-14',
    worldId: 'abstraction',
    number: 14,
    title: { en: 'How Does It Feel?', id: 'Bagaimana Rasanya?' },
    mascotMessage: {
      en: 'Three of these words are about touching. One is about looking. 🖐️',
      id: 'Tiga kata ini tentang sentuhan. Satu tentang penglihatan. 🖐️',
    },
    xpReward: 33,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: {
        en: 'Three of these describe how something feels when you TOUCH it. Which one does not?',
        id: 'Tiga kata ini menggambarkan rasa saat kamu MENYENTUH sesuatu. Mana yang tidak?',
      },
      items: [
        { id: 'cold', emoji: '🧊', label: { en: 'Cold', id: 'Dingin' } },
        { id: 'hard', emoji: '🪨', label: { en: 'Hard', id: 'Keras' } },
        { id: 'colourful', emoji: '🌈', label: { en: 'Colourful', id: 'Berwarna-warni' } },
        { id: 'soft', emoji: '🧸', label: { en: 'Soft', id: 'Lembut' } },
      ],
      correctIds: ['colourful'],
    },
  },
  {
    id: 'abstraction-15',
    worldId: 'abstraction',
    number: 15,
    title: { en: 'When a Rule Breaks', id: 'Ketika Aturan Runtuh' },
    mascotMessage: {
      en: 'A group can be real even when one member behaves differently. Find the exception! 🐧',
      id: 'Sebuah kelompok bisa tetap nyata meski satu anggotanya berbeda. Temukan pengecualiannya! 🐧',
    },
    xpReward: 35,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Look at these three creatures: 🐧 🦅 🦜',
        id: 'Perhatikan tiga makhluk ini: 🐧 🦅 🦜',
      },
      visual: '🐧🦅🦜',
      steps: [
        {
          id: 'group',
          prompt: { en: 'Which group are all three in?', id: 'Kelompok apa yang memuat ketiganya?' },
          options: [
            { id: 'birds', emoji: '🪶', label: { en: 'They are all birds', id: 'Semuanya burung' } },
            { id: 'fish', emoji: '🐟', label: { en: 'They are all fish', id: 'Semuanya ikan' } },
            { id: 'pets', emoji: '🏠', label: { en: 'They are all pets', id: 'Semuanya hewan peliharaan' } },
            { id: 'cold', emoji: '🧊', label: { en: 'They all live in cold places', id: 'Semuanya hidup di tempat dingin' } },
          ],
          answerId: 'birds',
        },
        {
          id: 'exception',
          prompt: { en: 'Which one of them cannot fly?', id: 'Mana di antara mereka yang tidak bisa terbang?' },
          options: [
            { id: 'penguin', emoji: '🐧', label: { en: 'The penguin', id: 'Penguin' } },
            { id: 'eagle', emoji: '🦅', label: { en: 'The eagle', id: 'Elang' } },
            { id: 'parrot', emoji: '🦜', label: { en: 'The parrot', id: 'Beo' } },
            { id: 'none', emoji: '🚫', label: { en: 'They can all fly', id: 'Semuanya bisa terbang' } },
          ],
          answerId: 'penguin',
        },
        {
          id: 'rule',
          prompt: {
            en: 'So is "every bird can fly" a good rule?',
            id: 'Jadi apakah "setiap burung bisa terbang" adalah aturan yang baik?',
          },
          options: [
            { id: 'no', emoji: '❌', label: { en: 'No — the penguin breaks it', id: 'Tidak — penguin melanggarnya' } },
            { id: 'yes', emoji: '✅', label: { en: 'Yes — one exception does not matter', id: 'Ya — satu pengecualian tidak masalah' } },
            { id: 'sometimes', emoji: '🤷', label: { en: 'Only on sunny days', id: 'Hanya di hari cerah' } },
            { id: 'unknown', emoji: '❓', label: { en: 'It cannot be tested', id: 'Tidak bisa diuji' } },
          ],
          answerId: 'no',
        },
      ],
    },
  },
  {
    id: 'abstraction-16',
    worldId: 'abstraction',
    number: 16,
    title: { en: 'Made of Wood', id: 'Terbuat dari Kayu' },
    mascotMessage: {
      en: 'Forget what they are FOR. Ask what they are MADE OF. 🪵',
      id: 'Lupakan untuk apa benda itu. Tanyakan terbuat dari APA. 🪵',
    },
    xpReward: 36,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Tap everything that is made mostly of wood.',
        id: 'Ketuk semua yang sebagian besar terbuat dari kayu.',
      },
      items: [
        { id: 'chair', emoji: '🪑', label: { en: 'Wooden chair', id: 'Kursi kayu' } },
        { id: 'paper', emoji: '📄', label: { en: 'Sheet of paper', id: 'Selembar kertas' } },
        { id: 'spoon', emoji: '🥄', label: { en: 'Metal spoon', id: 'Sendok logam' } },
        { id: 'guitar', emoji: '🎸', label: { en: 'Acoustic guitar', id: 'Gitar akustik' } },
        { id: 'brick', emoji: '🧱', label: { en: 'Brick', id: 'Batu bata' } },
        { id: 'pencil', emoji: '✏️', label: { en: 'Pencil', id: 'Pensil' } },
      ],
      correctIds: ['chair', 'paper', 'guitar', 'pencil'],
    },
  },
  {
    id: 'abstraction-17',
    worldId: 'abstraction',
    number: 17,
    title: { en: 'The Shape Rule', id: 'Aturan Bentuk' },
    mascotMessage: {
      en: 'Read the definition word by word. Every part of it has to be true! 📐',
      id: 'Baca definisinya kata demi kata. Setiap bagiannya harus benar! 📐',
    },
    xpReward: 37,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'A polygon is any flat shape made only of straight sides that join right up. Which of these is NOT a polygon?',
        id: 'Poligon adalah bentuk datar yang hanya terdiri dari sisi-sisi lurus yang tersambung rapat. Mana yang BUKAN poligon?',
      },
      options: [
        { id: 'curved', emoji: '🌙', label: { en: 'A shape with 2 straight sides and 1 curved side', id: 'Bentuk dengan 2 sisi lurus dan 1 sisi melengkung' } },
        { id: 'three', emoji: '🔺', label: { en: 'A shape with 3 straight joined sides', id: 'Bentuk dengan 3 sisi lurus yang tersambung' } },
        { id: 'four', emoji: '🟦', label: { en: 'A shape with 4 straight joined sides', id: 'Bentuk dengan 4 sisi lurus yang tersambung' } },
        { id: 'eight', emoji: '🛑', label: { en: 'A shape with 8 straight joined sides', id: 'Bentuk dengan 8 sisi lurus yang tersambung' } },
      ],
      answerId: 'curved',
    },
  },
  {
    id: 'abstraction-18',
    worldId: 'abstraction',
    number: 18,
    title: { en: 'Name the Group', id: 'Sebutkan Kelompoknya' },
    mascotMessage: {
      en: 'This time you go the other way: from one thing UP to the name of its group. 🏷️',
      id: 'Kali ini kamu berjalan ke arah sebaliknya: dari satu benda NAIK ke nama kelompoknya. 🏷️',
    },
    xpReward: 38,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'chair',
          leftEmoji: '🪑',
          leftLabel: { en: 'A chair', id: 'Sebuah kursi' },
          rightId: 'furniture',
          rightEmoji: '🛋️',
          rightLabel: { en: 'Furniture', id: 'Perabot' },
        },
        {
          leftId: 'fork',
          leftEmoji: '🍴',
          leftLabel: { en: 'A fork', id: 'Sebuah garpu' },
          rightId: 'cutlery',
          rightEmoji: '🥄',
          rightLabel: { en: 'Cutlery', id: 'Alat makan' },
        },
        {
          leftId: 'trainer',
          leftEmoji: '👟',
          leftLabel: { en: 'A trainer', id: 'Sebuah sepatu olahraga' },
          rightId: 'footwear',
          rightEmoji: '🥿',
          rightLabel: { en: 'Footwear', id: 'Alas kaki' },
        },
        {
          leftId: 'pencil',
          leftEmoji: '✏️',
          leftLabel: { en: 'A pencil', id: 'Sebuah pensil' },
          rightId: 'stationery',
          rightEmoji: '📎',
          rightLabel: { en: 'Stationery', id: 'Alat tulis' },
        },
      ],
    },
  },
  {
    id: 'abstraction-19',
    worldId: 'abstraction',
    number: 19,
    title: { en: 'A Hole Right Through', id: 'Berlubang Tembus' },
    mascotMessage: {
      en: 'The thing they share is not a colour and not a use. Picture poking a finger through each one! 🍩',
      id: 'Kesamaannya bukan warna dan bukan kegunaan. Bayangkan menusukkan jari menembus masing-masing! 🍩',
    },
    xpReward: 40,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: {
        en: 'Three of these have a hole that goes all the way through. Which one does NOT?',
        id: 'Tiga benda ini punya lubang yang tembus sampai ke sisi lain. Mana yang TIDAK?',
      },
      items: [
        { id: 'doughnut', emoji: '🍩', label: { en: 'A ring doughnut', id: 'Donat bolong' } },
        { id: 'roll', emoji: '🧻', label: { en: 'A paper roll tube', id: 'Gulungan tisu' } },
        { id: 'bucket', emoji: '🪣', label: { en: 'A bucket', id: 'Ember' } },
        { id: 'ring', emoji: '🛟', label: { en: 'A rubber ring', id: 'Ban pelampung' } },
      ],
      correctIds: ['bucket'],
    },
  },
]
