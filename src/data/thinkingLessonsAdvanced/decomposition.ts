import type { ThinkingLesson } from '../../types'

export const decompositionLessonsAdvanced: ThinkingLesson[] = [
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
]
