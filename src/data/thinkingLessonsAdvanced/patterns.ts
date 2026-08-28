import type { ThinkingLesson } from '../../types'

export const patternsLessonsAdvanced: ThinkingLesson[] = [
  // ── Pattern World · tier two ─────────────────────────────────
  // Tier one: single repeating units. Tier two: two patterns woven together, two
  // attributes changing at once, cyclic skip counting, and counting *within* a pattern.
  {
    id: 'patterns-10',
    worldId: 'patterns',
    number: 10,
    title: { en: 'Two Patterns Woven', id: 'Dua Pola Teranyam' },
    mascotMessage: {
      en: 'Look only at the 1st, 3rd and 5th spots. Then look only at the 2nd, 4th and 6th. Two patterns are hiding in one row! 🎈',
      id: 'Lihat hanya tempat ke-1, ke-3, dan ke-5. Lalu lihat hanya tempat ke-2, ke-4, dan ke-6. Ada dua pola bersembunyi dalam satu baris! 🎈',
    },
    xpReward: 25,
    puzzle: {
      type: 'pattern',
      items: ['🎈', '🎈🎈', '🎈', '🎈🎈🎈', '🎈', '?'],
      blankIndex: 5,
      options: ['🎈', '🎈🎈', '🎈🎈🎈🎈', '🎈🎈🎈🎈🎈'],
      answer: '🎈🎈🎈🎈',
    },
  },
  {
    id: 'patterns-11',
    worldId: 'patterns',
    number: 11,
    title: { en: 'The Clock That Skips', id: 'Jam yang Melompat' },
    mascotMessage: {
      en: 'This clock does not tick one hour at a time. Work out how big each jump is! 🕐',
      id: 'Jam ini tidak berdetak satu jam sekali. Cari tahu seberapa besar setiap lompatannya! 🕐',
    },
    xpReward: 26,
    puzzle: {
      type: 'pattern',
      items: ['🕐', '🕒', '🕔', '🕖', '?'],
      blankIndex: 4,
      options: ['🕗', '🕘', '🕙', '🕚'],
      answer: '🕘',
    },
  },
  {
    id: 'patterns-12',
    worldId: 'patterns',
    number: 12,
    title: { en: 'The Bead String', id: 'Untaian Manik' },
    mascotMessage: {
      en: 'The beads were threaded left to right, and when a row ran out they carried on at the start of the next row. Keep the rhythm going! 🔵',
      id: 'Manik-manik dironce dari kiri ke kanan, dan saat satu baris habis, lanjut di awal baris berikutnya. Jaga iramanya! 🔵',
    },
    tutorial: {
      title: { en: 'A new way to answer', id: 'Cara menjawab yang baru' },
      body: {
        en: 'This puzzle has no four buttons to choose from. Instead you tap the squares yourself — as many as you need — and then press Check. Tap a square again to change your mind.',
        id: 'Teka-teki ini tidak punya empat tombol pilihan. Kamu sendiri yang mengetuk kotak-kotaknya — sebanyak yang kamu perlukan — lalu tekan Cek. Ketuk lagi sebuah kotak untuk mengubah pilihanmu.',
      },
      example: {
        en: 'Nothing is wrong until you press Check, so try a square, look at it, and change it if it does not feel right.',
        id: 'Belum ada yang salah sampai kamu menekan Cek, jadi coba satu kotak, lihat hasilnya, dan ubah kalau terasa kurang pas.',
      },
    },
    xpReward: 28,
    puzzle: {
      type: 'grid-select',
      question: {
        en: 'Every other spot on the string holds a blue bead. Tap the squares in the last row where the blue beads go.',
        id: 'Setiap tempat selang-seling pada untaian berisi manik biru. Ketuk kotak di baris terakhir tempat manik biru berada.',
      },
      note: {
        en: 'Read the beads the way you read a book: all the way along the first row, then carry straight on into the next row.',
        id: 'Baca manik-maniknya seperti membaca buku: sampai ujung baris pertama, lalu langsung lanjut ke baris berikutnya.',
      },
      cells: [
        ['🔵', '', '🔵', '', '🔵'],
        ['', '🔵', '', '🔵', ''],
        ['', '', '', '', ''],
      ],
      answer: ['2-0', '2-2', '2-4'],
    },
  },
  {
    id: 'patterns-13',
    worldId: 'patterns',
    number: 13,
    title: { en: 'Two Things Change', id: 'Dua Hal Berubah' },
    mascotMessage: {
      en: 'The colour changes every single step. The arrow changes only every two steps. Track them separately! 🔴',
      id: 'Warnanya berubah setiap langkah. Panahnya berubah setiap dua langkah. Lacak keduanya secara terpisah! 🔴',
    },
    xpReward: 30,
    puzzle: {
      type: 'pattern',
      items: ['🔴⬆️', '🔵⬆️', '🔴⬇️', '🔵⬇️', '🔴⬆️', '?'],
      blankIndex: 5,
      options: ['🔵⬆️', '🔴⬆️', '🔵⬇️', '🔴⬇️'],
      answer: '🔵⬆️',
    },
  },
  {
    id: 'patterns-14',
    worldId: 'patterns',
    number: 14,
    title: { en: 'Pattern Detective', id: 'Detektif Pola' },
    mascotMessage: {
      en: 'First find how long the repeating part is. Once you know that, you can jump far ahead without drawing every picture! 🐟',
      id: 'Pertama cari tahu berapa panjang bagian yang berulang. Setelah tahu, kamu bisa melompat jauh ke depan tanpa menggambar semuanya! 🐟',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'This puzzle asks you two questions, one after the other. Your first answer helps you work out the second one. Every link in the chain must be right.',
        id: 'Teka-teki ini menanyakan dua pertanyaan, satu demi satu. Jawaban pertamamu membantumu menemukan jawaban kedua. Setiap mata rantai harus benar.',
      },
      example: {
        en: 'If one link is wrong, the whole chain starts again from step 1 — so think before you tap.',
        id: 'Kalau satu mata rantai salah, seluruh rantainya diulang dari langkah 1 — jadi pikirkan dulu sebelum mengetuk.',
      },
    },
    xpReward: 32,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'A row of sea creatures repeats over and over.',
        id: 'Sebaris hewan laut berulang terus-menerus.',
      },
      visual: '🐟🐟🦀🐟🐟🦀🐟🐟🦀',
      steps: [
        {
          id: 'unit',
          prompt: {
            en: 'How many pictures long is the part that repeats?',
            id: 'Berapa panjang bagian yang berulang, dalam jumlah gambar?',
          },
          options: [
            { id: 'two', emoji: '2️⃣', label: { en: '2 pictures', id: '2 gambar' } },
            { id: 'three', emoji: '3️⃣', label: { en: '3 pictures', id: '3 gambar' } },
            { id: 'four', emoji: '4️⃣', label: { en: '4 pictures', id: '4 gambar' } },
            { id: 'nine', emoji: '9️⃣', label: { en: '9 pictures', id: '9 gambar' } },
          ],
          answerId: 'three',
        },
        {
          id: 'tenth',
          prompt: {
            en: 'So which creature sits in the 10th spot?',
            id: 'Jadi hewan mana yang ada di tempat ke-10?',
          },
          options: [
            { id: 'fish', emoji: '🐟', label: { en: 'A fish', id: 'Ikan' } },
            { id: 'crab', emoji: '🦀', label: { en: 'A crab', id: 'Kepiting' } },
            { id: 'octopus', emoji: '🐙', label: { en: 'An octopus', id: 'Gurita' } },
            { id: 'shell', emoji: '🐚', label: { en: 'A shell', id: 'Kerang' } },
          ],
          answerId: 'fish',
        },
      ],
    },
  },
  {
    id: 'patterns-15',
    worldId: 'patterns',
    number: 15,
    title: { en: 'Count Inside the Pattern', id: 'Hitung di Dalam Pola' },
    mascotMessage: {
      en: 'You do not have to draw all 12 shapes. How many times does the repeating part fit into 12? 🔺',
      id: 'Kamu tidak perlu menggambar 12 bentuk. Berapa kali bagian berulangnya muat dalam 12? 🔺',
    },
    xpReward: 33,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'A pattern repeats 🔺 🔺 🔻 over and over. How many 🔺 are there in the first 12 shapes?',
        id: 'Sebuah pola mengulang 🔺 🔺 🔻 terus-menerus. Ada berapa 🔺 dalam 12 bentuk pertama?',
      },
      visual: '🔺🔺🔻🔺🔺🔻',
      answer: '8',
      inputType: 'numeric',
    },
  },
  {
    id: 'patterns-16',
    worldId: 'patterns',
    number: 16,
    title: { en: 'One Strip Breaks the Rule', id: 'Satu Untai Melanggar Aturan' },
    mascotMessage: {
      en: 'Three of these strips go A B A B. One of them does something else. Read each one slowly! 🔍',
      id: 'Tiga untai ini berpola A B A B. Satu melakukan hal lain. Baca satu per satu dengan pelan! 🔍',
    },
    xpReward: 34,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: {
        en: 'Three strips swap back and forth between two pictures. Which strip does NOT?',
        id: 'Tiga untai berganti bolak-balik antara dua gambar. Untai mana yang TIDAK begitu?',
      },
      items: [
        { id: 'circles', emoji: '⚫⚪⚫⚪', label: { en: 'Strip 1', id: 'Untai 1' } },
        { id: 'diamonds', emoji: '🔶🔷🔶🔷', label: { en: 'Strip 2', id: 'Untai 2' } },
        { id: 'sky', emoji: '🌟🌙🌟🌟', label: { en: 'Strip 3', id: 'Untai 3' } },
        { id: 'fruit', emoji: '🍎🍐🍎🍐', label: { en: 'Strip 4', id: 'Untai 4' } },
      ],
      correctIds: ['sky'],
    },
  },
  {
    id: 'patterns-17',
    worldId: 'patterns',
    number: 17,
    title: { en: 'Where Is the Fourth Bear?', id: 'Di Mana Beruang Keempat?' },
    mascotMessage: {
      en: 'The bear shows up once in every repeat. So where does the 4th repeat end? 🐻',
      id: 'Beruang muncul sekali di setiap pengulangan. Jadi di mana pengulangan ke-4 berakhir? 🐻',
    },
    xpReward: 35,
    puzzle: {
      type: 'math',
      question: {
        en: 'The row 🐧 🐧 🐻 keeps repeating. In which position does the 4th bear stand?',
        id: 'Baris 🐧 🐧 🐻 terus berulang. Di posisi ke berapa beruang keempat berdiri?',
      },
      visual: '🐧🐧🐻🐧🐧🐻🐧🐧🐻',
      options: ['9', '10', '11', '12'],
      answer: '12',
    },
  },
  {
    id: 'patterns-18',
    worldId: 'patterns',
    number: 18,
    title: { en: 'The Growing Garden', id: 'Kebun yang Bertumbuh' },
    mascotMessage: {
      en: 'Work out one row first. Then add all the rows together — do not lose count! 🌻',
      id: 'Cari tahu satu baris dulu. Lalu jumlahkan semua barisnya — jangan sampai salah hitung! 🌻',
    },
    xpReward: 37,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'In a garden, row 1 has 2 flowers, and every new row has 2 more flowers than the row before it.',
        id: 'Di sebuah kebun, baris 1 punya 2 bunga, dan setiap baris baru punya 2 bunga lebih banyak dari baris sebelumnya.',
      },
      visual: '🌻🌻',
      steps: [
        {
          id: 'row3',
          prompt: { en: 'How many flowers are in row 3?', id: 'Ada berapa bunga di baris 3?' },
          options: [
            { id: 'four', emoji: '4️⃣', label: { en: '4 flowers', id: '4 bunga' } },
            { id: 'five', emoji: '5️⃣', label: { en: '5 flowers', id: '5 bunga' } },
            { id: 'six', emoji: '6️⃣', label: { en: '6 flowers', id: '6 bunga' } },
            { id: 'eight', emoji: '8️⃣', label: { en: '8 flowers', id: '8 bunga' } },
          ],
          answerId: 'six',
        },
        {
          id: 'total',
          prompt: {
            en: 'How many flowers are in rows 1, 2 and 3 all together?',
            id: 'Ada berapa bunga di baris 1, 2, dan 3 secara keseluruhan?',
          },
          options: [
            { id: 'ten', emoji: '🔟', label: { en: '10 flowers', id: '10 bunga' } },
            { id: 'twelve', emoji: '🌼', label: { en: '12 flowers', id: '12 bunga' } },
            { id: 'fourteen', emoji: '🌷', label: { en: '14 flowers', id: '14 bunga' } },
            { id: 'eighteen', emoji: '🌺', label: { en: '18 flowers', id: '18 bunga' } },
          ],
          answerId: 'twelve',
        },
      ],
    },
  },
  {
    id: 'patterns-19',
    worldId: 'patterns',
    number: 19,
    title: { en: 'Weather and Plant', id: 'Cuaca dan Tanaman' },
    mascotMessage: {
      en: 'The weather takes turns between two pictures. The plant walks through three. They do not line up — follow each one on its own! ☀️',
      id: 'Cuaca bergantian antara dua gambar. Tanamannya berjalan melewati tiga. Keduanya tidak sejajar — ikuti masing-masing sendiri-sendiri! ☀️',
    },
    xpReward: 40,
    puzzle: {
      type: 'pattern',
      items: ['☀️🌱', '🌧️🌿', '☀️🌳', '🌧️🌱', '☀️🌿', '?'],
      blankIndex: 5,
      options: ['🌧️🌳', '☀️🌳', '🌧️🌱', '☀️🌿'],
      answer: '🌧️🌳',
    },
  },
]
