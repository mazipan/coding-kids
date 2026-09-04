import type { ThinkingLesson } from '../../types'

export const moneyLessonsAdvanced: ThinkingLesson[] = [
  // ── Money & Time · tier two ───────────────────────────────────
  // Tier one: read a single price, a single clock reading, a single routine. Tier two
  // opens two mechanics tier one never used — `multi-step` (a dependent chain: unit price,
  // then unit price, then a decision; or save, then split, then allocate) and
  // `grid-select` (scan a weekly schedule for free or conflicting slots, with compound
  // day-AND-slot-AND-status conditions) — plus `abstraction` for want-vs-need sorting.
  {
    id: 'money-10',
    worldId: 'money',
    number: 10,
    title: { en: 'The Better Deal', id: 'Pilihan yang Lebih Hemat' },
    mascotMessage: {
      en: 'Work out the price of just ONE sticker from each pack, then compare them. 🏷️',
      id: 'Cari harga SATU stiker saja dari setiap bungkus, lalu bandingkan. 🏷️',
    },
    tutorial: {
      title: { en: 'A chain of questions', id: 'Rantai pertanyaan' },
      body: {
        en: 'Working out the better deal takes more than one step. This puzzle asks each part in turn and keeps your answers on screen.',
        id: 'Mencari pilihan yang lebih hemat butuh lebih dari satu langkah. Teka-teki ini menanyakan setiap bagian bergiliran dan menyimpan jawabanmu di layar.',
      },
      example: {
        en: 'Every link must be right — one wrong answer and the chain restarts from the beginning.',
        id: 'Setiap mata rantai harus benar — satu jawaban salah dan rantainya diulang dari awal.',
      },
    },
    xpReward: 26,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: 'A 4-pack of stickers costs 12. A 6-pack of the same stickers costs 24.',
        id: 'Bungkus isi 4 stiker harganya 12. Bungkus isi 6 stiker yang sama harganya 24.',
      },
      visual: '🏷️',
      steps: [
        {
          id: 'unitfour',
          prompt: { en: 'How much does ONE sticker cost from the 4-pack?', id: 'Berapa harga SATU stiker dari bungkus isi 4?' },
          options: [
            { id: 'three', emoji: '🪙', label: { en: '3 each', id: '3 per stiker' } },
            { id: 'two', emoji: '🪙', label: { en: '2 each', id: '2 per stiker' } },
            { id: 'four', emoji: '🪙', label: { en: '4 each', id: '4 per stiker' } },
            { id: 'six', emoji: '🪙', label: { en: '6 each', id: '6 per stiker' } },
          ],
          answerId: 'three',
        },
        {
          id: 'unitsix',
          prompt: { en: 'How much does ONE sticker cost from the 6-pack?', id: 'Berapa harga SATU stiker dari bungkus isi 6?' },
          options: [
            { id: 'four', emoji: '🪙', label: { en: '4 each', id: '4 per stiker' } },
            { id: 'three', emoji: '🪙', label: { en: '3 each', id: '3 per stiker' } },
            { id: 'six', emoji: '🪙', label: { en: '6 each', id: '6 per stiker' } },
            { id: 'eight', emoji: '🪙', label: { en: '8 each', id: '8 per stiker' } },
          ],
          answerId: 'four',
        },
        {
          id: 'decide',
          prompt: { en: 'So which pack is the better deal?', id: 'Jadi bungkus mana yang lebih hemat?' },
          options: [
            { id: 'fourpack', emoji: '✅', label: { en: 'The 4-pack', id: 'Bungkus isi 4' } },
            { id: 'sixpack', emoji: '📦', label: { en: 'The 6-pack', id: 'Bungkus isi 6' } },
            { id: 'same', emoji: '⚖️', label: { en: 'They cost the same per sticker', id: 'Harga per stikernya sama' } },
            { id: 'cantsay', emoji: '🤷', label: { en: "You can't tell without buying both", id: 'Tidak bisa dipastikan tanpa membeli keduanya' } },
          ],
          answerId: 'fourpack',
        },
      ],
    },
  },
  {
    id: 'money-11',
    worldId: 'money',
    number: 11,
    title: { en: 'Free Time Slots', id: 'Waktu yang Kosong' },
    mascotMessage: {
      en: 'Each row is one day, Monday to Friday. Each column is Morning, Afternoon, then Evening. 🗓️',
      id: 'Setiap baris adalah satu hari, Senin sampai Jumat. Setiap kolom adalah Pagi, Siang, lalu Malam. 🗓️',
    },
    tutorial: {
      title: { en: 'Tap to build your answer', id: 'Ketuk untuk menyusun jawabanmu' },
      body: {
        en: 'Some puzzles do not give you four options to pick from. Instead, tap every square on the grid that fits the question, then press Check.',
        id: 'Beberapa teka-teki tidak memberimu empat pilihan. Sebagai gantinya, ketuk setiap kotak di kisi yang sesuai dengan pertanyaan, lalu tekan Periksa.',
      },
      example: {
        en: 'You can tap more than one square, and tapping a square again un-taps it.',
        id: 'Kamu bisa mengetuk lebih dari satu kotak, dan mengetuk kotak yang sama lagi akan membatalkannya.',
      },
    },
    xpReward: 27,
    puzzle: {
      type: 'grid-select',
      question: { en: 'Tap every EVENING slot that is still free (no activity booked yet).', id: 'Ketuk setiap kotak MALAM yang masih kosong (belum ada kegiatan).' },
      note: { en: 'A blank square is free. A square with an emoji already has something booked.', id: 'Kotak kosong berarti bebas. Kotak dengan emoji berarti sudah ada kegiatan.' },
      cells: [
        ['🏫', '🏫', ''],
        ['🏫', '⚽', ''],
        ['🏫', '🏫', '🎹'],
        ['🏫', '⚽', ''],
        ['🏫', '🏫', ''],
      ],
      answer: ['0-2', '1-2', '3-2', '4-2'],
    },
  },
  {
    id: 'money-12',
    worldId: 'money',
    number: 12,
    title: { en: 'Spot the Conflict', id: 'Temukan yang Bertabrakan' },
    mascotMessage: {
      en: 'A square with TWO emoji means two things are booked at the same time. ⚠️',
      id: 'Kotak dengan DUA emoji berarti dua kegiatan dijadwalkan di waktu yang sama. ⚠️',
    },
    xpReward: 28,
    puzzle: {
      type: 'grid-select',
      question: { en: 'Tap every time slot that has TWO activities booked at once — a conflict.', id: 'Ketuk setiap kotak yang punya DUA kegiatan sekaligus — yang bertabrakan.' },
      note: { en: 'Each row is one day, Monday to Friday. Each column is Morning, Afternoon, then Evening.', id: 'Setiap baris adalah satu hari, Senin sampai Jumat. Setiap kolom adalah Pagi, Siang, lalu Malam.' },
      cells: [
        ['🏫', '⚽', ''],
        ['🏫', '📚⚽', ''],
        ['🏫', '🎹', ''],
        ['🏫', '⚽📚', '🎹'],
        ['🏫', '', '🎉'],
      ],
      answer: ['1-1', '3-1'],
    },
  },
  {
    id: 'money-13',
    worldId: 'money',
    number: 13,
    title: { en: 'Splitting a Gift', id: 'Membagi Hadiah' },
    mascotMessage: {
      en: 'Work out the savings part first, then split what is left. 🎁',
      id: 'Hitung dulu bagian tabungannya, lalu bagi sisanya. 🎁',
    },
    xpReward: 29,
    puzzle: {
      type: 'math',
      question: {
        en: 'You get 40 as a birthday gift. You save half of it, then split the rest evenly between a want and a need. How much goes to your want?',
        id: 'Kamu mendapat hadiah ulang tahun 40. Kamu menabung setengahnya, lalu membagi sisanya sama rata untuk keinginan dan kebutuhan. Berapa yang masuk ke bagian keinginanmu?',
      },
      visual: '🎁',
      options: ['5', '10', '15', '20'],
      answer: '10',
    },
  },
  {
    id: 'money-14',
    worldId: 'money',
    number: 14,
    title: { en: 'Catch the Train', id: 'Kejar Keretanya' },
    mascotMessage: {
      en: 'Count the minutes forward from the start time — watch out when you cross the hour! 🚆',
      id: 'Hitung menit ke depan dari waktu mulainya — hati-hati saat melewati jam bulat! 🚆',
    },
    xpReward: 30,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'A train leaves at 9:40 and the journey takes 50 minutes. What time does it arrive?',
        id: 'Kereta berangkat pukul 9:40 dan perjalanannya memakan waktu 50 menit. Pukul berapa keretanya tiba?',
      },
      options: [
        { id: 'tenthirty', emoji: '🚆', label: { en: '10:30', id: '10:30' } },
        { id: 'tentwenty', emoji: '🚆', label: { en: '10:20', id: '10:20' } },
        { id: 'tenforty', emoji: '🚆', label: { en: '10:40', id: '10:40' } },
        { id: 'nineninety', emoji: '🚆', label: { en: '9:90', id: '9:90' } },
      ],
      answerId: 'tenthirty',
    },
  },
  {
    id: 'money-15',
    worldId: 'money',
    number: 15,
    title: { en: 'The Better Value', id: 'Nilai yang Lebih Baik' },
    mascotMessage: {
      en: 'Work out the price per box for each pack before you decide. 🧃',
      id: 'Hitung dulu harga per kotak dari setiap kemasan sebelum memutuskan. 🧃',
    },
    xpReward: 28,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'A 3-pack of juice boxes costs 9. A 5-pack of the same juice costs 20. The 5-pack is the better deal per box.',
        id: 'Kemasan isi 3 kotak jus harganya 9. Kemasan isi 5 kotak jus yang sama harganya 20. Kemasan isi 5 lebih hemat per kotaknya.',
      },
      answer: false,
    },
  },
  {
    id: 'money-16',
    worldId: 'money',
    number: 16,
    title: { en: 'Want or Need?', id: 'Keinginan atau Kebutuhan?' },
    mascotMessage: {
      en: 'A need keeps you healthy, safe, or ready for school. A want is just nice to have. 🧥',
      id: 'Kebutuhan membuatmu sehat, aman, atau siap sekolah. Keinginan hanya menyenangkan untuk dimiliki. 🧥',
    },
    xpReward: 30,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: { en: 'Tap all the things that are a NEED, not just a want!', id: 'Ketuk semua yang termasuk KEBUTUHAN, bukan sekadar keinginan!' },
      items: [
        { id: 'shoes', emoji: '👟', label: { en: 'New school shoes', id: 'Sepatu sekolah baru' } },
        { id: 'game', emoji: '🎮', label: { en: 'A new video game', id: 'Gim video baru' } },
        { id: 'coat', emoji: '🧥', label: { en: 'A warm coat for winter', id: 'Jaket hangat untuk musim dingin' } },
        { id: 'candy', emoji: '🍬', label: { en: 'A candy bar', id: 'Sebatang permen' } },
        { id: 'toothbrush', emoji: '🪥', label: { en: 'A new toothbrush (yours is worn out)', id: 'Sikat gigi baru (punyamu sudah rusak)' } },
        { id: 'robot', emoji: '🤖', label: { en: 'A toy robot', id: 'Robot mainan' } },
      ],
      correctIds: ['shoes', 'coat', 'toothbrush'],
    },
  },
  {
    id: 'money-17',
    worldId: 'money',
    number: 17,
    title: { en: 'Weekday Evenings Free', id: 'Malam Hari Kerja yang Kosong' },
    mascotMessage: {
      en: 'Weekends do not count this time — only tap free evenings on a school day! 📅',
      id: 'Akhir pekan tidak dihitung kali ini — hanya ketuk malam kosong di hari sekolah! 📅',
    },
    xpReward: 32,
    puzzle: {
      type: 'grid-select',
      question: { en: 'Tap every WEEKDAY evening that is still free. Remember — weekends do not count here!', id: 'Ketuk setiap malam HARI KERJA yang masih kosong. Ingat — akhir pekan tidak dihitung di sini!' },
      note: { en: 'Rows, top to bottom: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Each column is Morning, Afternoon, then Evening.', id: 'Baris, dari atas ke bawah: Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu. Setiap kolom adalah Pagi, Siang, lalu Malam.' },
      cells: [
        ['🏫', '🏫', ''],
        ['🏫', '⚽', ''],
        ['🏫', '🏫', '🎹'],
        ['🏫', '⚽', ''],
        ['🏫', '🏫', '🎉'],
        ['', '⚽', ''],
        ['', '', ''],
      ],
      answer: ['0-2', '1-2', '3-2'],
    },
  },
  {
    id: 'money-18',
    worldId: 'money',
    number: 18,
    title: { en: 'Save First', id: 'Menabung Dulu' },
    mascotMessage: {
      en: 'Turn the saved amount into a fraction of the whole allowance. 🏦',
      id: 'Ubah jumlah yang ditabung menjadi pecahan dari seluruh uang saku. 🏦',
    },
    xpReward: 34,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Sam gets 12 allowance and saves 3 of it right away. That means he saved one quarter of his allowance.',
        id: 'Sam mendapat uang saku 12 dan langsung menabung 3 darinya. Artinya dia menabung seperempat dari uang sakunya.',
      },
      answer: true,
    },
  },
  {
    id: 'money-19',
    worldId: 'money',
    number: 19,
    title: { en: 'The Allowance Plan', id: 'Rencana Uang Saku' },
    mascotMessage: {
      en: 'Three steps: save first, see what is left, then split that in half. Keep a running total! 💰',
      id: 'Tiga langkah: tabung dulu, lihat sisanya, lalu bagi dua sisanya. Simpan total berjalan! 💰',
    },
    xpReward: 40,
    puzzle: {
      type: 'multi-step',
      intro: {
        en: "Nadia gets 60 allowance this week. She wants to save some, spend some on a want, and spend some on a need.",
        id: 'Nadia mendapat uang saku 60 minggu ini. Dia ingin menabung sebagian, membeli keinginan, dan membeli kebutuhan.',
      },
      visual: '💰',
      steps: [
        {
          id: 'save',
          prompt: { en: 'She saves one third of it first. How much does she save?', id: 'Dia menabung sepertiganya dulu. Berapa yang dia tabung?' },
          options: [
            { id: 'twenty', emoji: '🏦', label: { en: '20', id: '20' } },
            { id: 'fifteen', emoji: '🏦', label: { en: '15', id: '15' } },
            { id: 'thirty', emoji: '🏦', label: { en: '30', id: '30' } },
            { id: 'ten', emoji: '🏦', label: { en: '10', id: '10' } },
          ],
          answerId: 'twenty',
        },
        {
          id: 'left',
          prompt: { en: 'How much is left after she saves that?', id: 'Berapa sisanya setelah dia menabung itu?' },
          options: [
            { id: 'forty', emoji: '👛', label: { en: '40', id: '40' } },
            { id: 'thirty', emoji: '👛', label: { en: '30', id: '30' } },
            { id: 'twenty', emoji: '👛', label: { en: '20', id: '20' } },
            { id: 'fifty', emoji: '👛', label: { en: '50', id: '50' } },
          ],
          answerId: 'forty',
        },
        {
          id: 'want',
          prompt: { en: "She splits what is left evenly between 'want' and 'need'. How much goes to her want?", id: "Dia membagi sisanya sama rata antara 'keinginan' dan 'kebutuhan'. Berapa yang masuk ke bagian keinginannya?" },
          options: [
            { id: 'twenty', emoji: '🎯', label: { en: '20', id: '20' } },
            { id: 'ten', emoji: '🎯', label: { en: '10', id: '10' } },
            { id: 'forty', emoji: '🎯', label: { en: '40', id: '40' } },
            { id: 'fifteen', emoji: '🎯', label: { en: '15', id: '15' } },
          ],
          answerId: 'twenty',
        },
      ],
    },
  },
]
