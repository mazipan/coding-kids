import type { ThinkingLesson } from '../../types'

export const countingLessonsAdvanced: ThinkingLesson[] = [
  // ── Math Magic · tier two ────────────────────────────────────
  // Tier one: one operation at a time. Tier two: mixed order of operations, two-step
  // word problems, remainders, inverse chains, fractions of a set, and averages.
  {
    id: 'counting-10',
    worldId: 'counting',
    number: 10,
    title: { en: 'Which Comes First?', id: 'Mana yang Dulu?' },
    mascotMessage: {
      en: 'Multiply and divide always go BEFORE add and subtract. Do the times first! ✖️',
      id: 'Kali dan bagi selalu dikerjakan SEBELUM tambah dan kurang. Kerjakan perkaliannya dulu! ✖️',
    },
    xpReward: 25,
    puzzle: {
      type: 'math',
      question: { en: '20 - 3 × 4 = ___', id: '20 - 3 × 4 = ___' },
      options: ['8', '17', '12', '68'],
      answer: '8',
    },
  },
  {
    id: 'counting-11',
    worldId: 'counting',
    number: 11,
    title: { en: 'Boxes of Pencils', id: 'Kotak Pensil' },
    mascotMessage: {
      en: 'Two things happen here: first she buys, then she gives away. Do them in that order! ✏️',
      id: 'Ada dua hal di sini: pertama dia membeli, lalu dia memberikan. Kerjakan sesuai urutannya! ✏️',
    },
    xpReward: 28,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'A box holds 6 pencils. Mira buys 7 boxes, then gives 9 pencils to her class. How many pencils does she have left?',
        id: 'Satu kotak berisi 6 pensil. Mira membeli 7 kotak, lalu memberikan 9 pensil ke kelasnya. Berapa pensil yang tersisa?',
      },
      answer: '33',
      inputType: 'numeric',
    },
  },
  {
    id: 'counting-12',
    worldId: 'counting',
    number: 12,
    title: { en: 'What Is Left Over?', id: 'Berapa Sisanya?' },
    mascotMessage: {
      en: 'Share out as many whole sweets as you can. Whatever will not go round is the leftover. 🍬',
      id: 'Bagikan sebanyak mungkin permen utuh. Yang tidak cukup dibagi rata itulah sisanya. 🍬',
    },
    xpReward: 29,
    puzzle: {
      type: 'math',
      question: {
        en: '29 sweets are shared equally between 4 friends. How many sweets are LEFT OVER?',
        id: '29 permen dibagi rata untuk 4 teman. Berapa permen yang TERSISA?',
      },
      options: ['1', '2', '3', '7'],
      answer: '1',
    },
  },
  {
    id: 'counting-13',
    worldId: 'counting',
    number: 13,
    title: { en: 'At the Market', id: 'Di Pasar' },
    mascotMessage: {
      en: 'Work out the total first. Only then can you work out the change! 🥭',
      id: 'Hitung totalnya dulu. Baru setelah itu kamu bisa menghitung kembaliannya! 🥭',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'Some problems are really two problems stacked up. This puzzle asks the first part, keeps your answer on screen, and then asks the part that depends on it.',
        id: 'Beberapa soal sebenarnya adalah dua soal yang bertumpuk. Teka-teki ini menanyakan bagian pertama, menyimpan jawabanmu di layar, lalu menanyakan bagian yang bergantung padanya.',
      },
      example: {
        en: 'Every link must be right — one wrong answer and the chain restarts from the beginning.',
        id: 'Setiap mata rantai harus benar — satu jawaban salah dan rantainya diulang dari awal.',
      },
    },
    xpReward: 30,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Mangoes cost 4 coins each. You buy 3 of them and hand over 20 coins.',
        id: 'Mangga harganya 4 koin per buah. Kamu membeli 3 buah dan menyerahkan 20 koin.',
      },
      visual: '🥭🥭🥭',
      steps: [
        {
          id: 'total',
          prompt: { en: 'What do the 3 mangoes cost altogether?', id: 'Berapa harga 3 mangga itu seluruhnya?' },
          options: [
            { id: 'twelve', emoji: '🪙', label: { en: '12 coins', id: '12 koin' } },
            { id: 'seven', emoji: '🪙', label: { en: '7 coins', id: '7 koin' } },
            { id: 'fifteen', emoji: '🪙', label: { en: '15 coins', id: '15 koin' } },
            { id: 'twenty', emoji: '🪙', label: { en: '20 coins', id: '20 koin' } },
          ],
          answerId: 'twelve',
        },
        {
          id: 'change',
          prompt: { en: 'So how much change do you get back?', id: 'Jadi berapa kembalian yang kamu terima?' },
          options: [
            { id: 'eight', emoji: '💰', label: { en: '8 coins', id: '8 koin' } },
            { id: 'five', emoji: '💰', label: { en: '5 coins', id: '5 koin' } },
            { id: 'twelve', emoji: '💰', label: { en: '12 coins', id: '12 koin' } },
            { id: 'none', emoji: '💰', label: { en: 'No change at all', id: 'Tidak ada kembalian' } },
          ],
          answerId: 'eight',
        },
      ],
    },
  },
  {
    id: 'counting-14',
    worldId: 'counting',
    number: 14,
    title: { en: 'Undo the Machine', id: 'Balikkan Mesinnya' },
    mascotMessage: {
      en: 'Start at the END and undo each step backwards. Adding becomes taking away, doubling becomes halving. ⚙️',
      id: 'Mulai dari AKHIR dan batalkan setiap langkah secara mundur. Menambah menjadi mengurangi, menggandakan menjadi membagi dua. ⚙️',
    },
    xpReward: 32,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'A number is doubled, then 5 is added, and the answer is 23. What was the number at the start?',
        id: 'Sebuah angka digandakan, lalu ditambah 5, dan hasilnya 23. Berapa angka di awalnya?',
      },
      answer: '9',
      inputType: 'numeric',
    },
  },
  {
    id: 'counting-15',
    worldId: 'counting',
    number: 15,
    title: { en: 'Three Quarters Gone', id: 'Tiga Perempat Hilang' },
    mascotMessage: {
      en: 'Split the stickers into 4 equal piles first. Then think about how many piles are LEFT. 🏷️',
      id: 'Bagi dulu stikernya menjadi 4 tumpukan sama banyak. Lalu pikirkan berapa tumpukan yang TERSISA. 🏷️',
    },
    xpReward: 33,
    puzzle: {
      type: 'math',
      question: {
        en: 'There are 24 stickers. You give away three quarters of them. How many stickers are LEFT?',
        id: 'Ada 24 stiker. Kamu memberikan tiga perempatnya. Berapa stiker yang TERSISA?',
      },
      options: ['6', '8', '12', '18'],
      answer: '6',
    },
  },
  {
    id: 'counting-16',
    worldId: 'counting',
    number: 16,
    title: { en: 'Fractions and Decimals Race', id: 'Adu Pecahan dan Desimal' },
    mascotMessage: {
      en: 'They look different but they are all just amounts. Turn each one into a share of 1 and line them up. 🏁',
      id: 'Bentuknya berbeda tapi semuanya hanyalah nilai. Ubah masing-masing menjadi bagian dari 1 dan urutkan. 🏁',
    },
    xpReward: 35,
    puzzle: {
      type: 'sort',
      items: ['3/4', '0.1', '0.9', '1/2', '0.25'],
      answer: ['0.1', '0.25', '1/2', '3/4', '0.9'],
    },
  },
  {
    id: 'counting-17',
    worldId: 'counting',
    number: 17,
    title: { en: 'The Ferry Count', id: 'Hitungan Kapal Feri' },
    mascotMessage: {
      en: 'Three stops, three changes. Keep a running total in your head after every stop! ⛴️',
      id: 'Tiga perhentian, tiga perubahan. Simpan total berjalan di kepalamu setelah setiap perhentian! ⛴️',
    },
    xpReward: 36,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'A ferry leaves the harbour with 12 passengers on board.',
        id: 'Sebuah feri meninggalkan pelabuhan dengan 12 penumpang.',
      },
      visual: '⛴️',
      steps: [
        {
          id: 'stop1',
          prompt: {
            en: 'At the first island 4 people get off and 8 get on. How many are on board now?',
            id: 'Di pulau pertama 4 orang turun dan 8 orang naik. Berapa penumpang sekarang?',
          },
          options: [
            { id: 'sixteen', emoji: '🧍', label: { en: '16 passengers', id: '16 penumpang' } },
            { id: 'twenty', emoji: '🧍', label: { en: '20 passengers', id: '20 penumpang' } },
            { id: 'eight', emoji: '🧍', label: { en: '8 passengers', id: '8 penumpang' } },
            { id: 'twentyfour', emoji: '🧍', label: { en: '24 passengers', id: '24 penumpang' } },
          ],
          answerId: 'sixteen',
        },
        {
          id: 'stop2',
          prompt: {
            en: 'At the second island half of them get off. How many are still on board?',
            id: 'Di pulau kedua setengahnya turun. Berapa yang masih di atas kapal?',
          },
          options: [
            { id: 'eight', emoji: '🧍', label: { en: '8 passengers', id: '8 penumpang' } },
            { id: 'six', emoji: '🧍', label: { en: '6 passengers', id: '6 penumpang' } },
            { id: 'ten', emoji: '🧍', label: { en: '10 passengers', id: '10 penumpang' } },
            { id: 'twelve', emoji: '🧍', label: { en: '12 passengers', id: '12 penumpang' } },
          ],
          answerId: 'eight',
        },
        {
          id: 'stop3',
          prompt: {
            en: 'At the last island 3 more people get on. How many arrive back at the harbour?',
            id: 'Di pulau terakhir 3 orang lagi naik. Berapa yang tiba kembali di pelabuhan?',
          },
          options: [
            { id: 'eleven', emoji: '⚓', label: { en: '11 passengers', id: '11 penumpang' } },
            { id: 'five', emoji: '⚓', label: { en: '5 passengers', id: '5 penumpang' } },
            { id: 'nineteen', emoji: '⚓', label: { en: '19 passengers', id: '19 penumpang' } },
            { id: 'fifteen', emoji: '⚓', label: { en: '15 passengers', id: '15 penumpang' } },
          ],
          answerId: 'eleven',
        },
      ],
    },
  },
  {
    id: 'counting-18',
    worldId: 'counting',
    number: 18,
    title: { en: 'The Average Score', id: 'Skor Rata-rata' },
    mascotMessage: {
      en: 'An average is what everyone WOULD have scored if the points were shared out evenly. Add them up, then share. 🎮',
      id: 'Rata-rata adalah skor yang AKAN didapat semua orang kalau poinnya dibagi rata. Jumlahkan dulu, lalu bagi. 🎮',
    },
    xpReward: 38,
    puzzle: {
      type: 'math',
      question: {
        en: 'Rafi scored 8, 6, 10 and 8 in four games. What was his average score?',
        id: 'Rafi mendapat skor 8, 6, 10, dan 8 dalam empat permainan. Berapa skor rata-ratanya?',
      },
      options: ['8', '7', '9', '32'],
      answer: '8',
    },
  },
  {
    id: 'counting-19',
    worldId: 'counting',
    number: 19,
    title: { en: 'The Shopping Total', id: 'Total Belanja' },
    mascotMessage: {
      en: 'Two different prices and two different amounts. Work out each kind on its own, then join them. 🛒',
      id: 'Dua harga berbeda dan dua jumlah berbeda. Hitung masing-masing jenis sendiri dulu, baru gabungkan. 🛒',
    },
    xpReward: 40,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'A pen costs 3 coins and a notebook costs 5 coins. Nia buys 4 pens and 2 notebooks. How many coins does she pay in total?',
        id: 'Sebuah pena harganya 3 koin dan sebuah buku tulis harganya 5 koin. Nia membeli 4 pena dan 2 buku tulis. Berapa koin yang dia bayar seluruhnya?',
      },
      answer: '22',
      inputType: 'numeric',
    },
  },
]
