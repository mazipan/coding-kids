import type { ThinkingLesson } from '../../types'

export const memoryLessonsAdvanced: ThinkingLesson[] = [
  // ── Memory Maze · tier two ───────────────────────────────────
  // Tier one: short repeats and simple matching. Tier two: longer repeating units, a
  // sequence recalled backwards, and lists that change while you are holding them.
  {
    id: 'memory-10',
    worldId: 'memory',
    number: 10,
    title: { en: 'The Long Loop', id: 'Putaran Panjang' },
    mascotMessage: {
      en: 'This band plays FIVE instruments before it starts again. Hold all five in your head! 🎻',
      id: 'Band ini memainkan LIMA alat musik sebelum mengulang lagi. Ingat kelimanya! 🎻',
    },
    xpReward: 25,
    puzzle: {
      type: 'pattern',
      items: ['🎹', '🥁', '🎺', '🎻', '🎸', '🎹', '🥁', '🎺', '?', '🎸'],
      blankIndex: 8,
      options: ['🎻', '🎺', '🎹', '🎤'],
      answer: '🎻',
    },
  },
  {
    id: 'memory-11',
    worldId: 'memory',
    number: 11,
    title: { en: 'Rewind the Day', id: 'Putar Balik Harimu' },
    mascotMessage: {
      en: 'Think of the day the normal way first, then say it backwards. Start with the very LAST thing! 😴',
      id: 'Bayangkan harimu secara normal dulu, lalu ucapkan mundur. Mulai dari hal yang PALING AKHIR! 😴',
    },
    xpReward: 28,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'sleep', emoji: '😴', label: { en: 'Go to sleep', id: 'Tidur' } },
        { id: 'dinner', emoji: '🍽️', label: { en: 'Eat dinner', id: 'Makan malam' } },
        { id: 'school', emoji: '🏫', label: { en: 'Go to school', id: 'Pergi ke sekolah' } },
        { id: 'breakfast', emoji: '🥣', label: { en: 'Eat breakfast', id: 'Sarapan' } },
        { id: 'wake', emoji: '☀️', label: { en: 'Wake up', id: 'Bangun tidur' } },
      ],
    },
  },
  {
    id: 'memory-12',
    worldId: 'memory',
    number: 12,
    title: { en: 'Instrument Families', id: 'Keluarga Alat Musik' },
    mascotMessage: {
      en: 'Every instrument belongs to a family, decided by HOW you play it. 🎼',
      id: 'Setiap alat musik punya keluarga, ditentukan oleh CARA memainkannya. 🎼',
    },
    xpReward: 30,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'violin',
          leftEmoji: '🎻',
          leftLabel: { en: 'Violin', id: 'Biola' },
          rightId: 'strings',
          rightEmoji: '🪢',
          rightLabel: { en: 'Played by pulling strings', id: 'Dimainkan dengan menggesek senar' },
        },
        {
          leftId: 'drum',
          leftEmoji: '🥁',
          leftLabel: { en: 'Drum', id: 'Drum' },
          rightId: 'hit',
          rightEmoji: '🪘',
          rightLabel: { en: 'Played by hitting it', id: 'Dimainkan dengan dipukul' },
        },
        {
          leftId: 'trumpet',
          leftEmoji: '🎺',
          leftLabel: { en: 'Trumpet', id: 'Terompet' },
          rightId: 'blow',
          rightEmoji: '💨',
          rightLabel: { en: 'Played by blowing into metal', id: 'Dimainkan dengan meniup logam' },
        },
        {
          leftId: 'piano',
          leftEmoji: '🎹',
          leftLabel: { en: 'Piano', id: 'Piano' },
          rightId: 'keys',
          rightEmoji: '👆',
          rightLabel: { en: 'Played by pressing keys', id: 'Dimainkan dengan menekan tuts' },
        },
      ],
    },
  },
  {
    id: 'memory-13',
    worldId: 'memory',
    number: 13,
    title: { en: 'The Shopping List', id: 'Daftar Belanja' },
    mascotMessage: {
      en: 'Read the list once, then keep it in your head — the questions will pull it apart! 🧺',
      id: 'Baca daftarnya sekali, lalu simpan di kepalamu — pertanyaannya akan membongkarnya! 🧺',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'This puzzle asks you several questions about the same list, one after another. Your earlier answers stay on screen so you can build on them.',
        id: 'Teka-teki ini menanyakan beberapa pertanyaan tentang daftar yang sama, satu demi satu. Jawaban sebelumnya tetap di layar supaya kamu bisa melanjutkannya.',
      },
      example: {
        en: 'One wrong link and the whole chain starts again, so hold the list carefully in your head.',
        id: 'Satu mata rantai salah dan seluruh rantainya diulang, jadi simpan daftarnya baik-baik di kepalamu.',
      },
    },
    xpReward: 32,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Mum wrote a shopping list: milk, bread, eggs, cheese, apples — in that order.',
        id: 'Ibu menulis daftar belanja: susu, roti, telur, keju, apel — dalam urutan itu.',
      },
      visual: '🥛🍞🥚🧀🍎',
      steps: [
        {
          id: 'third',
          prompt: { en: 'Which item was third on the list?', id: 'Barang mana yang ketiga di daftar?' },
          options: [
            { id: 'eggs', emoji: '🥚', label: { en: 'Eggs', id: 'Telur' } },
            { id: 'bread', emoji: '🍞', label: { en: 'Bread', id: 'Roti' } },
            { id: 'cheese', emoji: '🧀', label: { en: 'Cheese', id: 'Keju' } },
            { id: 'apples', emoji: '🍎', label: { en: 'Apples', id: 'Apel' } },
          ],
          answerId: 'eggs',
        },
        {
          id: 'left',
          prompt: {
            en: 'Mum crosses off the milk and the cheese. How many items are left?',
            id: 'Ibu mencoret susu dan keju. Berapa barang yang tersisa?',
          },
          options: [
            { id: 'three', emoji: '3️⃣', label: { en: '3 items', id: '3 barang' } },
            { id: 'two', emoji: '2️⃣', label: { en: '2 items', id: '2 barang' } },
            { id: 'four', emoji: '4️⃣', label: { en: '4 items', id: '4 barang' } },
            { id: 'five', emoji: '5️⃣', label: { en: '5 items', id: '5 barang' } },
          ],
          answerId: 'three',
        },
        {
          id: 'never',
          prompt: {
            en: 'Which of these was NEVER on the list at all?',
            id: 'Mana yang TIDAK PERNAH ada di daftar sama sekali?',
          },
          options: [
            { id: 'banana', emoji: '🍌', label: { en: 'Bananas', id: 'Pisang' } },
            { id: 'milk', emoji: '🥛', label: { en: 'Milk', id: 'Susu' } },
            { id: 'apples', emoji: '🍎', label: { en: 'Apples', id: 'Apel' } },
            { id: 'bread', emoji: '🍞', label: { en: 'Bread', id: 'Roti' } },
          ],
          answerId: 'banana',
        },
      ],
    },
  },
  {
    id: 'memory-14',
    worldId: 'memory',
    number: 14,
    title: { en: 'Clock Faces in Order', id: 'Urutkan Wajah Jam' },
    mascotMessage: {
      en: 'Read each little clock and picture what time it shows. Then line them up from earliest to latest. 🕰️',
      id: 'Baca setiap jam kecil dan bayangkan pukul berapa yang ditunjukkannya. Lalu urutkan dari yang paling awal ke paling akhir. 🕰️',
    },
    xpReward: 33,
    puzzle: {
      type: 'sort',
      items: ['🕕', '🕐', '🕘', '🕒', '🕛'],
      answer: ['🕐', '🕒', '🕕', '🕘', '🕛'],
      prompt: {
        en: 'Tap the clocks from the earliest hour to the latest!',
        id: 'Ketuk jam-jam itu dari pukul paling awal ke paling akhir!',
      },
    },
  },
  {
    id: 'memory-15',
    worldId: 'memory',
    number: 15,
    title: { en: 'The Chiming Clock', id: 'Jam yang Berdentang' },
    mascotMessage: {
      en: 'One chime at one o\'clock, two at two... add up every hour from 1 to 5. 🔔',
      id: 'Satu dentang pukul satu, dua dentang pukul dua... jumlahkan setiap jam dari 1 sampai 5. 🔔',
    },
    xpReward: 34,
    puzzle: {
      type: 'math',
      question: {
        en: 'A clock chimes once at 1 o\'clock, twice at 2 o\'clock, and so on. How many chimes does it make in total from 1 o\'clock to 5 o\'clock?',
        id: 'Sebuah jam berdentang sekali pukul 1, dua kali pukul 2, dan seterusnya. Berapa total dentangnya dari pukul 1 sampai pukul 5?',
      },
      options: ['15', '10', '12', '25'],
      answer: '15',
    },
  },
  {
    id: 'memory-16',
    worldId: 'memory',
    number: 16,
    title: { en: 'The Relay Order', id: 'Urutan Estafet' },
    mascotMessage: {
      en: 'The runners keep swapping places. Update the line in your head after EVERY change! 🏃',
      id: 'Para pelari terus bertukar tempat. Perbarui barisannya di kepalamu setelah SETIAP perubahan! 🏃',
    },
    xpReward: 36,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Four runners line up for a relay in this order: cheetah, rabbit, tortoise, fox.',
        id: 'Empat pelari berbaris untuk estafet dengan urutan ini: citah, kelinci, kura-kura, rubah.',
      },
      visual: '🐆🐇🐢🦊',
      steps: [
        {
          id: 'second',
          prompt: { en: 'Who runs second?', id: 'Siapa yang berlari kedua?' },
          options: [
            { id: 'rabbit', emoji: '🐇', label: { en: 'The rabbit', id: 'Kelinci' } },
            { id: 'cheetah', emoji: '🐆', label: { en: 'The cheetah', id: 'Citah' } },
            { id: 'tortoise', emoji: '🐢', label: { en: 'The tortoise', id: 'Kura-kura' } },
            { id: 'fox', emoji: '🦊', label: { en: 'The fox', id: 'Rubah' } },
          ],
          answerId: 'rabbit',
        },
        {
          id: 'swap',
          prompt: {
            en: 'The tortoise and the fox swap places. Who runs LAST now?',
            id: 'Kura-kura dan rubah bertukar tempat. Siapa yang berlari TERAKHIR sekarang?',
          },
          options: [
            { id: 'tortoise', emoji: '🐢', label: { en: 'The tortoise', id: 'Kura-kura' } },
            { id: 'fox', emoji: '🦊', label: { en: 'The fox', id: 'Rubah' } },
            { id: 'rabbit', emoji: '🐇', label: { en: 'The rabbit', id: 'Kelinci' } },
            { id: 'cheetah', emoji: '🐆', label: { en: 'The cheetah', id: 'Citah' } },
          ],
          answerId: 'tortoise',
        },
        {
          id: 'movefirst',
          prompt: {
            en: 'Now whoever is first moves to the very end. Who runs FIRST now?',
            id: 'Sekarang siapa pun yang pertama pindah ke paling belakang. Siapa yang berlari PERTAMA sekarang?',
          },
          options: [
            { id: 'rabbit', emoji: '🐇', label: { en: 'The rabbit', id: 'Kelinci' } },
            { id: 'cheetah', emoji: '🐆', label: { en: 'The cheetah', id: 'Citah' } },
            { id: 'fox', emoji: '🦊', label: { en: 'The fox', id: 'Rubah' } },
            { id: 'tortoise', emoji: '🐢', label: { en: 'The tortoise', id: 'Kura-kura' } },
          ],
          answerId: 'rabbit',
        },
      ],
    },
  },
  {
    id: 'memory-17',
    worldId: 'memory',
    number: 17,
    title: { en: 'Letters and Numbers', id: 'Huruf dan Angka' },
    mascotMessage: {
      en: 'The letters go round in a loop. The numbers just keep climbing. Two things to remember at once! 🔤',
      id: 'Hurufnya berputar dalam lingkaran. Angkanya terus naik. Dua hal yang harus diingat sekaligus! 🔤',
    },
    xpReward: 37,
    puzzle: {
      type: 'pattern',
      items: ['🅰️', '1️⃣', '🅱️', '2️⃣', '🅾️', '3️⃣', '🅰️', '?'],
      blankIndex: 7,
      options: ['4️⃣', '1️⃣', '🅱️', '3️⃣'],
      answer: '4️⃣',
    },
  },
  {
    id: 'memory-18',
    worldId: 'memory',
    number: 18,
    title: { en: 'The Secret Code', id: 'Kode Rahasia' },
    mascotMessage: {
      en: 'Two jobs, in order: first turn the code around, THEN add one to every digit. Type the four digits with no spaces. 🔐',
      id: 'Dua tugas, berurutan: pertama balik kodenya, LALU tambahkan satu ke setiap angka. Ketik empat angkanya tanpa spasi. 🔐',
    },
    xpReward: 38,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'Rafi memorised the code 5 8 2 7. To lock the box he must type it BACKWARDS, and then add 1 to every digit. What does he type?',
        id: 'Rafi menghafal kode 5 8 2 7. Untuk mengunci kotaknya dia harus mengetiknya TERBALIK, lalu menambahkan 1 ke setiap angka. Apa yang dia ketik?',
      },
      answer: '8396',
      inputType: 'numeric',
    },
  },
  {
    id: 'memory-19',
    worldId: 'memory',
    number: 19,
    title: { en: 'Who Sat Where?', id: 'Siapa Duduk di Mana?' },
    mascotMessage: {
      en: 'Row 1 is the front row, nearest the stage. Find Ayu first — everyone else is described from her seat. 💺',
      id: 'Baris 1 adalah baris depan, paling dekat panggung. Temukan Ayu dulu — yang lain dijelaskan dari kursinya. 💺',
    },
    tutorial: {
      title: { en: 'Tap the squares yourself', id: 'Ketuk sendiri kotaknya' },
      body: {
        en: 'This puzzle has no buttons to choose from. You tap the squares — as many as the question needs — and then press Check. Tap a square again to unpick it.',
        id: 'Teka-teki ini tidak punya tombol pilihan. Kamu yang mengetuk kotaknya — sebanyak yang ditanyakan — lalu tekan Cek. Ketuk lagi sebuah kotak untuk membatalkannya.',
      },
    },
    xpReward: 40,
    puzzle: {
      type: 'grid-select',
      question: {
        en: 'Ayu sat in row 2, seat 4. Budi sat directly in FRONT of Ayu. Cici sat directly BEHIND Ayu. Tap the three seats where they sat.',
        id: 'Ayu duduk di baris 2, kursi 4. Budi duduk tepat di DEPAN Ayu. Cici duduk tepat di BELAKANG Ayu. Ketuk tiga kursi tempat mereka duduk.',
      },
      note: {
        en: 'The top row of squares is row 1, the front row. Seats are counted from the left.',
        id: 'Baris kotak paling atas adalah baris 1, baris depan. Kursi dihitung dari kiri.',
      },
      cells: [
        ['💺', '💺', '💺', '💺', '💺'],
        ['💺', '💺', '💺', '💺', '💺'],
        ['💺', '💺', '💺', '💺', '💺'],
      ],
      answer: ['0-3', '1-3', '2-3'],
    },
  },
]
