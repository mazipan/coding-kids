import type { ThinkingLesson } from '../../types'

export const deductionLessons: ThinkingLesson[] = [
  // ── Deductive Reasoning (Logic Detective) ─────────────────────────────

  {
    id: 'deduction-0',
    worldId: 'deduction',
    number: 0,
    title: { en: 'All Fruits Grow on Plants', id: 'Semua Buah Tumbuh di Tanaman' },
    mascotMessage: {
      en: 'In deductive reasoning, if the rule is true AND the case fits the rule, the conclusion MUST be true! 🔍',
      id: 'Dalam penalaran deduktif, jika aturannya benar DAN kasusnya cocok dengan aturan, kesimpulannya PASTI benar! 🔍',
    },
    xpReward: 10,
    tutorial: {
      title: { en: 'What is Deductive Reasoning?', id: 'Apa itu Penalaran Deduktif?' },
      body: {
        en: 'Deductive reasoning works top-down: you start with a GENERAL rule, then apply it to a SPECIFIC case. If the rule is true and the case fits, the conclusion is guaranteed to be true — no exceptions!',
        id: 'Penalaran deduktif bekerja dari atas ke bawah: mulai dengan aturan UMUM, lalu terapkan ke kasus SPESIFIK. Jika aturannya benar dan kasusnya cocok, kesimpulannya dijamin benar — tidak ada pengecualian!',
      },
      example: {
        en: 'Rule: All birds have feathers. Case: A parrot is a bird. Conclusion: A parrot has feathers. This MUST be true!',
        id: 'Aturan: Semua burung punya bulu. Kasus: Burung beo adalah burung. Kesimpulan: Burung beo punya bulu. Ini PASTI benar!',
      },
    },
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rule: All fruits grow on plants. Case: An apple is a fruit. Conclusion: An apple grows on a plant. Is this conclusion correct?',
        id: 'Aturan: Semua buah tumbuh di tanaman. Kasus: Apel adalah buah. Kesimpulan: Apel tumbuh di tanaman. Apakah kesimpulan ini benar?',
      },
      answer: true,
    },
  },

  {
    id: 'deduction-1',
    worldId: 'deduction',
    number: 1,
    title: { en: 'Luna the Cat', id: 'Luna si Kucing' },
    mascotMessage: {
      en: 'We know the rule about ALL cats. We know Luna IS a cat. So what do we know about Luna? 🐱',
      id: 'Kita tahu aturan tentang SEMUA kucing. Kita tahu Luna ADALAH kucing. Jadi apa yang kita tahu tentang Luna? 🐱',
    },
    xpReward: 10,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rule: All cats meow. Case: Luna is a cat. Conclusion: Luna meows. Is this correct?',
        id: 'Aturan: Semua kucing mengeong. Kasus: Luna adalah kucing. Kesimpulan: Luna mengeong. Apakah ini benar?',
      },
      answer: true,
    },
  },

  {
    id: 'deduction-2',
    worldId: 'deduction',
    number: 2,
    title: { en: 'Rain and Puddles', id: 'Hujan dan Genangan' },
    mascotMessage: {
      en: 'You have a rule about rain. It IS raining. Apply the rule and pick what MUST be true! ☔',
      id: 'Kamu punya aturan tentang hujan. Hujan SEDANG turun. Terapkan aturannya dan pilih yang PASTI benar! ☔',
    },
    xpReward: 10,
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Rule: If it rains, the ground gets wet. Right now: it is raining. What MUST be true?',
        id: 'Aturan: Jika hujan, tanah menjadi basah. Saat ini: sedang hujan. Apa yang PASTI benar?',
      },
      options: [
        { id: 'ground', emoji: '💧', label: { en: 'The ground is wet', id: 'Tanah menjadi basah' } },
        { id: 'sun', emoji: '☀️', label: { en: 'The sun is shining brightly', id: 'Matahari bersinar cerah' } },
        { id: 'snow', emoji: '❄️', label: { en: 'It is snowing', id: 'Sedang turun salju' } },
        { id: 'dry', emoji: '🏜️', label: { en: 'The ground stays dry', id: 'Tanah tetap kering' } },
      ],
      answerId: 'ground',
    },
  },

  {
    id: 'deduction-3',
    worldId: 'deduction',
    number: 3,
    title: { en: 'Not a Bird', id: 'Bukan Burung' },
    mascotMessage: {
      en: 'If you know what ALL birds have, and something is MISSING that feature, what can you conclude? 🐟',
      id: 'Jika kamu tahu apa yang dimiliki SEMUA burung, dan sesuatu TIDAK memiliki ciri itu, apa yang bisa kamu simpulkan? 🐟',
    },
    xpReward: 15,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rule: All birds have feathers. Fact: A fish does NOT have feathers. Conclusion: We still cannot tell whether a fish is a bird. Is this correct?',
        id: 'Aturan: Semua burung punya bulu. Fakta: Ikan TIDAK punya bulu. Kesimpulan: Kita tetap tidak bisa tahu apakah ikan itu burung. Apakah ini benar?',
      },
      answer: false,
    },
  },

  {
    id: 'deduction-4',
    worldId: 'deduction',
    number: 4,
    title: { en: 'Chain Reasoning', id: 'Rantai Penalaran' },
    mascotMessage: {
      en: 'If A leads to B, and B leads to C, then A leads all the way to C! Follow the chain! ⛓️',
      id: 'Jika A mengarah ke B, dan B mengarah ke C, maka A mengarah sampai ke C! Ikuti rantainya! ⛓️',
    },
    xpReward: 15,
    tutorial: {
      title: { en: 'Chain Reasoning: A leads to B leads to C', id: 'Rantai Penalaran: A menuju B menuju C' },
      body: {
        en: 'Sometimes conclusions chain together: Rule 1 says A leads to B. Rule 2 says B leads to C. If A is true, then B is true (by Rule 1), and then C is true (by Rule 2). The chain carries the truth all the way through!',
        id: 'Terkadang kesimpulan berantai: Aturan 1 bilang A menuju B. Aturan 2 bilang B menuju C. Jika A benar, maka B benar (oleh Aturan 1), dan kemudian C benar (oleh Aturan 2). Rantai membawa kebenaran sampai ke ujung!',
      },
      example: {
        en: 'If it\'s cloudy (A), then it rains (B). If it rains (B), then the ground is wet (C). It\'s cloudy, so the ground must be wet!',
        id: 'Jika mendung (A), maka hujan (B). Jika hujan (B), maka tanah basah (C). Sedang mendung, jadi tanah pasti basah!',
      },
    },
    puzzle: {
      type: 'if-then',
      condition: {
        en: 'Rule 1: If you study hard, you learn a lot. Rule 2: If you learn a lot, you get good grades. Fact: Ali studies hard. What can we conclude?',
        id: 'Aturan 1: Jika kamu belajar keras, kamu banyak belajar. Aturan 2: Jika kamu banyak belajar, kamu mendapat nilai bagus. Fakta: Ali belajar keras. Apa kesimpulannya?',
      },
      options: [
        { id: 'good', emoji: '🌟', label: { en: 'Ali gets good grades', id: 'Ali mendapat nilai bagus' } },
        { id: 'bad', emoji: '📉', label: { en: 'Ali gets bad grades', id: 'Ali mendapat nilai buruk' } },
        { id: 'unknown', emoji: '❓', label: { en: 'We cannot know', id: 'Kita tidak bisa tahu' } },
        { id: 'skip', emoji: '💤', label: { en: 'Ali skips school', id: 'Ali membolos sekolah' } },
      ],
      answerId: 'good',
    },
  },

  {
    id: 'deduction-5',
    worldId: 'deduction',
    number: 5,
    title: { en: 'Dolphin or Fish?', id: 'Lumba-lumba atau Ikan?' },
    mascotMessage: {
      en: 'Sharing a PROPERTY with a group does NOT mean you belong to that group! Watch for this trap — the argument might be backwards. 🐬',
      id: 'Berbagi SIFAT dengan suatu kelompok BUKAN berarti kamu adalah anggota kelompok itu! Waspadai jebakan ini — argumennya mungkin terbalik. 🐬',
    },
    xpReward: 20,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rule: All fish live in water. Fact: A dolphin lives in water. Conclusion: A dolphin must be a fish. Is this correct?',
        id: 'Aturan: Semua ikan hidup di air. Fakta: Lumba-lumba hidup di air. Kesimpulan: Lumba-lumba pasti seekor ikan. Apakah ini benar?',
      },
      answer: false,
    },
  },

  {
    id: 'deduction-6',
    worldId: 'deduction',
    number: 6,
    title: { en: 'Is It a Square?', id: 'Apakah Itu Persegi?' },
    mascotMessage: {
      en: 'You know the rule for squares. Shape A breaks that rule. What must that mean? 🟥',
      id: 'Kamu tahu aturan untuk persegi. Bentuk A melanggar aturan itu. Apa artinya? 🟥',
    },
    xpReward: 20,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rule: All squares have exactly 4 equal sides. Fact: Shape A has only 3 sides. Conclusion: Shape A is NOT a square. Is this correct?',
        id: 'Aturan: Semua persegi memiliki tepat 4 sisi yang sama. Fakta: Bentuk A hanya memiliki 3 sisi. Kesimpulan: Bentuk A BUKAN persegi. Apakah ini benar?',
      },
      answer: true,
    },
  },

  {
    id: 'deduction-7',
    worldId: 'deduction',
    number: 7,
    title: { en: 'Logic Steps', id: 'Langkah Logika' },
    mascotMessage: {
      en: 'Deductive reasoning has a clear order! Can you put these four steps in the right sequence? 📋',
      id: 'Penalaran deduktif memiliki urutan yang jelas! Bisakah kamu menyusun empat langkah ini dalam urutan yang benar? 📋',
    },
    xpReward: 20,
    puzzle: {
      type: 'sequence',
      steps: [
        { id: 'rule', emoji: '📏', label: { en: 'State the general rule', id: 'Nyatakan aturan umum' } },
        { id: 'case', emoji: '🔎', label: { en: 'Identify the specific case', id: 'Identifikasi kasus spesifik' } },
        { id: 'apply', emoji: '🔗', label: { en: 'Apply the rule to the case', id: 'Terapkan aturan ke kasus' } },
        { id: 'conclude', emoji: '✅', label: { en: 'State the conclusion', id: 'Nyatakan kesimpulan' } },
      ],
    },
  },

  {
    id: 'deduction-8',
    worldId: 'deduction',
    number: 8,
    title: { en: 'Four Equal Sides', id: 'Empat Sisi Sama' },
    mascotMessage: {
      en: 'Be careful — using a rule BACKWARDS can lead to a wrong conclusion! Does sharing a property guarantee you belong to the group? 🟥',
      id: 'Hati-hati — menggunakan aturan secara TERBALIK bisa menghasilkan kesimpulan yang salah! Apakah berbagi sifat menjamin kamu anggota kelompok itu? 🟥',
    },
    xpReward: 20,
    puzzle: {
      type: 'true-false',
      statement: {
        en: 'Rule: All squares have exactly 4 equal sides. Fact: Shape X has exactly 4 equal sides. Conclusion: Shape X MUST be a square. Is this correct?',
        id: 'Aturan: Semua persegi memiliki tepat 4 sisi yang sama. Fakta: Bentuk X memiliki tepat 4 sisi yang sama. Kesimpulan: Bentuk X PASTI sebuah persegi. Apakah ini benar?',
      },
      answer: false,
    },
  },

  {
    id: 'deduction-9',
    worldId: 'deduction',
    number: 9,
    title: { en: 'The Zero Rule', id: 'Aturan Nol' },
    mascotMessage: {
      en: 'There\'s a powerful rule in math about zero. If you know the rule, ANY number becomes easy! 🌀',
      id: 'Ada aturan yang kuat dalam matematika tentang nol. Jika kamu tahu aturannya, angka APAPUN menjadi mudah! 🌀',
    },
    xpReward: 30,
    puzzle: {
      type: 'fill-in',
      question: {
        en: 'Rule: Any number × 0 = 0. Apply the rule: 999 × 0 = ___',
        id: 'Aturan: Semua angka × 0 = 0. Terapkan aturannya: 999 × 0 = ___',
      },
      visual: '9️⃣9️⃣9️⃣ × 0️⃣ = ❓',
      answer: '0',
      inputType: 'numeric',
    },
  },
]
