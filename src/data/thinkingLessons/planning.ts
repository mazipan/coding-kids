import type { ThinkingLesson } from '../../types'

export const planningLessons: ThinkingLesson[] = [
  // ── Planning Peaks ───────────────────────────────────────────
  // Constraint planning: the clues in the mascot line decide the order,
  // not everyday habit. Deliberately distinct from Step by Step (decomposition),
  // where the answer is the familiar real-world routine.
  {
    id: 'planning-0',
    worldId: 'planning',
    number: 0,
    title: { en: 'Pack by the Clues', id: 'Kemas Sesuai Petunjuk' },
    mascotMessage: {
      en: 'Pico has two packing rules: the map always goes in first, and the rope must go in before the tent. 🎒',
      id: 'Pico punya dua aturan mengemas: peta selalu masuk pertama, dan tali harus masuk sebelum tenda. 🎒',
    },
    xpReward: 10,
    tutorial: {
      title: { en: 'What is Planning?', id: 'Apa itu Perencanaan?' },
      body: {
        en: 'A plan is an order of steps that obeys every clue. Here the clues decide the order, not what you would normally do first. Read every clue before you tap!',
        id: 'Rencana adalah urutan langkah yang menaati semua petunjuk. Di sini petunjuklah yang menentukan urutan, bukan kebiasaan sehari-hari. Baca semua petunjuk sebelum mengetuk!',
      },
      example: {
        en: 'Clue: "the boots go on before the jacket". So even if you always grab the jacket first, the boots must come first here.',
        id: 'Petunjuk: "sepatu bot dipakai sebelum jaket". Jadi walaupun kamu biasanya ambil jaket dulu, sepatu bot tetap harus lebih dulu.',
      },
    },
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'map', emoji: '🗺️', label: { en: 'Map', id: 'Peta' } },
        { id: 'rope', emoji: '🪢', label: { en: 'Rope', id: 'Tali' } },
        { id: 'tent', emoji: '⛺', label: { en: 'Tent', id: 'Tenda' } },
      ],
    },
  },
  {
    id: 'planning-1',
    worldId: 'planning',
    number: 1,
    title: { en: 'Fire Rule', id: 'Aturan Api' },
    mascotMessage: {
      en: 'Camp rule: Pico may never leave camp while the fire is still burning. 🔥',
      id: 'Aturan kemah: Pico tidak boleh meninggalkan kemah selama api masih menyala. 🔥',
    },
    xpReward: 10,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'The fire is still burning and Pico wants to leave. What must he do first?',
        id: 'Api masih menyala dan Pico ingin pergi. Apa yang harus ia lakukan lebih dulu?',
      },
      options: [
        { id: 'douse', emoji: '🪣', label: { en: 'Put out the fire', id: 'Padamkan api' } },
        { id: 'leave', emoji: '🚶', label: { en: 'Just leave camp', id: 'Langsung tinggalkan kemah' } },
        { id: 'cook', emoji: '🍳', label: { en: 'Cook more food', id: 'Masak makanan lagi' } },
        { id: 'sleep', emoji: '😴', label: { en: 'Take a nap', id: 'Tidur sebentar' } },
      ],
      answerId: 'douse',
    },
  },
  {
    id: 'planning-2',
    worldId: 'planning',
    number: 2,
    title: { en: 'Camp Setup', id: 'Dirikan Kemah' },
    mascotMessage: {
      en: 'Three clues: the ground is cleared before anything else, the tent goes up before the sleeping bag goes in, and the fire is lit last. ⛺',
      id: 'Tiga petunjuk: tanah dibersihkan sebelum apa pun, tenda didirikan sebelum kantong tidur dimasukkan, dan api dinyalakan paling akhir. ⛺',
    },
    xpReward: 12,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'clear', emoji: '🧹', label: { en: 'Clear the ground', id: 'Bersihkan tanah' } },
        { id: 'tent', emoji: '⛺', label: { en: 'Put up the tent', id: 'Dirikan tenda' } },
        { id: 'bag', emoji: '🛌', label: { en: 'Sleeping bag in', id: 'Kantong tidur' } },
        { id: 'fire', emoji: '🔥', label: { en: 'Light the fire', id: 'Nyalakan api' } },
      ],
    },
  },
  {
    id: 'planning-3',
    worldId: 'planning',
    number: 3,
    title: { en: 'Backpack Limit', id: 'Batas Ransel' },
    mascotMessage: {
      en: 'A good planner checks the weight limit before packing anything else. 🎒',
      id: 'Perencana yang baik memeriksa batas berat sebelum mengemas apa pun. 🎒',
    },
    xpReward: 12,
    puzzle: {
      type: 'math',
      question: {
        en: 'Pico\'s bag holds 8 kg. The tent is 3 kg and the rope is 2 kg. How many kg are left for food?',
        id: 'Ransel Pico muat 8 kg. Tenda 3 kg dan tali 2 kg. Berapa kg tersisa untuk makanan?',
      },
      visual: '🎒',
      options: ['5', '3', '13', '2'],
      answer: '3',
    },
  },
  {
    id: 'planning-4',
    worldId: 'planning',
    number: 4,
    title: { en: 'Closed Bridge', id: 'Jembatan Ditutup' },
    mascotMessage: {
      en: 'Check the plan against the rule. Does it really work? 🌉',
      id: 'Periksa rencana terhadap aturannya. Apakah benar-benar berhasil? 🌉',
    },
    xpReward: 14,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'The bridge only opens after 10 o\'clock. Pico\'s plan is to cross the bridge at 9 o\'clock. This plan works.',
        id: 'Jembatan baru dibuka setelah pukul 10. Rencana Pico adalah menyeberang pukul 9. Rencana ini berhasil.',
      },
      answer: false,
    },
  },
  {
    id: 'planning-5',
    worldId: 'planning',
    number: 5,
    title: { en: 'Clue Chain', id: 'Rantai Petunjuk' },
    mascotMessage: {
      en: 'Three clues: Pico checks the map first, he refills water right after the map, and he always eats last. 💧',
      id: 'Tiga petunjuk: Pico membaca peta lebih dulu, mengisi air tepat setelah peta, dan selalu makan paling akhir. 💧',
    },
    xpReward: 16,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'map', emoji: '🗺️', label: { en: 'Check the map', id: 'Baca peta' } },
        { id: 'water', emoji: '💧', label: { en: 'Refill water', id: 'Isi air' } },
        { id: 'pack', emoji: '🎒', label: { en: 'Pack the bag', id: 'Kemas ransel' } },
        { id: 'eat', emoji: '🍞', label: { en: 'Eat a snack', id: 'Makan bekal' } },
      ],
    },
  },
  {
    id: 'planning-6',
    worldId: 'planning',
    number: 6,
    title: { en: 'Only What Fits', id: 'Hanya yang Muat' },
    mascotMessage: {
      en: 'Read the weight on each item carefully. One of them is very close to the limit! ⚖️',
      id: 'Baca berat setiap barang dengan teliti. Salah satunya sangat dekat dengan batas! ⚖️',
    },
    xpReward: 18,
    puzzle: {
      type: 'abstraction',
      subtype: 'category-match',
      question: {
        en: 'Pico may only pack items lighter than 3 kg. Tap every item that follows the rule.',
        id: 'Pico hanya boleh membawa barang yang lebih ringan dari 3 kg. Ketuk semua barang yang sesuai aturan.',
      },
      items: [
        { id: 'rope', emoji: '🪢', label: { en: 'Rope, 1 kg', id: 'Tali, 1 kg' } },
        { id: 'tent', emoji: '⛺', label: { en: 'Tent, 4 kg', id: 'Tenda, 4 kg' } },
        { id: 'torch', emoji: '🔦', label: { en: 'Torch, 2 kg', id: 'Senter, 2 kg' } },
        { id: 'stove', emoji: '🍳', label: { en: 'Stove, 3 kg', id: 'Kompor, 3 kg' } },
        { id: 'compass', emoji: '🧭', label: { en: 'Compass, 1 kg', id: 'Kompas, 1 kg' } },
      ],
      correctIds: ['rope', 'torch', 'compass'],
    },
  },
  {
    id: 'planning-7',
    worldId: 'planning',
    number: 7,
    title: { en: 'Start by When?', id: 'Mulai Pukul Berapa?' },
    mascotMessage: {
      en: 'This time you know the finish, not the start. Work backwards from the top! ⛰️',
      id: 'Kali ini kamu tahu akhirnya, bukan awalnya. Berpikirlah mundur dari puncak! ⛰️',
    },
    xpReward: 18,
    puzzle: {
      type: 'math',
      question: {
        en: 'Pico must reach the top at 12 o\'clock. Climbing takes 3 hours and he rests for 1 hour on the way. What time must he start?',
        id: 'Pico harus tiba di puncak pukul 12. Mendaki butuh 3 jam dan ia istirahat 1 jam di jalan. Pukul berapa ia harus mulai?',
      },
      visual: '⛰️',
      options: ['9', '8', '10', '16'],
      answer: '8',
    },
  },
  {
    id: 'planning-8',
    worldId: 'planning',
    number: 8,
    title: { en: 'Fix the Plan', id: 'Perbaiki Rencana' },
    mascotMessage: {
      en: 'Pico\'s plan broke a clue. The clues are: the helmet goes on before the rope, the rope before the climb, and the photo is only taken at the top. 🧗',
      id: 'Rencana Pico melanggar sebuah petunjuk. Petunjuknya: helm dipakai sebelum tali, tali sebelum memanjat, dan foto hanya diambil di puncak. 🧗',
    },
    xpReward: 20,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'helmet', emoji: '🪖', label: { en: 'Put on helmet', id: 'Pakai helm' } },
        { id: 'rope', emoji: '🪢', label: { en: 'Clip the rope', id: 'Kaitkan tali' } },
        { id: 'climb', emoji: '🧗', label: { en: 'Climb up', id: 'Memanjat' } },
        { id: 'photo', emoji: '📸', label: { en: 'Take the photo', id: 'Ambil foto' } },
      ],
    },
  },
  {
    id: 'planning-9',
    worldId: 'planning',
    number: 9,
    title: { en: 'Four-Clue Expedition', id: 'Ekspedisi Empat Petunjuk' },
    mascotMessage: {
      en: 'Four clues: meeting the guide is first, the permit is signed right after meeting the guide, the summit is last, and the sled is loaded before reaching base camp. 🏔️',
      id: 'Empat petunjuk: menemui pemandu paling dulu, izin ditandatangani tepat setelah menemui pemandu, puncak paling akhir, dan kereta luncur dimuat sebelum sampai di kemah dasar. 🏔️',
    },
    xpReward: 22,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'guide', emoji: '🧗', label: { en: 'Meet the guide', id: 'Temui pemandu' } },
        { id: 'permit', emoji: '📝', label: { en: 'Sign the permit', id: 'Tanda tangani izin' } },
        { id: 'sled', emoji: '🛷', label: { en: 'Load the sled', id: 'Muat kereta luncur' } },
        { id: 'basecamp', emoji: '🏕️', label: { en: 'Reach base camp', id: 'Kemah dasar' } },
        { id: 'summit', emoji: '🏔️', label: { en: 'Reach the summit', id: 'Sampai puncak' } },
      ],
    },
  },
]
