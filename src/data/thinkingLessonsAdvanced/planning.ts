import type { ThinkingLesson } from '../../types'

export const planningLessonsAdvanced: ThinkingLesson[] = [
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
]
