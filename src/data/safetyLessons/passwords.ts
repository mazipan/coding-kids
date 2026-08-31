import type { SafetyLesson } from '../../types'

export const passwordsLessons: SafetyLesson[] = [
  // ── Password Planet ──────────────────────────────────────────
  {
    id: 'passwords-0',
    worldId: 'passwords',
    number: 0,
    title: { en: 'A Sneaky Question', id: 'Pertanyaan Licik' },
    mascotMessage: { en: 'A game buddy just asked something tricky! 🔑', id: 'Teman di game baru saja bertanya sesuatu yang licik! 🔑' },
    xpReward: 10,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'A game buddy asks for your birthday to "unlock a secret prize." What do you do?',
        id: 'Teman di game meminta tanggal lahirmu untuk "membuka hadiah rahasia." Apa yang kamu lakukan?',
      },
      options: [
        { id: 'tell', emoji: '🎂', label: { en: 'Tell them your real birthday', id: 'Beri tahu tanggal lahir aslimu' } },
        { id: 'ask-adult', emoji: '🙋', label: { en: "Don't tell — ask a grown-up first", id: 'Jangan beri tahu — tanya orang dewasa dulu' } },
        { id: 'fake', emoji: '🤥', label: { en: 'Make up a fake birthday and send it', id: 'Buat tanggal lahir palsu dan kirim' } },
        { id: 'ignore', emoji: '🙊', label: { en: "Ignore it and don't tell anyone", id: 'Abaikan saja tanpa bilang siapa-siapa' } },
      ],
      answerId: 'ask-adult',
    },
  },
  {
    id: 'passwords-1',
    worldId: 'passwords',
    number: 1,
    title: { en: 'Is This Code Strong?', id: 'Apakah Kode Ini Kuat?' },
    mascotMessage: { en: 'Some secret codes are easy to guess. Is this one? 🔐', id: 'Beberapa kode rahasia mudah ditebak. Apakah ini salah satunya? 🔐' },
    xpReward: 10,
    puzzle: {
      type: 'true-false',
      statement: { en: '"password123" is a strong secret code.', id: '"password123" adalah kode rahasia yang kuat.' },
      answer: false,
    },
  },
  {
    id: 'passwords-2',
    worldId: 'passwords',
    number: 2,
    title: { en: 'Secret or Not?', id: 'Rahasia atau Bukan?' },
    mascotMessage: { en: 'Match each thing about you to what should happen with it! 🧩', id: 'Cocokkan setiap hal tentang dirimu dengan apa yang seharusnya terjadi! 🧩' },
    xpReward: 10,
    puzzle: {
      type: 'match',
      pairs: [
        {
          leftId: 'nickname', leftEmoji: '🎮', leftLabel: { en: 'Your game nickname', id: 'Nama panggilanmu di game' },
          rightId: 'ok', rightEmoji: '👍', rightLabel: { en: 'Great to share with friends!', id: 'Boleh dibagikan ke teman!' },
        },
        {
          leftId: 'address', leftEmoji: '🏠', leftLabel: { en: 'Your home address', id: 'Alamat rumahmu' },
          rightId: 'never', rightEmoji: '🚫', rightLabel: { en: 'Never share this online', id: 'Jangan pernah dibagikan online' },
        },
        {
          leftId: 'hobby', leftEmoji: '🎨', leftLabel: { en: 'Your favourite hobby', id: 'Hobi favoritmu' },
          rightId: 'fun', rightEmoji: '💬', rightLabel: { en: 'Fun to talk about!', id: 'Seru untuk diceritakan!' },
        },
      ],
    },
  },
  {
    id: 'passwords-3',
    worldId: 'passwords',
    number: 3,
    title: { en: 'What Makes It Strong', id: 'Apa yang Membuatnya Kuat' },
    mascotMessage: { en: 'Let\'s think about what a strong secret code needs. 💪', id: 'Ayo pikirkan apa yang dibutuhkan kode rahasia yang kuat. 💪' },
    xpReward: 12,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'A strong secret code mixes letters and numbers, and is something only you know.',
        id: 'Kode rahasia yang kuat mencampur huruf dan angka, dan hanya kamu yang tahu.',
      },
      answer: true,
    },
  },
  {
    id: 'passwords-4',
    worldId: 'passwords',
    number: 4,
    title: { en: 'Pick the Best Code', id: 'Pilih Kode Terbaik' },
    mascotMessage: { en: 'Time to choose a new secret code for your tablet! 📱', id: 'Saatnya memilih kode rahasia baru untuk tabletmu! 📱' },
    xpReward: 12,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'You need a new secret code for your tablet. Which one is the strongest?',
        id: 'Kamu butuh kode rahasia baru untuk tabletmu. Mana yang paling kuat?',
      },
      options: [
        { id: 'pet', emoji: '🐶', label: { en: "Your pet's name", id: 'Nama hewan peliharaanmu' } },
        { id: 'simple', emoji: '🔢', label: { en: '"1234"', id: '"1234"' } },
        { id: 'madeup', emoji: '🦄', label: { en: 'A made-up word + numbers', id: 'Kata buatan sendiri + angka' } },
        { id: 'fullname', emoji: '🧑', label: { en: 'Your full name', id: 'Nama lengkapmu' } },
      ],
      answerId: 'madeup',
    },
  },
  {
    id: 'passwords-5',
    worldId: 'passwords',
    number: 5,
    title: { en: '"I\'m Your Friend\'s Mum!"', id: '"Saya Ibu Temanmu!"' },
    mascotMessage: { en: 'This one needs careful thinking. 🤔', id: 'Yang satu ini perlu dipikirkan baik-baik. 🤔' },
    xpReward: 18,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Even if a message says "I\'m your friend\'s mum, send me your address," you should still ask a grown-up before sharing it.',
        id: 'Meskipun pesan bilang "Saya ibu temanmu, kirim alamatmu," kamu tetap harus bertanya orang dewasa dulu sebelum membagikannya.',
      },
      answer: true,
    },
  },
  {
    id: 'passwords-6',
    worldId: 'passwords',
    number: 6,
    title: { en: 'Asking Again and Again', id: 'Bertanya Berulang Kali' },
    mascotMessage: { en: 'Someone keeps asking the same thing in different ways. 😕', id: 'Seseorang terus bertanya hal yang sama dengan cara berbeda. 😕' },
    xpReward: 18,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Someone in a game chat keeps rephrasing the same personal question three different ways. What should you do?',
        id: 'Seseorang di obrolan game terus mengulang pertanyaan pribadi yang sama dengan tiga cara berbeda. Apa yang harus kamu lakukan?',
      },
      options: [
        { id: 'tell-adult', emoji: '🗣️', label: { en: 'Tell a trusted adult', id: 'Beri tahu orang dewasa yang dipercaya' } },
        { id: 'answer', emoji: '😬', label: { en: 'Just answer so they stop', id: 'Jawab saja supaya berhenti' } },
        { id: 'dodge-alone', emoji: '🤐', label: { en: 'Keep dodging it by yourself, forever', id: 'Terus menghindar sendirian, selamanya' } },
        { id: 'block-nothing', emoji: '😴', label: { en: 'Do nothing at all', id: 'Tidak melakukan apa-apa' } },
      ],
      answerId: 'tell-adult',
    },
  },
  {
    id: 'passwords-7',
    worldId: 'passwords',
    number: 7,
    title: { en: 'Your Profile', id: 'Profilmu' },
    mascotMessage: { en: 'What should go in your game profile? 🎮', id: 'Apa yang boleh ada di profil gamemu? 🎮' },
    xpReward: 12,
    puzzle: {
      type: 'true-false',
      statement: { en: "Sharing your school's name in your game profile is fine.", id: 'Membagikan nama sekolahmu di profil game itu tidak apa-apa.' },
      answer: false,
    },
  },
  {
    id: 'passwords-8',
    worldId: 'passwords',
    number: 8,
    title: { en: 'Which One Stays Secret?', id: 'Mana yang Harus Tetap Rahasia?' },
    mascotMessage: { en: 'Three of these are fine to share. One should stay secret! 🕵️', id: 'Tiga dari ini boleh dibagikan. Satu harus tetap rahasia! 🕵️' },
    xpReward: 18,
    puzzle: {
      type: 'abstraction',
      subtype: 'odd-one-out',
      question: { en: 'Which one should you always keep secret?', id: 'Mana yang harus selalu kamu rahasiakan?' },
      items: [
        { id: 'username', emoji: '🎮', label: { en: 'Your game username', id: 'Nama pengguna gamemu' } },
        { id: 'game', emoji: '⚽', label: { en: 'Your favourite game', id: 'Game favoritmu' } },
        { id: 'phone', emoji: '☎️', label: { en: 'Your home phone number', id: 'Nomor telepon rumahmu' } },
        { id: 'color', emoji: '🎨', label: { en: 'Your favourite colour', id: 'Warna favoritmu' } },
      ],
      correctIds: ['phone'],
    },
  },
  {
    id: 'passwords-9',
    worldId: 'passwords',
    number: 9,
    title: { en: "A Pop-Up's Trick", id: 'Trik Pop-Up' },
    mascotMessage: { en: 'The trickiest pop-up yet — you\'ve got this! 🛡️', id: 'Pop-up paling licik sejauh ini — kamu pasti bisa! 🛡️' },
    xpReward: 24,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'A pop-up in a kids\' game says "Enter your parent\'s password to keep playing!" What do you do?',
        id: 'Pop-up di game anak-anak bilang "Masukkan kata sandi orang tuamu untuk terus bermain!" Apa yang kamu lakukan?',
      },
      options: [
        { id: 'stop', emoji: '🛑', label: { en: "Stop, don't type anything, get a grown-up", id: 'Berhenti, jangan ketik apa pun, panggil orang dewasa' } },
        { id: 'guess', emoji: '🤷', label: { en: 'Try typing a guess', id: 'Coba ketik tebakan' } },
        { id: 'find', emoji: '🔍', label: { en: "Go find your parent's password yourself", id: 'Cari sendiri kata sandi orang tuamu' } },
        { id: 'retype', emoji: '🔁', label: { en: 'Keep tapping it to make it go away', id: 'Terus mengetuknya supaya hilang' } },
      ],
      answerId: 'stop',
    },
  },
]
