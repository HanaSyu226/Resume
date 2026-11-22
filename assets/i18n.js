(function(){
  var STORAGE_KEY = 'site-lang';

  var dict = {

    'common.backLink': { en:'&larr;&nbsp; Back to portfolio', ms:'&larr;&nbsp; Kembali ke portfolio' },
    'common.downloadPdf': { en:'Download PDF', ms:'Muat Turun PDF' },
    'common.printNote': { en:'Live, spinnable 3D preview available at the link below', ms:'Pratonton 3D langsung yang boleh diputar tersedia pada pautan di bawah' },
    'common.openInCoohom': { en:'OPEN IN COOHOM', ms:'BUKA DI COOHOM' },
    'common.galleryLabel': { en:'In Frame — Full Render Set', ms:'Dalam Bingkai — Set Render Penuh' },
    'common.byline': { en:'By Aina Mardia Mohamad Kerta · Renders: Coohom', ms:'Oleh Aina Mardia Mohamad Kerta · Render: Coohom' },

    /* ---------------- index.html : nav ---------------- */
    'nav.resume': { en:'Résumé', ms:'Résumé' },
    'nav.resumeMobile': { en:'View résumé', ms:'Lihat résumé' },
    'nav.themeAria': { en:'Toggle day / night theme', ms:'Tukar tema siang / malam' },
    'nav.themeTitle': { en:'Day / night', ms:'Siang / malam' },
    'nav.menu': { en:'Menu', ms:'Menu' },
    'nav.journey': { en:'Journey', ms:'Perjalanan' },
    'nav.hof': { en:'Hall of Fame', ms:'Dewan Kegemilangan' },
    'nav.press': { en:'Press', ms:'Media' },
    'nav.work': { en:'Work', ms:'Hasil Kerja' },
    'nav.skills': { en:'Skills', ms:'Kemahiran' },
    'nav.teaching': { en:'Teaching', ms:'Pengajaran' },
    'nav.docs': { en:'Documents', ms:'Dokumen' },
    'nav.lab': { en:'Design Lab', ms:'Makmal Reka Bentuk' },
    'nav.hobby': { en:'Hobby', ms:'Hobi' },
    'nav.achievements': { en:'More Achievements', ms:'Lebih Banyak Pencapaian' },
    'nav.contact': { en:'Contact', ms:'Hubungi' },
    'nav.langLabel': { en:'Language', ms:'Bahasa' },

    /* ---------------- hero ---------------- */
    'hero.eyebrow': { en:"HELLO, I'M", ms:'HAI, SAYA' },
    'hero.lede': { en:"I'm a software engineer and educator. I design <strong>interfaces that feel effortless to use</strong> — and I teach the fundamentals to the next generation of builders here in Kuching.",
      ms:'Saya seorang jurutera perisian dan pendidik. Saya mereka bentuk <strong>antara muka yang terasa mudah digunakan</strong> — dan saya mengajar asas kepada generasi pembina seterusnya di sini, Kuching.' },
    'hero.resumeBtn': { en:'View résumé', ms:'Lihat résumé' },
    'hero.journeyBtn': { en:'See my journey ↓', ms:'Lihat perjalanan saya ↓' },
    'hero.status': { en:'OPEN TO OPPORTUNITIES', ms:'TERBUKA UNTUK PELUANG' },
    'hero.scroll': { en:'SCROLL', ms:'TATAL' },

    /* ---------------- ticker ---------------- */
    'ticker.line': { en:'Software Engineer <b>✦</b> UI/UX Designer <b>✦</b> IT Lecturer <b>✦</b> Power BI <b>✦</b> 2× Silver Medallist <b>✦</b> Sarawak Tribune Featured <b>✦</b>',
      ms:'Jurutera Perisian <b>✦</b> Pereka UI/UX <b>✦</b> Pensyarah IT <b>✦</b> Power BI <b>✦</b> 2× Peraih Pingat Perak <b>✦</b> Liputan Sarawak Tribune <b>✦</b>' },

    /* ---------------- cluster stats ---------------- */
    'stats.silverMedals': { en:'Silver Medals', ms:'Pingat Perak' },
    'stats.pressFeatures': { en:'Press Features', ms:'Liputan Media' },
    'stats.modulesTaught': { en:'Modules Taught', ms:'Modul Diajar' },
    'stats.programmes': { en:'Programmes', ms:'Program' },

    /* ---------------- journey ---------------- */
    'journey.kicker': { en:'My Journey', ms:'Perjalanan Saya' },
    'journey.title': { en:'The journey so far', ms:'Perjalanan setakat ini' },
    'journey.sub': { en:"Every milestone lights up as you scroll — this is the road I've travelled so far.",
      ms:'Setiap pencapaian menyala apabila anda menatal — inilah perjalanan yang telah saya lalui setakat ini.' },

    'journey.wp1.title': { en:'Consecutive Silver Medals', ms:'Pingat Perak Berturut-turut' },
    'journey.wp1.desc': { en:'I won back-to-back silver medals for my innovation projects — and volunteered at IDECS in both years.',
      ms:'Saya memenangi pingat perak berturut-turut untuk projek inovasi saya — dan menjadi sukarelawan di IDECS pada kedua-dua tahun tersebut.' },
    'journey.wp2.title': { en:'Research &amp; Development Intern', ms:'Pelatih Penyelidikan &amp; Pembangunan' },
    'journey.wp2.desc': { en:'I built an executive Project Overview dashboard in Power BI for the R&amp;D team — and was offered a developer role at Satok Digital Bridge before my internship had even ended.',
      ms:'Saya membina papan pemuka Project Overview peringkat eksekutif dalam Power BI untuk pasukan R&amp;D — dan ditawarkan jawatan pembangun di Satok Digital Bridge sebelum latihan industri saya pun tamat.' },
    'journey.wp3.title': { en:'Software Developer', ms:'Pembangun Perisian' },
    'journey.wp3.desc': { en:"I took up the role I'd been offered mid-internship, bringing UI/UX thinking and data-informed practice into the software we shipped.",
      ms:'Saya menerima jawatan yang ditawarkan semasa latihan industri, membawa pemikiran UI/UX dan amalan berasaskan data ke dalam perisian yang kami bangunkan.' },
    'journey.wp4.title': { en:'Bachelor of Software Engineering (Hons.)', ms:'Ijazah Sarjana Muda Kejuruteraan Perisian (Kepujian)' },
    'journey.wp4.desc': { en:'I graduated the same year the Sarawak Tribune featured me twice — for innovation, and for advocacy in technology.',
      ms:'Saya bergraduat pada tahun yang sama Sarawak Tribune memaparkan saya dua kali — untuk inovasi, dan untuk advokasi dalam teknologi.' },
    'journey.wp5.when': { en:'Jan 2026 — Present', ms:'Jan 2026 — Kini' },
    'journey.wp5.title': { en:'Part-Time Lecturer', ms:'Pensyarah Sambilan' },
    'journey.wp5.desc': { en:'I came back to teach at the place where I studied — guiding new students through the foundations of computing.',
      ms:'Saya kembali untuk mengajar di tempat saya belajar dahulu — membimbing pelajar baharu melalui asas-asas komputeran.' },

    /* ---------------- hall of fame ---------------- */
    'hof.kicker': { en:'Hall of Fame', ms:'Dewan Kegemilangan' },
    'hof.title': { en:'Moments worth framing', ms:'Detik yang wajar dikenang' },
    'hof.sub': { en:'Medals, features, and rooms I\'ve been lucky enough to stand in. Click any card for a closer look.',
      ms:'Pingat, liputan media, dan ruang yang saya bertuah dapat berada di dalamnya. Klik mana-mana kad untuk melihat dengan lebih dekat.' },
    'hof.note': { en:"Tap a photo for a closer look — some cycle through several automatically. Where there's a source page, a separate button on the card takes you there.",
      ms:'Ketik foto untuk melihat dengan lebih dekat — sesetengahnya bertukar secara automatik. Jika terdapat halaman sumber, butang berasingan pada kad akan membawa anda ke sana.' },
    'hof.viewPhotos': { en:'VIEW PHOTOS', ms:'LIHAT FOTO' },
    'hof.viewPhoto': { en:'VIEW PHOTO', ms:'LIHAT FOTO' },
    'hof.ariaViewPhotos': { en:'View photos — ', ms:'Lihat foto — ' },
    'hof.ariaViewPhoto': { en:'View photo — ', ms:'Lihat foto — ' },
    'hof.visitPage': { en:'VISIT PAGE', ms:'LAWATI HALAMAN' },
    'hof.photoOf': { en:' · photo {n} of {total}', ms:' · foto {n} daripada {total}' },

    'lightbox.closeAria': { en:'Close', ms:'Tutup' },
    'lightbox.prevAria': { en:'Previous photo', ms:'Foto sebelumnya' },
    'lightbox.nextAria': { en:'Next photo', ms:'Foto seterusnya' },

    /* ---------------- press ---------------- */
    'press.kicker': { en:'In the Press', ms:'Dalam Media' },
    'press.title': { en:'On the record', ms:'Secara Rasmi' },
    'press.readFeature': { en:'READ THE FEATURE →', ms:'BACA LIPUTAN →' },

    /* ---------------- work ---------------- */
    'work.kicker': { en:'Selected Work', ms:'Hasil Kerja Terpilih' },
    'work.title': { en:'Built with intent', ms:'Dibina Dengan Tujuan' },
    'work1.title': { en:'Project Overview Dashboard', ms:'Papan Pemuka Project Overview' },
    'work1.desc': { en:"I turned scattered project data into one clear, executive-level Power BI dashboard for Sarawak Energy's R&amp;D division.",
      ms:'Saya mengubah data projek yang bersepah menjadi satu papan pemuka Power BI yang jelas, bertaraf eksekutif, untuk bahagian R&amp;D Sarawak Energy.' },
    'work1.tag2': { en:'Data Viz', ms:'Visualisasi Data' },
    'work1.tag3': { en:'Enterprise', ms:'Korporat' },
    'work2.title': { en:'Interface &amp; Web Design Practice', ms:'Amalan Reka Bentuk Antara Muka &amp; Web' },
    'work2.desc': { en:'My ongoing UI/UX and front-end practice, built on one belief: good software should feel effortless. This website is a working sample — I designed and coded it myself.',
      ms:'Amalan UI/UX dan front-end saya yang berterusan, dibina atas satu kepercayaan: perisian yang baik harus terasa mudah. Laman web ini adalah contoh sebenar — saya mereka bentuk dan mengekodkannya sendiri.' },
    'work2.tag3': { en:'Design Systems', ms:'Sistem Reka Bentuk' },
    'work3.title': { en:'Innovation Convention Entries', ms:'Penyertaan Konvensyen Inovasi' },
    'work3.desc': { en:"Two years, two silver medals at Sarawak's state innovation convention — taking ideas from sketch to stage, and holding up under judging.",
      ms:'Dua tahun, dua pingat perak di konvensyen inovasi peringkat negeri Sarawak — membawa idea dari lakaran ke pentas, dan bertahan di bawah penghakiman.' },
    'work3.tag1': { en:'Innovation', ms:'Inovasi' },
    'work3.tag2': { en:'Silver ×2', ms:'Perak ×2' },

    /* ---------------- skills ---------------- */
    'skills.kicker': { en:'Skills', ms:'Kemahiran' },
    'skills.title': { en:'What I build with', ms:'Apa Yang Saya Gunakan Untuk Membina' },
    'skills.sub': { en:'Languages, frameworks and tools I use day to day.', ms:'Bahasa, rangka kerja dan alatan yang saya gunakan setiap hari.' },
    'skills.groupLanguages': { en:'Languages', ms:'Bahasa Pengaturcaraan' },
    'skills.groupFrameworks': { en:'Frameworks &amp; Libraries', ms:'Rangka Kerja &amp; Pustaka' },
    'skills.groupDb': { en:'Database &amp; Tools', ms:'Pangkalan Data &amp; Alatan' },

    /* ---------------- teaching ---------------- */
    'teaching.kicker': { en:'Teaching', ms:'Pengajaran' },
    'teaching.title': { en:'Back where it began', ms:'Kembali Ke Tempat Ia Bermula' },
    'teaching.p1': { en:"I teach at <strong>i-CATS University College</strong> — the same place where I earned my degree. There's something special about standing at the front of a classroom you once sat in.",
      ms:'Saya mengajar di <strong>i-CATS University College</strong> — tempat yang sama saya memperoleh ijazah saya. Ada sesuatu yang istimewa apabila berdiri di hadapan kelas yang pernah saya duduki.' },
    'teaching.p2': { en:"I design my own course materials, lead the teaching, and handle assessment — and I'm preparing to take on <strong>Diploma-level modules</strong> next.",
      ms:'Saya mereka bentuk bahan kursus saya sendiri, mengetuai pengajaran, dan mengendalikan penilaian — dan saya sedang bersedia untuk mengendalikan <strong>modul peringkat Diploma</strong> seterusnya.' },
    'teaching.mod1Tag': { en:'Foundation', ms:'Asasi' },
    'teaching.mod1Name': { en:'Introduction to Computer Systems &amp; Applications', ms:'Pengenalan kepada Sistem Komputer &amp; Aplikasi' },
    'teaching.mod2Tag': { en:'Bridging', ms:'Jambatan' },
    'teaching.mod2Name': { en:'Digital Literacy', ms:'Literasi Digital' },

    /* ---------------- documents ---------------- */
    'docs.kicker': { en:'Documents', ms:'Dokumen' },
    'docs.title': { en:'My résumé', ms:'Résumé Saya' },
    'docs.sub': { en:'Preview it right here, or download a copy to keep.', ms:'Pratonton di sini, atau muat turun salinan untuk disimpan.' },
    'docs.cardDesc': { en:'Information technology &amp; education — one page, current to 2026.', ms:'Teknologi maklumat &amp; pendidikan — satu halaman, terkini sehingga 2026.' },
    'docs.preview': { en:'Preview', ms:'Pratonton' },

    /* ---------------- design lab ---------------- */
    'lab.kicker': { en:'Design Lab', ms:'Makmal Reka Bentuk' },
    'lab.title': { en:"Don't take my word for it — touch it", ms:'Jangan Percaya Kata-Kata Saya Sahaja — Cubalah Sendiri' },
    'lab.sub': { en:'I hand-built these little interactions. Interface design is a feeling — go ahead, play with them.',
      ms:'Saya membina sendiri interaksi kecil ini. Reka bentuk antara muka adalah satu perasaan — silakan, cuba sendiri.' },
    'lab.tile1Title': { en:'Live design token', ms:'Token Reka Bentuk Langsung' },
    'lab.tile1Desc': { en:"Drag it — my whole site recolours from a single design token. That's a design system at work.",
      ms:'Seret — seluruh laman saya bertukar warna daripada satu token reka bentuk. Itulah sistem reka bentuk beraksi.' },
    'lab.tile2Title': { en:'States &amp; affordance', ms:'Keadaan &amp; Affordans' },
    'lab.tile2Desc': { en:'A control should announce its state before you read a single word.',
      ms:'Satu kawalan harus menzahirkan keadaannya sebelum anda membaca walau satu patah perkataan.' },
    'lab.tile3Title': { en:'Micro-feedback', ms:'Maklum Balas Mikro' },
    'lab.tile3Desc': { en:'Every action deserves a response. Click it — the button confirms, then resets.',
      ms:'Setiap tindakan wajar mendapat respons. Klik — butang mengesahkan, kemudian berulang semula.' },
    'lab.tile4Title': { en:'Progress, honestly told', ms:'Kemajuan, Diceritakan Dengan Jujur' },
    'lab.tile4Desc': { en:'Motion that informs, not decorates — progress you can trust at a glance.',
      ms:'Pergerakan yang memberi maklumat, bukan sekadar hiasan — kemajuan yang boleh anda percayai sekali pandang.' },
    'lab.hueAria': { en:'Site accent hue', ms:'Rona aksen laman' },
    'lab.hueLabel': { en:'accent', ms:'aksen' },
    'lab.switchAria': { en:'Demo toggle', ms:'Suis demo' },
    'lab.switchOn': { en:'HEADLIGHTS · ON', ms:'LAMPU BESAR · HIDUP' },
    'lab.switchOff': { en:'HEADLIGHTS · OFF', ms:'LAMPU BESAR · MATI' },
    'lab.saveDefault': { en:'Save changes', ms:'Simpan perubahan' },
    'lab.saveDone': { en:'✓ Saved', ms:'✓ Disimpan' },
    'lab.ringRun': { en:'Run', ms:'Jalankan' },
    'lab.ringAgain': { en:'Again', ms:'Sekali Lagi' },

    /* ---------------- hobby teaser + shared hobby content ---------------- */
    'hobby.kicker': { en:'Beyond The Code', ms:'Di Sebalik Kod' },
    'hobby.teaserTitle': { en:'Sketching homes, one room at a time', ms:'Melakar Rumah, Sebilik Demi Sebilik' },
    'hobby.teaserSub': { en:"When I'm not building software, I'm designing interiors in Coohom — sketching spaces before they exist. Each window below is a live, spinnable preview of the real project.",
      ms:'Apabila saya tidak membina perisian, saya mereka bentuk ruang dalaman menggunakan Coohom — melakar ruang sebelum ia wujud. Setiap tetingkap di bawah ialah pratonton langsung yang boleh diputar bagi projek sebenar.' },
    'hobby.viewFull': { en:'View full hobby portfolio', ms:'Lihat portfolio hobi penuh' },

    'hobby.card1.tag': { en:'i-CATS Library', ms:'i-CATS Library' },
    'hobby.card1.title': { en:'Student Lounge Concept', ms:'Konsep Ruang Legar Pelajar' },
    'hobby.card1.descShort': { en:"Sketched for my MPP (Majlis Perwakilan Pelajar) selection campaign — a reimagined lounge corner for the i-CATS Library. Months later, I watched pieces of it come to life: my concept was pitched to the Student Council and Affairs, and when Maznah Library was revamped, the meeting room, individual computer stations and lounge sofas I'd envisioned were built in. Not every detail survived — but the library also gained a student snooker area and a small café elsewhere on campus. A student sketch, partly built into a real space students now use.",
      ms:'Dilakar untuk kempen pemilihan MPP (Majlis Perwakilan Pelajar) saya — sudut ruang legar yang direka semula untuk Perpustakaan i-CATS. Beberapa bulan kemudian, saya menyaksikan sebahagian daripadanya menjadi kenyataan: konsep saya dibentangkan kepada Majlis &amp; Hal Ehwal Pelajar, dan apabila Perpustakaan Maznah dinaik taraf, bilik mesyuarat, stesen komputer individu dan sofa ruang legar yang saya bayangkan telah dibina. Tidak semua butiran kekal — tetapi perpustakaan turut mendapat ruang snooker pelajar dan sebuah kafe kecil di bahagian lain kampus. Lakaran seorang pelajar, sebahagiannya dibina menjadi ruang sebenar yang kini digunakan pelajar.' },
    'hobby.card1.descFull': { en:"Sketched for my MPP (Majlis Perwakilan Pelajar) selection campaign — a reimagined lounge corner for the i-CATS Library. Months later, I watched pieces of it come to life: my concept was pitched to the Student Council and Affairs, and when Maznah Library was revamped, the meeting room, individual computer stations and lounge sofas I'd envisioned were built in. Not every detail survived — but the library also gained a student snooker area and a small café elsewhere on campus.",
      ms:'Dilakar untuk kempen pemilihan MPP (Majlis Perwakilan Pelajar) saya — sudut ruang legar yang direka semula untuk Perpustakaan i-CATS. Beberapa bulan kemudian, saya menyaksikan sebahagian daripadanya menjadi kenyataan: konsep saya dibentangkan kepada Majlis &amp; Hal Ehwal Pelajar, dan apabila Perpustakaan Maznah dinaik taraf, bilik mesyuarat, stesen komputer individu dan sofa ruang legar yang saya bayangkan telah dibina. Tidak semua butiran kekal — tetapi perpustakaan turut mendapat ruang snooker pelajar dan sebuah kafe kecil di bahagian lain kampus.' },
    'hobby.card1.quote': { en:'"A student sketch, partly built into a real space students now use."', ms:'"Lakaran seorang pelajar, sebahagiannya dibina menjadi ruang sebenar yang kini digunakan pelajar."' },

    'hobby.card2.tag': { en:'Rumah Panjang, Reimagined', ms:'Rumah Panjang, Direka Semula' },
    'hobby.card2.title': { en:"Nurina's House Inspiration", ms:'Inspirasi Rumah Nurina' },
    'hobby.card2.descShort': { en:"After visiting a friend's home — almost a longhouse in itself, with 10 bedrooms, 2 bathrooms and a sprawling kitchen, dining and living area — I sketched my own take: far fewer rooms, a much smaller footprint, but still carrying Sarawak's rumah panjang identity, made modern.",
      ms:"Selepas melawat rumah seorang rakan — hampir seperti rumah panjang tersendiri, dengan 10 bilik tidur, 2 bilik air serta dapur, ruang makan dan ruang tamu yang luas — saya melakar tafsiran saya sendiri: bilik yang jauh lebih sedikit, saiz binaan yang jauh lebih kecil, tetapi masih membawa identiti rumah panjang Sarawak, dalam bentuk moden." },
    'hobby.card2.descFull': { en:"After visiting a friend's home — almost a longhouse in itself, with 10 bedrooms, 2 bathrooms and a sprawling kitchen, dining and living area — I sketched my own take.",
      ms:'Selepas melawat rumah seorang rakan — hampir seperti rumah panjang tersendiri, dengan 10 bilik tidur, 2 bilik air serta dapur, ruang makan dan ruang tamu yang luas — saya melakar tafsiran saya sendiri.' },
    'hobby.card2.quote': { en:'"Far fewer rooms, a much smaller footprint — but still carrying Sarawak\'s rumah panjang identity, made modern."',
      ms:'"Bilik yang jauh lebih sedikit, saiz binaan yang jauh lebih kecil — tetapi masih membawa identiti rumah panjang Sarawak, dalam bentuk moden."' },

    'hobby.card3.tag': { en:'Built In Real Life', ms:'Dibina Dalam Kehidupan Sebenar' },
    'hobby.card3.title': { en:'My Room Redesign', ms:'Reka Bentuk Semula Bilik Saya' },
    'hobby.card3.desc': { en:"This one didn't stay a concept. Before touching a single piece of furniture, I sketched my room exactly how I wanted it — layout, placement, everything — and then rebuilt it in real life to match. I redo my room every year now, and this has become my go-to way to plan the change before committing to it.",
      ms:'Yang satu ini tidak kekal sebagai konsep sahaja. Sebelum menyentuh walau sebuah perabot pun, saya melakar bilik saya tepat seperti yang saya mahukan — susun atur, penempatan, semuanya — dan kemudian membinanya semula dalam kehidupan sebenar agar sepadan. Saya kini mengubah suai bilik saya setiap tahun, dan ini telah menjadi cara utama saya merancang perubahan sebelum melaksanakannya.' },
    'hobby.card3.quote': { en:'"It came out just as I\'d designed it."', ms:'"Hasilnya tepat seperti yang saya reka."' },

    'hobby.card4.tag': { en:'Early Work · 3–4 Years Ago', ms:'Karya Awal · 3–4 Tahun Lalu' },
    'hobby.card4.title': { en:'Loft Exploration', ms:'Penerokaan Loft' },
    'hobby.card4.descShort': { en:'One of the first designs I ever sketched in Coohom, long before any of the projects above. No brief, no real-world constraint — just a loft I built purely to see how far I could push my own eye for space, proportion and aesthetics. Looking back at it now, it\'s the starting point for everything I\'ve designed since.',
      ms:'Salah satu reka bentuk pertama yang pernah saya lakar di Coohom, jauh sebelum mana-mana projek di atas. Tiada brief, tiada kekangan dunia sebenar — hanya sebuah loft yang saya bina semata-mata untuk menguji sejauh mana saya boleh mencabar kepekaan saya sendiri terhadap ruang, perkadaran dan estetika. Melihat kembali sekarang, inilah titik permulaan bagi segala yang saya reka bentuk sejak itu.' },
    'hobby.card4.descFull': { en:'One of the first designs I ever sketched in Coohom, long before any of the projects above. No brief, no real-world constraint — just a loft I built purely to see how far I could push my own eye for space, proportion and aesthetics.',
      ms:'Salah satu reka bentuk pertama yang pernah saya lakar di Coohom, jauh sebelum mana-mana projek di atas. Tiada brief, tiada kekangan dunia sebenar — hanya sebuah loft yang saya bina semata-mata untuk menguji sejauh mana saya boleh mencabar kepekaan saya sendiri terhadap ruang, perkadaran dan estetika.' },
    'hobby.card4.quote': { en:'"Looking back at it now, it\'s the starting point for everything I\'ve designed since."',
      ms:'"Melihat kembali sekarang, inilah titik permulaan bagi segala yang saya reka bentuk sejak itu."' },

    'hobby.card5.tag': { en:'Most Recent', ms:'Terkini' },
    'hobby.card5.title': { en:'Small Space, Big Character', ms:'Ruang Kecil, Karakter Besar' },
    'hobby.card5.descShort': { en:'Two designs, one question: how far can small-space creativity go? The first squeezes a 1-bedroom, 1-bathroom unit with a compact kitchen into something that still feels classy, not cramped. The second leans into the loft style now booming across Sarawak, prized by students and working adults for its low rental — proof that budget-friendly doesn\'t have to mean design-poor.',
      ms:'Dua reka bentuk, satu persoalan: sejauh mana kreativiti ruang kecil boleh dibawa? Yang pertama memuatkan unit 1 bilik tidur, 1 bilik air dengan dapur padat ke dalam sesuatu yang masih terasa bergaya, tidak sempit. Yang kedua menjurus kepada gaya loft yang kini semakin popular di seluruh Sarawak, digemari pelajar dan golongan bekerja kerana sewanya yang rendah — bukti bahawa mesra bajet tidak semestinya bermakna reka bentuk yang lemah.' },
    'hobby.card5.descFull': { en:'Two designs, one question: how far can small-space creativity go? The first squeezes a 1-bedroom, 1-bathroom unit with a compact kitchen into something that still feels classy, not cramped. The second leans into the loft style now booming across Sarawak, prized by students and working adults for its low rental.',
      ms:'Dua reka bentuk, satu persoalan: sejauh mana kreativiti ruang kecil boleh dibawa? Yang pertama memuatkan unit 1 bilik tidur, 1 bilik air dengan dapur padat ke dalam sesuatu yang masih terasa bergaya, tidak sempit. Yang kedua menjurus kepada gaya loft yang kini semakin popular di seluruh Sarawak, digemari pelajar dan golongan bekerja kerana sewanya yang rendah.' },
    'hobby.card5.quote': { en:'"Proof that budget-friendly doesn\'t have to mean design-poor."',
      ms:'"Bukti bahawa mesra bajet tidak semestinya bermakna reka bentuk yang lemah."' },

    /* ---------------- contact / footer ---------------- */
    'contact.kicker': { en:'Get in touch', ms:'Hubungi Saya' },
    'contact.title': { en:"Let's build<br><span>what's next</span>", ms:'Mari bina<br><span>apa yang seterusnya</span>' },
    'contact.sub': { en:"I'm open to opportunities in IT education, software, and UI/UX work. I'd love to hear from you.",
      ms:'Saya terbuka kepada peluang dalam pendidikan IT, perisian, dan kerja UI/UX. Saya ingin mendengar daripada anda.' },
    'contact.gmailBtn': { en:'✉&nbsp; Message me on Gmail', ms:'✉&nbsp; Hantar e-mel di Gmail' },
    'contact.resumeBtn': { en:'View résumé', ms:'Lihat résumé' },
    'footer.text': { en:'© 2026 AINA MARDIA MOHAMAD KERTA — DESIGNED &amp; CODED BY ME', ms:'© 2026 AINA MARDIA MOHAMAD KERTA — DIREKA &amp; DIKODKAN OLEH SAYA' },

    'skip.link': { en:'Skip to content', ms:'Langkau ke kandungan' },

    'modal.closeAria': { en:'Close preview', ms:'Tutup pratonton' },

    /* ---------------- achievements.html ---------------- */
    'ach.kicker': { en:'Extended Gallery', ms:'Galeri Lanjutan' },
    'ach.h1': { en:'Achievements, press &amp; design work', ms:'Pencapaian, media &amp; hasil reka bentuk' },
    'ach.heroP': { en:"The full trail of certificates, trophies, press features and design pieces that didn't fit on the front page — pulled from my certificates &amp; achievements archive.",
      ms:'Jejak penuh sijil, trofi, liputan media dan hasil reka bentuk yang tidak muat di halaman utama — diambil daripada arkib sijil &amp; pencapaian saya.' },

    'ach.certsTag': { en:'Certificates &amp; Awards', ms:'Sijil &amp; Anugerah' },
    'ach.certsTitle': { en:'The full certificate shelf', ms:'Rak Sijil Yang Lengkap' },
    'ach.certsSub': { en:"Dean's List, competition certificates, committee recognitions and programme completions.",
      ms:'Senarai Dekan, sijil pertandingan, pengiktirafan jawatankuasa dan penyempurnaan program.' },

    'ach.trophiesTag': { en:'Trophies &amp; Programmes', ms:'Trofi &amp; Program' },
    'ach.trophiesTitle': { en:'Honours worth framing', ms:'Penghormatan Yang Wajar Dikenang' },
    'ach.trophiesSub': { en:'A national poster design honourable mention, the LaunchX startup accelerator, and an outstanding service award.',
      ms:'Sebutan khas reka bentuk poster kebangsaan, pemecut permulaan LaunchX, dan anugerah perkhidmatan cemerlang.' },
    'ach.trophy1Title': { en:'Honourable Mention — Poster Design Competition', ms:'Sebutan Khas — Pertandingan Reka Bentuk Poster' },
    'ach.trophy1Tag': { en:'National Day · i-CATS University College', ms:'Hari Kebangsaan · i-CATS University College' },
    'ach.trophy2Title': { en:'Outstanding Service Award', ms:'Anugerah Perkhidmatan Cemerlang' },
    'ach.trophy3Title': { en:'LaunchX — University Startup Accelerator Programme', ms:'LaunchX — Program Pemecut Permulaan Universiti' },

    'ach.pressTag': { en:'In The Press', ms:'Dalam Media' },
    'ach.pressTitle': { en:'Sarawak Tribune — full spread', ms:'Sarawak Tribune — Liputan Penuh' },
    'ach.pressSub': { en:'The complete Lifestyle feature behind "International Day of Women and Girls in Science: Pioneering the future of tech."',
      ms:'Liputan Lifestyle lengkap di sebalik "International Day of Women and Girls in Science: Pioneering the future of tech."' },
    'ach.pressNote': { en:'Read the full feature on the <a href="index.html#press" target="_self">front page</a>, or directly at the <a href="https://www.sarawaktribune.com/international-day-of-women-and-girls-in-science-pioneering-the-future-of-tech/" target="_blank" rel="noopener">Sarawak Tribune</a>.',
      ms:'Baca liputan penuh di <a href="index.html#press" target="_self">halaman utama</a>, atau terus di <a href="https://www.sarawaktribune.com/international-day-of-women-and-girls-in-science-pioneering-the-future-of-tech/" target="_blank" rel="noopener">Sarawak Tribune</a>.' },

    'ach.designsTag': { en:'Design Work', ms:'Hasil Reka Bentuk' },
    'ach.designsTitle': { en:'Posters, UI concepts &amp; graphics', ms:'Poster, Konsep UI &amp; Grafik' },
    'ach.designsSub': { en:'A spread of design practice — a tourism website concept, a social app UI, an awareness infographic, and festive posters.',
      ms:'Pelbagai amalan reka bentuk — konsep laman web pelancongan, UI aplikasi sosial, infografik kesedaran, dan poster perayaan.' },
    'ach.d1Tag': { en:'Tourism website concept', ms:'Konsep laman web pelancongan' },
    'ach.d2Tag': { en:'Social app UI concept', ms:'Konsep UI aplikasi sosial' },
    'ach.d3Tag': { en:'Cybersecurity infographic', ms:'Infografik keselamatan siber' },
    'ach.d4Title': { en:'Chinese New Year 2024', ms:'Tahun Baharu Cina 2024' },
    'ach.d4Tag': { en:'i-CATS &amp; AWS UG Sarawak posters', ms:'Poster i-CATS &amp; AWS UG Sarawak' },
    'ach.d5Tag': { en:'i-CATS Esports Club poster', ms:'Poster Kelab Esukan i-CATS' },

    /* ---------------- hobby.html ---------------- */
    'hb.mastheadTitle': { en:'Beyond <span>the Code</span>', ms:'Di Sebalik <span>Kod</span>' },
    'hb.mastheadIssue': { en:'A Portfolio Supplement<br>Issue No. 01 — 2026', ms:'Suplemen Portfolio<br>Isu No. 01 — 2026' },
    'hb.mastheadSubRole': { en:'Software &amp; Interiors', ms:'Perisian &amp; Dalaman' },
    'hb.coverRole': { en:'Software Engineer · UI/UX Designer · IT Lecturer', ms:'Jurutera Perisian · Pereka UI/UX · Pensyarah IT' },
    'hb.coverBio': { en:"I build software by day, teach the students who'll do the same after me, and spend whatever's left sketching rooms that don't exist yet. This issue is the side of my work that doesn't usually make it onto a résumé — the spaces I've designed just because I couldn't stop imagining them.",
      ms:'Saya membina perisian pada siang hari, mengajar pelajar yang akan meneruskan selepas saya, dan menghabiskan masa yang berbaki melakar ruang yang belum wujud. Isu ini ialah sisi kerja saya yang biasanya tidak tercatat dalam résumé — ruang yang saya reka bentuk semata-mata kerana saya tidak dapat berhenti membayangkannya.' },

    'hb.factExpH': { en:'Experience', ms:'Pengalaman' },
    'hb.factExp1': { en:'Part-Time Lecturer — i-CATS University College (Jan 2026–Present)', ms:'Pensyarah Sambilan — i-CATS University College (Jan 2026–Kini)' },
    'hb.factExp2': { en:'Software Developer — Satok Digital Bridge (May 2025–Jan 2026)', ms:'Pembangun Perisian — Satok Digital Bridge (Mei 2025–Jan 2026)' },
    'hb.factExp3': { en:'R&amp;D Intern — Sarawak Energy Berhad (Jan–May 2025)', ms:'Pelatih R&amp;D — Sarawak Energy Berhad (Jan–Mei 2025)' },
    'hb.factEduH': { en:'Education', ms:'Pendidikan' },
    'hb.factEdu': { en:'Bachelor of Software Engineering (Hons.) — i-CATS University College, conferred Nov 2025.',
      ms:'Ijazah Sarjana Muda Kejuruteraan Perisian (Kepujian) — i-CATS University College, dianugerahkan Nov 2025.' },
    'hb.factAwardsH': { en:'Awards &amp; Recognition', ms:'Anugerah &amp; Pengiktirafan' },
    'hb.factAward1': { en:'Silver Medallist — Sarawak Innovation Convention 2024 &amp; 2023', ms:'Peraih Pingat Perak — Sarawak Innovation Convention 2024 &amp; 2023' },
    'hb.factAward2': { en:'Profiled by the Sarawak Tribune — "Youth Tech Visionary," 2025', ms:'Diprofilkan oleh Sarawak Tribune — "Youth Tech Visionary," 2025' },
    'hb.factAward3': { en:'Selected Participant — LaunchX (Sunway University) · TEGAS Bootcamp', ms:'Peserta Terpilih — LaunchX (Universiti Sunway) · TEGAS Bootcamp' },
    'hb.factSkillsH': { en:'Skills', ms:'Kemahiran' },

    'hb.contentsH': { en:'In This Issue', ms:'Dalam Isu Ini' },

    'hb.heroH1': { en:'Interior design &amp; spatial planning, sketched one room at a time', ms:'Reka Bentuk Dalaman &amp; Perancangan Ruang, Dilakar Sebilik Demi Sebilik' },
    'hb.heroP': { en:'When I\'m not building software, I\'m designing interiors — sketching layouts, testing proportions, and planning spaces in Coohom before they exist. A selection of that work is below.',
      ms:'Apabila saya tidak membina perisian, saya mereka bentuk ruang dalaman — melakar susun atur, menguji perkadaran, dan merancang ruang dalam Coohom sebelum ia wujud. Pilihan hasil kerja tersebut terdapat di bawah.' },
    'hb.ctaNote': { en:'Full magazine-style PDF, ready to save or print', ms:'PDF bergaya majalah penuh, sedia untuk disimpan atau dicetak' },
    'hb.loadingPhotos': { en:'Loading photos…', ms:'Memuatkan foto…' }
  };

  function getLang(){
    try{
      var stored = localStorage.getItem(STORAGE_KEY);
      if(stored === 'en' || stored === 'ms') return stored;
    }catch(e){}
    return 'en';
  }

  function t(key){
    var entry = dict[key];
    if(!entry) return '';
    return entry[I18N.lang] || entry.en || '';
  }

  function applyAttrs(el){
    var spec = el.getAttribute('data-i18n-attr');
    if(!spec) return;
    spec.split(';').forEach(function(pair){
      pair = pair.trim();
      if(!pair) return;
      var parts = pair.split(':');
      var attr = parts[0].trim(), key = parts[1].trim();
      var val = t(key);
      if(val) el.setAttribute(attr, val);
    });
  }

  function apply(){
    document.documentElement.lang = I18N.lang === 'ms' ? 'ms' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if(val) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(applyAttrs);
    document.querySelectorAll('[data-lang-btn]').forEach(function(btn){
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === I18N.lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang-btn') === I18N.lang ? 'true' : 'false');
    });
  }

  function setLang(lang){
    if(lang !== 'en' && lang !== 'ms') return;
    I18N.lang = lang;
    try{ localStorage.setItem(STORAGE_KEY, lang); }catch(e){}
    apply();
    document.dispatchEvent(new CustomEvent('i18n:change', { detail:{ lang:lang } }));
  }

  function wireButtons(){
    document.querySelectorAll('[data-lang-btn]').forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        setLang(btn.getAttribute('data-lang-btn'));
      });
    });
  }

  window.I18N = { dict:dict, lang:getLang(), t:t, apply:apply, setLang:setLang, wireButtons:wireButtons };
})();
