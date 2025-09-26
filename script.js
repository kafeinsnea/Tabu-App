// Tabu Kartları Veri Seti - GDG Edition (Kartlardan ayıklanmış gerçek kelimeler)
const tabuCards = [
    // MAVI KARTLAR - 25 kart
    {
        category: "Mavi",
        word: "ALGORİTMA",
        forbidden: ["İŞLEM", "ADIM", "MANTIK", "PROBLEM", "ÇÖZÜM"]
    },
    {
        category: "Mavi",
        word: "NETWORK",
        forbidden: ["BAĞLANTI", "İLETİŞİM", "ETKİNLİK", "TANIŞMA", "İŞ AĞI"]
    },
    {
        category: "Mavi",
        word: "TEKNOLOJİ",
        forbidden: ["İLERLEME", "YENİLİK", "CİHAZ", "MODERN", "DİJİTAL"]
    },
    {
        category: "Mavi",
        word: "YAZILIM",
        forbidden: ["KOD", "PROGRAM", "GELİŞTİRME", "BİLGİSAYAR", "UYGULAMA"]
    },
    {
        category: "Mavi",
        word: "VERİ",
        forbidden: ["BİLGİ", "DATASET", "KAYIT", "ANALİZ", "TABLO"]
    },
    {
        category: "Mavi",
        word: "Wİ-Fİ",
        forbidden: ["İNTERNET", "KABLOSUZ", "MODEM", "BAĞLANTI", "SİNYAL"]
    },
    {
        category: "Mavi",
        word: "E-TİCARET",
        forbidden: ["ONLİNE", "SATIŞ", "WEB", "ALIŞVERİŞ", "KARGO"]
    },
    {
        category: "Mavi",
        word: "SİBER GÜVENLİK",
        forbidden: ["HACK", "ŞİFRE", "KORUMA", "VİRÜS", "SIZMA"]
    },
    {
        category: "Mavi",
        word: "TARAYICI",
        forbidden: ["CHROME", "GOOGLE", "OPERA", "EDGE", "İNTERNET"]
    },
    {
        category: "Mavi",
        word: "İNOVASYON",
        forbidden: ["YENİLİK", "FİKİR", "YARATICI", "DEĞİŞİM", "PROJE"]
    },
    {
        category: "Mavi",
        word: "MENTÖRLÜK",
        forbidden: ["REHBER", "ÖĞRETMEK", "DENEYİM", "ÖĞRENCİ", "DESTEK"]
    },
    {
        category: "Mavi",
        word: "OYUN",
        forbidden: ["KONSOL", "BİLGİSAYAR", "EĞLENCE", "MOBİL", "VİDEO"]
    },
    {
        category: "Mavi",
        word: "LİNKEDİN",
        forbidden: ["İŞ", "PROFİL", "CV", "BAĞLANTI", "KARİYER"]
    },
    {
        category: "Mavi",
        word: "PYTHON",
        forbidden: ["PROGRAMLAMA", "DİL", "KOD", "PRİNT", "SCRİPT"]
    },
    {
        category: "Mavi",
        word: "APLİKASYON",
        forbidden: ["UYGULAMA", "TELEFON", "İNDİRMEK", "YAZILIM", "APP"]
    },
    {
        category: "Mavi",
        word: "BLOCKCHAİN",
        forbidden: ["KRİPTO", "BİTCOİN", "ZİNCİR", "DİJİTAL", "VERİ"]
    },
    {
        category: "Mavi",
        word: "MOBİL",
        forbidden: ["TELEFON", "UYGULAMA", "TAŞINABİLİR", "ANDROİD", "İOS"]
    },
    {
        category: "Mavi",
        word: "BULUT",
        forbidden: ["DEPOLAMA", "İNTERNET", "ONLİNE", "DOSYA", "YEDEKLEME"]
    },
    {
        category: "Mavi",
        word: "YAPAY ZEKA",
        forbidden: ["CHATGPT", "VERİ", "ALGORİTMA", "MODEL", "BİLGİSAYAR"]
    },
    {
        category: "Mavi",
        word: "GITHUB",
        forbidden: ["DEPOLAMAK", "ARŞİV", "KODLAMA", "PROGRAM", "YAZILIM"]
    },
    {
        category: "Mavi",
        word: "CV",
        forbidden: ["ÖZGEÇMİŞ", "İŞ", "DENEYİM", "BAŞVURU", "EĞİTİM"]
    },
    {
        category: "Mavi",
        word: "STAJ",
        forbidden: ["ÖĞRENCİ", "İŞ", "DENEYİM", "ŞİRKET", "ÇALIŞMA"]
    },
    {
        category: "Mavi",
        word: "ROBOTİK",
        forbidden: ["MAKİNE", "MEKANİK", "HAREKET", "YAPAY ZEKA", "DONANIM"]
    },
    {
        category: "Mavi",
        word: "DİJİTAL TASARIM",
        forbidden: ["GÖRSEL", "UI", "ESTETİK", "PHOTOSHOP", "RENK"]
    },
    {
        category: "Mavi",
        word: "GİRİŞİMCİLİK",
        forbidden: ["ŞİRKET", "KURMAK", "FİKİR", "RİSK", "YATIRIM"]
    },

    // KIRMIZI KARTLAR - 25 kart
    {
        category: "Kırmızı",
        word: "VPN",
        forbidden: ["İNTERNET", "GÜVENLİK", "IP", "GİZLİLİK", "SANAL AĞ"]
    },
    {
        category: "Kırmızı",
        word: "DONANIM",
        forbidden: ["BİLGİSAYAR", "PARÇA", "CPU", "BELLEK", "ANAKART"]
    },
    {
        category: "Kırmızı",
        word: "SİBER SAVAŞ",
        forbidden: ["DEVLET", "SALDIRI", "GÜVENLİK", "HACKER", "İNTERNET"]
    },
    {
        category: "Kırmızı",
        word: "START-UP",
        forbidden: ["GİRİŞİM", "İŞ", "YENİLİK", "ŞİRKET", "PROJE"]
    },
    {
        category: "Kırmızı",
        word: "NOT ORTALAMASI",
        forbidden: ["GPA", "KARNE", "DERS", "PUAN", "BAŞARI"]
    },
    {
        category: "Kırmızı",
        word: "METAVERSE",
        forbidden: ["SANAL", "AVATAR", "VR", "PLATFORM", "DÜNYA"]
    },
    {
        category: "Kırmızı",
        word: "CHAT-BOT",
        forbidden: ["KONUŞMA", "YAPAY ZEKA", "MESAJ", "OTOMATİK", "YAZILIM"]
    },
    {
        category: "Kırmızı",
        word: "MAKİNE ÖĞRENMESİ",
        forbidden: ["MODEL", "VERİ", "EĞİTİM", "REGRESYON", "TAHMİN"]
    },
    {
        category: "Kırmızı",
        word: "VERİ BİLİMİ",
        forbidden: ["ANALİZ", "İSTATİSTİK", "PYTHON", "MODEL", "BÜYÜKVERİ"]
    },
    {
        category: "Kırmızı",
        word: "LABORATUVAR",
        forbidden: ["DENEY", "BİLİM", "KİMYA", "BEYAZ ÖNLÜK", "BEHERGLAS"]
    },
    {
        category: "Kırmızı",
        word: "YAZILIM MÜHENDİSLİĞİ",
        forbidden: ["KOD", "PROJE", "TAKIM", "ANALİZ", "SİSTEM"]
    },
    {
        category: "Kırmızı",
        word: "ÇİP",
        forbidden: ["MİKROİŞLEMCİ", "DONANIM", "TRANSİSTÖR", "ANAKART", "TEKNOLOJİ"]
    },
    {
        category: "Kırmızı",
        word: "TOPLULUK",
        forbidden: ["KULÜP", "ÖĞRENCİ", "AKTİVİTE", "ORGANİZASYON", "ETKİNLİK"]
    },
    {
        category: "Kırmızı",
        word: "BURS",
        forbidden: ["PARA", "ÖĞRENCİ", "KYK", "DESTEK", "BAŞVURU"]
    },
    {
        category: "Kırmızı",
        word: "SUNUCU",
        forbidden: ["BİLGİSAYAR", "HOSTİNG", "İNTERNET", "BAĞLANTI", "VERİ"]
    },
    {
        category: "Kırmızı",
        word: "PROJE",
        forbidden: ["GRUP", "SUNUM", "ÖDEV", "HOCA", "RAPOR"]
    },
    {
        category: "Kırmızı",
        word: "YURT",
        forbidden: ["KALMAK", "ODA", "ÖĞRENCİ", "KYK", "ARKADAŞ"]
    },
    {
        category: "Kırmızı",
        word: "KAMPÜS",
        forbidden: ["ÜNİVERSİTE", "FAKÜLTE", "BAHÇE", "ÖĞRENCİ", "YEMEKHANE"]
    },
    {
        category: "Kırmızı",
        word: "VR GÖZLÜK",
        forbidden: ["SANAL", "DENEYİM", "3D", "OYUN", "TEKNOLOJİ"]
    },
    {
        category: "Kırmızı",
        word: "OYUN MOTORU",
        forbidden: ["UNİTY", "UNREAL", "GRAFİK", "PROGRAMLAMA", "ANİMASYON"]
    },
    {
        category: "Kırmızı",
        word: "HOLOGRAM",
        forbidden: ["3D", "GÖRÜNTÜ", "IŞIK", "SANAL", "YANSIMA"]
    },
    {
        category: "Kırmızı",
        word: "KÜTÜPHANE",
        forbidden: ["KİTAP", "ÇALIŞMAK", "SESSİZ", "ÖDEV", "RAF"]
    },
    {
        category: "Kırmızı",
        word: "TÜBİTAK",
        forbidden: ["PROJE", "BİLİM", "DESTEK", "ARAŞTIRMA", "YARIŞMA"]
    },
    {
        category: "Kırmızı",
        word: "ANTİVİRÜS",
        forbidden: ["PROGRAM", "KORUMA", "BİLGİSAYAR", "YAZILIM", "VİRÜS"]
    },
    {
        category: "Kırmızı",
        word: "OYUN KONSOLU",
        forbidden: ["PLAYSTATİON", "XBOX", "NİNTENDO", "OYUN", "JOYSTİCK"]
    },

    // SARI KARTLAR - 25 kart
    {
        category: "Sarı",
        word: "SANAL ASİSTAN",
        forbidden: ["SİRİ", "ALEXA", "KONUŞMA", "SES", "ROBOT"]
    },
    {
        category: "Sarı",
        word: "PROJE YÖNETİMİ",
        forbidden: ["PLANLAMA", "TAKIM", "GÖREV", "ORGANİZASYON", "HEDEF"]
    },
    {
        category: "Sarı",
        word: "AKILLI EV",
        forbidden: ["IOT", "CİHAZ", "OTOMASYON", "KONTROL", "SENSÖR"]
    },
    {
        category: "Sarı",
        word: "MÜLAKAT",
        forbidden: ["ADAY", "GÖRÜŞME", "DEĞERLENDİRME", "İŞ", "SORULAR"]
    },
    {
        category: "Sarı",
        word: "HACKATHON",
        forbidden: ["KOD", "PROJE", "YARIŞMA", "TAKIM", "FİKİR"]
    },
    {
        category: "Sarı",
        word: "BLUETOOTH",
        forbidden: ["KABLOSUZ", "BAĞLANTI", "TELEFON", "SES", "CİHAZ"]
    },
    {
        category: "Sarı",
        word: "ELON MUSK",
        forbidden: ["TESLA", "MARS", "X", "UZAY", "YAPAY ZEKA"]
    },
    {
        category: "Sarı",
        word: "VERİ ANALİZİ",
        forbidden: ["GRAFİK", "İSTATİSTİK", "TABLO", "EXCEL", "BİLGİ"]
    },
    {
        category: "Sarı",
        word: "OTONOM ARAÇ",
        forbidden: ["SÜRÜCÜSÜZ", "ARABA", "HAREKET", "GPS", "OTOMATİK"]
    },
    {
        category: "Sarı",
        word: "GDG ON CAMPUS",
        forbidden: ["CORE TEAM", "GOOGLE", "TECH TALKS", "ÜNİVERSİTE", "ETKİNLİK"]
    },
    {
        category: "Sarı",
        word: "YATIRIMCI",
        forbidden: ["PARA", "GİRİŞİM", "DESTEK", "FİNANS", "PROJE"]
    },
    {
        category: "Sarı",
        word: "İSTATİSTİK",
        forbidden: ["VERİ", "ORAN", "ANALİZ", "GRAFİK", "SPSS"]
    },
    {
        category: "Sarı",
        word: "GOOGLE",
        forbidden: ["ARAMA MOTORU", "İNTERNET", "CHROME", "DRİVE", "TRANSLATE"]
    },
    {
        category: "Sarı",
        word: "GOOGLE DRIVE",
        forbidden: ["DOSYA", "BULUT", "DEPOLAMA", "YEDEKLEME", "SENKRONİZASYON"]
    },
    {
        category: "Sarı",
        word: "3D YAZICI",
        forbidden: ["FİLAMENT", "MODEL", "BASMAK", "ÜRETİM", "PROTOTİP"]
    },
    {
        category: "Sarı",
        word: "SUNUM",
        forbidden: ["SLAYT", "KONUŞMA", "POWERPOİNT", "GÖSTERİM", "DİNLEYİCİ"]
    },
    {
        category: "Sarı",
        word: "HASHTAG",
        forbidden: ["ETİKET", "SOSYAL MEDYA", "INSTAGRAM", "KONU", "PAYLAŞIM"]
    },
    {
        category: "Sarı",
        word: "MONİTÖR",
        forbidden: ["ÇÖZÜNÜRLÜK", "EKRAN", "BİLGİSAYAR", "GÖRÜNTÜ", "YENİLEME"]
    },
    {
        category: "Sarı",
        word: "SPAM",
        forbidden: ["MAİL", "MESAJ", "İSTENMEYEN", "REKLAM", "GEREKSİZ"]
    },
    {
        category: "Sarı",
        word: "DISCORD",
        forbidden: ["SUNUCU", "KANAL", "VPN", "BOT", "OYUN"]
    },
    {
        category: "Sarı",
        word: "GOOGLE SHEET",
        forbidden: ["TABLO", "HÜCRE", "FORMÜL", "GRAFİK", "ÇALIŞMA SAYFASI"]
    },
    {
        category: "Sarı",
        word: "INFLUENCER",
        forbidden: ["SOSYAL", "TAKİPÇİ", "REKLAM", "INSTAGRAM", "POPÜLER"]
    },
    {
        category: "Sarı",
        word: "QR KOD",
        forbidden: ["KARE", "TARAMAK", "BARKOD", "LİNK", "OKUTMAK"]
    },
    {
        category: "Sarı",
        word: "KRİPTOGRAFİ",
        forbidden: ["KIRMAK", "GİZLİLİK", "GÜVENLİK", "KORUMA", "ŞİFRELEME"]
    },
    {
        category: "Sarı",
        word: "MEDIUM",
        forbidden: ["BLOG", "MAKALE", "YAZMAK", "OKUMAK", "İÇERİK"]
    },

    // YEŞİL KARTLAR - 25 kart
    {
        category: "Yeşil",
        word: "ROKET",
        forbidden: ["ASTRONOT", "UZAY", "NASA", "FIRLATMA", "FALCON"]
    },
    {
        category: "Yeşil",
        word: "KUMRU",
        forbidden: ["İZMİR", "SANDVİÇ", "SUCUK", "PEYNİR", "EKMEK"]
    },
    {
        category: "Yeşil",
        word: "MÜHENDİSLİK",
        forbidden: ["HESAP", "PROJE", "ÇİZİM", "TEKNİK", "FAKÜLTE"]
    },
    {
        category: "Yeşil",
        word: "KORDON",
        forbidden: ["SAHİL", "ÇİM", "DENİZ", "YÜRÜYÜŞ", "ALSANCAK"]
    },
    {
        category: "Yeşil",
        word: "ÇİĞDEM",
        forbidden: ["ÇEKİRDEK", "İZMİR", "ÇİTLEMEK", "YAZ", "ÇİM"]
    },
    {
        category: "Yeşil",
        word: "ÇAY",
        forbidden: ["TAVŞAN KANI", "KAHVE", "İÇMEK", "ŞEKER", "SICAK"]
    },
    {
        category: "Yeşil",
        word: "DÖNER",
        forbidden: ["ET", "EKMEK", "YEMEK", "DURÜM", "TAVUK"]
    },
    {
        category: "Yeşil",
        word: "İKTİSAT",
        forbidden: ["PARA", "EKONOMİ", "ÜLKE", "FİNANS", "PİYASA"]
    },
    {
        category: "Yeşil",
        word: "KARŞIYAKA",
        forbidden: ["ÇARŞI", "İZBAN", "DENİZ", "VAPUR", "35.5"]
    },
    {
        category: "Yeşil",
        word: "KAFE",
        forbidden: ["KAHVE", "ÇALIŞMAK", "SOHBET", "ÖĞRENCİ", "ÇAY"]
    },
    {
        category: "Yeşil",
        word: "METRO",
        forbidden: ["İZMİR", "HAT", "DURAK", "ULAŞIM", "BORNOVA"]
    },
    {
        category: "Yeşil",
        word: "KAHVE",
        forbidden: ["ENERJİ", "STARBUCKS", "SABAH", "SINAV", "UYKUSUZLUK"]
    },
    {
        category: "Yeşil",
        word: "BORNOVA",
        forbidden: ["FORUM", "EGE", "METRO", "ÜNİVERSİTE", "390"]
    },
    {
        category: "Yeşil",
        word: "ALAÇATI",
        forbidden: ["RÜZGAR", "TATİL", "ÇEŞME", "YAZ", "PLAJ"]
    },
    {
        category: "Yeşil",
        word: "SİNEMA",
        forbidden: ["FİLM", "İZLEMEK", "SALON", "PERDE", "PATLAMIŞ MISIR"]
    },
    {
        category: "Yeşil",
        word: "MATEMATİK",
        forbidden: ["SAYI", "PROBLEM", "ÇÖZMEK", "DENKLEM", "FORMÜL"]
    },
    {
        category: "Yeşil",
        word: "HAZIRLIK",
        forbidden: ["İNGİLİZCE", "SINIF", "DİL", "EĞİTİM", "DERS"]
    },
    {
        category: "Yeşil",
        word: "KOPYA",
        forbidden: ["SINAV", "KAĞIT", "YAKALANMAK", "VİZE", "GİZLİ"]
    },
    {
        category: "Yeşil",
        word: "KOKOREÇ",
        forbidden: ["GECE", "MİDYE", "IZGARA", "EKMEK", "İZMİR"]
    },
    {
        category: "Yeşil",
        word: "PİZZA",
        forbidden: ["İTALYAN", "YEMEK", "DİLİM", "DOMİNOS", "PEYNİR"]
    },
    {
        category: "Yeşil",
        word: "GEVREK",
        forbidden: ["SİMİT", "İZMİR", "SUSAM", "KAHVALTI", "ÇAY"]
    },
    {
        category: "Yeşil",
        word: "İZBAN",
        forbidden: ["TREN", "RAY", "BANLIYÖ", "ULAŞIM", "İZMİR"]
    },
    {
        category: "Yeşil",
        word: "ÇAN EĞRİSİ",
        forbidden: ["NOT", "ORTALAMA", "SINAV", "ÜNİVERSİTE", "SİSTEM"]
    },
    {
        category: "Yeşil",
        word: "BOYOZ",
        forbidden: ["İZMİR", "KAHVALTI", "ÇAY", "SİMİT", "HAMUR"]
    },
    {
        category: "Yeşil",
        word: "MİDYE",
        forbidden: ["DOLMA", "LİMON", "DENİZ", "GECE", "SATICI"]
    }
];

