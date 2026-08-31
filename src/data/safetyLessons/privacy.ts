import type { SafetyLesson } from '../../types'

export const privacyLessons: SafetyLesson[] = [
  // ── Privacy Cove ─────────────────────────────────────────────
  {
    id: 'privacy-0',
    worldId: 'privacy',
    number: 0,
    title: { en: 'A New Online Friend', id: 'Teman Baru Online' },
    mascotMessage: { en: 'A new friend in a game just asked something. 🏝️', id: 'Teman baru di game baru saja bertanya sesuatu. 🏝️' },
    xpReward: 10,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'A new online friend asks what school you go to. What\'s the safe reply?',
        id: 'Teman baru online bertanya sekolahmu di mana. Apa balasan yang aman?',
      },
      options: [
        { id: 'school', emoji: '🏫', label: { en: 'Tell them your school\'s name', id: 'Beri tahu nama sekolahmu' } },
        { id: 'deflect', emoji: '😊', label: { en: "I don't share that, let's just play!", id: 'Aku tidak membagikan itu, ayo main saja!' } },
        { id: 'hint', emoji: '🤫', label: { en: 'Give a hint about which street it\'s on', id: 'Beri petunjuk jalan sekolahnya' } },
        { id: 'ask-why', emoji: '❓', label: { en: 'Ask why they want to know, then tell them', id: 'Tanya kenapa, lalu tetap beri tahu' } },
      ],
      answerId: 'deflect',
    },
  },
  {
    id: 'privacy-1',
    worldId: 'privacy',
    number: 1,
    title: { en: 'Nickname vs. Real Name', id: 'Nama Panggilan vs. Nama Asli' },
    mascotMessage: { en: 'Your username doesn\'t have to be your real name! 🎭', id: 'Nama penggunamu tidak harus nama aslimu! 🎭' },
    xpReward: 10,
    puzzle: {
      type: 'true-false',
      statement: { en: 'Your gamer username can be different from your real name to protect your privacy.', id: 'Nama penggunamu di game boleh berbeda dari nama aslimu untuk melindungi privasimu.' },
      answer: true,
    },
  },
  {
    id: 'privacy-2',
    worldId: 'privacy',
    number: 2,
    title: { en: 'Safest to Most Private', id: 'Paling Aman ke Paling Pribadi' },
    mascotMessage: {
      en: '🎮 = your favourite game, 🧑 = your nickname, 🏙️ = your city, 🏠 = your home address. Tap them from safest to share, to most private!',
      id: '🎮 = game favoritmu, 🧑 = nama panggilanmu, 🏙️ = kotamu, 🏠 = alamat rumahmu. Ketuk dari yang paling aman dibagikan, sampai yang paling pribadi!',
    },
    xpReward: 15,
    puzzle: {
      type: 'sort',
      items: ['🏠', '🎮', '🧑', '🏙️'],
      answer: ['🎮', '🧑', '🏙️', '🏠'],
      prompt: { en: 'Tap from safest to share, ending with most private!', id: 'Ketuk dari yang paling aman dibagikan, sampai yang paling pribadi!' },
    },
  },
  {
    id: 'privacy-3',
    worldId: 'privacy',
    number: 3,
    title: { en: 'Your House Number', id: 'Nomor Rumahmu' },
    mascotMessage: { en: 'Would you post this for everyone to see? 🏠', id: 'Apakah kamu akan memposting ini untuk semua orang lihat? 🏠' },
    xpReward: 12,
    puzzle: {
      type: 'true-false',
      statement: { en: 'It\'s fine to post a photo of your house number so friends can find your street.', id: 'Tidak apa-apa memposting foto nomor rumahmu supaya teman bisa menemukan jalanmu.' },
      answer: false,
    },
  },
  {
    id: 'privacy-4',
    worldId: 'privacy',
    number: 4,
    title: { en: 'What Stays Private?', id: 'Apa yang Tetap Pribadi?' },
    mascotMessage: { en: 'Pick every piece of info that should always stay private. 🤫', id: 'Pilih semua info yang harus selalu tetap pribadi. 🤫' },
    xpReward: 15,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: { en: 'Which of these must always stay private?', id: 'Mana dari ini yang harus selalu tetap pribadi?' },
      items: [
        { id: 'nickname', emoji: '🎮', label: { en: 'Your game nickname', id: 'Nama panggilan gamemu' } },
        { id: 'game', emoji: '⚽', label: { en: 'Your favourite game', id: 'Game favoritmu' } },
        { id: 'school', emoji: '🏫', label: { en: 'Your school\'s name', id: 'Nama sekolahmu' } },
        { id: 'address', emoji: '🏠', label: { en: 'Your home address', id: 'Alamat rumahmu' } },
        { id: 'phone', emoji: '☎️', label: { en: 'Your phone number', id: 'Nomor teleponmu' } },
        { id: 'color', emoji: '🎨', label: { en: 'Your favourite colour', id: 'Warna favoritmu' } },
      ],
      correctIds: ['school', 'address', 'phone'],
    },
  },
  {
    id: 'privacy-5',
    worldId: 'privacy',
    number: 5,
    title: { en: 'Hidden in a Photo', id: 'Tersembunyi di Foto' },
    mascotMessage: { en: 'Photos can share more than you think. 📸', id: 'Foto bisa membagikan lebih dari yang kamu kira. 📸' },
    xpReward: 18,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Turning off your device\'s location tag before posting a photo helps protect your privacy, even if the photo itself seems harmless.',
        id: 'Mematikan tanda lokasi perangkatmu sebelum memposting foto membantu melindungi privasimu, meski fotonya sendiri terlihat tidak berbahaya.',
      },
      answer: true,
    },
  },
  {
    id: 'privacy-6',
    worldId: 'privacy',
    number: 6,
    title: { en: 'An App Wants Your Contacts', id: 'Aplikasi Ingin Kontakmu' },
    mascotMessage: { en: 'A drawing app is asking for something unrelated. 🎨', id: 'Aplikasi menggambar meminta sesuatu yang tidak berhubungan. 🎨' },
    xpReward: 18,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'An app wants permission to see your contacts list just to "let you draw pictures." What should you do?',
        id: 'Sebuah aplikasi ingin izin melihat daftar kontakmu hanya untuk "membuatmu bisa menggambar." Apa yang harus kamu lakukan?',
      },
      options: [
        { id: 'allow', emoji: '✅', label: { en: 'Allow it — it\'s just a drawing app', id: 'Izinkan — kan cuma aplikasi menggambar' } },
        { id: 'ask-decline', emoji: '🙋', label: { en: 'Decline, or ask a grown-up first', id: 'Tolak, atau tanya orang dewasa dulu' } },
        { id: 'allow-once', emoji: '⏱️', label: { en: 'Allow it just this one time', id: 'Izinkan hanya kali ini saja' } },
        { id: 'ignore', emoji: '🙈', label: { en: 'Tap through without reading it', id: 'Ketuk saja tanpa membaca' } },
      ],
      answerId: 'ask-decline',
    },
  },
  {
    id: 'privacy-7',
    worldId: 'privacy',
    number: 7,
    title: { en: '"They Already Know Me"', id: '"Mereka Sudah Kenal Aku"' },
    mascotMessage: { en: 'A site already knows your name. Does that change anything? 🌐', id: 'Sebuah situs sudah tahu namamu. Apakah itu mengubah sesuatu? 🌐' },
    xpReward: 15,
    puzzle: {
      type: 'true-false',
      statement: { en: 'If a website already has your name, it\'s fine to also give it your address.', id: 'Jika sebuah situs sudah punya namamu, tidak apa-apa memberikan alamatmu juga.' },
      answer: false,
    },
  },
  {
    id: 'privacy-8',
    worldId: 'privacy',
    number: 8,
    title: { en: 'Public or Private?', id: 'Publik atau Pribadi?' },
    mascotMessage: { en: 'You\'re setting up your profile. Answer both questions! 📝', id: 'Kamu sedang mengatur profilmu. Jawab kedua pertanyaan! 📝' },
    xpReward: 20,
    puzzle: {
      type: 'multi-step',
      intro: { en: 'You\'re setting up a public game profile. Choose carefully!', id: 'Kamu sedang mengatur profil game publik. Pilih dengan hati-hati!' },
      steps: [
        {
          id: 'step1',
          prompt: { en: 'What\'s safe to put in a public profile?', id: 'Apa yang aman dimasukkan ke profil publik?' },
          options: [
            { id: 'nickname', emoji: '🎮', label: { en: 'Your nickname', id: 'Nama panggilanmu' } },
            { id: 'school', emoji: '🏫', label: { en: 'Your school\'s name', id: 'Nama sekolahmu' } },
          ],
          answerId: 'nickname',
        },
        {
          id: 'step2',
          prompt: { en: 'What should always stay private?', id: 'Apa yang harus selalu tetap pribadi?' },
          options: [
            { id: 'school2', emoji: '🏫', label: { en: 'Your school\'s name', id: 'Nama sekolahmu' } },
            { id: 'nickname2', emoji: '🎮', label: { en: 'Your nickname', id: 'Nama panggilanmu' } },
          ],
          answerId: 'school2',
        },
      ],
    },
  },
  {
    id: 'privacy-9',
    worldId: 'privacy',
    number: 9,
    title: { en: 'Check Your Settings', id: 'Periksa Pengaturanmu' },
    mascotMessage: { en: 'The trickiest privacy puzzle yet! 🧭', id: 'Teka-teki privasi paling rumit sejauh ini! 🧭' },
    xpReward: 25,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'A gaming platform shares your real name and city with strangers by default, unless you change a setting. What\'s the smart first move?',
        id: 'Sebuah platform game membagikan nama asli dan kotamu ke orang asing secara default, kecuali kamu mengubah pengaturan. Apa langkah pertama yang cerdas?',
      },
      options: [
        { id: 'check-settings', emoji: '⚙️', label: { en: 'Check/change the privacy setting, ask a parent to help', id: 'Periksa/ubah pengaturan privasi, minta bantuan orang tua' } },
        { id: 'ignore-it', emoji: '🤷', label: { en: 'Leave it — strangers probably won\'t notice', id: 'Biarkan saja — orang asing mungkin tidak akan sadar' } },
        { id: 'delete-app', emoji: '🗑️', label: { en: 'Delete the game right away without checking', id: 'Hapus game itu langsung tanpa memeriksa' } },
        { id: 'add-more', emoji: '➕', label: { en: 'Add even more info since it\'s already shared', id: 'Tambahkan lebih banyak info karena sudah terlanjur dibagikan' } },
      ],
      answerId: 'check-settings',
    },
  },
]
