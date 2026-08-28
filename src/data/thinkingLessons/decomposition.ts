import type { ThinkingLesson } from '../../types'

export const decompositionLessons: ThinkingLesson[] = [
  // ── Step by Step (Decomposition) ─────────────────────────────
  {
    id: 'decomposition-0',
    worldId: 'decomposition',
    number: 0,
    title: { en: 'Make a Sandwich', id: 'Buat Sandwich' },
    mascotMessage: { en: "What's the right order to make a sandwich? Tap each step! 🥪", id: 'Apa urutan yang benar untuk membuat sandwich? Ketuk setiap langkahnya! 🥪' },
    xpReward: 10,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'bread', emoji: '🍞', label: { en: 'Get bread', id: 'Ambil roti' } },
        { id: 'filling', emoji: '🧀', label: { en: 'Add filling', id: 'Tambah isian' } },
        { id: 'close', emoji: '🥪', label: { en: 'Close it up', id: 'Tutup sandwich' } },
      ],
    },
  },
  {
    id: 'decomposition-1',
    worldId: 'decomposition',
    number: 1,
    title: { en: 'Brush Your Teeth', id: 'Gosok Gigi' },
    mascotMessage: { en: 'A healthy smile starts with the right steps! Tap them in order 😁', id: 'Senyum sehat dimulai dari langkah yang benar! Ketuk secara urut 😁' },
    xpReward: 10,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'wet', emoji: '💧', label: { en: 'Wet the brush', id: 'Basahi sikat' } },
        { id: 'paste', emoji: '🪥', label: { en: 'Add toothpaste', id: 'Tambah pasta gigi' } },
        { id: 'brush', emoji: '😁', label: { en: 'Brush teeth!', id: 'Gosok gigi!' } },
      ],
    },
  },
  {
    id: 'decomposition-2',
    worldId: 'decomposition',
    number: 2,
    title: { en: 'Water a Plant', id: 'Siram Tanaman' },
    mascotMessage: { en: "Plants are thirsty! Help them drink in the right order 🌱", id: 'Tanaman haus! Bantu mereka minum dengan urutan yang benar 🌱' },
    xpReward: 10,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'can', emoji: '🪣', label: { en: 'Get watering can', id: 'Ambil ember' } },
        { id: 'fill', emoji: '💧', label: { en: 'Fill with water', id: 'Isi dengan air' } },
        { id: 'pour', emoji: '🌱', label: { en: 'Water the plant', id: 'Siram tanamannya' } },
      ],
    },
  },
  {
    id: 'decomposition-3',
    worldId: 'decomposition',
    number: 3,
    title: { en: 'Make Hot Chocolate', id: 'Buat Coklat Panas' },
    mascotMessage: { en: 'Mmm, yummy! What order do you make hot chocolate? ☕', id: 'Mmm, enak! Apa urutan membuat coklat panas? ☕' },
    xpReward: 12,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'milk', emoji: '🥛', label: { en: 'Heat the milk', id: 'Panaskan susu' } },
        { id: 'cocoa', emoji: '🍫', label: { en: 'Add cocoa powder', id: 'Tambah coklat bubuk' } },
        { id: 'stir', emoji: '🥄', label: { en: 'Stir it well', id: 'Aduk sampai rata' } },
      ],
    },
  },
  {
    id: 'decomposition-4',
    worldId: 'decomposition',
    number: 4,
    title: { en: 'Make Orange Juice', id: 'Buat Jus Jeruk' },
    mascotMessage: { en: 'Fresh juice time! Put the steps in order 🍊', id: 'Saatnya jus segar! Susun langkah-langkahnya 🍊' },
    xpReward: 15,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'cut', emoji: '🍊', label: { en: 'Cut the orange', id: 'Potong jeruknya' } },
        { id: 'squeeze', emoji: '💪', label: { en: 'Squeeze the juice', id: 'Peras jusnya' } },
        { id: 'pour', emoji: '🥤', label: { en: 'Pour into glass', id: 'Tuang ke gelas' } },
      ],
    },
  },
  {
    id: 'decomposition-5',
    worldId: 'decomposition',
    number: 5,
    title: { en: 'Get Ready for School', id: 'Siap ke Sekolah' },
    mascotMessage: { en: "Don't miss the bus! What do you do first? 🚌", id: 'Jangan ketinggalan bis! Apa yang dilakukan pertama? 🚌' },
    xpReward: 18,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'wake', emoji: '😴', label: { en: 'Wake up!', id: 'Bangun tidur!' } },
        { id: 'breakfast', emoji: '🍳', label: { en: 'Eat breakfast', id: 'Makan sarapan' } },
        { id: 'pack', emoji: '🎒', label: { en: 'Pack your bag', id: 'Siapkan tas' } },
        { id: 'bus', emoji: '🚌', label: { en: 'Catch the bus', id: 'Naik bis' } },
      ],
    },
  },
  {
    id: 'decomposition-6',
    worldId: 'decomposition',
    number: 6,
    title: { en: 'Bake Cookies', id: 'Panggang Kue' },
    mascotMessage: { en: 'Baking is all about following steps in order! 🍪', id: 'Memanggang artinya mengikuti langkah secara urut! 🍪' },
    xpReward: 20,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'mix', emoji: '🥣', label: { en: 'Mix the dough', id: 'Aduk adonan' } },
        { id: 'shape', emoji: '🍪', label: { en: 'Shape cookies', id: 'Bentuk kue' } },
        { id: 'bake', emoji: '🔥', label: { en: 'Bake in oven', id: 'Panggang di oven' } },
        { id: 'cool', emoji: '❄️', label: { en: 'Let them cool', id: 'Biarkan dingin' } },
      ],
    },
  },
  {
    id: 'decomposition-7',
    worldId: 'decomposition',
    number: 7,
    title: { en: 'Send a Letter', id: 'Kirim Surat' },
    mascotMessage: { en: 'You want to send a letter to a friend — what comes first? ✉️', id: 'Kamu mau kirim surat ke teman — apa yang pertama? ✉️' },
    xpReward: 20,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'write', emoji: '✍️', label: { en: 'Write the letter', id: 'Tulis suratnya' } },
        { id: 'fold', emoji: '📄', label: { en: 'Fold the paper', id: 'Lipat kertasnya' } },
        { id: 'envelope', emoji: '✉️', label: { en: 'Put in envelope', id: 'Masukkan ke amplop' } },
        { id: 'post', emoji: '📬', label: { en: 'Post it!', id: 'Kirimkan!' } },
      ],
    },
  },
  {
    id: 'decomposition-8',
    worldId: 'decomposition',
    number: 8,
    title: { en: 'Wash Your Hands', id: 'Cuci Tangan' },
    mascotMessage: { en: 'Clean hands keep you healthy! Tap the right order 🙌', id: 'Tangan bersih membuatmu sehat! Ketuk urutan yang benar 🙌' },
    xpReward: 22,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'tap', emoji: '🚰', label: { en: 'Turn on the tap', id: 'Buka keran' } },
        { id: 'soap', emoji: '🧼', label: { en: 'Add soap', id: 'Tambah sabun' } },
        { id: 'rub', emoji: '🙌', label: { en: 'Rub your hands', id: 'Gosok tanganmu' } },
        { id: 'rinse', emoji: '💧', label: { en: 'Rinse and dry', id: 'Bilas dan keringkan' } },
      ],
    },
  },
  {
    id: 'decomposition-9',
    worldId: 'decomposition',
    number: 9,
    title: { en: 'Charge Your Phone', id: 'Cas HP' },
    mascotMessage: { en: 'A dead phone needs charging! What are the steps? 📱', id: 'HP lowbat butuh dicas! Apa langkah-langkahnya? 📱' },
    xpReward: 25,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'cable', emoji: '🔌', label: { en: 'Find the cable', id: 'Cari kabelnya' } },
        { id: 'phone', emoji: '📱', label: { en: 'Plug into phone', id: 'Colok ke HP' } },
        { id: 'wall', emoji: '🔋', label: { en: 'Plug into wall', id: 'Colok ke dinding' } },
        { id: 'wait', emoji: '⚡', label: { en: 'Watch it charge!', id: 'Lihat HP mengisi!' } },
      ],
    },
  },
]
