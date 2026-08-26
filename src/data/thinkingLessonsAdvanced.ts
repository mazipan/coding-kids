import type { ThinkingLesson } from '../types'

/**
 * Tier two of the thinking path — lessons 10–19 of every world.
 *
 * Tier one (lessons 0–9, in `thinkingLessons.ts`) teaches each world's core idea. Tier
 * two raises the cognitive load rather than the reading load (INV-Q5): compound
 * conditions, chained reasoning, tracking a list that changes under you, composing two
 * transformations, satisfying several constraints at once.
 *
 * Two selection models exist only here:
 *   `multi-step`   a chain of linked questions — one wrong link fails the whole chain
 *   `grid-select`  tap many squares to build a shape or mark every spot a rule allows
 *
 * The first lesson in a world that uses one of them carries a `tutorial` explaining it.
 */
export const THINKING_LESSONS_ADVANCED: ThinkingLesson[] = [
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

  // ── Logic Land · tier two ────────────────────────────────────
  // Tier one: single IF, one AND, one transitive chain. Tier two: OR, NOT, exclusive
  // OR, first-match-wins branching, contrapositive, "only if", and some-versus-all.
  {
    id: 'logic-10',
    worldId: 'logic',
    number: 10,
    title: { en: 'The Ticket Gate', id: 'Gerbang Tiket' },
    mascotMessage: {
      en: 'A rule with OR is generous: you only need ONE of the two things to be true. 🎢',
      id: 'Aturan dengan ATAU itu murah hati: cukup SATU dari dua hal yang benar. 🎢',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'From here on, some puzzles ask you several questions in a row. Each answer you give is kept on screen, because you will need it for the next question.',
        id: 'Mulai sekarang, beberapa teka-teki menanyakan beberapa pertanyaan berturut-turut. Setiap jawabanmu tetap di layar, karena kamu akan memerlukannya untuk pertanyaan berikutnya.',
      },
      example: {
        en: 'Get one link wrong and the whole chain restarts, so read every step carefully.',
        id: 'Satu mata rantai salah, seluruh rantainya diulang, jadi baca setiap langkah dengan teliti.',
      },
    },
    xpReward: 25,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Ride rule: you may ride IF you are taller than 120 cm OR you are with an adult.',
        id: 'Aturan wahana: kamu boleh naik JIKA tinggimu lebih dari 120 cm ATAU kamu bersama orang dewasa.',
      },
      steps: [
        {
          id: 'alone',
          prompt: {
            en: 'Sam is 110 cm tall and he is on his own. May he ride?',
            id: 'Sam tingginya 110 cm dan dia sendirian. Bolehkah dia naik?',
          },
          options: [
            { id: 'no', emoji: '🚫', label: { en: 'No — neither part is true', id: 'Tidak — kedua bagiannya tidak benar' } },
            { id: 'yes', emoji: '✅', label: { en: 'Yes — he is nearly tall enough', id: 'Boleh — tingginya hampir cukup' } },
            { id: 'maybe', emoji: '🤷', label: { en: 'We cannot tell from the rule', id: 'Tidak bisa ditentukan dari aturannya' } },
            { id: 'both', emoji: '📏', label: { en: 'Only if he is also with an adult', id: 'Hanya jika dia juga bersama orang dewasa' } },
          ],
          answerId: 'no',
        },
        {
          id: 'aunt',
          prompt: {
            en: 'Now his aunt comes and stands with him. He is still 110 cm. May he ride?',
            id: 'Sekarang bibinya datang dan menemaninya. Tingginya tetap 110 cm. Bolehkah dia naik?',
          },
          options: [
            { id: 'yes', emoji: '✅', label: { en: 'Yes — the second part of OR is now true', id: 'Boleh — bagian kedua dari ATAU kini benar' } },
            { id: 'no', emoji: '🚫', label: { en: 'No — he is still too short', id: 'Tidak — dia masih terlalu pendek' } },
            { id: 'grow', emoji: '📏', label: { en: 'Only when he grows to 120 cm', id: 'Hanya kalau tingginya sudah 120 cm' } },
            { id: 'unclear', emoji: '🤷', label: { en: 'The rule does not say', id: 'Aturannya tidak menyebutkan' } },
          ],
          answerId: 'yes',
        },
      ],
    },
  },
  {
    id: 'logic-11',
    worldId: 'logic',
    number: 11,
    title: { en: 'The Word NOT', id: 'Kata TIDAK' },
    mascotMessage: {
      en: 'The word NOT flips a rule around. Read it twice before you decide! 🚦',
      id: 'Kata TIDAK membalik sebuah aturan. Baca dua kali sebelum memutuskan! 🚦',
    },
    xpReward: 26,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Road rule: if a light is NOT green, you must stop. The light is red. So you must stop.',
        id: 'Aturan jalan: jika lampu TIDAK hijau, kamu harus berhenti. Lampunya merah. Jadi kamu harus berhenti.',
      },
      answer: true,
    },
  },
  {
    id: 'logic-12',
    worldId: 'logic',
    number: 12,
    title: { en: 'One or the Other', id: 'Satu atau yang Lain' },
    mascotMessage: {
      en: '"Either... or... but not both" is a strict rule. Taking both breaks it. 🍲',
      id: '"Entah... atau... tapi tidak keduanya" adalah aturan yang ketat. Mengambil keduanya melanggarnya. 🍲',
    },
    xpReward: 28,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Lunch rule: you may take EITHER the soup OR the salad, but NOT both. Ravi puts soup and salad on his tray. What happens?',
        id: 'Aturan makan siang: kamu boleh mengambil SUP ATAU SALAD, tapi TIDAK keduanya. Ravi menaruh sup dan salad di nampannya. Apa yang terjadi?',
      },
      options: [
        { id: 'broken', emoji: '🚫', label: { en: 'He has broken the rule and must put one back', id: 'Dia melanggar aturan dan harus mengembalikan satu' } },
        { id: 'fine', emoji: '👍', label: { en: 'That is fine — the rule allows both', id: 'Tidak apa-apa — aturannya membolehkan keduanya' } },
        { id: 'extra', emoji: '🍰', label: { en: 'He gets a bonus pudding for taking two', id: 'Dia dapat puding bonus karena mengambil dua' } },
        { id: 'neither', emoji: '🥄', label: { en: 'He must now take neither of them', id: 'Sekarang dia tidak boleh mengambil keduanya' } },
      ],
      answerId: 'broken',
    },
  },
  {
    id: 'logic-13',
    worldId: 'logic',
    number: 13,
    title: { en: 'The Red Badge', id: 'Lencana Merah' },
    mascotMessage: {
      en: 'The rule tells you what a red badge lets you do. It never said a red badge is the ONLY way in! 🔴',
      id: 'Aturannya memberitahu apa yang boleh dilakukan pemilik lencana merah. Aturannya tidak pernah bilang lencana merah satu-satunya jalan masuk! 🔴',
    },
    xpReward: 30,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rule: every student with a red badge may enter the lab. Dita does NOT have a red badge. So Dita definitely cannot enter the lab.',
        id: 'Aturan: setiap siswa dengan lencana merah boleh masuk lab. Dita TIDAK punya lencana merah. Jadi Dita pasti tidak bisa masuk lab.',
      },
      answer: false,
    },
  },
  {
    id: 'logic-14',
    worldId: 'logic',
    number: 14,
    title: { en: 'The Sorting Robot', id: 'Robot Pemilah' },
    mascotMessage: {
      en: 'The robot checks its rules from the top down and stops at the FIRST one that fits. 🤖',
      id: 'Robot memeriksa aturannya dari atas ke bawah dan berhenti di aturan PERTAMA yang cocok. 🤖',
    },
    xpReward: 32,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'A robot sorts balls with three rules, checked in this order: IF the ball is big put it in bin A. ELSE IF the ball is blue put it in bin B. ELSE put it in bin C.',
        id: 'Robot memilah bola dengan tiga aturan, diperiksa berurutan: JIKA bolanya besar masukkan ke kotak A. JIKA TIDAK, kalau bolanya biru masukkan ke kotak B. SELAIN ITU masukkan ke kotak C.',
      },
      steps: [
        {
          id: 'bigblue',
          prompt: { en: 'A big BLUE ball rolls in. Which bin?', id: 'Sebuah bola BIRU besar masuk. Kotak mana?' },
          options: [
            { id: 'a', emoji: '📦', label: { en: 'Bin A', id: 'Kotak A' } },
            { id: 'b', emoji: '📦', label: { en: 'Bin B', id: 'Kotak B' } },
            { id: 'c', emoji: '📦', label: { en: 'Bin C', id: 'Kotak C' } },
            { id: 'ab', emoji: '🔀', label: { en: 'Both bin A and bin B', id: 'Kotak A dan kotak B' } },
          ],
          answerId: 'a',
        },
        {
          id: 'smallblue',
          prompt: { en: 'Now a small BLUE ball. Which bin?', id: 'Sekarang bola BIRU kecil. Kotak mana?' },
          options: [
            { id: 'b', emoji: '📦', label: { en: 'Bin B', id: 'Kotak B' } },
            { id: 'a', emoji: '📦', label: { en: 'Bin A', id: 'Kotak A' } },
            { id: 'c', emoji: '📦', label: { en: 'Bin C', id: 'Kotak C' } },
            { id: 'none', emoji: '🚫', label: { en: 'No bin fits it', id: 'Tidak ada kotak yang cocok' } },
          ],
          answerId: 'b',
        },
        {
          id: 'smallred',
          prompt: { en: 'And a small RED ball?', id: 'Dan bola MERAH kecil?' },
          options: [
            { id: 'c', emoji: '📦', label: { en: 'Bin C', id: 'Kotak C' } },
            { id: 'a', emoji: '📦', label: { en: 'Bin A', id: 'Kotak A' } },
            { id: 'b', emoji: '📦', label: { en: 'Bin B', id: 'Kotak B' } },
            { id: 'stuck', emoji: '🤖', label: { en: 'The robot gets stuck', id: 'Robotnya macet' } },
          ],
          answerId: 'c',
        },
      ],
    },
  },
  {
    id: 'logic-15',
    worldId: 'logic',
    number: 15,
    title: { en: 'Who Is Breaking the Rule?', id: 'Siapa yang Melanggar Aturan?' },
    mascotMessage: {
      en: 'The club rule uses AND, so missing just ONE of the two things already breaks it. 🎩',
      id: 'Aturan klub memakai DAN, jadi kurang SATU saja dari dua hal itu sudah melanggarnya. 🎩',
    },
    xpReward: 33,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Club rule: every member must wear a hat AND boots. Tap everyone who is BREAKING the rule.',
        id: 'Aturan klub: setiap anggota harus memakai topi DAN sepatu bot. Ketuk semua yang MELANGGAR aturan.',
      },
      items: [
        { id: 'both', emoji: '🤠', label: { en: 'Hat and boots', id: 'Topi dan sepatu bot' } },
        { id: 'hatonly', emoji: '🎩', label: { en: 'Hat, no boots', id: 'Topi, tanpa sepatu bot' } },
        { id: 'bootsonly', emoji: '🥾', label: { en: 'Boots, no hat', id: 'Sepatu bot, tanpa topi' } },
        { id: 'neither', emoji: '🧑', label: { en: 'No hat, no boots', id: 'Tanpa topi, tanpa sepatu bot' } },
      ],
      correctIds: ['hatonly', 'bootsonly', 'neither'],
    },
  },
  {
    id: 'logic-16',
    worldId: 'logic',
    number: 16,
    title: { en: 'Only If', id: 'Hanya Jika' },
    mascotMessage: {
      en: '"Only if" is a promise about what MUST have been true. Work backwards from what happened. 🚪',
      id: '"Hanya jika" adalah janji tentang apa yang PASTI sudah benar. Berpikirlah mundur dari apa yang terjadi. 🚪',
    },
    xpReward: 34,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Rule: the gate opens ONLY IF the card is valid. The gate just opened. What MUST be true?',
        id: 'Aturan: gerbang terbuka HANYA JIKA kartunya sah. Gerbang baru saja terbuka. Apa yang PASTI benar?',
      },
      options: [
        { id: 'valid', emoji: '🎟️', label: { en: 'The card was valid', id: 'Kartunya sah' } },
        { id: 'invalid', emoji: '❌', label: { en: 'The card was not valid', id: 'Kartunya tidak sah' } },
        { id: 'broken', emoji: '🔧', label: { en: 'The gate must be broken', id: 'Gerbangnya pasti rusak' } },
        { id: 'unknown', emoji: '🤷', label: { en: 'Nothing at all can be known', id: 'Tidak ada yang bisa diketahui sama sekali' } },
      ],
      answerId: 'valid',
    },
  },
  {
    id: 'logic-17',
    worldId: 'logic',
    number: 17,
    title: { en: 'Some Is Not All', id: 'Sebagian Bukan Semua' },
    mascotMessage: {
      en: 'The word SOME never promises anything about every single one. 🍏',
      id: 'Kata SEBAGIAN tidak pernah menjanjikan apa pun tentang setiap satu-satunya. 🍏',
    },
    xpReward: 36,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Some fruits are red. An apple is a fruit. Therefore an apple must be red.',
        id: 'Sebagian buah berwarna merah. Apel adalah buah. Maka apel pasti berwarna merah.',
      },
      answer: false,
    },
  },
  {
    id: 'logic-18',
    worldId: 'logic',
    number: 18,
    title: { en: 'Working Backwards', id: 'Berpikir Mundur' },
    mascotMessage: {
      en: 'If a rule promises something and that something did NOT happen, you learn a lot. But careful — sometimes you learn nothing at all! 🌧️',
      id: 'Kalau sebuah aturan menjanjikan sesuatu dan sesuatu itu TIDAK terjadi, kamu belajar banyak. Tapi hati-hati — kadang kamu tidak belajar apa-apa! 🌧️',
    },
    xpReward: 38,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Two promises were made this morning. First: IF it rains, the match is cancelled. Second: IF the match is cancelled, we go to the cinema. In the evening we learn that the match was NOT cancelled.',
        id: 'Dua janji dibuat pagi ini. Pertama: JIKA hujan, pertandingan dibatalkan. Kedua: JIKA pertandingan dibatalkan, kita pergi ke bioskop. Sore harinya kita tahu pertandingan TIDAK dibatalkan.',
      },
      steps: [
        {
          id: 'rain',
          prompt: { en: 'Did it rain?', id: 'Apakah tadi hujan?' },
          options: [
            { id: 'no', emoji: '☀️', label: { en: 'No — rain would have cancelled it', id: 'Tidak — hujan pasti membatalkannya' } },
            { id: 'yes', emoji: '🌧️', label: { en: 'Yes, it rained', id: 'Ya, tadi hujan' } },
            { id: 'unknown', emoji: '🤷', label: { en: 'We cannot tell', id: 'Tidak bisa ditentukan' } },
            { id: 'later', emoji: '🌂', label: { en: 'It will rain later instead', id: 'Nanti akan hujan sebagai gantinya' } },
          ],
          answerId: 'no',
        },
        {
          id: 'cinema',
          prompt: {
            en: 'Do we definitely go to the cinema?',
            id: 'Apakah kita pasti pergi ke bioskop?',
          },
          options: [
            { id: 'unknown', emoji: '🤷', label: { en: 'We cannot tell — the promise never said what happens otherwise', id: 'Tidak bisa ditentukan — janjinya tidak menyebutkan apa yang terjadi kalau tidak' } },
            { id: 'yes', emoji: '🎬', label: { en: 'Yes, definitely', id: 'Ya, pasti' } },
            { id: 'no', emoji: '🚫', label: { en: 'No, definitely not', id: 'Tidak, pasti tidak' } },
            { id: 'rain', emoji: '🌧️', label: { en: 'Only if it rains later', id: 'Hanya kalau nanti hujan' } },
          ],
          answerId: 'unknown',
        },
      ],
    },
  },
  {
    id: 'logic-19',
    worldId: 'logic',
    number: 19,
    title: { en: 'The Lucky Number Rule', id: 'Aturan Angka Beruntung' },
    mascotMessage: {
      en: 'Test the rule on BOTH numbers before you answer. If either half is wrong, the whole statement is false. 🍀',
      id: 'Uji aturannya pada KEDUA angka sebelum menjawab. Kalau salah satu bagiannya salah, seluruh pernyataannya salah. 🍀',
    },
    xpReward: 40,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'A number is "lucky" only when it is even AND bigger than 10. So 12 is lucky, and 8 is not lucky.',
        id: 'Sebuah angka disebut "beruntung" hanya jika genap DAN lebih besar dari 10. Jadi 12 beruntung, dan 8 tidak beruntung.',
      },
      answer: true,
    },
  },

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

  // ── Nature Quest · tier two ──────────────────────────────────
  // Tier one: single cause and effect. Tier two: whole systems — food chains, cycles,
  // adaptation, decomposers, and how a fair experiment is actually set up.
  {
    id: 'nature-10',
    worldId: 'nature',
    number: 10,
    title: { en: 'The Food Chain', id: 'Rantai Makanan' },
    mascotMessage: {
      en: 'Pull one link out of a food chain and everything above and below it feels it. 🌿',
      id: 'Cabut satu mata rantai makanan dan semua yang di atas dan di bawahnya ikut terasa. 🌿',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'This puzzle asks you three questions in a row about the same chain. Each answer you give sets up the next question.',
        id: 'Teka-teki ini menanyakan tiga pertanyaan berturut-turut tentang rantai yang sama. Setiap jawabanmu menyiapkan pertanyaan berikutnya.',
      },
      example: {
        en: 'One wrong link and the chain restarts from step 1 — think each step through first.',
        id: 'Satu mata rantai salah dan rantainya diulang dari langkah 1 — pikirkan dulu setiap langkahnya.',
      },
    },
    xpReward: 28,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'In a meadow the grass is eaten by rabbits, and the rabbits are hunted by foxes.',
        id: 'Di sebuah padang rumput, rumput dimakan kelinci, dan kelinci diburu rubah.',
      },
      visual: '🌿🐇🦊',
      steps: [
        {
          id: 'eats',
          prompt: { en: 'Where does the fox get its energy from?', id: 'Dari mana rubah mendapat energinya?' },
          options: [
            { id: 'rabbit', emoji: '🐇', label: { en: 'From eating the rabbits', id: 'Dari memakan kelinci' } },
            { id: 'grass', emoji: '🌿', label: { en: 'From eating the grass', id: 'Dari memakan rumput' } },
            { id: 'sun', emoji: '☀️', label: { en: 'Straight from the sunlight', id: 'Langsung dari sinar matahari' } },
            { id: 'soil', emoji: '🟫', label: { en: 'From the soil', id: 'Dari tanah' } },
          ],
          answerId: 'rabbit',
        },
        {
          id: 'foxesleave',
          prompt: {
            en: 'Every fox leaves the meadow. What happens to the rabbits FIRST?',
            id: 'Semua rubah meninggalkan padang rumput. Apa yang PERTAMA terjadi pada kelinci?',
          },
          options: [
            { id: 'more', emoji: '📈', label: { en: 'There are more and more rabbits', id: 'Kelincinya makin banyak' } },
            { id: 'fewer', emoji: '📉', label: { en: 'There are fewer rabbits', id: 'Kelincinya makin sedikit' } },
            { id: 'same', emoji: '➖', label: { en: 'Nothing changes at all', id: 'Tidak ada yang berubah' } },
            { id: 'grass', emoji: '🌿', label: { en: 'They start eating foxes', id: 'Mereka mulai memakan rubah' } },
          ],
          answerId: 'more',
        },
        {
          id: 'grassafter',
          prompt: { en: 'And then what happens to the grass?', id: 'Lalu apa yang terjadi pada rumputnya?' },
          options: [
            { id: 'less', emoji: '🍂', label: { en: 'Much less grass is left', id: 'Rumput yang tersisa jauh lebih sedikit' } },
            { id: 'more', emoji: '🌱', label: { en: 'The grass grows thicker', id: 'Rumputnya tumbuh makin lebat' } },
            { id: 'same', emoji: '➖', label: { en: 'The grass is not affected', id: 'Rumputnya tidak terpengaruh' } },
            { id: 'color', emoji: '🎨', label: { en: 'The grass changes colour', id: 'Rumputnya berubah warna' } },
          ],
          answerId: 'less',
        },
      ],
    },
  },
  {
    id: 'nature-11',
    worldId: 'nature',
    number: 11,
    title: { en: 'Not a Plant', id: 'Bukan Tumbuhan' },
    mascotMessage: {
      en: 'Plants make their own food from sunlight. Ask yourself whether this one can do that! 🍄',
      id: 'Tumbuhan membuat makanannya sendiri dari sinar matahari. Tanyakan apakah yang ini bisa melakukannya! 🍄',
    },
    xpReward: 28,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Mushrooms are plants, because they grow out of the ground and do not move about.',
        id: 'Jamur adalah tumbuhan, karena tumbuh dari tanah dan tidak berpindah-pindah.',
      },
      answer: false,
    },
  },
  {
    id: 'nature-12',
    worldId: 'nature',
    number: 12,
    title: { en: 'The Water Cycle', id: 'Siklus Air' },
    mascotMessage: {
      en: 'Water goes round and round forever. Start where the sun touches the sea. 💧',
      id: 'Air berputar terus selamanya. Mulailah dari tempat matahari menyentuh laut. 💧',
    },
    xpReward: 30,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'heat', emoji: '☀️', label: { en: 'The sun warms the sea', id: 'Matahari menghangatkan laut' } },
        { id: 'rise', emoji: '💨', label: { en: 'Water rises as invisible vapour', id: 'Air naik sebagai uap tak terlihat' } },
        { id: 'cloud', emoji: '☁️', label: { en: 'The vapour cools into clouds', id: 'Uap mendingin menjadi awan' } },
        { id: 'rain', emoji: '🌧️', label: { en: 'Rain falls from the clouds', id: 'Hujan turun dari awan' } },
        { id: 'river', emoji: '🏞️', label: { en: 'Rivers carry the water back to the sea', id: 'Sungai membawa air kembali ke laut' } },
      ],
    },
  },
  {
    id: 'nature-13',
    worldId: 'nature',
    number: 13,
    title: { en: 'Built for the Desert', id: 'Dibuat untuk Gurun' },
    mascotMessage: {
      en: 'In a desert, water is the treasure. Which body part would help a plant KEEP water? 🌵',
      id: 'Di gurun, air adalah harta. Bagian tubuh mana yang membantu tanaman MENYIMPAN air? 🌵',
    },
    xpReward: 32,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'IF a plant must survive months with almost no rain, which feature helps it most?',
        id: 'JIKA sebuah tanaman harus bertahan berbulan-bulan hampir tanpa hujan, ciri mana yang paling membantunya?',
      },
      options: [
        { id: 'thick', emoji: '🌵', label: { en: 'A thick stem that stores water inside', id: 'Batang tebal yang menyimpan air di dalamnya' } },
        { id: 'leaves', emoji: '🍃', label: { en: 'Very large soft leaves', id: 'Daun besar yang lembut' } },
        { id: 'shallow', emoji: '🌱', label: { en: 'Roots that stay right at the surface', id: 'Akar yang hanya di permukaan' } },
        { id: 'petals', emoji: '🌸', label: { en: 'Bright thin petals all year round', id: 'Kelopak tipis cerah sepanjang tahun' } },
      ],
      answerId: 'thick',
    },
  },
  {
    id: 'nature-14',
    worldId: 'nature',
    number: 14,
    title: { en: 'Who Clears the Forest Floor?', id: 'Siapa Membersihkan Lantai Hutan?' },
    mascotMessage: {
      en: 'Something has to break dead leaves down, or the forest would be buried. Tap every living helper. 🍂',
      id: 'Ada yang harus mengurai daun mati, kalau tidak hutan akan tertimbun. Ketuk setiap penolong yang hidup. 🍂',
    },
    xpReward: 33,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Tap everything that helps a dead leaf rot away.',
        id: 'Ketuk semua yang membantu daun mati membusuk.',
      },
      items: [
        { id: 'fungus', emoji: '🍄', label: { en: 'Fungus', id: 'Jamur' } },
        { id: 'worm', emoji: '🪱', label: { en: 'Earthworm', id: 'Cacing tanah' } },
        { id: 'bacteria', emoji: '🦠', label: { en: 'Bacteria', id: 'Bakteri' } },
        { id: 'rock', emoji: '🪨', label: { en: 'A rock', id: 'Batu' } },
      ],
      correctIds: ['fungus', 'worm', 'bacteria'],
    },
  },
  {
    id: 'nature-15',
    worldId: 'nature',
    number: 15,
    title: { en: 'Leaves All Year', id: 'Daun Sepanjang Tahun' },
    mascotMessage: {
      en: 'Cold is one reason leaves drop — but is it the ONLY reason anywhere in the world? 🌴',
      id: 'Dingin adalah satu alasan daun gugur — tapi apakah itu SATU-SATUNYA alasan di seluruh dunia? 🌴',
    },
    xpReward: 34,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Trees drop their leaves only because it gets cold, so in a warm rainforest no tree ever loses a leaf.',
        id: 'Pohon menggugurkan daunnya hanya karena udara menjadi dingin, jadi di hutan hujan yang hangat tidak ada pohon yang pernah kehilangan daun.',
      },
      answer: false,
    },
  },
  {
    id: 'nature-16',
    worldId: 'nature',
    number: 16,
    title: { en: 'A Fair Test', id: 'Uji yang Adil' },
    mascotMessage: {
      en: 'A fair test changes ONE thing and keeps everything else the same. Otherwise you never know what did it! 🔬',
      id: 'Uji yang adil mengubah SATU hal dan menjaga sisanya tetap sama. Kalau tidak, kamu tidak akan pernah tahu penyebabnya! 🔬',
    },
    xpReward: 36,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Nia wants to find out whether plants really need light. She has two pots of the same seedling.',
        id: 'Nia ingin tahu apakah tanaman benar-benar butuh cahaya. Dia punya dua pot berisi bibit yang sama.',
      },
      visual: '🪴🪴',
      steps: [
        {
          id: 'different',
          prompt: {
            en: 'What must be DIFFERENT between the two pots?',
            id: 'Apa yang harus BERBEDA antara kedua pot itu?',
          },
          options: [
            { id: 'light', emoji: '💡', label: { en: 'Only how much light each one gets', id: 'Hanya seberapa banyak cahaya yang diterima masing-masing' } },
            { id: 'water', emoji: '💧', label: { en: 'How much water each one gets', id: 'Seberapa banyak air yang diterima masing-masing' } },
            { id: 'soil', emoji: '🟫', label: { en: 'The kind of soil in each pot', id: 'Jenis tanah di setiap pot' } },
            { id: 'plant', emoji: '🌱', label: { en: 'The kind of plant in each pot', id: 'Jenis tanaman di setiap pot' } },
          ],
          answerId: 'light',
        },
        {
          id: 'same',
          prompt: { en: 'And what must be kept the SAME?', id: 'Dan apa yang harus dijaga tetap SAMA?' },
          options: [
            { id: 'everything', emoji: '⚖️', label: { en: 'Water, soil and pot size — everything else', id: 'Air, tanah, dan ukuran pot — semua yang lain' } },
            { id: 'nothing', emoji: '🎲', label: { en: 'Nothing needs to match', id: 'Tidak ada yang perlu sama' } },
            { id: 'light', emoji: '💡', label: { en: 'The amount of light', id: 'Jumlah cahayanya' } },
            { id: 'time', emoji: '⏱️', label: { en: 'Only the time of day she looks at them', id: 'Hanya jam berapa dia melihatnya' } },
          ],
          answerId: 'everything',
        },
        {
          id: 'conclude',
          prompt: {
            en: 'The dark pot turned yellow and the bright pot stayed green. What has she shown?',
            id: 'Pot yang gelap menguning dan pot yang terang tetap hijau. Apa yang sudah dia buktikan?',
          },
          options: [
            { id: 'needlight', emoji: '🌞', label: { en: 'These plants need light to stay green', id: 'Tanaman ini butuh cahaya untuk tetap hijau' } },
            { id: 'needwater', emoji: '💧', label: { en: 'These plants need more water', id: 'Tanaman ini butuh lebih banyak air' } },
            { id: 'nothing', emoji: '🤷', label: { en: 'Nothing — the test was unfair', id: 'Tidak ada — ujinya tidak adil' } },
            { id: 'yellow', emoji: '🟡', label: { en: 'Yellow plants grow faster', id: 'Tanaman kuning tumbuh lebih cepat' } },
          ],
          answerId: 'needlight',
        },
      ],
    },
  },
  {
    id: 'nature-17',
    worldId: 'nature',
    number: 17,
    title: { en: 'Built for the Job', id: 'Diciptakan untuk Tugasnya' },
    mascotMessage: {
      en: 'Every animal here carries a tool for the place it lives. Match the tool to the animal! 🐫',
      id: 'Setiap hewan di sini membawa alat untuk tempat tinggalnya. Cocokkan alat dengan hewannya! 🐫',
    },
    xpReward: 36,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'camel',
          leftEmoji: '🐫',
          leftLabel: { en: 'Camel', id: 'Unta' },
          rightId: 'hump',
          rightEmoji: '🏜️',
          rightLabel: { en: 'Stores fat for long journeys without food', id: 'Menyimpan lemak untuk perjalanan panjang tanpa makanan' },
        },
        {
          leftId: 'penguin',
          leftEmoji: '🐧',
          leftLabel: { en: 'Penguin', id: 'Penguin' },
          rightId: 'blubber',
          rightEmoji: '🧊',
          rightLabel: { en: 'A thick fat layer for swimming in icy water', id: 'Lapisan lemak tebal untuk berenang di air es' },
        },
        {
          leftId: 'bat',
          leftEmoji: '🦇',
          leftLabel: { en: 'Bat', id: 'Kelelawar' },
          rightId: 'sound',
          rightEmoji: '🔊',
          rightLabel: { en: 'Finds food using sound in total darkness', id: 'Menemukan makanan dengan suara dalam gelap total' },
        },
        {
          leftId: 'chameleon',
          leftEmoji: '🦎',
          leftLabel: { en: 'Chameleon', id: 'Bunglon' },
          rightId: 'colour',
          rightEmoji: '🎨',
          rightLabel: { en: 'Changes colour to hide against branches', id: 'Berubah warna untuk bersembunyi di antara ranting' },
        },
      ],
    },
  },
  {
    id: 'nature-18',
    worldId: 'nature',
    number: 18,
    title: { en: 'The Bare Hillside', id: 'Lereng yang Gundul' },
    mascotMessage: {
      en: 'Tree roots hold the soil together like a net. Take the net away, then add heavy rain... ⛰️',
      id: 'Akar pohon menahan tanah seperti jaring. Hilangkan jaringnya, lalu tambahkan hujan deras... ⛰️',
    },
    xpReward: 38,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'IF every tree on a steep hill is cut down and then heavy rain falls, what is most likely to happen?',
        id: 'JIKA semua pohon di lereng curam ditebang lalu turun hujan deras, apa yang paling mungkin terjadi?',
      },
      options: [
        { id: 'slide', emoji: '⛰️', label: { en: 'The soil slides down the hillside', id: 'Tanahnya longsor menuruni lereng' } },
        { id: 'taller', emoji: '📏', label: { en: 'The hill grows taller', id: 'Bukitnya menjadi lebih tinggi' } },
        { id: 'stops', emoji: '🌤️', label: { en: 'The rain stops early', id: 'Hujannya berhenti lebih awal' } },
        { id: 'richer', emoji: '🌾', label: { en: 'The soil becomes much richer', id: 'Tanahnya menjadi jauh lebih subur' } },
      ],
      answerId: 'slide',
    },
  },
  {
    id: 'nature-19',
    worldId: 'nature',
    number: 19,
    title: { en: 'One Pond, One System', id: 'Satu Kolam, Satu Sistem' },
    mascotMessage: {
      en: 'Nothing in a pond lives on its own. Everything is joined to everything else. 🪷',
      id: 'Tidak ada yang hidup sendirian di kolam. Semuanya terhubung satu sama lain. 🪷',
    },
    xpReward: 40,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'A pond, its fish, its plants, its insects and even its mud all work together as one system — so if every plant died, the fish would be in danger too.',
        id: 'Kolam, ikannya, tumbuhannya, seranggannya, bahkan lumpurnya bekerja bersama sebagai satu sistem — jadi kalau semua tumbuhannya mati, ikannya juga terancam.',
      },
      answer: true,
    },
  },

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

  // ── Step by Step · tier two ──────────────────────────────────
  // Tier one: ten straight "put the steps in order" puzzles. Tier two: the ideas around
  // ordering — big jobs versus small steps, repeated sub-tasks, jobs that can run side
  // by side, what a missing step costs, and why order matters at all.
  {
    id: 'decomposition-10',
    worldId: 'decomposition',
    number: 10,
    title: { en: 'The Party Plan', id: 'Rencana Pesta' },
    mascotMessage: {
      en: 'A big job is made of smaller jobs, and those are made of tiny steps. Which size is each one? 🎉',
      id: 'Tugas besar terdiri dari tugas-tugas kecil, dan itu terdiri dari langkah-langkah mungil. Yang mana ukurannya? 🎉',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'This puzzle asks you three questions about the same plan, one after another. Each answer stays on screen because the next question builds on it.',
        id: 'Teka-teki ini menanyakan tiga pertanyaan tentang rencana yang sama, satu demi satu. Setiap jawaban tetap di layar karena pertanyaan berikutnya dibangun darinya.',
      },
      example: {
        en: 'Get one link wrong and the chain restarts from step 1.',
        id: 'Satu mata rantai salah dan rantainya diulang dari langkah 1.',
      },
    },
    xpReward: 28,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'You are going to throw a birthday party.',
        id: 'Kamu akan mengadakan pesta ulang tahun.',
      },
      visual: '🎂🎈',
      steps: [
        {
          id: 'first',
          prompt: { en: 'Which BIG job has to come first of all?', id: 'Tugas BESAR mana yang harus paling dulu?' },
          options: [
            { id: 'date', emoji: '📅', label: { en: 'Decide the day and the time', id: 'Tentukan hari dan waktunya' } },
            { id: 'balloons', emoji: '🎈', label: { en: 'Blow up the balloons', id: 'Tiup balonnya' } },
            { id: 'cake', emoji: '🍰', label: { en: 'Cut the cake', id: 'Potong kuenya' } },
            { id: 'goodbye', emoji: '👋', label: { en: 'Wave goodbye to the guests', id: 'Melambai pada tamu yang pulang' } },
          ],
          answerId: 'date',
        },
        {
          id: 'inside',
          prompt: {
            en: '"Get the food ready" is a big job. Which of these is a SMALL step inside it?',
            id: '"Siapkan makanannya" adalah tugas besar. Mana yang merupakan LANGKAH KECIL di dalamnya?',
          },
          options: [
            { id: 'sandwich', emoji: '🥪', label: { en: 'Make the sandwiches', id: 'Buat sandwichnya' } },
            { id: 'invite', emoji: '✉️', label: { en: 'Send out the invitations', id: 'Kirim undangannya' } },
            { id: 'clean', emoji: '🧹', label: { en: 'Sweep up after everyone leaves', id: 'Sapu setelah semua pulang' } },
            { id: 'music', emoji: '🎵', label: { en: 'Choose the music', id: 'Pilih musiknya' } },
          ],
          answerId: 'sandwich',
        },
        {
          id: 'after',
          prompt: {
            en: 'Which job can only be done AFTER the guests have arrived?',
            id: 'Tugas mana yang hanya bisa dilakukan SETELAH tamunya datang?',
          },
          options: [
            { id: 'games', emoji: '🎮', label: { en: 'Play the party games', id: 'Main permainan pesta' } },
            { id: 'shop', emoji: '🛒', label: { en: 'Buy the drinks', id: 'Beli minumannya' } },
            { id: 'decorate', emoji: '🎊', label: { en: 'Put up the decorations', id: 'Pasang dekorasinya' } },
            { id: 'bake', emoji: '🧁', label: { en: 'Bake the cake', id: 'Panggang kuenya' } },
          ],
          answerId: 'games',
        },
      ],
    },
  },
  {
    id: 'decomposition-11',
    worldId: 'decomposition',
    number: 11,
    title: { en: 'Not Part of This Job', id: 'Bukan Bagian Tugas Ini' },
    mascotMessage: {
      en: 'All four use water, but only three of them belong to THIS job. 🚗',
      id: 'Keempatnya memakai air, tapi hanya tiga yang termasuk tugas INI. 🚗',
    },
    xpReward: 28,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: {
        en: 'Ayu is breaking the job "wash the car" into steps. Which step does NOT belong to that job?',
        id: 'Ayu memecah tugas "cuci mobil" menjadi langkah-langkah. Langkah mana yang BUKAN bagian dari tugas itu?',
      },
      items: [
        { id: 'bucket', emoji: '🪣', label: { en: 'Fill a bucket with water', id: 'Isi ember dengan air' } },
        { id: 'scrub', emoji: '🧽', label: { en: 'Scrub the doors', id: 'Gosok pintunya' } },
        { id: 'rinse', emoji: '🚿', label: { en: 'Rinse off the soap', id: 'Bilas sabunnya' } },
        { id: 'tomato', emoji: '🌱', label: { en: 'Water the tomato plants', id: 'Siram tanaman tomat' } },
      ],
      correctIds: ['tomato'],
    },
  },
  {
    id: 'decomposition-12',
    worldId: 'decomposition',
    number: 12,
    title: { en: 'The Step You Repeat', id: 'Langkah yang Diulang' },
    mascotMessage: {
      en: 'Some steps happen once. Others happen over and over. Fold the repeat into ONE step! 🥞',
      id: 'Beberapa langkah terjadi sekali. Yang lain terjadi berulang-ulang. Lipat pengulangannya menjadi SATU langkah! 🥞',
    },
    xpReward: 30,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'batter', emoji: '🥣', label: { en: 'Mix the batter', id: 'Aduk adonannya' } },
        { id: 'heat', emoji: '🔥', label: { en: 'Heat the pan', id: 'Panaskan wajannya' } },
        { id: 'repeat', emoji: '🔁', label: { en: 'Repeat 3 times: pour, flip, lift out', id: 'Ulangi 3 kali: tuang, balik, angkat' } },
        { id: 'off', emoji: '🎛️', label: { en: 'Turn the heat off', id: 'Matikan apinya' } },
        { id: 'serve', emoji: '🍽️', label: { en: 'Stack them up and serve', id: 'Tumpuk dan sajikan' } },
      ],
    },
  },
  {
    id: 'decomposition-13',
    worldId: 'decomposition',
    number: 13,
    title: { en: 'Shoes Before Socks', id: 'Sepatu Sebelum Kaus Kaki' },
    mascotMessage: {
      en: 'Some steps only work in one order. Picture what really happens if you swap them! 🧦',
      id: 'Beberapa langkah hanya bekerja dalam satu urutan. Bayangkan apa yang benar-benar terjadi kalau ditukar! 🧦',
    },
    xpReward: 32,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'What happens IF you put your shoes on BEFORE your socks?',
        id: 'Apa yang terjadi JIKA kamu memakai sepatu SEBELUM kaus kaki?',
      },
      options: [
        { id: 'undo', emoji: '🔙', label: { en: 'You have to take the shoes off again to get the socks on', id: 'Kamu harus melepas sepatunya lagi untuk memakai kaus kaki' } },
        { id: 'fine', emoji: '👍', label: { en: 'Nothing changes at all', id: 'Tidak ada yang berubah sama sekali' } },
        { id: 'warm', emoji: '🔥', label: { en: 'Your feet end up warmer', id: 'Kakimu jadi lebih hangat' } },
        { id: 'fit', emoji: '👟', label: { en: 'The shoes fit better that way', id: 'Sepatunya jadi lebih pas' } },
      ],
      answerId: 'undo',
    },
  },
  {
    id: 'decomposition-14',
    worldId: 'decomposition',
    number: 14,
    title: { en: 'While the Rice Cooks', id: 'Sambil Menanak Nasi' },
    mascotMessage: {
      en: 'Some jobs need your hands. Others just need time. Which ones can share the same 20 minutes? 🍚',
      id: 'Beberapa tugas butuh tanganmu. Yang lain hanya butuh waktu. Mana yang bisa berbagi 20 menit yang sama? 🍚',
    },
    xpReward: 33,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Nina puts rice on to cook for 20 minutes. Tap every job she can do WHILE it cooks.',
        id: 'Nina menanak nasi selama 20 menit. Ketuk setiap tugas yang bisa dia lakukan SAMBIL menunggu.',
      },
      items: [
        { id: 'salad', emoji: '🥗', label: { en: 'Chop the salad', id: 'Potong saladnya' } },
        { id: 'table', emoji: '🍽️', label: { en: 'Set the table', id: 'Tata mejanya' } },
        { id: 'serve', emoji: '🍚', label: { en: 'Serve the rice onto plates', id: 'Sajikan nasinya ke piring' } },
        { id: 'sweep', emoji: '🧹', label: { en: 'Sweep the floor', id: 'Sapu lantainya' } },
      ],
      correctIds: ['salad', 'table', 'sweep'],
    },
  },
  {
    id: 'decomposition-15',
    worldId: 'decomposition',
    number: 15,
    title: { en: 'Two Pairs of Hands', id: 'Dua Pasang Tangan' },
    mascotMessage: {
      en: 'If two people each take half the steps and work at the same time, the clock only runs once. ⏱️',
      id: 'Kalau dua orang masing-masing mengambil separuh langkah dan bekerja bersamaan, jamnya hanya berjalan sekali. ⏱️',
    },
    xpReward: 34,
    puzzle: {
      type: 'math',
      question: {
        en: 'A job has 4 small steps and each one takes 6 minutes. Two friends split the steps equally and work at the same time. How many minutes until the job is finished?',
        id: 'Sebuah tugas punya 4 langkah kecil dan masing-masing butuh 6 menit. Dua teman membagi langkahnya sama rata dan bekerja bersamaan. Berapa menit sampai tugasnya selesai?',
      },
      options: ['12', '24', '6', '48'],
      answer: '12',
    },
  },
  {
    id: 'decomposition-16',
    worldId: 'decomposition',
    number: 16,
    title: { en: 'The Missing Step', id: 'Langkah yang Hilang' },
    mascotMessage: {
      en: 'The plan is in the right order — but something was left out completely. What never happened? 🍞',
      id: 'Rencananya sudah urut — tapi ada yang benar-benar terlewat. Apa yang tidak pernah dilakukan? 🍞',
    },
    xpReward: 36,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Ravi\'s plan for toast: 1) put the bread in the toaster, 2) wait two minutes, 3) eat it. The bread came out cold and soft. Which step is missing?',
        id: 'Rencana Ravi membuat roti panggang: 1) masukkan roti ke pemanggang, 2) tunggu dua menit, 3) makan. Rotinya keluar dingin dan lembek. Langkah mana yang hilang?',
      },
      options: [
        { id: 'switch', emoji: '🔌', label: { en: 'Switch the toaster on', id: 'Nyalakan pemanggangnya' } },
        { id: 'butter', emoji: '🧈', label: { en: 'Butter the bread', id: 'Olesi rotinya dengan mentega' } },
        { id: 'slice', emoji: '🔪', label: { en: 'Slice the bread', id: 'Iris rotinya' } },
        { id: 'plate', emoji: '🍽️', label: { en: 'Wash the plate', id: 'Cuci piringnya' } },
      ],
      answerId: 'switch',
    },
  },
  {
    id: 'decomposition-17',
    worldId: 'decomposition',
    number: 17,
    title: { en: 'Where Do I Start?', id: 'Mulai dari Mana?' },
    mascotMessage: {
      en: 'Every big job has a first small step. Match each job to the step that opens it. 🔧',
      id: 'Setiap tugas besar punya langkah kecil pertama. Cocokkan setiap tugas dengan langkah pembukanya. 🔧',
    },
    xpReward: 37,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'cake',
          leftEmoji: '🎂',
          leftLabel: { en: 'Bake a cake', id: 'Panggang kue' },
          rightId: 'flour',
          rightEmoji: '🥄',
          rightLabel: { en: 'Measure out the flour', id: 'Takar tepungnya' },
        },
        {
          leftId: 'tyre',
          leftEmoji: '🚲',
          leftLabel: { en: 'Fix a flat tyre', id: 'Perbaiki ban kempes' },
          rightId: 'wheel',
          rightEmoji: '🔧',
          rightLabel: { en: 'Take the wheel off the bike', id: 'Lepas roda dari sepedanya' },
        },
        {
          leftId: 'trip',
          leftEmoji: '✈️',
          leftLabel: { en: 'Go on a trip', id: 'Pergi berlibur' },
          rightId: 'ticket',
          rightEmoji: '🎫',
          rightLabel: { en: 'Book the ticket', id: 'Pesan tiketnya' },
        },
        {
          leftId: 'tree',
          leftEmoji: '🌳',
          leftLabel: { en: 'Plant a tree', id: 'Tanam pohon' },
          rightId: 'hole',
          rightEmoji: '🕳️',
          rightLabel: { en: 'Dig a hole in the ground', id: 'Gali lubang di tanah' },
        },
      ],
    },
  },
  {
    id: 'decomposition-18',
    worldId: 'decomposition',
    number: 18,
    title: { en: 'A Sink Full of Dishes', id: 'Bak Penuh Piring' },
    mascotMessage: {
      en: 'Set everything up once, repeat the middle bit for each dish, then tidy up once. 🍽️',
      id: 'Siapkan semuanya sekali, ulangi bagian tengahnya untuk setiap piring, lalu bereskan sekali. 🍽️',
    },
    xpReward: 38,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'fill', emoji: '🚰', label: { en: 'Fill the sink with warm water', id: 'Isi bak dengan air hangat' } },
        { id: 'soap', emoji: '🧴', label: { en: 'Add the washing-up soap', id: 'Tambahkan sabun cuci piring' } },
        { id: 'repeat', emoji: '🔁', label: { en: 'For each dish: scrub, rinse, stand it on the rack', id: 'Untuk setiap piring: gosok, bilas, taruh di rak' } },
        { id: 'empty', emoji: '🕳️', label: { en: 'Empty the sink', id: 'Kosongkan baknya' } },
        { id: 'dry', emoji: '🧺', label: { en: 'Dry everything on the rack', id: 'Keringkan semua yang di rak' } },
        { id: 'away', emoji: '🗄️', label: { en: 'Put the dishes away in the cupboard', id: 'Simpan piringnya ke lemari' } },
      ],
    },
  },
  {
    id: 'decomposition-19',
    worldId: 'decomposition',
    number: 19,
    title: { en: 'The School Play', id: 'Pentas Sekolah' },
    mascotMessage: {
      en: 'Two teams, two jobs, one show. Work out which jobs need each other and which do not. 🎭',
      id: 'Dua tim, dua tugas, satu pertunjukan. Cari tahu tugas mana yang saling membutuhkan dan mana yang tidak. 🎭',
    },
    xpReward: 40,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Your class is putting on a school play.',
        id: 'Kelasmu akan mengadakan pentas sekolah.',
      },
      visual: '🎭',
      steps: [
        {
          id: 'big',
          prompt: {
            en: 'Which of these is a BIG job, not a tiny step?',
            id: 'Mana yang merupakan tugas BESAR, bukan langkah mungil?',
          },
          options: [
            { id: 'set', emoji: '🏗️', label: { en: 'Build the whole stage set', id: 'Bangun seluruh set panggung' } },
            { id: 'nail', emoji: '🔨', label: { en: 'Hammer in one nail', id: 'Pukul satu paku' } },
            { id: 'paint', emoji: '🖌️', label: { en: 'Paint one chair leg', id: 'Cat satu kaki kursi' } },
            { id: 'carry', emoji: '👗', label: { en: 'Carry one costume backstage', id: 'Bawa satu kostum ke belakang panggung' } },
          ],
          answerId: 'set',
        },
        {
          id: 'parallel',
          prompt: {
            en: 'One team builds the set while another team learns the lines. Why is that faster?',
            id: 'Satu tim membangun set sementara tim lain menghafal dialog. Kenapa itu lebih cepat?',
          },
          options: [
            { id: 'independent', emoji: '⚡', label: { en: 'Neither job has to wait for the other', id: 'Tidak ada tugas yang harus menunggu yang lain' } },
            { id: 'easier', emoji: '🙂', label: { en: 'Because both jobs are easy', id: 'Karena kedua tugasnya mudah' } },
            { id: 'smaller', emoji: '🤏', label: { en: 'Because splitting makes the jobs smaller', id: 'Karena dibagi membuat tugasnya mengecil' } },
            { id: 'luck', emoji: '🍀', label: { en: 'It is just luck', id: 'Itu hanya keberuntungan' } },
          ],
          answerId: 'independent',
        },
        {
          id: 'depends',
          prompt: {
            en: 'Which job has to wait until BOTH teams are finished?',
            id: 'Tugas mana yang harus menunggu sampai KEDUA tim selesai?',
          },
          options: [
            { id: 'rehearse', emoji: '🎬', label: { en: 'The full rehearsal on the finished set', id: 'Gladi bersih di set yang sudah jadi' } },
            { id: 'lines', emoji: '📖', label: { en: 'Learning the first line', id: 'Menghafal kalimat pertama' } },
            { id: 'saw', emoji: '🪚', label: { en: 'Sawing the planks', id: 'Menggergaji papannya' } },
            { id: 'tickets', emoji: '🎟️', label: { en: 'Printing the tickets', id: 'Mencetak tiketnya' } },
          ],
          answerId: 'rehearse',
        },
      ],
    },
  },

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

  // ── Math Reasoning · tier two ────────────────────────────────
  // Tier one: one clue, one calculation. Tier two: work backwards, compare two ways of
  // arranging the same amount, rates, part-whole with a unit, and problems whose answer
  // is not the number you just worked out.
  {
    id: 'math_reasoning-10',
    worldId: 'math_reasoning',
    number: 10,
    title: { en: 'The Fair Share', id: 'Bagian yang Adil' },
    mascotMessage: {
      en: 'Share once, then share again. Keep track of who has what! 🍪',
      id: 'Bagi sekali, lalu bagi lagi. Catat siapa punya berapa! 🍪',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'Real problems often hide two or three smaller problems inside them. This puzzle asks them one at a time, and keeps your answers on screen.',
        id: 'Soal nyata sering menyembunyikan dua atau tiga soal kecil di dalamnya. Teka-teki ini menanyakannya satu per satu, dan menyimpan jawabanmu di layar.',
      },
      example: {
        en: 'One wrong link and the whole chain restarts, so check each answer before you tap.',
        id: 'Satu mata rantai salah dan seluruh rantainya diulang, jadi periksa setiap jawaban sebelum mengetuk.',
      },
    },
    xpReward: 28,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: '18 cookies are shared equally between 3 friends.',
        id: '18 kue dibagi rata untuk 3 teman.',
      },
      visual: '🍪🍪🍪',
      steps: [
        {
          id: 'each',
          prompt: { en: 'How many cookies does each friend get?', id: 'Berapa kue yang didapat setiap teman?' },
          options: [
            { id: 'six', emoji: '6️⃣', label: { en: '6 cookies', id: '6 kue' } },
            { id: 'five', emoji: '5️⃣', label: { en: '5 cookies', id: '5 kue' } },
            { id: 'nine', emoji: '9️⃣', label: { en: '9 cookies', id: '9 kue' } },
            { id: 'three', emoji: '3️⃣', label: { en: '3 cookies', id: '3 kue' } },
          ],
          answerId: 'six',
        },
        {
          id: 'gives',
          prompt: {
            en: 'One friend gives 2 of hers away. How many does SHE have now?',
            id: 'Satu teman memberikan 2 kuenya. Berapa yang DIA punya sekarang?',
          },
          options: [
            { id: 'four', emoji: '4️⃣', label: { en: '4 cookies', id: '4 kue' } },
            { id: 'six', emoji: '6️⃣', label: { en: '6 cookies', id: '6 kue' } },
            { id: 'eight', emoji: '8️⃣', label: { en: '8 cookies', id: '8 kue' } },
            { id: 'two', emoji: '2️⃣', label: { en: '2 cookies', id: '2 kue' } },
          ],
          answerId: 'four',
        },
        {
          id: 'others',
          prompt: {
            en: 'She shared those 2 cookies equally with the other two friends. How many does each of THEM have now?',
            id: 'Dua kue itu dia bagikan rata ke dua teman lainnya. Berapa yang MEREKA punya masing-masing sekarang?',
          },
          options: [
            { id: 'seven', emoji: '7️⃣', label: { en: '7 cookies each', id: '7 kue masing-masing' } },
            { id: 'six', emoji: '6️⃣', label: { en: '6 cookies each', id: '6 kue masing-masing' } },
            { id: 'eight', emoji: '8️⃣', label: { en: '8 cookies each', id: '8 kue masing-masing' } },
            { id: 'four', emoji: '4️⃣', label: { en: '4 cookies each', id: '4 kue masing-masing' } },
          ],
          answerId: 'seven',
        },
      ],
    },
  },
  {
    id: 'math_reasoning-11',
    worldId: 'math_reasoning',
    number: 11,
    title: { en: 'Rewind the Spending', id: 'Putar Balik Belanjanya' },
    mascotMessage: {
      en: 'Begin at the end. Undo the juice first, then undo the half. 🧃',
      id: 'Mulai dari akhir. Batalkan jusnya dulu, lalu batalkan yang setengah. 🧃',
    },
    xpReward: 30,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'Rina spent half her coins on a book, then 3 more coins on juice. She has 7 coins left. How many coins did she start with?',
        id: 'Rina menghabiskan setengah koinnya untuk buku, lalu 3 koin lagi untuk jus. Sisanya 7 koin. Berapa koin yang dia punya di awal?',
      },
      answer: '20',
      inputType: 'numeric',
    },
  },
  {
    id: 'math_reasoning-12',
    worldId: 'math_reasoning',
    number: 12,
    title: { en: 'Which Box Wins?', id: 'Kotak Mana yang Menang?' },
    mascotMessage: {
      en: 'Count both boxes fully before you compare. The question asks for the DIFFERENCE, not the total! ✏️',
      id: 'Hitung kedua kotak sampai selesai sebelum membandingkan. Yang ditanya SELISIHNYA, bukan totalnya! ✏️',
    },
    xpReward: 32,
    puzzle: {
      type: 'math',
      question: {
        en: 'Box A has 4 rows of 6 pencils. Box B has 5 rows of 5 pencils. How many MORE pencils are in the bigger box?',
        id: 'Kotak A punya 4 baris berisi 6 pensil. Kotak B punya 5 baris berisi 5 pensil. Berapa pensil LEBIH BANYAK di kotak yang lebih besar?',
      },
      options: ['1', '2', '3', '49'],
      answer: '1',
    },
  },
  {
    id: 'math_reasoning-13',
    worldId: 'math_reasoning',
    number: 13,
    title: { en: 'Nearly Ten Each', id: 'Hampir Sepuluh Masing-masing' },
    mascotMessage: {
      en: 'If every price is UNDER 10, what is the most the four of them could possibly cost? 🧮',
      id: 'Kalau setiap harga DI BAWAH 10, berapa paling banyak keempatnya bisa berharga? 🧮',
    },
    xpReward: 33,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'You buy 4 things and each one costs a little UNDER 10 coins. So you will definitely need more than 40 coins.',
        id: 'Kamu membeli 4 barang dan masing-masing harganya sedikit DI BAWAH 10 koin. Jadi kamu pasti butuh lebih dari 40 koin.',
      },
      answer: false,
    },
  },
  {
    id: 'math_reasoning-14',
    worldId: 'math_reasoning',
    number: 14,
    title: { en: 'How Long for Ten?', id: 'Berapa Lama untuk Sepuluh?' },
    mascotMessage: {
      en: 'Find the time for ONE bucket first. That single number unlocks the rest. 🪣',
      id: 'Cari dulu waktu untuk SATU ember. Angka tunggal itu membuka sisanya. 🪣',
    },
    xpReward: 34,
    puzzle: {
      type: 'math',
      question: {
        en: 'A tap fills 3 buckets in 6 minutes. How many minutes does it take to fill 10 buckets?',
        id: 'Sebuah keran mengisi 3 ember dalam 6 menit. Berapa menit untuk mengisi 10 ember?',
      },
      options: ['20', '30', '18', '60'],
      answer: '20',
    },
  },
  {
    id: 'math_reasoning-15',
    worldId: 'math_reasoning',
    number: 15,
    title: { en: 'The Almost-Full Shelf', id: 'Rak yang Hampir Penuh' },
    mascotMessage: {
      en: 'Dividing gives you a whole number and a remainder — and BOTH of them are part of the answer. 📚',
      id: 'Pembagian memberimu bilangan bulat dan sisa — dan KEDUANYA bagian dari jawabannya. 📚',
    },
    xpReward: 36,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'A shelf holds exactly 12 books. The library has 50 books to put away.',
        id: 'Satu rak memuat tepat 12 buku. Perpustakaan punya 50 buku untuk disusun.',
      },
      visual: '📚',
      steps: [
        {
          id: 'shelves',
          prompt: {
            en: 'How many shelves are needed so that every book has a place?',
            id: 'Berapa rak yang dibutuhkan agar setiap buku dapat tempat?',
          },
          options: [
            { id: 'five', emoji: '5️⃣', label: { en: '5 shelves', id: '5 rak' } },
            { id: 'four', emoji: '4️⃣', label: { en: '4 shelves', id: '4 rak' } },
            { id: 'six', emoji: '6️⃣', label: { en: '6 shelves', id: '6 rak' } },
            { id: 'twelve', emoji: '🔢', label: { en: '12 shelves', id: '12 rak' } },
          ],
          answerId: 'five',
        },
        {
          id: 'last',
          prompt: { en: 'How many books end up on the LAST shelf?', id: 'Berapa buku yang berakhir di rak TERAKHIR?' },
          options: [
            { id: 'two', emoji: '2️⃣', label: { en: '2 books', id: '2 buku' } },
            { id: 'twelve', emoji: '🔢', label: { en: '12 books', id: '12 buku' } },
            { id: 'ten', emoji: '🔟', label: { en: '10 books', id: '10 buku' } },
            { id: 'none', emoji: '0️⃣', label: { en: 'None at all', id: 'Tidak ada sama sekali' } },
          ],
          answerId: 'two',
        },
      ],
    },
  },
  {
    id: 'math_reasoning-16',
    worldId: 'math_reasoning',
    number: 16,
    title: { en: 'Three Out of Every Five', id: 'Tiga dari Setiap Lima' },
    mascotMessage: {
      en: 'Split the class into groups of 5 first. Then count 3 from each group. 🚶',
      id: 'Bagi dulu kelasnya menjadi kelompok berisi 5. Lalu hitung 3 dari setiap kelompok. 🚶',
    },
    xpReward: 36,
    puzzle: {
      type: 'fill-in',
      question: {
        en: '3 out of every 5 children in a class walk to school. There are 30 children in the class. How many walk to school?',
        id: '3 dari setiap 5 anak di sebuah kelas berjalan kaki ke sekolah. Ada 30 anak di kelas itu. Berapa yang berjalan kaki?',
      },
      answer: '18',
      inputType: 'numeric',
    },
  },
  {
    id: 'math_reasoning-17',
    worldId: 'math_reasoning',
    number: 17,
    title: { en: 'Two Pens and a Book', id: 'Dua Pena dan Sebuah Buku' },
    mascotMessage: {
      en: 'You know the total and you know one part. Take the parts you know away from the total! 📓',
      id: 'Kamu tahu totalnya dan tahu satu bagiannya. Kurangkan bagian yang kamu tahu dari totalnya! 📓',
    },
    xpReward: 37,
    puzzle: {
      type: 'math',
      question: {
        en: 'Two pens and one book together cost 17 coins. One pen costs 4 coins. How much is the book?',
        id: 'Dua pena dan satu buku bersama-sama berharga 17 koin. Satu pena berharga 4 koin. Berapa harga bukunya?',
      },
      options: ['9', '13', '8', '17'],
      answer: '9',
    },
  },
  {
    id: 'math_reasoning-18',
    worldId: 'math_reasoning',
    number: 18,
    title: { en: 'Posts Around the Garden', id: 'Tiang Keliling Kebun' },
    mascotMessage: {
      en: 'Careful — the number of posts is not always the same as the number of gaps! 🪵',
      id: 'Hati-hati — jumlah tiang tidak selalu sama dengan jumlah celah! 🪵',
    },
    xpReward: 38,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'A square garden has sides of 7 metres, and you want a fence all the way round it.',
        id: 'Sebuah kebun berbentuk persegi punya sisi 7 meter, dan kamu ingin memagarinya sekeliling.',
      },
      visual: '🟩',
      steps: [
        {
          id: 'perimeter',
          prompt: {
            en: 'What is the distance all the way round the garden?',
            id: 'Berapa jarak sekeliling kebun itu?',
          },
          options: [
            { id: 'twentyeight', emoji: '📏', label: { en: '28 metres', id: '28 meter' } },
            { id: 'fortynine', emoji: '📏', label: { en: '49 metres', id: '49 meter' } },
            { id: 'fourteen', emoji: '📏', label: { en: '14 metres', id: '14 meter' } },
            { id: 'twentyone', emoji: '📏', label: { en: '21 metres', id: '21 meter' } },
          ],
          answerId: 'twentyeight',
        },
        {
          id: 'corners',
          prompt: {
            en: 'You put a post every 7 metres, with one at each corner. How many posts?',
            id: 'Kamu memasang tiang setiap 7 meter, satu di setiap sudut. Berapa tiangnya?',
          },
          options: [
            { id: 'four', emoji: '4️⃣', label: { en: '4 posts', id: '4 tiang' } },
            { id: 'five', emoji: '5️⃣', label: { en: '5 posts', id: '5 tiang' } },
            { id: 'eight', emoji: '8️⃣', label: { en: '8 posts', id: '8 tiang' } },
            { id: 'seven', emoji: '7️⃣', label: { en: '7 posts', id: '7 tiang' } },
          ],
          answerId: 'four',
        },
        {
          id: 'metre',
          prompt: {
            en: 'Now you use a post every 1 metre instead. How many posts do you need?',
            id: 'Sekarang kamu memasang tiang setiap 1 meter. Berapa tiang yang kamu butuhkan?',
          },
          options: [
            { id: 'twentyeight', emoji: '🪵', label: { en: '28 posts', id: '28 tiang' } },
            { id: 'twentynine', emoji: '🪵', label: { en: '29 posts', id: '29 tiang' } },
            { id: 'twentyfour', emoji: '🪵', label: { en: '24 posts', id: '24 tiang' } },
            { id: 'thirtytwo', emoji: '🪵', label: { en: '32 posts', id: '32 tiang' } },
          ],
          answerId: 'twentyeight',
        },
      ],
    },
  },
  {
    id: 'math_reasoning-19',
    worldId: 'math_reasoning',
    number: 19,
    title: { en: 'Three Times as Old', id: 'Tiga Kali Lebih Tua' },
    mascotMessage: {
      en: 'Think of their ages as 4 equal parts: her brother is 1 part, Ayu is 3. 🎂',
      id: 'Bayangkan umur mereka sebagai 4 bagian sama: adiknya 1 bagian, Ayu 3 bagian. 🎂',
    },
    xpReward: 40,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'Ayu is 3 times as old as her brother. Their two ages add up to 16. How old is Ayu?',
        id: 'Ayu berumur 3 kali lipat adiknya. Jumlah umur mereka berdua 16. Berapa umur Ayu?',
      },
      answer: '12',
      inputType: 'numeric',
    },
  },

  // ── Rule Finder · tier two ───────────────────────────────────
  // Tier one: spot a rule that fits. Tier two: test a rule properly — one example never
  // proves it, two changes at once prove nothing, and a strong rule survives a hunt for
  // the example that would break it.
  {
    id: 'induction-10',
    worldId: 'induction',
    number: 10,
    title: { en: 'The Secret Machine', id: 'Mesin Rahasia' },
    mascotMessage: {
      en: 'Guess the rule, use the rule, then check whether a new example still obeys it. 🔬',
      id: 'Tebak aturannya, gunakan aturannya, lalu periksa apakah contoh baru masih menuruti. 🔬',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'Finding a rule takes more than one thought. This puzzle asks you three questions in a row, keeping each answer on screen for the next one.',
        id: 'Menemukan aturan butuh lebih dari satu pikiran. Teka-teki ini menanyakan tiga pertanyaan berturut-turut, menyimpan setiap jawaban di layar untuk pertanyaan berikutnya.',
      },
    },
    xpReward: 30,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'A machine turned 2 into 5, then 3 into 7, then 4 into 9.',
        id: 'Sebuah mesin mengubah 2 menjadi 5, lalu 3 menjadi 7, lalu 4 menjadi 9.',
      },
      visual: '⚙️',
      steps: [
        {
          id: 'rule',
          prompt: { en: 'What is the machine doing?', id: 'Apa yang dilakukan mesin itu?' },
          options: [
            { id: 'doubleplus', emoji: '⚙️', label: { en: 'Doubling the number, then adding 1', id: 'Menggandakan angkanya, lalu menambah 1' } },
            { id: 'addthree', emoji: '➕', label: { en: 'Adding 3 every time', id: 'Menambah 3 setiap kali' } },
            { id: 'times', emoji: '✖️', label: { en: 'Just doubling the number', id: 'Hanya menggandakan angkanya' } },
            { id: 'square', emoji: '🔲', label: { en: 'Multiplying the number by itself', id: 'Mengalikan angka dengan dirinya sendiri' } },
          ],
          answerId: 'doubleplus',
        },
        {
          id: 'predict',
          prompt: { en: 'So what will it turn 10 into?', id: 'Jadi 10 akan diubah menjadi berapa?' },
          options: [
            { id: 'twentyone', emoji: '🎯', label: { en: '21', id: '21' } },
            { id: 'twenty', emoji: '🎯', label: { en: '20', id: '20' } },
            { id: 'thirteen', emoji: '🎯', label: { en: '13', id: '13' } },
            { id: 'hundred', emoji: '🎯', label: { en: '100', id: '100' } },
          ],
          answerId: 'twentyone',
        },
        {
          id: 'check',
          prompt: {
            en: 'Someone reports that it turned 6 into 12. Does that fit your rule?',
            id: 'Seseorang melaporkan mesin mengubah 6 menjadi 12. Apakah itu cocok dengan aturanmu?',
          },
          options: [
            { id: 'no', emoji: '❌', label: { en: 'No — the rule would give 13, so something is wrong', id: 'Tidak — aturannya memberi 13, jadi ada yang salah' } },
            { id: 'yes', emoji: '✅', label: { en: 'Yes, it fits perfectly', id: 'Ya, cocok sekali' } },
            { id: 'close', emoji: '🤏', label: { en: 'Close enough, so the rule still holds', id: 'Cukup dekat, jadi aturannya tetap berlaku' } },
            { id: 'unknown', emoji: '🤷', label: { en: 'The rule cannot be checked with numbers', id: 'Aturannya tidak bisa diperiksa dengan angka' } },
          ],
          answerId: 'no',
        },
      ],
    },
  },
  {
    id: 'induction-11',
    worldId: 'induction',
    number: 11,
    title: { en: 'Which Ones Test the Rule?', id: 'Mana yang Menguji Aturannya?' },
    mascotMessage: {
      en: 'Only an animal WITH feathers can support a rule about feathers. The rest tell you nothing! 🪶',
      id: 'Hanya hewan BERBULU yang bisa mendukung aturan tentang bulu. Sisanya tidak memberitahu apa-apa! 🪶',
    },
    xpReward: 30,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Rule guess: "Animals with feathers lay eggs." Tap every animal that SUPPORTS this rule.',
        id: 'Tebakan aturan: "Hewan berbulu bertelur." Ketuk setiap hewan yang MENDUKUNG aturan ini.',
      },
      items: [
        { id: 'duck', emoji: '🦆', label: { en: 'Duck — feathers, lays eggs', id: 'Bebek — berbulu, bertelur' } },
        { id: 'eagle', emoji: '🦅', label: { en: 'Eagle — feathers, lays eggs', id: 'Elang — berbulu, bertelur' } },
        { id: 'cow', emoji: '🐄', label: { en: 'Cow — no feathers at all', id: 'Sapi — sama sekali tidak berbulu unggas' } },
        { id: 'owl', emoji: '🦉', label: { en: 'Owl — feathers, lays eggs', id: 'Burung hantu — berbulu, bertelur' } },
      ],
      correctIds: ['duck', 'eagle', 'owl'],
    },
  },
  {
    id: 'induction-12',
    worldId: 'induction',
    number: 12,
    title: { en: 'One Apple Is Not Enough', id: 'Satu Apel Tidak Cukup' },
    mascotMessage: {
      en: 'How many examples would you need before you could say "every single one"? 🍏',
      id: 'Berapa contoh yang kamu butuhkan sebelum bisa bilang "setiap satu-satunya"? 🍏',
    },
    xpReward: 32,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rafi tasted one green apple and it was sour. So he can be sure that every green apple in the world is sour.',
        id: 'Rafi mencicipi satu apel hijau dan rasanya asam. Jadi dia bisa yakin bahwa setiap apel hijau di dunia rasanya asam.',
      },
      answer: false,
    },
  },
  {
    id: 'induction-13',
    worldId: 'induction',
    number: 13,
    title: { en: 'Two Changes at Once', id: 'Dua Perubahan Sekaligus' },
    mascotMessage: {
      en: 'If you change two things together, you can never tell which one did the work. 🪴',
      id: 'Kalau kamu mengubah dua hal sekaligus, kamu tidak akan pernah tahu mana yang berperan. 🪴',
    },
    xpReward: 34,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'On the same day, Nia gave her plant more water AND moved it to a sunny window. A week later it had grown fast. What can she be sure of?',
        id: 'Di hari yang sama, Nia memberi tanamannya lebih banyak air DAN memindahkannya ke jendela yang cerah. Seminggu kemudian tanamannya tumbuh cepat. Apa yang bisa dia pastikan?',
      },
      options: [
        { id: 'cannot', emoji: '🤷', label: { en: 'She cannot tell which change helped', id: 'Dia tidak bisa tahu perubahan mana yang membantu' } },
        { id: 'water', emoji: '💧', label: { en: 'More water always makes plants grow fast', id: 'Lebih banyak air selalu membuat tanaman tumbuh cepat' } },
        { id: 'sun', emoji: '☀️', label: { en: 'Sunlight always makes plants grow fast', id: 'Sinar matahari selalu membuat tanaman tumbuh cepat' } },
        { id: 'neither', emoji: '🚫', label: { en: 'Neither change did anything', id: 'Kedua perubahan itu tidak berpengaruh' } },
      ],
      answerId: 'cannot',
    },
  },
  {
    id: 'induction-14',
    worldId: 'induction',
    number: 14,
    title: { en: 'Read the Table', id: 'Baca Tabelnya' },
    mascotMessage: {
      en: 'Look at how much the dots grow each time — then look for the extra bit that never changes. 🔵',
      id: 'Lihat berapa banyak titik bertambah setiap kali — lalu cari bagian tambahan yang tidak pernah berubah. 🔵',
    },
    xpReward: 35,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'Shape 1 has 4 dots. Shape 2 has 7 dots. Shape 3 has 10 dots. How many dots does shape 6 have?',
        id: 'Bentuk 1 punya 4 titik. Bentuk 2 punya 7 titik. Bentuk 3 punya 10 titik. Berapa titik pada bentuk 6?',
      },
      answer: '19',
      inputType: 'numeric',
    },
  },
  {
    id: 'induction-15',
    worldId: 'induction',
    number: 15,
    title: { en: 'One More Than a Five', id: 'Satu Lebih dari Kelipatan Lima' },
    mascotMessage: {
      en: 'Take 1 away from each number. Does what is left divide neatly by 5? 🔢',
      id: 'Kurangi 1 dari setiap angka. Apakah sisanya habis dibagi 5? 🔢',
    },
    xpReward: 36,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: {
        en: 'Rule: every number in this group is exactly one more than a multiple of 5. Which number does NOT fit?',
        id: 'Aturan: setiap angka dalam kelompok ini tepat satu lebih besar dari kelipatan 5. Angka mana yang TIDAK cocok?',
      },
      items: [
        { id: 'six', emoji: '6️⃣', label: { en: '6', id: '6' } },
        { id: 'eleven', emoji: '🔢', label: { en: '11', id: '11' } },
        { id: 'twentyone', emoji: '🔢', label: { en: '21', id: '21' } },
        { id: 'twentyfour', emoji: '🔢', label: { en: '24', id: '24' } },
      ],
      correctIds: ['twentyfour'],
    },
  },
  {
    id: 'induction-16',
    worldId: 'induction',
    number: 16,
    title: { en: 'The Bird Feeder Study', id: 'Studi Tempat Makan Burung' },
    mascotMessage: {
      en: 'A rule guess is only as good as the days you spent watching. Do not decide too early! 🐦',
      id: 'Tebakan aturan hanya sebaik jumlah hari kamu mengamati. Jangan buru-buru memutuskan! 🐦',
    },
    xpReward: 38,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'For 5 mornings in a row, birds came to the feeder only when it held sunflower seeds.',
        id: 'Selama 5 pagi berturut-turut, burung datang ke tempat makan hanya saat berisi biji bunga matahari.',
      },
      visual: '🐦🌻',
      steps: [
        {
          id: 'guess',
          prompt: { en: 'What is the best rule guess so far?', id: 'Apa tebakan aturan terbaik sejauh ini?' },
          options: [
            { id: 'like', emoji: '🌻', label: { en: 'These birds prefer sunflower seeds', id: 'Burung-burung ini lebih suka biji bunga matahari' } },
            { id: 'all', emoji: '🌍', label: { en: 'All birds everywhere eat only sunflower seeds', id: 'Semua burung di mana pun hanya makan biji bunga matahari' } },
            { id: 'morning', emoji: '🌅', label: { en: 'Birds only ever eat in the morning', id: 'Burung hanya makan di pagi hari' } },
            { id: 'none', emoji: '🚫', label: { en: 'Nothing at all can be guessed', id: 'Tidak ada yang bisa ditebak sama sekali' } },
          ],
          answerId: 'like',
        },
        {
          id: 'sixth',
          prompt: {
            en: 'On the 6th morning there were seeds but no birds — and it was raining hard. What should you do?',
            id: 'Pagi ke-6 ada bijinya tapi tidak ada burung — dan saat itu hujan deras. Apa yang sebaiknya kamu lakukan?',
          },
          options: [
            { id: 'keep', emoji: '👀', label: { en: 'Keep watching before deciding anything', id: 'Terus mengamati sebelum memutuskan apa pun' } },
            { id: 'drop', emoji: '🗑️', label: { en: 'Throw the rule away straight away', id: 'Langsung buang aturannya' } },
            { id: 'ignore', emoji: '🙈', label: { en: 'Ignore that morning completely', id: 'Abaikan pagi itu sepenuhnya' } },
            { id: 'rain', emoji: '🌧️', label: { en: 'Decide that birds hate sunflower seeds', id: 'Putuskan bahwa burung benci biji bunga matahari' } },
          ],
          answerId: 'keep',
        },
        {
          id: 'stronger',
          prompt: {
            en: 'What would make this study stronger?',
            id: 'Apa yang akan membuat studi ini lebih kuat?',
          },
          options: [
            { id: 'more', emoji: '📅', label: { en: 'Watching many more days, in different weather', id: 'Mengamati jauh lebih banyak hari, dalam cuaca berbeda' } },
            { id: 'louder', emoji: '📢', label: { en: 'Telling more people about the rule', id: 'Menceritakan aturannya ke lebih banyak orang' } },
            { id: 'bigger', emoji: '🪶', label: { en: 'Using a bigger feeder', id: 'Memakai tempat makan yang lebih besar' } },
            { id: 'stop', emoji: '🛑', label: { en: 'Stopping now, five days is plenty', id: 'Berhenti sekarang, lima hari sudah cukup' } },
          ],
          answerId: 'more',
        },
      ],
    },
  },
  {
    id: 'induction-17',
    worldId: 'induction',
    number: 17,
    title: { en: 'What Makes a Rule Strong?', id: 'Apa yang Membuat Aturan Kuat?' },
    mascotMessage: {
      en: 'A good scientist tries hard to PROVE THEMSELVES WRONG — and then trusts what survives. 🧪',
      id: 'Ilmuwan yang baik berusaha keras MEMBUKTIKAN DIRINYA SALAH — lalu percaya pada apa yang bertahan. 🧪',
    },
    xpReward: 38,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'A rule guess is stronger when many different examples fit it AND you have looked hard for an example that would break it.',
        id: 'Tebakan aturan menjadi lebih kuat ketika banyak contoh berbeda cocok dengannya DAN kamu sudah mencari keras contoh yang bisa mematahkannya.',
      },
      answer: true,
    },
  },
  {
    id: 'induction-18',
    worldId: 'induction',
    number: 18,
    title: { en: 'Does It Fit the Floating Rule?', id: 'Cocok dengan Aturan Mengapung?' },
    mascotMessage: {
      en: 'The rule is only about WATER. Anything happening in the air is not evidence for it. 🚢',
      id: 'Aturan ini hanya tentang AIR. Apa pun yang terjadi di udara bukan buktinya. 🚢',
    },
    xpReward: 38,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Rule: "Something floats when it is lighter than the water it pushes out of the way." Tap every observation that this rule explains.',
        id: 'Aturan: "Sesuatu mengapung ketika lebih ringan daripada air yang disingkirkannya." Ketuk setiap pengamatan yang dijelaskan aturan ini.',
      },
      items: [
        { id: 'log', emoji: '🪵', label: { en: 'A log floats on a river', id: 'Batang kayu mengapung di sungai' } },
        { id: 'stone', emoji: '🪨', label: { en: 'A stone sinks to the bottom', id: 'Batu tenggelam ke dasar' } },
        { id: 'ship', emoji: '🚢', label: { en: 'A heavy steel ship still floats', id: 'Kapal baja berat tetap mengapung' } },
        { id: 'balloon', emoji: '🎈', label: { en: 'A balloon rises up into the air', id: 'Balon naik ke udara' } },
      ],
      correctIds: ['log', 'stone', 'ship'],
    },
  },
  {
    id: 'induction-19',
    worldId: 'induction',
    number: 19,
    title: { en: 'The Growing Dot Shapes', id: 'Bentuk Titik yang Bertumbuh' },
    mascotMessage: {
      en: 'The jumps are not the same size. Look at how much the JUMPS themselves grow! 🔵',
      id: 'Lompatannya tidak sama besar. Lihat seberapa besar LOMPATANNYA sendiri bertambah! 🔵',
    },
    xpReward: 40,
    puzzle: {
      type: 'math',
      question: {
        en: 'Shape 1 has 3 dots, shape 2 has 8, shape 3 has 15 and shape 4 has 24. How many dots does shape 5 have?',
        id: 'Bentuk 1 punya 3 titik, bentuk 2 punya 8, bentuk 3 punya 15, dan bentuk 4 punya 24. Berapa titik pada bentuk 5?',
      },
      options: ['35', '33', '36', '32'],
      answer: '35',
    },
  },

  // ── Logic Detective · tier two ───────────────────────────────
  // Tier one: single valid conclusions. Tier two: elimination across several clues,
  // negative clues, a three-by-three grid puzzle, the pigeonhole idea, and telling a
  // valid conclusion apart from one that only sounds valid.
  {
    id: 'deduction-10',
    worldId: 'deduction',
    number: 10,
    title: { en: 'Who Ate the Cake?', id: 'Siapa Memakan Kuenya?' },
    mascotMessage: {
      en: 'A detective does not look for who DID it. She rules out everyone who could NOT have. 🕵️',
      id: 'Detektif tidak mencari siapa PELAKUNYA. Dia mencoret semua yang TIDAK MUNGKIN melakukannya. 🕵️',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'A deduction is a chain: each clue narrows things down for the next one. This puzzle asks you one clue at a time and keeps your answers on screen.',
        id: 'Deduksi adalah rantai: setiap petunjuk mempersempit untuk petunjuk berikutnya. Teka-teki ini menanyakan satu petunjuk sekaligus dan menyimpan jawabanmu di layar.',
      },
      example: {
        en: 'Break one link and the whole chain starts again from clue 1.',
        id: 'Patahkan satu mata rantai dan seluruh rantainya diulang dari petunjuk 1.',
      },
    },
    xpReward: 30,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Three people were in the kitchen: Ana, Budi and Cici. Ana and Cici were wearing hats; Budi was not. Ana is taller than Cici, and Cici is taller than Budi.',
        id: 'Tiga orang ada di dapur: Ana, Budi, dan Cici. Ana dan Cici memakai topi; Budi tidak. Ana lebih tinggi dari Cici, dan Cici lebih tinggi dari Budi.',
      },
      visual: '🍰',
      steps: [
        {
          id: 'hat',
          prompt: {
            en: 'Clue 1: the person who ate the cake was wearing a hat. Who can you rule OUT?',
            id: 'Petunjuk 1: orang yang memakan kue itu memakai topi. Siapa yang bisa kamu CORET?',
          },
          options: [
            { id: 'budi', emoji: '🧑', label: { en: 'Budi', id: 'Budi' } },
            { id: 'ana', emoji: '👩', label: { en: 'Ana', id: 'Ana' } },
            { id: 'cici', emoji: '👧', label: { en: 'Cici', id: 'Cici' } },
            { id: 'none', emoji: '🚫', label: { en: 'Nobody yet', id: 'Belum ada' } },
          ],
          answerId: 'budi',
        },
        {
          id: 'taller',
          prompt: {
            en: 'Clue 2: the person is taller than Cici. Who is left?',
            id: 'Petunjuk 2: orangnya lebih tinggi dari Cici. Siapa yang tersisa?',
          },
          options: [
            { id: 'ana', emoji: '👩', label: { en: 'Ana', id: 'Ana' } },
            { id: 'cici', emoji: '👧', label: { en: 'Cici', id: 'Cici' } },
            { id: 'budi', emoji: '🧑', label: { en: 'Budi', id: 'Budi' } },
            { id: 'twoleft', emoji: '👥', label: { en: 'Two people are still possible', id: 'Masih ada dua orang yang mungkin' } },
          ],
          answerId: 'ana',
        },
        {
          id: 'sure',
          prompt: {
            en: 'How sure can you be?',
            id: 'Seberapa yakin kamu bisa merasa?',
          },
          options: [
            { id: 'certain', emoji: '✅', label: { en: 'Certain — only one person fits every clue', id: 'Pasti — hanya satu orang yang cocok dengan semua petunjuk' } },
            { id: 'likely', emoji: '🤔', label: { en: 'Only likely — someone else might still fit', id: 'Hanya mungkin — orang lain bisa saja masih cocok' } },
            { id: 'guess', emoji: '🎲', label: { en: 'It is a pure guess', id: 'Itu tebakan murni' } },
            { id: 'none', emoji: '🚫', label: { en: 'The clues contradict each other', id: 'Petunjuknya saling bertentangan' } },
          ],
          answerId: 'certain',
        },
      ],
    },
  },
  {
    id: 'deduction-11',
    worldId: 'deduction',
    number: 11,
    title: { en: 'Three Clues, One Number', id: 'Tiga Petunjuk, Satu Angka' },
    mascotMessage: {
      en: 'A number has to pass ALL three clues. Test each one against every clue in turn. 🔢',
      id: 'Sebuah angka harus lolos KETIGA petunjuk. Uji masing-masing terhadap setiap petunjuk. 🔢',
    },
    xpReward: 32,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'The secret number is even, AND less than 20, AND a multiple of 3. Tap every number that could still be it.',
        id: 'Angka rahasianya genap, DAN kurang dari 20, DAN kelipatan 3. Ketuk setiap angka yang masih mungkin.',
      },
      items: [
        { id: 'six', emoji: '6️⃣', label: { en: '6', id: '6' } },
        { id: 'fifteen', emoji: '🔢', label: { en: '15', id: '15' } },
        { id: 'eighteen', emoji: '🔢', label: { en: '18', id: '18' } },
        { id: 'twentyfour', emoji: '🔢', label: { en: '24', id: '24' } },
      ],
      correctIds: ['six', 'eighteen'],
    },
  },
  {
    id: 'deduction-12',
    worldId: 'deduction',
    number: 12,
    title: { en: 'Under Which Cup?', id: 'Di Bawah Cangkir Mana?' },
    mascotMessage: {
      en: 'Clues that say where the ball is NOT can still tell you exactly where it IS. 🥤',
      id: 'Petunjuk yang menyebutkan di mana bolanya TIDAK berada tetap bisa memberitahu di mana bolanya BERADA. 🥤',
    },
    xpReward: 33,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Four cups sit in a row: red, blue, green, yellow. One ball is hidden under one of them. Clue 1: it is not under the red cup. Clue 2: it is not under the cup right beside the red one. Clue 3: it is not under the yellow cup. Where is it?',
        id: 'Empat cangkir berjajar: merah, biru, hijau, kuning. Satu bola disembunyikan di bawah salah satunya. Petunjuk 1: bukan di bawah cangkir merah. Petunjuk 2: bukan di bawah cangkir tepat di sebelah cangkir merah. Petunjuk 3: bukan di bawah cangkir kuning. Di mana bolanya?',
      },
      options: [
        { id: 'green', emoji: '🟢', label: { en: 'Under the green cup', id: 'Di bawah cangkir hijau' } },
        { id: 'blue', emoji: '🔵', label: { en: 'Under the blue cup', id: 'Di bawah cangkir biru' } },
        { id: 'red', emoji: '🔴', label: { en: 'Under the red cup', id: 'Di bawah cangkir merah' } },
        { id: 'unknown', emoji: '🤷', label: { en: 'The clues are not enough to say', id: 'Petunjuknya tidak cukup untuk memastikan' } },
      ],
      answerId: 'green',
    },
  },
  {
    id: 'deduction-13',
    worldId: 'deduction',
    number: 13,
    title: { en: 'The Number in Disguise', id: 'Angka yang Menyamar' },
    mascotMessage: {
      en: 'Start with the narrowest clue: which two-digit numbers are even and between 50 and 70? 🔍',
      id: 'Mulai dari petunjuk paling sempit: angka dua digit mana yang genap dan antara 50 dan 70? 🔍',
    },
    xpReward: 34,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'I am a two-digit number. My two digits add up to 9. I am an even number. I am bigger than 50 and smaller than 70. What number am I?',
        id: 'Aku angka dua digit. Kedua digitku berjumlah 9. Aku angka genap. Aku lebih besar dari 50 dan lebih kecil dari 70. Angka berapakah aku?',
      },
      answer: '54',
      inputType: 'numeric',
    },
  },
  {
    id: 'deduction-14',
    worldId: 'deduction',
    number: 14,
    title: { en: 'Three Houses', id: 'Tiga Rumah' },
    mascotMessage: {
      en: 'Once a house is taken, nobody else can have it. Cross things off as you go! 🏠',
      id: 'Begitu sebuah rumah terisi, tidak ada lagi yang bisa menempatinya. Coret sambil berjalan! 🏠',
    },
    xpReward: 36,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Ana, Budi and Cici each live in a different house: one red, one blue, one green.',
        id: 'Ana, Budi, dan Cici masing-masing tinggal di rumah berbeda: satu merah, satu biru, satu hijau.',
      },
      visual: '🏠🏠🏠',
      steps: [
        {
          id: 'ana',
          prompt: {
            en: 'Ana lives in neither the red house nor the green house. Which is hers?',
            id: 'Ana tidak tinggal di rumah merah maupun hijau. Yang mana rumahnya?',
          },
          options: [
            { id: 'blue', emoji: '🔵', label: { en: 'The blue house', id: 'Rumah biru' } },
            { id: 'red', emoji: '🔴', label: { en: 'The red house', id: 'Rumah merah' } },
            { id: 'green', emoji: '🟢', label: { en: 'The green house', id: 'Rumah hijau' } },
            { id: 'unknown', emoji: '🤷', label: { en: 'Not enough clues yet', id: 'Petunjuknya belum cukup' } },
          ],
          answerId: 'blue',
        },
        {
          id: 'budi',
          prompt: {
            en: 'Budi does not live in the green house. Which is his?',
            id: 'Budi tidak tinggal di rumah hijau. Yang mana rumahnya?',
          },
          options: [
            { id: 'red', emoji: '🔴', label: { en: 'The red house', id: 'Rumah merah' } },
            { id: 'blue', emoji: '🔵', label: { en: 'The blue house', id: 'Rumah biru' } },
            { id: 'green', emoji: '🟢', label: { en: 'The green house', id: 'Rumah hijau' } },
            { id: 'unknown', emoji: '🤷', label: { en: 'Still impossible to say', id: 'Masih belum bisa dipastikan' } },
          ],
          answerId: 'red',
        },
        {
          id: 'cici',
          prompt: { en: 'So which house is Cici\'s?', id: 'Jadi rumah mana milik Cici?' },
          options: [
            { id: 'green', emoji: '🟢', label: { en: 'The green house', id: 'Rumah hijau' } },
            { id: 'blue', emoji: '🔵', label: { en: 'The blue house', id: 'Rumah biru' } },
            { id: 'red', emoji: '🔴', label: { en: 'The red house', id: 'Rumah merah' } },
            { id: 'unknown', emoji: '🤷', label: { en: 'It could be any of them', id: 'Bisa yang mana saja' } },
          ],
          answerId: 'green',
        },
      ],
    },
  },
  {
    id: 'deduction-15',
    worldId: 'deduction',
    number: 15,
    title: { en: 'Turn the Rule Around', id: 'Balikkan Aturannya' },
    mascotMessage: {
      en: 'If a rule says EVERY member can do something, then someone who cannot do it is not a member. 🎼',
      id: 'Kalau aturan berkata SETIAP anggota bisa melakukan sesuatu, maka yang tidak bisa melakukannya bukan anggota. 🎼',
    },
    xpReward: 36,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'It is true that every child in the choir can read music. Sari cannot read music. So Sari is definitely not in the choir.',
        id: 'Benar bahwa setiap anak di paduan suara bisa membaca not. Sari tidak bisa membaca not. Jadi Sari pasti bukan anggota paduan suara.',
      },
      answer: true,
    },
  },
  {
    id: 'deduction-16',
    worldId: 'deduction',
    number: 16,
    title: { en: 'Which Conclusion Is Wrong?', id: 'Kesimpulan Mana yang Salah?' },
    mascotMessage: {
      en: 'Three of these really do follow from the fact. One only SOUNDS as if it does. 🧐',
      id: 'Tiga di antaranya benar-benar mengikuti faktanya. Satu hanya TERDENGAR seolah begitu. 🧐',
    },
    xpReward: 38,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: {
        en: 'Fact: every pupil in Class 6 walks to school. Which conclusion does NOT follow?',
        id: 'Fakta: setiap murid Kelas 6 berjalan kaki ke sekolah. Kesimpulan mana yang TIDAK mengikuti?',
      },
      items: [
        { id: 'rian', emoji: '🚶', label: { en: 'Rian is in Class 6, so Rian walks to school', id: 'Rian di Kelas 6, jadi Rian berjalan kaki ke sekolah' } },
        { id: 'sinta', emoji: '🚶', label: { en: 'Sinta walks to school, so Sinta is in Class 6', id: 'Sinta berjalan kaki ke sekolah, jadi Sinta di Kelas 6' } },
        { id: 'tono', emoji: '🚌', label: { en: 'Tono does not walk, so Tono is not in Class 6', id: 'Tono tidak berjalan kaki, jadi Tono bukan Kelas 6' } },
        { id: 'bus', emoji: '🚍', label: { en: 'No pupil in Class 6 comes by bus', id: 'Tidak ada murid Kelas 6 yang datang naik bus' } },
      ],
      correctIds: ['sinta'],
    },
  },
  {
    id: 'deduction-17',
    worldId: 'deduction',
    number: 17,
    title: { en: 'Three From the Box', id: 'Tiga dari Kotak' },
    mascotMessage: {
      en: 'Imagine the worst luck possible: what if you grabbed every red ball first? 🔴',
      id: 'Bayangkan nasib paling sial: bagaimana kalau kamu mengambil semua bola merah lebih dulu? 🔴',
    },
    xpReward: 38,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'A box holds 5 balls: 2 red and 3 blue. You take out 3 balls without looking. What MUST be true?',
        id: 'Sebuah kotak berisi 5 bola: 2 merah dan 3 biru. Kamu mengambil 3 bola tanpa melihat. Apa yang PASTI benar?',
      },
      options: [
        { id: 'blue', emoji: '🔵', label: { en: 'At least one of them is blue', id: 'Setidaknya satu di antaranya biru' } },
        { id: 'allred', emoji: '🔴', label: { en: 'All three of them are red', id: 'Ketiganya merah' } },
        { id: 'tworeds', emoji: '🟥', label: { en: 'At least two of them are red', id: 'Setidaknya dua di antaranya merah' } },
        { id: 'oneblue', emoji: '🟦', label: { en: 'Exactly one of them is blue', id: 'Tepat satu di antaranya biru' } },
      ],
      answerId: 'blue',
    },
  },
  {
    id: 'deduction-18',
    worldId: 'deduction',
    number: 18,
    title: { en: 'The Book Stack', id: 'Tumpukan Buku' },
    mascotMessage: {
      en: 'Two clues pin down the ends of the stack. The other clue glues two books together. 📚',
      id: 'Dua petunjuk mengunci ujung-ujung tumpukan. Petunjuk satunya merekatkan dua buku. 📚',
    },
    xpReward: 38,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Four books are stacked up. The maths book sits directly above the atlas. The novel is at the very bottom. The comic is on top. Which book is 2nd from the top?',
        id: 'Empat buku ditumpuk. Buku matematika tepat di atas atlas. Novel ada di paling bawah. Komik ada di paling atas. Buku mana yang ke-2 dari atas?',
      },
      options: [
        { id: 'maths', emoji: '📗', label: { en: 'The maths book', id: 'Buku matematika' } },
        { id: 'atlas', emoji: '🗺️', label: { en: 'The atlas', id: 'Atlas' } },
        { id: 'novel', emoji: '📕', label: { en: 'The novel', id: 'Novel' } },
        { id: 'comic', emoji: '📘', label: { en: 'The comic', id: 'Komik' } },
      ],
      answerId: 'maths',
    },
  },
  {
    id: 'deduction-19',
    worldId: 'deduction',
    number: 19,
    title: { en: 'The Race Result', id: 'Hasil Balapan' },
    mascotMessage: {
      en: 'Fix the order from the clues first. Then a new clue either fits it — or cannot possibly be true. 🏁',
      id: 'Tetapkan dulu urutannya dari petunjuk. Lalu petunjuk baru bisa cocok — atau tidak mungkin benar. 🏁',
    },
    xpReward: 40,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Three friends ran a race. We know two things: Rina was not last, and Sam finished ahead of Rina.',
        id: 'Tiga teman ikut balapan. Kita tahu dua hal: Rina bukan yang terakhir, dan Sam finis lebih dulu dari Rina.',
      },
      visual: '🏃🏃🏃',
      steps: [
        {
          id: 'first',
          prompt: { en: 'Who came first?', id: 'Siapa yang datang pertama?' },
          options: [
            { id: 'sam', emoji: '🥇', label: { en: 'Sam', id: 'Sam' } },
            { id: 'rina', emoji: '🥇', label: { en: 'Rina', id: 'Rina' } },
            { id: 'tia', emoji: '🥇', label: { en: 'Tia', id: 'Tia' } },
            { id: 'unknown', emoji: '🤷', label: { en: 'It cannot be worked out', id: 'Tidak bisa ditentukan' } },
          ],
          answerId: 'sam',
        },
        {
          id: 'last',
          prompt: { en: 'So who came last?', id: 'Jadi siapa yang datang terakhir?' },
          options: [
            { id: 'tia', emoji: '🥉', label: { en: 'Tia', id: 'Tia' } },
            { id: 'rina', emoji: '🥉', label: { en: 'Rina', id: 'Rina' } },
            { id: 'sam', emoji: '🥉', label: { en: 'Sam', id: 'Sam' } },
            { id: 'unknown', emoji: '🤷', label: { en: 'It cannot be worked out', id: 'Tidak bisa ditentukan' } },
          ],
          answerId: 'tia',
        },
        {
          id: 'newclue',
          prompt: {
            en: 'Someone now says "Tia finished ahead of Rina". Can that be true?',
            id: 'Seseorang kini berkata "Tia finis lebih dulu dari Rina". Mungkinkah itu benar?',
          },
          options: [
            { id: 'no', emoji: '❌', label: { en: 'No — it contradicts the earlier clues', id: 'Tidak — itu bertentangan dengan petunjuk sebelumnya' } },
            { id: 'yes', emoji: '✅', label: { en: 'Yes, it fits with everything else', id: 'Ya, cocok dengan semuanya' } },
            { id: 'maybe', emoji: '🤷', label: { en: 'Maybe — the clues do not decide it', id: 'Mungkin — petunjuknya tidak menentukan' } },
            { id: 'redo', emoji: '🔁', label: { en: 'Only if the race is run again', id: 'Hanya kalau balapannya diulang' } },
          ],
          answerId: 'no',
        },
      ],
    },
  },

  // ── Planning Peaks · tier two ────────────────────────────────
  // Tier one: follow the clues to an order. Tier two: budgets that must not be blown,
  // constraint boards to audit, timetables that chain, and jobs blocked by one shared
  // resource.
  {
    id: 'planning-10',
    worldId: 'planning',
    number: 10,
    title: { en: 'The Weight Budget', id: 'Anggaran Berat' },
    mascotMessage: {
      en: 'Work out how much room is left BEFORE you decide what to load. ⚖️',
      id: 'Cari tahu berapa ruang yang tersisa SEBELUM memutuskan apa yang dimuat. ⚖️',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'Planning is a chain: what you work out first decides what is possible next. This puzzle asks each part in turn and keeps your answers on screen.',
        id: 'Merencanakan itu berantai: apa yang kamu hitung lebih dulu menentukan apa yang mungkin berikutnya. Teka-teki ini menanyakan setiap bagian bergiliran dan menyimpan jawabanmu di layar.',
      },
    },
    xpReward: 30,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Your raft can carry 50 kg in total, and you weigh 30 kg.',
        id: 'Rakitmu bisa mengangkut total 50 kg, dan beratmu 30 kg.',
      },
      visual: '🛶',
      steps: [
        {
          id: 'room',
          prompt: { en: 'How much cargo can you take?', id: 'Berapa muatan yang bisa kamu bawa?' },
          options: [
            { id: 'twenty', emoji: '⚖️', label: { en: '20 kg', id: '20 kg' } },
            { id: 'thirty', emoji: '⚖️', label: { en: '30 kg', id: '30 kg' } },
            { id: 'fifty', emoji: '⚖️', label: { en: '50 kg', id: '50 kg' } },
            { id: 'eighty', emoji: '⚖️', label: { en: '80 kg', id: '80 kg' } },
          ],
          answerId: 'twenty',
        },
        {
          id: 'both',
          prompt: {
            en: 'A crate weighs 12 kg and a barrel weighs 9 kg. Can you take both?',
            id: 'Sebuah peti beratnya 12 kg dan sebuah tong 9 kg. Bisakah kamu membawa keduanya?',
          },
          options: [
            { id: 'no', emoji: '🚫', label: { en: 'No — together they are 21 kg, one kilo too much', id: 'Tidak — bersama-sama 21 kg, satu kilo terlalu berat' } },
            { id: 'yes', emoji: '✅', label: { en: 'Yes, they fit easily', id: 'Bisa, muat dengan mudah' } },
            { id: 'swim', emoji: '🏊', label: { en: 'Only if you swim beside the raft', id: 'Hanya kalau kamu berenang di samping rakit' } },
            { id: 'unclear', emoji: '🤷', label: { en: 'There is no way to tell', id: 'Tidak ada cara untuk memastikan' } },
          ],
          answerId: 'no',
        },
        {
          id: 'best',
          prompt: {
            en: 'So what is the heaviest load you can actually take?',
            id: 'Jadi apa muatan terberat yang benar-benar bisa kamu bawa?',
          },
          options: [
            { id: 'crate', emoji: '📦', label: { en: 'The crate on its own', id: 'Peti itu saja' } },
            { id: 'barrel', emoji: '🛢️', label: { en: 'The barrel on its own', id: 'Tong itu saja' } },
            { id: 'both', emoji: '🔀', label: { en: 'Both of them together', id: 'Keduanya sekaligus' } },
            { id: 'neither', emoji: '🚫', label: { en: 'Neither of them', id: 'Tidak satu pun' } },
          ],
          answerId: 'crate',
        },
      ],
    },
  },
  {
    id: 'planning-11',
    worldId: 'planning',
    number: 11,
    title: { en: 'Where Does the Tent Go?', id: 'Di Mana Tendanya?' },
    mascotMessage: {
      en: 'Two rules at once: the square must be grass, AND it must not touch the water. 🏕️',
      id: 'Dua aturan sekaligus: kotaknya harus rumput, DAN tidak boleh bersentuhan dengan air. 🏕️',
    },
    tutorial: {
      title: { en: 'Tap the squares yourself', id: 'Ketuk sendiri kotaknya' },
      body: {
        en: 'There are no buttons to choose from here. You tap the map squares — as many as fit the rules — and then press Check. Tap a square again to unpick it.',
        id: 'Di sini tidak ada tombol pilihan. Kamu mengetuk kotak peta — sebanyak yang memenuhi aturan — lalu tekan Cek. Ketuk lagi sebuah kotak untuk membatalkannya.',
      },
    },
    xpReward: 32,
    puzzle: {
      type: 'grid-select',
      question: {
        en: 'Tap every square where the tent could go: it must be grass, and it must NOT touch the water.',
        id: 'Ketuk setiap kotak tempat tenda bisa didirikan: harus rumput, dan TIDAK boleh bersentuhan dengan air.',
      },
      note: {
        en: 'A square touches the water if the water is directly above, below, left or right of it — corners do not count.',
        id: 'Sebuah kotak bersentuhan dengan air jika airnya tepat di atas, bawah, kiri, atau kanannya — sudut tidak dihitung.',
      },
      cells: [
        ['💧', '💧', '🌲', '🪨'],
        ['🟩', '🟩', '🌲', '🟩'],
        ['🪨', '🟩', '🟩', '🌲'],
        ['🌲', '🪨', '🟩', '🟩'],
      ],
      answer: ['1-3', '2-1', '2-2', '3-2', '3-3'],
    },
  },
  {
    id: 'planning-12',
    worldId: 'planning',
    number: 12,
    title: { en: 'Waiting Counts Too', id: 'Menunggu Juga Dihitung' },
    mascotMessage: {
      en: 'The fastest walk is not always the fastest trip. Add the waiting time in! ⛴️',
      id: 'Jalan tercepat belum tentu perjalanan tercepat. Tambahkan waktu menunggunya! ⛴️',
    },
    xpReward: 33,
    puzzle: {
      type: 'math',
      question: {
        en: 'Path A takes 40 minutes but you must wait 15 minutes for the ferry first. Path B takes 50 minutes with no waiting. How many minutes faster is the quicker path?',
        id: 'Jalur A butuh 40 menit tapi kamu harus menunggu feri 15 menit dulu. Jalur B butuh 50 menit tanpa menunggu. Berapa menit lebih cepat jalur yang lebih singkat?',
      },
      options: ['5', '10', '15', '95'],
      answer: '5',
    },
  },
  {
    id: 'planning-13',
    worldId: 'planning',
    number: 13,
    title: { en: 'What If the Boat Is Full?', id: 'Bagaimana Kalau Perahunya Penuh?' },
    mascotMessage: {
      en: 'A plan with only one way to succeed is a fragile plan. What makes it strong? 🚣',
      id: 'Rencana yang hanya punya satu jalan sukses itu rapuh. Apa yang membuatnya kuat? 🚣',
    },
    xpReward: 34,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Your whole plan depends on catching the little boat across the lake — but it is often full. What is the smartest thing to add to the plan?',
        id: 'Seluruh rencanamu bergantung pada perahu kecil untuk menyeberangi danau — tapi perahunya sering penuh. Apa hal paling cerdas yang ditambahkan ke rencana?',
      },
      options: [
        { id: 'backup', emoji: '🗺️', label: { en: 'A second route you can use if the boat is full', id: 'Rute kedua yang bisa dipakai kalau perahunya penuh' } },
        { id: 'snacks', emoji: '🍫', label: { en: 'More snacks for the journey', id: 'Lebih banyak camilan untuk perjalanan' } },
        { id: 'run', emoji: '🏃', label: { en: 'Running faster to the jetty', id: 'Berlari lebih cepat ke dermaga' } },
        { id: 'rest', emoji: '😴', label: { en: 'A longer rest before you set off', id: 'Istirahat lebih lama sebelum berangkat' } },
      ],
      answerId: 'backup',
    },
  },
  {
    id: 'planning-14',
    worldId: 'planning',
    number: 14,
    title: { en: 'Audit the Plan', id: 'Periksa Rencananya' },
    mascotMessage: {
      en: 'Check the plan against EVERY rule on the board, one at a time. 📋',
      id: 'Periksa rencananya terhadap SETIAP aturan di papan, satu per satu. 📋',
    },
    xpReward: 35,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Rule board: leave before 7am · carry under 10 kg · be back by 5pm · take a buddy. Nia plans to leave at 6:30am, carry 12 kg, be back at 4pm, and go alone. Tap every rule her plan BREAKS.',
        id: 'Papan aturan: berangkat sebelum pukul 7 pagi · bawa kurang dari 10 kg · kembali sebelum pukul 5 sore · ajak teman. Nia berencana berangkat pukul 6:30 pagi, membawa 12 kg, kembali pukul 4 sore, dan pergi sendiri. Ketuk setiap aturan yang DILANGGAR rencananya.',
      },
      items: [
        { id: 'weight', emoji: '⚖️', label: { en: 'The under-10 kg rule', id: 'Aturan kurang dari 10 kg' } },
        { id: 'buddy', emoji: '👥', label: { en: 'The take-a-buddy rule', id: 'Aturan mengajak teman' } },
        { id: 'start', emoji: '🌅', label: { en: 'The leave-before-7am rule', id: 'Aturan berangkat sebelum pukul 7 pagi' } },
        { id: 'return', emoji: '🌇', label: { en: 'The back-by-5pm rule', id: 'Aturan kembali sebelum pukul 5 sore' } },
      ],
      correctIds: ['weight', 'buddy'],
    },
  },
  {
    id: 'planning-15',
    worldId: 'planning',
    number: 15,
    title: { en: 'The Ferry Timetable', id: 'Jadwal Feri' },
    mascotMessage: {
      en: 'Each step lands you at a time. That time decides which thing you can catch next. 🕓',
      id: 'Setiap langkah membawamu ke suatu waktu. Waktu itu menentukan apa yang bisa kamu kejar berikutnya. 🕓',
    },
    xpReward: 37,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'Ferries leave every 20 minutes starting at 9:00. The crossing itself takes 25 minutes. You arrive at the jetty at 9:35.',
        id: 'Feri berangkat setiap 20 menit mulai pukul 9:00. Penyeberangannya sendiri butuh 25 menit. Kamu tiba di dermaga pukul 9:35.',
      },
      visual: '⛴️',
      steps: [
        {
          id: 'catch',
          prompt: { en: 'Which ferry do you catch?', id: 'Feri pukul berapa yang kamu naiki?' },
          options: [
            { id: 'nineforty', emoji: '🕘', label: { en: 'The 9:40 ferry', id: 'Feri pukul 9:40' } },
            { id: 'ninetwenty', emoji: '🕘', label: { en: 'The 9:20 ferry', id: 'Feri pukul 9:20' } },
            { id: 'ninethirtyfive', emoji: '🕘', label: { en: 'The 9:35 ferry', id: 'Feri pukul 9:35' } },
            { id: 'ten', emoji: '🕙', label: { en: 'The 10:00 ferry', id: 'Feri pukul 10:00' } },
          ],
          answerId: 'nineforty',
        },
        {
          id: 'land',
          prompt: { en: 'What time do you land on the other side?', id: 'Pukul berapa kamu mendarat di seberang?' },
          options: [
            { id: 'tenoffive', emoji: '🕙', label: { en: '10:05', id: '10:05' } },
            { id: 'ten', emoji: '🕙', label: { en: '10:00', id: '10:00' } },
            { id: 'tenfifteen', emoji: '🕙', label: { en: '10:15', id: '10:15' } },
            { id: 'nine', emoji: '🕘', label: { en: '9:55', id: '9:55' } },
          ],
          answerId: 'tenoffive',
        },
        {
          id: 'bus',
          prompt: {
            en: 'Buses leave the far jetty at 10:00 and then every 30 minutes. Which bus do you catch?',
            id: 'Bus berangkat dari dermaga seberang pukul 10:00 lalu setiap 30 menit. Bus pukul berapa yang kamu naiki?',
          },
          options: [
            { id: 'tenthirty', emoji: '🚌', label: { en: 'The 10:30 bus', id: 'Bus pukul 10:30' } },
            { id: 'ten', emoji: '🚌', label: { en: 'The 10:00 bus', id: 'Bus pukul 10:00' } },
            { id: 'eleven', emoji: '🚌', label: { en: 'The 11:00 bus', id: 'Bus pukul 11:00' } },
            { id: 'none', emoji: '🚫', label: { en: 'You miss every bus that day', id: 'Kamu ketinggalan semua bus hari itu' } },
          ],
          answerId: 'tenthirty',
        },
      ],
    },
  },
  {
    id: 'planning-16',
    worldId: 'planning',
    number: 16,
    title: { en: 'Most Items for the Money', id: 'Barang Terbanyak dengan Uangnya' },
    mascotMessage: {
      en: 'To get the MOST items, always start with the cheapest ones. 🪙',
      id: 'Untuk mendapat barang TERBANYAK, mulailah selalu dari yang termurah. 🪙',
    },
    xpReward: 37,
    puzzle: {
      type: 'math',
      question: {
        en: 'You have 20 coins. A torch costs 8, a rope costs 7, a map costs 6 and food costs 5. What is the greatest NUMBER of these four things you can buy?',
        id: 'Kamu punya 20 koin. Senter 8, tali 7, peta 6, dan makanan 5. Berapa JUMLAH terbanyak dari keempat barang ini yang bisa kamu beli?',
      },
      options: ['3', '2', '4', '1'],
      answer: '3',
    },
  },
  {
    id: 'planning-17',
    worldId: 'planning',
    number: 17,
    title: { en: 'Only One Stove', id: 'Hanya Satu Kompor' },
    mascotMessage: {
      en: 'Two people can work at once — but they cannot both use the one stove. 🔥',
      id: 'Dua orang bisa bekerja bersamaan — tapi keduanya tidak bisa memakai satu kompor yang sama. 🔥',
    },
    xpReward: 38,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Three jobs: cook the rice (20 min), grill the fish (15 min), set the table (5 min). Two people are helping, but there is only ONE stove, so the fish can only be grilled after the rice is done. What is the shortest time until everything is ready?',
        id: 'Tiga tugas: menanak nasi (20 menit), memanggang ikan (15 menit), menata meja (5 menit). Dua orang membantu, tapi kompornya hanya SATU, jadi ikan baru bisa dipanggang setelah nasinya matang. Berapa waktu tersingkat sampai semuanya siap?',
      },
      options: [
        { id: 'thirtyfive', emoji: '⏱️', label: { en: '35 minutes', id: '35 menit' } },
        { id: 'forty', emoji: '⏱️', label: { en: '40 minutes', id: '40 menit' } },
        { id: 'twenty', emoji: '⏱️', label: { en: '20 minutes', id: '20 menit' } },
        { id: 'twentyfive', emoji: '⏱️', label: { en: '25 minutes', id: '25 menit' } },
      ],
      answerId: 'thirtyfive',
    },
  },
  {
    id: 'planning-18',
    worldId: 'planning',
    number: 18,
    title: { en: 'Longest Job Last?', id: 'Tugas Terpanjang Terakhir?' },
    mascotMessage: {
      en: 'Think about a job that takes hours and must finish before anything else can start. 🧗',
      id: 'Pikirkan tugas yang butuh berjam-jam dan harus selesai sebelum yang lain bisa dimulai. 🧗',
    },
    xpReward: 38,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'A good plan always saves the longest job until last, so that you know how much time is left.',
        id: 'Rencana yang baik selalu menyimpan tugas terpanjang untuk terakhir, supaya kamu tahu berapa waktu yang tersisa.',
      },
      answer: false,
    },
  },
  {
    id: 'planning-19',
    worldId: 'planning',
    number: 19,
    title: { en: 'The Summit Push', id: 'Menuju Puncak' },
    mascotMessage: {
      en: 'Compare the time you HAVE with the time you NEED. If they do not match, change the plan, not the mountain. ⛰️',
      id: 'Bandingkan waktu yang kamu PUNYA dengan waktu yang kamu BUTUHKAN. Kalau tidak cocok, ubah rencananya, bukan gunungnya. ⛰️',
    },
    xpReward: 40,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'You must reach the summit and be back at camp before dark. Right now there are 8 hours of daylight left, and going up takes 5 hours.',
        id: 'Kamu harus mencapai puncak dan kembali ke kemah sebelum gelap. Saat ini tersisa 8 jam cahaya, dan mendaki ke atas butuh 5 jam.',
      },
      visual: '⛰️',
      steps: [
        {
          id: 'left',
          prompt: { en: 'How long is left for coming back down?', id: 'Berapa waktu tersisa untuk turun kembali?' },
          options: [
            { id: 'three', emoji: '3️⃣', label: { en: '3 hours', id: '3 jam' } },
            { id: 'five', emoji: '5️⃣', label: { en: '5 hours', id: '5 jam' } },
            { id: 'eight', emoji: '8️⃣', label: { en: '8 hours', id: '8 jam' } },
            { id: 'thirteen', emoji: '🔢', label: { en: '13 hours', id: '13 jam' } },
          ],
          answerId: 'three',
        },
        {
          id: 'problem',
          prompt: {
            en: 'Coming down actually takes 4 hours. What should you change?',
            id: 'Turun ternyata butuh 4 jam. Apa yang harus kamu ubah?',
          },
          options: [
            { id: 'earlier', emoji: '⏰', label: { en: 'Set off earlier, or turn back before the summit', id: 'Berangkat lebih awal, atau berbalik sebelum puncak' } },
            { id: 'faster', emoji: '🏃', label: { en: 'Just hope you walk faster than usual', id: 'Berharap saja bisa berjalan lebih cepat dari biasanya' } },
            { id: 'nothing', emoji: '🤷', label: { en: 'Nothing — 8 hours is plenty', id: 'Tidak ada — 8 jam sudah cukup' } },
            { id: 'dark', emoji: '🌙', label: { en: 'Walk back down in the dark', id: 'Turun dalam kegelapan' } },
          ],
          answerId: 'earlier',
        },
        {
          id: 'check',
          prompt: {
            en: 'You start 2 hours earlier, so you now have 10 hours of daylight. Do you make it?',
            id: 'Kamu berangkat 2 jam lebih awal, jadi kini punya 10 jam cahaya. Apakah kamu berhasil?',
          },
          options: [
            { id: 'yes', emoji: '✅', label: { en: 'Yes — 9 hours are needed, so 1 hour is spare', id: 'Ya — butuh 9 jam, jadi ada sisa 1 jam' } },
            { id: 'no', emoji: '❌', label: { en: 'No — you are still 1 hour short', id: 'Tidak — masih kurang 1 jam' } },
            { id: 'exact', emoji: '⏳', label: { en: 'Yes, but with not a minute to spare', id: 'Ya, tapi tanpa sisa waktu sedikit pun' } },
            { id: 'unknown', emoji: '🤷', label: { en: 'There is no way to work it out', id: 'Tidak ada cara untuk menghitungnya' } },
          ],
          answerId: 'yes',
        },
      ],
    },
  },

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

  // ── Spatial Studio · tier two ────────────────────────────────
  // Tier one: one transformation at a time. Tier two: telling a turn from a flip,
  // building a mirror image square by square, fitting a shape into a hole, composing two
  // flips, seeing from someone else's side, and folding a flat net into a cube.
  {
    id: 'spatial-10',
    worldId: 'spatial',
    number: 10,
    title: { en: 'Turned, or Flipped?', id: 'Diputar, atau Dibalik?' },
    mascotMessage: {
      en: 'A turn keeps a shape the same way round. A flip makes its mirror twin — and the two can never match. 🪞',
      id: 'Putaran menjaga bentuknya tetap sama. Balikan membuat kembaran cerminnya — dan keduanya tidak akan pernah cocok. 🪞',
    },
    xpReward: 28,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'Three of these frames show the very same piece simply turned around. Tap the ONE that has been flipped instead.',
        id: 'Tiga bingkai ini menunjukkan potongan yang sama persis, hanya diputar. Ketuk SATU yang justru dibalik.',
      },
      figure: ['o#.', '.##', '...'],
      options: [
        { id: 'a', grid: ['..o', '.##', '.#.'], label: { en: 'Frame A', id: 'Bingkai A' } },
        { id: 'b', grid: ['...', '##.', '.#o'], label: { en: 'Frame B', id: 'Bingkai B' } },
        { id: 'c', grid: ['.#.', '##.', 'o..'], label: { en: 'Frame C', id: 'Bingkai C' } },
        { id: 'd', grid: ['.#o', '##.', '...'], label: { en: 'Frame D', id: 'Bingkai D' } },
      ],
      answerId: 'd',
    },
  },
  {
    id: 'spatial-11',
    worldId: 'spatial',
    number: 11,
    title: { en: 'Finish the Mirror', id: 'Selesaikan Cerminnya' },
    mascotMessage: {
      en: 'A square close to the mirror line has its twin close to the line too. Work outwards! 🪞',
      id: 'Kotak yang dekat garis cermin punya kembaran yang juga dekat garisnya. Kerjakan dari dalam ke luar! 🪞',
    },
    tutorial: {
      title: { en: 'Tap the squares yourself', id: 'Ketuk sendiri kotaknya' },
      body: {
        en: 'This puzzle has no four frames to choose between — you draw the answer. Tap the squares you want filled in, then press Check. Tap a square again to clear it.',
        id: 'Teka-teki ini tidak punya empat bingkai pilihan — kamu yang menggambar jawabannya. Ketuk kotak yang ingin kamu isi, lalu tekan Cek. Ketuk lagi sebuah kotak untuk mengosongkannya.',
      },
    },
    xpReward: 32,
    puzzle: {
      type: 'grid-select',
      question: {
        en: 'The left half of this picture is finished. Tap the squares on the right half so it becomes a perfect mirror image.',
        id: 'Separuh kiri gambar ini sudah selesai. Ketuk kotak di separuh kanan supaya menjadi pantulan cermin yang sempurna.',
      },
      note: {
        en: 'The mirror line runs straight down the middle, between the 2nd and the 3rd column.',
        id: 'Garis cerminnya lurus di tengah, antara kolom ke-2 dan ke-3.',
      },
      cells: [
        ['🟪', '', '', ''],
        ['🟪', '🟪', '', ''],
        ['', '🟪', '', ''],
        ['🟪', '', '', ''],
      ],
      answer: ['0-3', '1-2', '1-3', '2-2', '3-3'],
    },
  },
  {
    id: 'spatial-12',
    worldId: 'spatial',
    number: 12,
    title: { en: 'Fill the Hole in the Wall', id: 'Tambal Lubang di Dinding' },
    mascotMessage: {
      en: 'Look at the SHAPE of the gap, not its place. Then find the piece with exactly that shape. 🧱',
      id: 'Lihat BENTUK lubangnya, bukan letaknya. Lalu cari potongan dengan bentuk yang persis sama. 🧱',
    },
    xpReward: 34,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'The wall above has a gap in it. Which piece would fill that gap exactly, with nothing left over?',
        id: 'Dinding di atas punya lubang. Potongan mana yang akan menutup lubang itu dengan pas, tanpa sisa?',
      },
      figure: ['####', '##.#', '#..#', '####'],
      note: {
        en: 'In the wall above, the solid squares are bricks and the dotted squares are the gap. Each answer shows one loose piece.',
        id: 'Di dinding atas, kotak penuh adalah bata dan kotak putus-putus adalah lubangnya. Setiap jawaban menunjukkan satu potongan lepas.',
      },
      options: [
        { id: 'a', grid: ['.#..', '##..', '....', '....'], label: { en: 'Piece A', id: 'Potongan A' } },
        { id: 'b', grid: ['##..', '##..', '....', '....'], label: { en: 'Piece B', id: 'Potongan B' } },
        { id: 'c', grid: ['###.', '....', '....', '....'], label: { en: 'Piece C', id: 'Potongan C' } },
        { id: 'd', grid: ['#...', '##..', '....', '....'], label: { en: 'Piece D', id: 'Potongan D' } },
      ],
      answerId: 'a',
    },
  },
  {
    id: 'spatial-13',
    worldId: 'spatial',
    number: 13,
    title: { en: 'Which Way Now?', id: 'Menghadap Ke Mana Sekarang?' },
    mascotMessage: {
      en: 'Turn your body in your head. After every turn, your left and right point somewhere new! 🧭',
      id: 'Putar tubuhmu dalam bayangan. Setelah setiap putaran, kiri dan kananmu menunjuk ke arah baru! 🧭',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'This puzzle asks three questions in a row. Each turn starts from where the last one left you facing, so keep your answers in mind.',
        id: 'Teka-teki ini menanyakan tiga pertanyaan berturut-turut. Setiap putaran dimulai dari arah terakhir yang kamu hadapi, jadi ingat jawabanmu.',
      },
    },
    xpReward: 35,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'You are standing on a map, facing north.',
        id: 'Kamu berdiri di sebuah peta, menghadap utara.',
      },
      visual: '🧭',
      steps: [
        {
          id: 'one',
          prompt: { en: 'You turn once to the right. Which way do you face?', id: 'Kamu berputar sekali ke kanan. Menghadap ke mana kamu?' },
          options: [
            { id: 'east', emoji: '➡️', label: { en: 'East', id: 'Timur' } },
            { id: 'west', emoji: '⬅️', label: { en: 'West', id: 'Barat' } },
            { id: 'south', emoji: '⬇️', label: { en: 'South', id: 'Selatan' } },
            { id: 'north', emoji: '⬆️', label: { en: 'North', id: 'Utara' } },
          ],
          answerId: 'east',
        },
        {
          id: 'two',
          prompt: { en: 'Now you turn right twice more. Which way now?', id: 'Sekarang kamu berputar ke kanan dua kali lagi. Menghadap ke mana?' },
          options: [
            { id: 'west', emoji: '⬅️', label: { en: 'West', id: 'Barat' } },
            { id: 'south', emoji: '⬇️', label: { en: 'South', id: 'Selatan' } },
            { id: 'north', emoji: '⬆️', label: { en: 'North', id: 'Utara' } },
            { id: 'east', emoji: '➡️', label: { en: 'East', id: 'Timur' } },
          ],
          answerId: 'west',
        },
        {
          id: 'three',
          prompt: {
            en: 'You walk 3 steps forwards, then turn LEFT. Which way are you facing?',
            id: 'Kamu berjalan 3 langkah ke depan, lalu berbelok KIRI. Menghadap ke mana kamu?',
          },
          options: [
            { id: 'south', emoji: '⬇️', label: { en: 'South', id: 'Selatan' } },
            { id: 'north', emoji: '⬆️', label: { en: 'North', id: 'Utara' } },
            { id: 'east', emoji: '➡️', label: { en: 'East', id: 'Timur' } },
            { id: 'west', emoji: '⬅️', label: { en: 'West', id: 'Barat' } },
          ],
          answerId: 'south',
        },
      ],
    },
  },
  {
    id: 'spatial-14',
    worldId: 'spatial',
    number: 14,
    title: { en: 'The Same After a Half Turn', id: 'Sama Setelah Setengah Putaran' },
    mascotMessage: {
      en: 'Turn each frame upside down in your head. Only one of them lands exactly on itself. 🔄',
      id: 'Putar setiap bingkai terbalik dalam bayanganmu. Hanya satu yang mendarat persis pada dirinya sendiri. 🔄',
    },
    xpReward: 36,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'The plus shape above looks exactly the same after a half turn. Which of these frames also does?',
        id: 'Bentuk tambah di atas terlihat sama persis setelah setengah putaran. Bingkai mana yang juga begitu?',
      },
      figure: ['.#.', '###', '.#.'],
      note: {
        en: 'A half turn means turning the whole frame upside down.',
        id: 'Setengah putaran berarti membalik seluruh bingkai menjadi terbalik.',
      },
      options: [
        { id: 'a', grid: ['#..', '.#.', '..#'], label: { en: 'Frame A', id: 'Bingkai A' } },
        { id: 'b', grid: ['##.', '.#.', '...'], label: { en: 'Frame B', id: 'Bingkai B' } },
        { id: 'c', grid: ['#.#', '...', '.#.'], label: { en: 'Frame C', id: 'Bingkai C' } },
        { id: 'd', grid: ['..#', '.##', '...'], label: { en: 'Frame D', id: 'Bingkai D' } },
      ],
      answerId: 'a',
    },
  },
  {
    id: 'spatial-15',
    worldId: 'spatial',
    number: 15,
    title: { en: 'From Her Side', id: 'Dari Sisinya' },
    mascotMessage: {
      en: 'When someone faces you, their left is on YOUR right. Turn yourself around in your head! 🙋',
      id: 'Ketika seseorang menghadapmu, kirinya ada di KANANmu. Putar dirimu dalam bayangan! 🙋',
    },
    xpReward: 36,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'A friend stands facing you, close enough to touch. She raises the hand that is on YOUR left side. Which of her hands is it?',
        id: 'Seorang teman berdiri menghadapmu, cukup dekat untuk bersentuhan. Dia mengangkat tangan yang ada di sisi KIRImu. Tangan yang mana itu miliknya?',
      },
      options: [
        { id: 'right', emoji: '🤚', label: { en: 'Her right hand', id: 'Tangan kanannya' } },
        { id: 'left', emoji: '✋', label: { en: 'Her left hand', id: 'Tangan kirinya' } },
        { id: 'both', emoji: '🙌', label: { en: 'It could be either hand', id: 'Bisa tangan yang mana saja' } },
        { id: 'neither', emoji: '🙅', label: { en: 'Neither — she would face away first', id: 'Bukan keduanya — dia akan membelakangimu dulu' } },
      ],
      answerId: 'right',
    },
  },
  {
    id: 'spatial-16',
    worldId: 'spatial',
    number: 16,
    title: { en: 'Flip, Then Flip Again', id: 'Balik, Lalu Balik Lagi' },
    mascotMessage: {
      en: 'Do one flip in your head, then the other on the result. Two flips together do something surprising! 🔃',
      id: 'Lakukan satu balikan dalam bayanganmu, lalu yang kedua pada hasilnya. Dua balikan bersama menghasilkan sesuatu yang mengejutkan! 🔃',
    },
    xpReward: 37,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'Flip the shape above top-to-bottom, and then flip that result left-to-right. Which frame is the answer?',
        id: 'Balik bentuk di atas dari atas ke bawah, lalu balik hasilnya dari kiri ke kanan. Bingkai mana jawabannya?',
      },
      figure: ['o#.', '.#.', '.##'],
      options: [
        { id: 'a', grid: ['##.', '.#.', '.#o'], label: { en: 'Frame A', id: 'Bingkai A' } },
        { id: 'b', grid: ['.#o', '.#.', '##.'], label: { en: 'Frame B', id: 'Bingkai B' } },
        { id: 'c', grid: ['.##', '.#.', 'o#.'], label: { en: 'Frame C', id: 'Bingkai C' } },
        { id: 'd', grid: ['..o', '###', '#..'], label: { en: 'Frame D', id: 'Bingkai D' } },
      ],
      answerId: 'a',
    },
  },
  {
    id: 'spatial-17',
    worldId: 'spatial',
    number: 17,
    title: { en: 'Two East, One South', id: 'Dua ke Timur, Satu ke Selatan' },
    mascotMessage: {
      en: 'Find the palm tree first. Then count the squares across, and only after that count down. 🌴',
      id: 'Temukan pohon palem dulu. Lalu hitung kotak ke samping, dan baru setelah itu hitung ke bawah. 🌴',
    },
    xpReward: 38,
    puzzle: {
      type: 'grid-select',
      question: {
        en: 'The treasure is buried 2 squares EAST of the palm tree and then 1 square SOUTH. Tap the square where you should dig.',
        id: 'Harta karun terkubur 2 kotak ke TIMUR dari pohon palem lalu 1 kotak ke SELATAN. Ketuk kotak tempat kamu harus menggali.',
      },
      note: {
        en: 'On this map east is to the right and south is downwards. The shell and the statue are only landmarks.',
        id: 'Di peta ini timur ada di kanan dan selatan ada di bawah. Kerang dan patung hanyalah penanda.',
      },
      cells: [
        ['', '', '🐚', '', ''],
        ['', '🌴', '', '', ''],
        ['', '', '', '', ''],
        ['🗿', '', '', '', ''],
      ],
      answer: ['2-3'],
    },
  },
  {
    id: 'spatial-18',
    worldId: 'spatial',
    number: 18,
    title: { en: 'Folded Twice', id: 'Dilipat Dua Kali' },
    mascotMessage: {
      en: 'Every fold doubles the layers. One punch goes through every layer at once! 📄',
      id: 'Setiap lipatan menggandakan lapisannya. Satu lubang menembus semua lapisan sekaligus! 📄',
    },
    xpReward: 39,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'You have one square sheet of paper, lying flat.',
        id: 'Kamu punya selembar kertas persegi, terhampar rata.',
      },
      visual: '📄',
      steps: [
        {
          id: 'fold1',
          prompt: { en: 'You fold it exactly in half. How many layers are there now?', id: 'Kamu melipatnya tepat menjadi dua. Ada berapa lapisan sekarang?' },
          options: [
            { id: 'two', emoji: '2️⃣', label: { en: '2 layers', id: '2 lapisan' } },
            { id: 'one', emoji: '1️⃣', label: { en: 'Still 1 layer', id: 'Tetap 1 lapisan' } },
            { id: 'four', emoji: '4️⃣', label: { en: '4 layers', id: '4 lapisan' } },
            { id: 'half', emoji: '➗', label: { en: 'Half a layer', id: 'Setengah lapisan' } },
          ],
          answerId: 'two',
        },
        {
          id: 'fold2',
          prompt: { en: 'You fold it in half again. How many layers now?', id: 'Kamu melipatnya menjadi dua lagi. Ada berapa lapisan sekarang?' },
          options: [
            { id: 'four', emoji: '4️⃣', label: { en: '4 layers', id: '4 lapisan' } },
            { id: 'three', emoji: '3️⃣', label: { en: '3 layers', id: '3 lapisan' } },
            { id: 'eight', emoji: '8️⃣', label: { en: '8 layers', id: '8 lapisan' } },
            { id: 'two', emoji: '2️⃣', label: { en: 'Still 2 layers', id: 'Tetap 2 lapisan' } },
          ],
          answerId: 'four',
        },
        {
          id: 'punch',
          prompt: {
            en: 'You punch ONE hole straight through and unfold the paper. How many holes are in it?',
            id: 'Kamu melubangi SATU kali menembus semuanya lalu membuka lipatannya. Ada berapa lubang di kertasnya?',
          },
          options: [
            { id: 'four', emoji: '🕳️', label: { en: '4 holes', id: '4 lubang' } },
            { id: 'one', emoji: '🕳️', label: { en: '1 hole', id: '1 lubang' } },
            { id: 'two', emoji: '🕳️', label: { en: '2 holes', id: '2 lubang' } },
            { id: 'eight', emoji: '🕳️', label: { en: '8 holes', id: '8 lubang' } },
          ],
          answerId: 'four',
        },
      ],
    },
  },
  {
    id: 'spatial-19',
    worldId: 'spatial',
    number: 19,
    title: { en: 'Folds Into a Cube', id: 'Terlipat Menjadi Kubus' },
    mascotMessage: {
      en: 'Fold each flat shape up in your head. Watch out for two squares that would land on the same face! 📦',
      id: 'Lipat setiap bentuk datar dalam bayanganmu. Awas dua kotak yang akan mendarat di sisi yang sama! 📦',
    },
    xpReward: 40,
    puzzle: {
      type: 'spatial',
      question: {
        en: 'The flat shape above folds up into a perfect cube. Which of these frames ALSO folds into a cube?',
        id: 'Bentuk datar di atas terlipat menjadi kubus sempurna. Bingkai mana yang JUGA terlipat menjadi kubus?',
      },
      figure: ['.#.', '###', '.#.', '.#.'],
      note: {
        en: 'Each solid square is one face of the cube. A cube needs 6 faces, and no two of them may end up in the same place.',
        id: 'Setiap kotak penuh adalah satu sisi kubus. Kubus butuh 6 sisi, dan tidak boleh ada dua yang berakhir di tempat yang sama.',
      },
      options: [
        { id: 'a', grid: ['###', '.#.', '.#.', '.#.'], label: { en: 'Net A', id: 'Jaring A' } },
        { id: 'b', grid: ['###', '###', '...', '...'], label: { en: 'Net B', id: 'Jaring B' } },
        { id: 'c', grid: ['#..', '#..', '#..', '###'], label: { en: 'Net C', id: 'Jaring C' } },
        { id: 'd', grid: ['.##', '.##', '.#.', '.#.'], label: { en: 'Net D', id: 'Jaring D' } },
      ],
      answerId: 'a',
    },
  },
]
