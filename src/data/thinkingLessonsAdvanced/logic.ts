import type { ThinkingLesson } from '../../types'

export const logicLessonsAdvanced: ThinkingLesson[] = [
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
]
