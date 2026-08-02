export type Language = 'en' | 'id'

type Translations = Record<string, string>

const en: Translations = {
  // ── Landing page ─────────────────────────────
  'landing.badge': '🌟 Free for everyone · No signup required',
  'landing.headline': 'Where Kids Become Coders',
  'landing.sub': 'A fun, free coding adventure for ages 5–14. Learn programming with colorful visual blocks, earn XP, and explore 6 epic worlds — no downloads, no logins!',
  'landing.cta': 'Start Learning Free',
  'landing.cta.secondary': 'See how it works ↓',
  'landing.returning': 'Continue your adventure →',

  'landing.features.title': 'Why Kids Love CodeKids',
  'landing.features.blocks.icon': '🎮',
  'landing.features.blocks.title': 'Visual Block Coding',
  'landing.features.blocks.desc': 'Drag & drop colorful blocks to write code. No typing needed — perfect for first-time coders!',
  'landing.features.xp.icon': '🏆',
  'landing.features.xp.title': 'XP & Levels',
  'landing.features.xp.desc': 'Earn XP, level up from Code Cub to Master Coder, and collect achievement badges!',
  'landing.features.worlds.icon': '🌍',
  'landing.features.worlds.title': '6 Epic Worlds',
  'landing.features.worlds.desc': 'Journey from Jungle to Space, Ocean, Crystal Caves, a Robot Factory, and a Time Portal!',
  'landing.features.anywhere.icon': '📱',
  'landing.features.anywhere.title': 'Play Anywhere',
  'landing.features.anywhere.desc': 'Works on any device — phone, tablet, or computer. No downloads, always free!',

  'landing.how.title': 'How It Works',
  'landing.how.step1.title': 'Choose Your World',
  'landing.how.step1.desc': 'Pick from 6 themed worlds, each teaching a different coding concept — from simple sequences to arrays.',
  'landing.how.step2.title': 'Drag & Drop Blocks',
  'landing.how.step2.desc': 'Use colorful visual blocks to build your code solution. It\'s like snapping puzzle pieces together!',
  'landing.how.step3.title': 'Watch It Run!',
  'landing.how.step3.desc': 'Hit Run and watch your character come to life on screen. Earn stars and XP for clever solutions!',

  'landing.worlds.title': 'Explore 6 Coding Worlds',
  'landing.worlds.sub': 'Each world teaches a new coding concept, designed to grow with your child from ages 5 to 14.',

  'landing.ages.title': 'Something for Every Age',
  'landing.ages.sub': 'Carefully designed progression from visual sequences to real programming concepts.',

  'landing.final.title': 'Ready to Start Coding?',
  'landing.final.sub': 'Join thousands of kids learning to code — completely free, no signup needed!',
  'landing.final.cta': 'Start Your Adventure Now',
  'landing.final.badge1': '✅ 100% Free',
  'landing.final.badge2': '✅ No Signup',
  'landing.final.badge3': '✅ No Ads',
  'landing.final.badge4': '✅ Works on Mobile',

  'landing.footer': 'Made with ❤️ for young coders everywhere',
  'landing.footer.free': 'Free · No signup · No ads · No data collected',

  // ── Navigation ──────────────────────────────
  'nav.back': 'Back',
  'nav.home': 'Home',

  // ── Game UI ─────────────────────────────────
  'game.run': 'Run Code',
  'game.running': 'Running...',
  'game.reset': 'Reset',
  'game.hint': 'Hint',
  'game.blocks.tab': '🧩 Blocks',
  'game.game.tab': '🎮 Game',
  'game.view.code': '👨‍💻 Code',
  'game.view.blocks': '🧩 Blocks',
  'game.clear': 'Clear',
  'game.blocks.label': 'Blocks',
  'game.no.blocks': 'No blocks yet! Drag some blocks into the workspace first! 😄',
  'game.success': '🎉 Amazing! You did it!',
  'game.fail.edge': 'Oops! Walked off the edge! 🚧',
  'game.fail.obstacle': 'Crashed into an obstacle! 💥',
  'game.fail.path': 'Not quite! I didn\'t reach all the items. Check your path and try again! 💪',
  'game.fail.noactions': 'No movement blocks detected! Add some Move blocks! 🤔',

  // ── Grid legend ─────────────────────────────
  'grid.collect': '= collect these',
  'grid.obstacle': '= obstacle',

  // ── Reward modal ─────────────────────────────
  'reward.levelup': '🎉 LEVEL UP!',
  'reward.next': 'Next',
  'reward.retry': 'Retry',
  'reward.world.complete': '🌍 World Complete!',
  'reward.next.world': 'Next World',
  'reward.criteria.loops': '💡 Try using a 🔄 Repeat block to earn more stars!',
  'reward.criteria.variables': '💡 Try using a 📦 Variable block to earn more stars!',
  'reward.criteria.logic': '💡 Try using an ❓ If/Else block to earn more stars!',
  'reward.criteria.functions': '💡 Try defining a 🔧 Function to earn more stars!',
  'reward.criteria.lists': '💡 Try using a 📋 List block to earn more stars!',

  // ── World names ──────────────────────────────
  'world.jungle.name': 'Jungle Adventure',
  'world.jungle.tagline': 'Help Bingo the Monkey find bananas!',
  'world.jungle.concept': 'Sequences',
  'world.space.name': 'Space Station',
  'world.space.tagline': 'Help Astro collect stars in space!',
  'world.space.concept': 'Loops',
  'world.ocean.name': 'Ocean Deep',
  'world.ocean.tagline': 'Help Finn the Diver explore the ocean!',
  'world.ocean.concept': 'Variables',
  'world.caves.name': 'Crystal Caves',
  'world.caves.tagline': 'Help Zara find crystals in magic caves!',
  'world.caves.concept': 'Conditions',
  'world.factory.name': 'Robot Factory',
  'world.factory.tagline': 'Help Bolt build robots with functions!',
  'world.factory.concept': 'Functions',
  'world.portal.name': 'Time Portal',
  'world.portal.tagline': 'Help Nova travel through time with arrays!',
  'world.portal.concept': 'Arrays & Lists',
  'world.jurassic.name': 'Jurassic Park',
  'world.jurassic.tagline': 'Rescue dino eggs before they hatch!',
  'world.jurassic.concept': 'Real-World Pathfinding',
  'world.parking.name': 'City Parking',
  'world.parking.tagline': 'Sort and park cars in the busy city!',
  'world.parking.concept': 'Sorting & Routing',
  'world.sorting.name': 'Space Sorting',
  'world.sorting.tagline': 'Organize packages in the space warehouse!',
  'world.sorting.concept': 'Algorithms & Data',

  // ── Bonus worlds ─────────────────────────────
  'bonus.section.title': 'Bonus Worlds',
  'bonus.section.subtitle': 'Real-world coding challenges — no XP required!',
  'bonus.locked.hint': 'Complete the Time Portal to unlock all bonus worlds!',
  'bonus.unlocked.all': 'All bonus levels unlocked — jump in anywhere!',
  'bonus.all.open': 'All levels open!',

  // ── Common labels ────────────────────────────
  'common.play': '▶ Play',
  'common.play.again': '▶ Play Again',
  'common.ages': 'Ages',
  'common.learn': 'Learn:',
  'common.level': 'Level',
  'common.locked': 'Locked',
  'common.xp': 'XP',
  'common.stars': 'Stars',
  'common.tries': 'tries',
  'common.completed': '{n}/{total} lessons',
  'common.to.unlock': '{xp} XP to unlock',
  'common.need.xp': 'Need {xp} XP',
  'common.xp.reward': '⚡ {xp} XP',

  // ── Blockly toolbar ──────────────────────────
  'blockly.label': 'Blocks',
  'blockly.block': 'block',
  'blockly.blocks': 'blocks',
  'blockly.view.code': '👨‍💻 View Code',
  'blockly.view.blocks': '🧩 View Blocks',
  'blockly.clear': '🗑️ Clear',
  'blockly.code.placeholder': '// Your code will appear here when you add blocks!',

  // ── Mascot messages ──────────────────────────
  'mascot.running': "Here we go! Watching your code run... 👀",
  'mascot.error': "Oops! Something went wrong with the code. Try again! 😅",
  'mascot.success.5': "LEGENDARY! 🌟⭐ That's a PERFECT 5-star solution! You're a coding genius!",
  'mascot.success.4': "Outstanding! 🏆 So close to perfect! Can you squeeze out one more star?",
  'mascot.success.3': "PERFECT! 🌟 You're an absolute coding superstar!",
  'mascot.success.2': "Awesome job! 🎊 You solved it! Can you do it with fewer blocks?",
  'mascot.success.1': "You did it! 🎉 Great work! Try to use fewer blocks for more stars!",
  'mascot.success.1.criteria': "You solved it! 🎉 Now try using the special block to earn more stars! 💡",
  'mascot.hint.prefix': '💡 Hint:',

  // ── Home screen ──────────────────────────────
  'home.welcome': 'Welcome to CodeKids!',
  'home.subtitle': 'Pick a world and start your coding adventure! 🌟',

  // ── Reward messages (by star count 1–3, variant 0–2) ────
  'reward.msg.1.0': 'Keep going! 💪',
  'reward.msg.1.1': 'Nice try! ⭐',
  'reward.msg.1.2': 'Getting there! 🎯',
  'reward.msg.2.0': 'Well done! 👏',
  'reward.msg.2.1': 'Great job! 🎊',
  'reward.msg.2.2': "You're improving! 📈",
  'reward.msg.3.0': 'Amazing! 🤩',
  'reward.msg.3.1': 'PERFECT! 🏆',
  'reward.msg.3.2': "YOU'RE A STAR! 🌟",
  'reward.msg.4.0': 'Outstanding! 🔥',
  'reward.msg.4.1': 'Almost perfect! ⚡',
  'reward.msg.4.2': 'So close! 💫',
  'reward.msg.5.0': 'LEGENDARY! 🌟',
  'reward.msg.5.1': 'PERFECT CODE! 🏆',
  'reward.msg.5.2': 'CODING GENIUS! 🧠',
  'reward.fallback': 'Done!',

  // ── Landing section labels ────────────────────
  'landing.features.label': 'Features',
  'landing.how.label': 'How It Works',
  'landing.worlds.label': 'Worlds',
  'landing.ages.label': 'Age Groups',

  // ── Trust strip ──────────────────────────────
  'trust.free': '100% Free',
  'trust.no.signup': 'No Signup',
  'trust.no.ads': 'No Ads',
  'trust.mobile': 'Mobile Friendly',

  // ── Tutorial ──────────────────────────────────
  'tutorial.badge': 'TUTORIAL',
  'tutorial.card.label': 'Start Here First!',
  'tutorial.card.desc': 'Learn how {concept} blocks work before playing the levels.',
  'tutorial.card.cta': '▶ Start Tutorial',
  'tutorial.card.done': '✓ Tutorial Complete',
  'tutorial.complete.title': "You're Ready! 🎉",
  'tutorial.complete.subtitle': 'Great job! You know how {concept} blocks work. Time to play for real!',
  'tutorial.complete.cta': 'Start Level 1!',
}

