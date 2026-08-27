import type { ThinkingLesson } from '../../types'

export const probabilityLessonsAdvanced: ThinkingLesson[] = [
  // ── Chance Camp · tier two ───────────────────────────────────
  // Tier one: certain, likely, impossible and fair. Tier two: counting all the possible
  // results, expected counts over many tries, chances that change as things are taken
  // away, and the trap of thinking past results change the next one.
  {
    id: 'probability-10',
    worldId: 'probability',
    number: 10,
    title: { en: 'The Coin and the Die', id: 'Koin dan Dadu' },
    mascotMessage: {
      en: 'Count what each thing can do on its own. Then think about every pairing of the two. 🎲',
      id: 'Hitung apa yang bisa dilakukan masing-masing sendiri. Lalu pikirkan setiap pasangan keduanya. 🎲',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'Counting chances usually takes more than one step. This puzzle asks each part in turn and keeps your answers on screen.',
        id: 'Menghitung peluang biasanya butuh lebih dari satu langkah. Teka-teki ini menanyakan setiap bagian bergiliran dan menyimpan jawabanmu di layar.',
      },
    },
    xpReward: 30,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'You have one coin and one ordinary die with 6 faces.',
        id: 'Kamu punya satu koin dan satu dadu biasa bersisi 6.',
      },
      visual: '🪙🎲',
      steps: [
        {
          id: 'coin',
          prompt: { en: 'How many different results can the coin give?', id: 'Berapa hasil berbeda yang bisa diberikan koin?' },
          options: [
            { id: 'two', emoji: '2️⃣', label: { en: '2 results', id: '2 hasil' } },
            { id: 'one', emoji: '1️⃣', label: { en: '1 result', id: '1 hasil' } },
            { id: 'six', emoji: '6️⃣', label: { en: '6 results', id: '6 hasil' } },
            { id: 'many', emoji: '♾️', label: { en: 'Too many to count', id: 'Terlalu banyak untuk dihitung' } },
          ],
          answerId: 'two',
        },
        {
          id: 'die',
          prompt: { en: 'And how many can the die give?', id: 'Dan berapa yang bisa diberikan dadu?' },
          options: [
            { id: 'six', emoji: '6️⃣', label: { en: '6 results', id: '6 hasil' } },
            { id: 'two', emoji: '2️⃣', label: { en: '2 results', id: '2 hasil' } },
            { id: 'twelve', emoji: '🔢', label: { en: '12 results', id: '12 hasil' } },
            { id: 'three', emoji: '3️⃣', label: { en: '3 results', id: '3 hasil' } },
          ],
          answerId: 'six',
        },
        {
          id: 'both',
          prompt: {
            en: 'Toss the coin and roll the die together. How many different pairs of results are possible?',
            id: 'Lempar koin dan dadu bersamaan. Berapa pasangan hasil berbeda yang mungkin?',
          },
          options: [
            { id: 'twelve', emoji: '🎯', label: { en: '12 pairs', id: '12 pasangan' } },
            { id: 'eight', emoji: '🎯', label: { en: '8 pairs', id: '8 pasangan' } },
            { id: 'six', emoji: '🎯', label: { en: '6 pairs', id: '6 pasangan' } },
            { id: 'thirtysix', emoji: '🎯', label: { en: '36 pairs', id: '36 pasangan' } },
          ],
          answerId: 'twelve',
        },
      ],
    },
  },
  {
    id: 'probability-11',
    worldId: 'probability',
    number: 11,
    title: { en: 'The Coin Has No Memory', id: 'Koin Tidak Punya Ingatan' },
    mascotMessage: {
      en: 'A fair coin does not remember what it did before. Every toss starts fresh! 🪙',
      id: 'Koin yang adil tidak ingat apa yang sudah terjadi. Setiap lemparan dimulai dari nol! 🪙',
    },
    xpReward: 32,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'A fair coin has landed on heads 5 times in a row. So the next toss is more likely to be tails.',
        id: 'Koin yang adil sudah mendarat di sisi gambar 5 kali berturut-turut. Jadi lemparan berikutnya lebih mungkin sisi angka.',
      },
      answer: false,
    },
  },
  {
    id: 'probability-12',
    worldId: 'probability',
    number: 12,
    title: { en: 'How Many Reds in Twenty?', id: 'Berapa Merah dalam Dua Puluh?' },
    mascotMessage: {
      en: 'One part in four is red. So about one spin in every four should land there. 🎡',
      id: 'Satu bagian dari empat berwarna merah. Jadi kira-kira satu dari setiap empat putaran mendarat di sana. 🎡',
    },
    xpReward: 33,
    puzzle: {
      type: 'math',
      question: {
        en: 'A spinner has 4 equal parts: 3 blue and 1 red. If you spin it 20 times, about how many times would you expect red?',
        id: 'Sebuah roda putar punya 4 bagian sama: 3 biru dan 1 merah. Kalau kamu memutarnya 20 kali, kira-kira berapa kali kamu perkirakan merah?',
      },
      options: ['5', '4', '10', '15'],
      answer: '5',
    },
  },
  {
    id: 'probability-13',
    worldId: 'probability',
    number: 13,
    title: { en: 'One Sweet Gone', id: 'Satu Permen Hilang' },
    mascotMessage: {
      en: 'Eating a sweet changes what is left in the bag — and that changes every chance. 🍬',
      id: 'Memakan satu permen mengubah isi kantong — dan itu mengubah semua peluangnya. 🍬',
    },
    xpReward: 34,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'A bag holds 3 green sweets and 1 yellow sweet. You take out a GREEN one and eat it. What happens to the chance of picking the yellow one next?',
        id: 'Sebuah kantong berisi 3 permen hijau dan 1 permen kuning. Kamu mengambil yang HIJAU dan memakannya. Apa yang terjadi pada peluang mengambil yang kuning berikutnya?',
      },
      options: [
        { id: 'up', emoji: '📈', label: { en: 'It goes up — 1 out of 3 instead of 1 out of 4', id: 'Naik — 1 dari 3, bukan 1 dari 4' } },
        { id: 'down', emoji: '📉', label: { en: 'It goes down', id: 'Turun' } },
        { id: 'same', emoji: '➖', label: { en: 'It stays exactly the same', id: 'Tetap sama persis' } },
        { id: 'certain', emoji: '✅', label: { en: 'It becomes certain', id: 'Menjadi pasti' } },
      ],
      answerId: 'up',
    },
  },
  {
    id: 'probability-14',
    worldId: 'probability',
    number: 14,
    title: { en: 'Which Claims Hold Up?', id: 'Pernyataan Mana yang Bertahan?' },
    mascotMessage: {
      en: 'Count each colour, then test each sentence against the counts. 🎨',
      id: 'Hitung setiap warna, lalu uji setiap kalimat terhadap hitungannya. 🎨',
    },
    xpReward: 35,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'A bag holds 5 red, 3 blue and 2 green counters. Tap every statement that is TRUE.',
        id: 'Sebuah kantong berisi 5 keping merah, 3 biru, dan 2 hijau. Ketuk setiap pernyataan yang BENAR.',
      },
      items: [
        { id: 'redmost', emoji: '🔴', label: { en: 'Red is the most likely colour', id: 'Merah adalah warna yang paling mungkin' } },
        { id: 'greenleast', emoji: '🟢', label: { en: 'Green is the least likely colour', id: 'Hijau adalah warna yang paling tidak mungkin' } },
        { id: 'bluemore', emoji: '🔵', label: { en: 'Blue is more likely than red', id: 'Biru lebih mungkin daripada merah' } },
        { id: 'certain', emoji: '✅', label: { en: 'You are certain to draw a red one', id: 'Kamu pasti mengambil yang merah' } },
      ],
      correctIds: ['redmost', 'greenleast'],
    },
  },
  {
    id: 'probability-15',
    worldId: 'probability',
    number: 15,
    title: { en: 'Write It as a Fraction', id: 'Tulis sebagai Pecahan' },
    mascotMessage: {
      en: 'Count the winning parts on top, and ALL the parts underneath. Then simplify. 🎯',
      id: 'Hitung bagian yang menang di atas, dan SEMUA bagian di bawah. Lalu sederhanakan. 🎯',
    },
    xpReward: 36,
    puzzle: {
      type: 'math',
      question: {
        en: 'A spinner has 8 equal parts numbered 1 to 8. What is the chance of spinning a number BIGGER than 6?',
        id: 'Sebuah roda putar punya 8 bagian sama bernomor 1 sampai 8. Berapa peluang mendapat angka LEBIH BESAR dari 6?',
      },
      options: ['1/4', '1/2', '2/6', '1/8'],
      answer: '1/4',
    },
  },
  {
    id: 'probability-16',
    worldId: 'probability',
    number: 16,
    title: { en: 'The Raffle', id: 'Undian' },
    mascotMessage: {
      en: 'Your chance depends on two numbers: your tickets, and ALL the tickets. Watch both! 🎟️',
      id: 'Peluangmu bergantung pada dua angka: tiketmu, dan SEMUA tiket. Perhatikan keduanya! 🎟️',
    },
    xpReward: 38,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'A raffle has sold 100 tickets in total, and you bought 5 of them.',
        id: 'Sebuah undian menjual total 100 tiket, dan kamu membeli 5 di antaranya.',
      },
      visual: '🎟️',
      steps: [
        {
          id: 'start',
          prompt: { en: 'What is your chance of winning right now?', id: 'Berapa peluangmu menang saat ini?' },
          options: [
            { id: 'five', emoji: '🎫', label: { en: '5 out of 100', id: '5 dari 100' } },
            { id: 'one', emoji: '🎫', label: { en: '1 out of 100', id: '1 dari 100' } },
            { id: 'half', emoji: '🎫', label: { en: '1 out of 2', id: '1 dari 2' } },
            { id: 'hundred', emoji: '🎫', label: { en: '100 out of 5', id: '100 dari 5' } },
          ],
          answerId: 'five',
        },
        {
          id: 'buymore',
          prompt: {
            en: 'You buy 5 more of the unsold tickets, so there are still 100 in the draw. Your chance now?',
            id: 'Kamu membeli 5 tiket lagi yang belum terjual, jadi tetap ada 100 tiket dalam undian. Berapa peluangmu sekarang?',
          },
          options: [
            { id: 'ten', emoji: '🎫', label: { en: '10 out of 100', id: '10 dari 100' } },
            { id: 'five', emoji: '🎫', label: { en: '5 out of 100', id: '5 dari 100' } },
            { id: 'ten105', emoji: '🎫', label: { en: '10 out of 105', id: '10 dari 105' } },
            { id: 'certain', emoji: '✅', label: { en: 'You are now certain to win', id: 'Sekarang kamu pasti menang' } },
          ],
          answerId: 'ten',
        },
        {
          id: 'friend',
          prompt: {
            en: 'Now the organisers print 20 extra tickets and your friend buys them all, making 120 in the draw. Is your chance bigger or smaller than a moment ago?',
            id: 'Kini panitia mencetak 20 tiket tambahan dan temanmu membelinya semua, sehingga ada 120 tiket dalam undian. Apakah peluangmu lebih besar atau lebih kecil daripada tadi?',
          },
          options: [
            { id: 'smaller', emoji: '📉', label: { en: 'Smaller — still 10 tickets, but out of 120 now', id: 'Lebih kecil — tetap 10 tiket, tapi kini dari 120' } },
            { id: 'bigger', emoji: '📈', label: { en: 'Bigger, because more tickets exist', id: 'Lebih besar, karena tiketnya lebih banyak' } },
            { id: 'same', emoji: '➖', label: { en: 'Exactly the same', id: 'Sama persis' } },
            { id: 'zero', emoji: '🚫', label: { en: 'It drops to zero', id: 'Turun menjadi nol' } },
          ],
          answerId: 'smaller',
        },
      ],
    },
  },
  {
    id: 'probability-17',
    worldId: 'probability',
    number: 17,
    title: { en: 'Two Counters Out', id: 'Dua Keping Keluar' },
    mascotMessage: {
      en: 'You only care about the COLOURS you end up holding, not the order you drew them. 🔵',
      id: 'Yang penting hanyalah WARNA yang akhirnya kamu pegang, bukan urutan pengambilannya. 🔵',
    },
    xpReward: 38,
    puzzle: {
      type: 'math',
      question: {
        en: 'A bag holds 2 red and 2 blue counters. You take out two without looking. How many different colour pairs could you end up with?',
        id: 'Sebuah kantong berisi 2 keping merah dan 2 biru. Kamu mengambil dua tanpa melihat. Ada berapa pasangan warna berbeda yang mungkin kamu dapat?',
      },
      options: ['3', '2', '4', '6'],
      answer: '3',
    },
  },
  {
    id: 'probability-18',
    worldId: 'probability',
    number: 18,
    title: { en: 'One in Two Is Not a Promise', id: 'Satu dari Dua Bukan Janji' },
    mascotMessage: {
      en: 'A chance tells you what happens over MANY tries, not what happens in exactly two. 🎲',
      id: 'Peluang memberitahu apa yang terjadi dalam BANYAK percobaan, bukan apa yang terjadi tepat dalam dua. 🎲',
    },
    xpReward: 38,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'If something has a 1 in 2 chance, then it must happen exactly once in every two tries.',
        id: 'Kalau sesuatu punya peluang 1 dari 2, maka itu harus terjadi tepat sekali dalam setiap dua percobaan.',
      },
      answer: false,
    },
  },
  {
    id: 'probability-19',
    worldId: 'probability',
    number: 19,
    title: { en: 'Reading the Forecast', id: 'Membaca Ramalan Cuaca' },
    mascotMessage: {
      en: 'A forecast is a chance, not a promise. One dry day does not make it wrong. 🌦️',
      id: 'Ramalan adalah peluang, bukan janji. Satu hari kering tidak membuatnya salah. 🌦️',
    },
    xpReward: 40,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'The forecast says there is a 70 out of 100 chance of rain today.',
        id: 'Ramalan cuaca mengatakan peluang hujan hari ini 70 dari 100.',
      },
      visual: '🌦️',
      steps: [
        {
          id: 'likely',
          prompt: { en: 'Is rain likely or unlikely today?', id: 'Apakah hujan hari ini mungkin atau tidak mungkin?' },
          options: [
            { id: 'likely', emoji: '🌧️', label: { en: 'Likely — more than half the chance', id: 'Mungkin — lebih dari setengah peluangnya' } },
            { id: 'unlikely', emoji: '☀️', label: { en: 'Unlikely', id: 'Tidak mungkin' } },
            { id: 'certain', emoji: '✅', label: { en: 'Completely certain', id: 'Benar-benar pasti' } },
            { id: 'impossible', emoji: '🚫', label: { en: 'Impossible', id: 'Mustahil' } },
          ],
          answerId: 'likely',
        },
        {
          id: 'nodrop',
          prompt: {
            en: 'In the end, not a drop fell. Was the forecast wrong?',
            id: 'Ternyata tidak setetes pun hujan turun. Apakah ramalannya salah?',
          },
          options: [
            { id: 'notnecessarily', emoji: '🤔', label: { en: 'Not necessarily — the dry 30 out of 100 can happen too', id: 'Belum tentu — 30 dari 100 yang kering juga bisa terjadi' } },
            { id: 'wrong', emoji: '❌', label: { en: 'Yes, it was completely wrong', id: 'Ya, benar-benar salah' } },
            { id: 'right', emoji: '✅', label: { en: 'It proves rain was impossible', id: 'Itu membuktikan hujan mustahil' } },
            { id: 'always', emoji: '🔁', label: { en: 'Forecasts are never right about anything', id: 'Ramalan tidak pernah benar tentang apa pun' } },
          ],
          answerId: 'notnecessarily',
        },
        {
          id: 'tendays',
          prompt: {
            en: 'Over 10 days with the same forecast, about how many would you expect to be rainy?',
            id: 'Selama 10 hari dengan ramalan yang sama, kira-kira berapa hari yang kamu perkirakan hujan?',
          },
          options: [
            { id: 'seven', emoji: '7️⃣', label: { en: 'About 7 days', id: 'Sekitar 7 hari' } },
            { id: 'ten', emoji: '🔟', label: { en: 'All 10 days', id: 'Semua 10 hari' } },
            { id: 'three', emoji: '3️⃣', label: { en: 'About 3 days', id: 'Sekitar 3 hari' } },
            { id: 'one', emoji: '1️⃣', label: { en: 'Just 1 day', id: 'Hanya 1 hari' } },
          ],
          answerId: 'seven',
        },
      ],
    },
  },
]