// Oyun durumu
const gameState = {
    isPlaying: false,
    isPaused: false,
    currentScreen: 'main-menu',
    currentCardIndex: 0,
    shuffledCards: [],
    score: 0,
    timeLeft: 60,
    round: 1,
    timer: null,
    correctCount: 0,
    skippedCount: 0
};

// DOM elementleri
const gameElements = {
    screens: {
        mainMenu: document.getElementById('mainMenu'),
        gameScreen: document.getElementById('gameScreen'),
        rulesScreen: document.getElementById('rulesScreen'),
        gameOverScreen: document.getElementById('gameOverScreen')
    },
    cardCategory: document.getElementById('cardCategory'),
    cardWord: document.getElementById('cardWord'),
    forbiddenWords: document.getElementById('forbiddenWords'),
    currentScore: document.getElementById('currentScore'),
    timeLeft: document.getElementById('timeLeft'),
    currentRound: document.getElementById('currentRound'),
    finalScore: document.getElementById('finalScore'),
    correctCount: document.getElementById('correctCount'),
    skippedCount: document.getElementById('skippedCount')
};

// Kategori rengini belirleme
function getCategoryClass(category) {
    switch(category) {
        case 'Mavi':
            return 'tech';
        case 'Sarı':
            return 'innovation';
        case 'Yeşil':
            return 'life';
        case 'Kırmızı':
            return 'danger';
        default:
            return 'tech';
    }
}