const id: Translations = {
  // ── Landing page ─────────────────────────────
  'landing.badge': '🌟 Gratis untuk semua · Tanpa pendaftaran',
  'landing.headline': 'Tempat Anak Belajar Coding',
  'landing.sub': 'Petualangan coding yang menyenangkan dan gratis untuk usia 5–14 tahun. Belajar pemrograman dengan blok visual berwarna, kumpulkan XP, dan jelajahi 6 dunia epik — tanpa unduhan, tanpa login!',
  'landing.cta': 'Mulai Belajar Gratis',
  'landing.cta.secondary': 'Lihat cara kerjanya ↓',
  'landing.returning': 'Lanjutkan →',

  'landing.features.title': 'Kenapa Anak-anak Suka CodeKids',
  'landing.features.blocks.icon': '🎮',
  'landing.features.blocks.title': 'Blok Kode Visual',
  'landing.features.blocks.desc': 'Seret dan lepaskan blok berwarna untuk menulis kode. Tanpa mengetik — cocok untuk pemula!',
  'landing.features.xp.icon': '🏆',
  'landing.features.xp.title': 'XP & Level',
  'landing.features.xp.desc': 'Kumpulkan XP, naiki level dari Code Cub ke Master Coder, dan raih lencana prestasi!',
  'landing.features.worlds.icon': '🌍',
  'landing.features.worlds.title': '6 Dunia Epik',
  'landing.features.worlds.desc': 'Berpetualang dari Hutan ke Luar Angkasa, Samudra, Gua Kristal, Pabrik Robot, dan Portal Waktu!',
  'landing.features.anywhere.icon': '📱',
  'landing.features.anywhere.title': 'Main di Mana Saja',
  'landing.features.anywhere.desc': 'Bisa dimainkan di HP, tablet, atau komputer. Tanpa unduhan, selalu gratis!',

  'landing.how.title': 'Cara Kerjanya',
  'landing.how.step1.title': 'Pilih Duniamu',
  'landing.how.step1.desc': 'Pilih dari 6 dunia bertema, masing-masing mengajarkan konsep coding yang berbeda — dari urutan sederhana hingga array.',
  'landing.how.step2.title': 'Seret & Lepas Blok',
  'landing.how.step2.desc': 'Gunakan blok visual berwarna untuk membangun solusi kodenya. Seperti menyusun kepingan puzzle!',
  'landing.how.step3.title': 'Lihat Kodenya Berjalan!',
  'landing.how.step3.desc': 'Tekan Jalankan dan lihat karaktermu hidup di layar. Kumpulkan bintang dan XP untuk solusi terbaik!',

  'landing.worlds.title': 'Jelajahi 6 Dunia Coding',
  'landing.worlds.sub': 'Setiap dunia mengajarkan konsep coding baru, dirancang untuk berkembang bersama anakmu dari usia 5 hingga 14 tahun.',

  'landing.ages.title': 'Cocok untuk Semua Usia',
  'landing.ages.sub': 'Progres yang dirancang cermat dari urutan visual hingga konsep pemrograman nyata.',

  'landing.final.title': 'Siap Mulai Coding?',
  'landing.final.sub': 'Bergabunglah dengan ribuan anak yang belajar coding — sepenuhnya gratis, tanpa perlu daftar!',
  'landing.final.cta': 'Mulai Sekarang',
  'landing.final.badge1': '✅ 100% Gratis',
  'landing.final.badge2': '✅ Tanpa Daftar',
  'landing.final.badge3': '✅ Tanpa Iklan',
  'landing.final.badge4': '✅ Bisa di HP',

  'landing.footer': 'Dibuat dengan ❤️ untuk para coder muda di seluruh dunia',
  'landing.footer.free': 'Gratis · Tanpa daftar · Tanpa iklan · Tanpa pengumpulan data',

  // ── Navigation ──────────────────────────────
  'nav.back': 'Kembali',
  'nav.home': 'Beranda',

  // ── Game UI ─────────────────────────────────
  'game.run': 'Jalankan',
  'game.running': 'Berjalan...',
  'game.reset': 'Ulang',
  'game.hint': 'Petunjuk',
  'game.blocks.tab': '🧩 Blok',
  'game.game.tab': '🎮 Game',
  'game.view.code': '👨‍💻 Kode',
  'game.view.blocks': '🧩 Blok',
  'game.clear': 'Hapus',
  'game.blocks.label': 'Blok',
  'game.no.blocks': 'Belum ada blok! Seret beberapa blok ke area kerja dulu! 😄',
  'game.success': '🎉 Luar biasa! Kamu berhasil!',
  'game.fail.edge': 'Aduh! Keluar dari batas! 🚧',
  'game.fail.obstacle': 'Nabrak rintangan! 💥',
  'game.fail.path': 'Belum tepat! Belum mencapai semua item. Cek lagi jalannya dan coba lagi! 💪',
  'game.fail.noactions': 'Tidak ada blok gerak! Tambahkan blok Pindah dulu! 🤔',

  // ── Grid legend ─────────────────────────────
  'grid.collect': '= kumpulkan ini',
  'grid.obstacle': '= rintangan',

  // ── Reward modal ─────────────────────────────
  'reward.levelup': '🎉 NAIK LEVEL!',
  'reward.next': 'Lanjut',
  'reward.retry': 'Ulangi',
  'reward.world.complete': '🌍 Dunia Selesai!',
  'reward.next.world': 'Dunia Berikutnya',
  'reward.criteria.loops': '💡 Coba gunakan blok 🔄 Ulangi untuk mendapat lebih banyak bintang!',
  'reward.criteria.variables': '💡 Coba gunakan blok 📦 Variabel untuk mendapat lebih banyak bintang!',
  'reward.criteria.logic': '💡 Coba gunakan blok ❓ Jika/Selain untuk mendapat lebih banyak bintang!',
  'reward.criteria.functions': '💡 Coba definisikan 🔧 Fungsi untuk mendapat lebih banyak bintang!',
  'reward.criteria.lists': '💡 Coba gunakan blok 📋 Daftar untuk mendapat lebih banyak bintang!',

  // ── World names ──────────────────────────────
  'world.jungle.name': 'Petualangan Hutan',
  'world.jungle.tagline': 'Bantu Bingo si Monyet menemukan pisang!',
  'world.jungle.concept': 'Urutan',
  'world.space.name': 'Stasiun Luar Angkasa',
  'world.space.tagline': 'Bantu Astro mengumpulkan bintang di luar angkasa!',
  'world.space.concept': 'Perulangan',
  'world.ocean.name': 'Kedalaman Samudra',
  'world.ocean.tagline': 'Bantu Finn si Penyelam menjelajahi samudra!',
  'world.ocean.concept': 'Variabel',
  'world.caves.name': 'Gua Kristal',
  'world.caves.tagline': 'Bantu Zara menemukan kristal di gua ajaib!',
  'world.caves.concept': 'Kondisi',
  'world.factory.name': 'Pabrik Robot',
  'world.factory.tagline': 'Bantu Bolt membangun robot dengan fungsi!',
  'world.factory.concept': 'Fungsi',
  'world.portal.name': 'Portal Waktu',
  'world.portal.tagline': 'Bantu Nova menjelajahi waktu dengan array!',
  'world.portal.concept': 'Array & Daftar',
  'world.jurassic.name': 'Taman Jurassic',
  'world.jurassic.tagline': 'Selamatkan telur dino sebelum menetas!',
  'world.jurassic.concept': 'Pencarian Jalur Nyata',
  'world.parking.name': 'Parkir Kota',
  'world.parking.tagline': 'Sortir dan parkir mobil di kota yang sibuk!',
  'world.parking.concept': 'Pengurutan & Perutean',
  'world.sorting.name': 'Penyortiran Luar Angkasa',
  'world.sorting.tagline': 'Organisir paket di gudang luar angkasa!',
  'world.sorting.concept': 'Algoritma & Data',

  // ── Bonus worlds ─────────────────────────────
  'bonus.section.title': 'Dunia Bonus',
  'bonus.section.subtitle': 'Tantangan coding dunia nyata — tanpa XP!',
  'bonus.locked.hint': 'Selesaikan Portal Waktu untuk membuka semua dunia bonus!',
  'bonus.unlocked.all': 'Semua level bonus terbuka — langsung masuk ke mana saja!',
  'bonus.all.open': 'Semua level terbuka!',

  // ── Common labels ────────────────────────────
  'common.play': '▶ Main',
  'common.play.again': '▶ Main Lagi',
  'common.ages': 'Usia',
  'common.learn': 'Pelajari:',
  'common.level': 'Level',
  'common.locked': 'Terkunci',
  'common.xp': 'XP',
  'common.stars': 'Bintang',
  'common.tries': 'percobaan',
  'common.completed': '{n}/{total} pelajaran',
  'common.to.unlock': '{xp} XP lagi',
  'common.need.xp': 'Butuh {xp} XP',
  'common.xp.reward': '⚡ {xp} XP',

  // ── Blockly toolbar ──────────────────────────
  'blockly.label': 'Blok',
  'blockly.block': 'blok',
  'blockly.blocks': 'blok',
  'blockly.view.code': '👨‍💻 Lihat Kode',
  'blockly.view.blocks': '🧩 Lihat Blok',
  'blockly.clear': '🗑️ Hapus',
  'blockly.code.placeholder': '// Kodenya akan muncul di sini ketika kamu menambahkan blok!',

  // ── Mascot messages ──────────────────────────
  'mascot.running': "Ayo! Melihat kode berjalan... 👀",
  'mascot.error': "Aduh! Ada yang salah. Coba lagi! 😅",
  'mascot.success.5': "LEGENDARIS! 🌟⭐ Solusi SEMPURNA 5 bintang! Kamu jenius coding!",
  'mascot.success.4': "Luar biasa! 🏆 Hampir sempurna! Bisa dapat satu bintang lagi?",
  'mascot.success.3': "SEMPURNA! 🌟 Kamu bintang coding sejati!",
  'mascot.success.2': "Kerja bagus! 🎊 Berhasil! Bisa pakai blok lebih sedikit?",
  'mascot.success.1': "Kamu bisa! 🎉 Bagus! Coba pakai lebih sedikit blok untuk bintang lebih banyak!",
  'mascot.success.1.criteria': "Berhasil! 🎉 Sekarang coba pakai blok spesial untuk bintang lebih banyak! 💡",
  'mascot.hint.prefix': '💡 Petunjuk:',

  // ── Home screen ──────────────────────────────
  'home.welcome': 'Selamat Datang di CodeKids!',
  'home.subtitle': 'Pilih dunia dan mulai petualangan coding-mu! 🌟',

  // ── Reward messages (by star count 1–3, variant 0–2) ────
  'reward.msg.1.0': 'Terus semangat! 💪',
  'reward.msg.1.1': 'Bagus dicoba! ⭐',
  'reward.msg.1.2': 'Semakin dekat! 🎯',
  'reward.msg.2.0': 'Kerja bagus! 👏',
  'reward.msg.2.1': 'Hebat sekali! 🎊',
  'reward.msg.2.2': "Kamu makin jago! 📈",
  'reward.msg.3.0': 'Luar biasa! 🤩',
  'reward.msg.3.1': 'SEMPURNA! 🏆',
  'reward.msg.3.2': "KAMU BINTANGNYA! 🌟",
  'reward.msg.4.0': 'Mengagumkan! 🔥',
  'reward.msg.4.1': 'Hampir sempurna! ⚡',
  'reward.msg.4.2': 'Hampir! 💫',
  'reward.msg.5.0': 'LEGENDARIS! 🌟',
  'reward.msg.5.1': 'KODE SEMPURNA! 🏆',
  'reward.msg.5.2': 'JENIUS CODING! 🧠',
  'reward.fallback': 'Selesai!',

  // ── Landing section labels ────────────────────
  'landing.features.label': 'Fitur',
  'landing.how.label': 'Cara Kerjanya',
  'landing.worlds.label': 'Dunia',
  'landing.ages.label': 'Kelompok Usia',

  // ── Trust strip ──────────────────────────────
  'trust.free': '100% Gratis',
  'trust.no.signup': 'Tanpa Daftar',
  'trust.no.ads': 'Tanpa Iklan',
  'trust.mobile': 'Bisa di HP',

  // ── Tutorial ──────────────────────────────────
  'tutorial.badge': 'TUTORIAL',
  'tutorial.card.label': 'Mulai di Sini Dulu!',
  'tutorial.card.desc': 'Pelajari cara kerja blok {concept} sebelum bermain level.',
  'tutorial.card.cta': '▶ Mulai Tutorial',
  'tutorial.card.done': '✓ Tutorial Selesai',
  'tutorial.complete.title': 'Kamu Siap! 🎉',
  'tutorial.complete.subtitle': 'Bagus sekali! Kamu sudah tahu cara kerja blok {concept}. Saatnya bermain sungguhan!',
  'tutorial.complete.cta': 'Mulai Level 1!',
}

export const TRANSLATIONS: Record<Language, Translations> = { en, id }
