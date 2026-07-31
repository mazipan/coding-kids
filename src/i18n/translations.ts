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
  'nav.back': '← Back',
  'nav.home': 'Home',

  // ── Game UI ─────────────────────────────────
  'game.run': '▶ Run Code',
  'game.running': 'Running...',
  'game.reset': '🔄 Reset',
  'game.hint': '💡 Hint',
  'game.blocks.tab': '🧩 Blocks',
  'game.game.tab': '🎮 Game',
  'game.view.code': '👨‍💻 Code',
  'game.view.blocks': '🧩 Blocks',
  'game.clear': '🗑️ Clear',
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
  'reward.next': 'Next ➡️',
  'reward.retry': '🔄 Retry',

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

  // ── Common labels ────────────────────────────
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
}

const id: Translations = {
  // ── Landing page ─────────────────────────────
  'landing.badge': '🌟 Gratis untuk semua · Tanpa pendaftaran',
  'landing.headline': 'Tempat Anak Belajar Coding',
  'landing.sub': 'Petualangan coding yang menyenangkan dan gratis untuk usia 5–14 tahun. Belajar pemrograman dengan blok visual berwarna, kumpulkan XP, dan jelajahi 6 dunia epik — tanpa unduhan, tanpa login!',
  'landing.cta': 'Mulai Belajar Gratis',
  'landing.cta.secondary': 'Lihat cara kerjanya ↓',
  'landing.returning': 'Lanjutkan petualanganmu →',

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
  'landing.final.cta': 'Mulai Petualanganmu Sekarang',
  'landing.final.badge1': '✅ 100% Gratis',
  'landing.final.badge2': '✅ Tanpa Daftar',
  'landing.final.badge3': '✅ Tanpa Iklan',
  'landing.final.badge4': '✅ Bisa di HP',

  'landing.footer': 'Dibuat dengan ❤️ untuk para coder muda di seluruh dunia',
  'landing.footer.free': 'Gratis · Tanpa daftar · Tanpa iklan · Tanpa pengumpulan data',

  // ── Navigation ──────────────────────────────
  'nav.back': '← Kembali',
  'nav.home': 'Beranda',

  // ── Game UI ─────────────────────────────────
  'game.run': '▶ Jalankan Kode',
  'game.running': 'Berjalan...',
  'game.reset': '🔄 Ulang',
  'game.hint': '💡 Petunjuk',
  'game.blocks.tab': '🧩 Blok',
  'game.game.tab': '🎮 Permainan',
  'game.view.code': '👨‍💻 Kode',
  'game.view.blocks': '🧩 Blok',
  'game.clear': '🗑️ Hapus',
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
  'reward.next': 'Lanjut ➡️',
  'reward.retry': '🔄 Coba Lagi',

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

  // ── Common labels ────────────────────────────
  'common.ages': 'Usia',
  'common.learn': 'Pelajari:',
  'common.level': 'Level',
  'common.locked': 'Terkunci',
  'common.xp': 'XP',
  'common.stars': 'Bintang',
  'common.tries': 'percobaan',
  'common.completed': '{n}/{total} pelajaran',
  'common.to.unlock': '{xp} XP untuk membuka',
  'common.need.xp': 'Butuh {xp} XP',
  'common.xp.reward': '⚡ {xp} XP',
}

export const TRANSLATIONS: Record<Language, Translations> = { en, id }