// Kartları karıştırma
function shuffleCards() {
    gameState.shuffledCards = [...tabuCards].sort(() => Math.random() - 0.5);
    gameState.currentCardIndex = 0;
}

// Oyun ekranını gösterme
function showScreen(screenName) {
    Object.values(gameElements.screens).forEach(screen => {
        screen.classList.remove('active');
    });
    gameElements.screens[screenName].classList.add('active');
    gameState.currentScreen = screenName;
}


// Timer başlatma
function startTimer() {
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        gameElements.timeLeft.textContent = gameState.timeLeft;
        
        // Son 10 saniye uyarısı
        if (gameState.timeLeft <= 10) {
            gameElements.timeLeft.classList.add('warning');
        } else {
            gameElements.timeLeft.classList.remove('warning');
        }
        
        if (gameState.timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// Timer durdurma
function stopTimer() {
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
}

// Oyun ekranını güncelleme
function updateGameDisplay() {
    const currentCard = gameState.shuffledCards[gameState.currentCardIndex];
    
    // Kategori rengini belirle
    const categoryClass = getCategoryClass(currentCard.category);
    
    // Kartın kendisine renk sınıfı ekle
    const gameCard = document.getElementById('gameCard');
    gameCard.className = `game-card ${categoryClass}`;
    
    gameElements.cardCategory.textContent = currentCard.category;
    gameElements.cardCategory.className = `card-category ${categoryClass}`;
    gameElements.cardWord.textContent = currentCard.word;
    gameElements.forbiddenWords.innerHTML = '';
    
    currentCard.forbidden.forEach(word => {
        const span = document.createElement('span');
        span.className = 'forbidden-word';
        span.textContent = word;
        gameElements.forbiddenWords.appendChild(span);
    });
    
    gameElements.currentScore.textContent = gameState.score;
    gameElements.timeLeft.textContent = gameState.timeLeft;
    gameElements.currentRound.textContent = gameState.round;
    
    // Kart animasyonu
    gameCard.classList.add('flip-in');
    setTimeout(() => {
        gameCard.classList.remove('flip-in');
    }, 500);
}


// Sonraki kart
function nextCard() {
    gameState.currentCardIndex++;
    
    if (gameState.currentCardIndex >= gameState.shuffledCards.length) {
        // Kartlar bitti, yeni round
        gameState.round++;
        shuffleCards();
    }
    
    updateGameDisplay();
}

// Oyunu duraklatma/devam ettirme
function togglePause() {
    if (!gameState.isPlaying) return;
    
    if (gameState.isPaused) {
        // Devam ettir
        gameState.isPaused = false;
        startTimer();
        // Şimdi devam ediyor, o yüzden "Duraklat" göster
        document.querySelector('[onclick="pauseGame()"]').textContent = '⏸ Duraklat';
    } else {
        // Duraklat
        gameState.isPaused = true;
        stopTimer();
        // Şimdi durdu, o yüzden "Devam Et" göster
        document.querySelector('[onclick="pauseGame()"]').textContent = '▶ Devam Et';
    }
}

// Oyunu bitirme
function endGame() {
    gameState.isPlaying = false;
    gameState.isPaused = false;
    stopTimer();
    
    gameElements.finalScore.textContent = gameState.score;
    gameElements.correctCount.textContent = gameState.correctCount;
    gameElements.skippedCount.textContent = gameState.skippedCount;
    
    showScreen('gameOverScreen');
}

// Global fonksiyonlar (HTML'den çağrılabilir)
function startGame() {
    gameState.isPlaying = true;
    gameState.isPaused = false;
    gameState.score = 0;
    gameState.timeLeft = 60;
    gameState.round = 1;
    gameState.correctCount = 0;
    gameState.skippedCount = 0;
    
    shuffleCards();
    showScreen('gameScreen');
    updateGameDisplay();
    startTimer();
}

function showRules() {
    showScreen('rulesScreen');
}

function backToMenu() {
    stopTimer();
    gameState.isPlaying = false;
    gameState.isPaused = false;
    showScreen('mainMenu');
}

function correctAnswer() {
    if (!gameState.isPlaying || gameState.isPaused) return;
    
    gameState.score += 10;
    gameState.correctCount++;
    nextCard();
}

function skipCard() {
    if (!gameState.isPlaying || gameState.isPaused) return;
    
    gameState.skippedCount++;
    nextCard();
}

function pauseGame() {
    togglePause();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    
    // Klavye kısayolları
    document.addEventListener('keydown', (e) => {
        if (!gameState.isPlaying || gameState.isPaused) return;
        
        switch(e.key) {
        case 'ArrowRight':
        case 'Enter':
                e.preventDefault();
            correctAnswer();
            break;
        case 'ArrowLeft':
        case ' ':
                e.preventDefault();
            skipCard();
            break;
            case 'p':
            case 'P':
                e.preventDefault();
                togglePause();
            break;
    }
});

    // Touch gestures (mobil için)
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        if (!gameState.isPlaying || gameState.isPaused) return;
        
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // Minimum swipe distance
        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                // Sağa kaydırma - Doğru
                correctAnswer();
            } else {
                // Sola kaydırma - Geç
                skipCard();
            }
        }
    });
});