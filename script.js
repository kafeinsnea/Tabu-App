// Tabu Kartları Veri Seti
const tabuCards = [
    // Teknoloji Kategorisi
    {
        category: "Teknoloji",
        word: "VERİ",
        forbidden: ["Dataset", "Kayıt", "Analiz", "Tablo", "Bilgi"]
    },
    {
        category: "Teknoloji",
        word: "ALGORITMA",
        forbidden: ["Kod", "Program", "Hesaplama", "Formül", "Mantık"]
    },
    {
        category: "Teknoloji",
        word: "YAPAY ZEKA",
        forbidden: ["AI", "Robot", "Makine", "Öğrenme", "Akıllı"]
    },
    {
        category: "Teknoloji",
        word: "BULUT",
        forbidden: ["Cloud", "Sunucu", "Depolama", "İnternet", "Uzak"]
    },
    {
        category: "Teknoloji",
        word: "BLOCKCHAIN",
        forbidden: ["Bitcoin", "Kripto", "Zincir", "Blok", "Güvenlik"]
    },
    {
        category: "Teknoloji",
        word: "API",
        forbidden: ["Arayüz", "Bağlantı", "Servis", "Entegrasyon", "Protokol"]
    },
    {
        category: "Teknoloji",
        word: "FRAMEWORK",
        forbidden: ["Çerçeve", "Kütüphane", "Yapı", "Geliştirme", "Araç"]
    },
    {
        category: "Teknologi",
        word: "DATABASE",
        forbidden: ["Veritabanı", "SQL", "Kayıt", "Tablo", "Depolama"]
    },
    
    // Web Geliştirme Kategorisi
    {
        category: "Web Geliştirme",
        word: "REACT",
        forbidden: ["Facebook", "Component", "JSX", "Hook", "State"]
    },
    {
        category: "Web Geliştirme",
        word: "JAVASCRIPT",
        forbidden: ["JS", "Programlama", "Web", "Tarayıcı", "Script"]
    },
    {
        category: "Web Geliştirme",
        word: "HTML",
        forbidden: ["Markup", "Tag", "Web", "Sayfa", "Element"]
    },
    {
        category: "Web Geliştirme",
        word: "CSS",
        forbidden: ["Stil", "Tasarım", "Renk", "Layout", "Görünüm"]
    },
    {
        category: "Web Geliştirme",
        word: "NODEJS",
        forbidden: ["Server", "Backend", "JavaScript", "NPM", "Runtime"]
    },
    {
        category: "Web Geliştirme",
        word: "RESPONSIVE",
        forbidden: ["Mobil", "Uyumlu", "Ekran", "Boyut", "Adaptive"]
    },
    {
        category: "Web Geliştirme",
        word: "BOOTSTRAP",
        forbidden: ["CSS", "Framework", "Grid", "Component", "Twitter"]
    },
    {
        category: "Web Geliştirme",
        word: "WEBPACK",
        forbidden: ["Bundle", "Module", "Build", "Paket", "Derleyici"]
    },
    
    // Programlama Kategorisi
    {
        category: "Programlama",
        word: "PYTHON",
        forbidden: ["Yılan", "Django", "Flask", "Pandas", "Script"]
    },
    {
        category: "Programlama",
        word: "JAVA",
        forbidden: ["Oracle", "Spring", "JVM", "Class", "Object"]
    },
    {
        category: "Programlama",
        word: "GIT",
        forbidden: ["Version", "Commit", "Repository", "GitHub", "Branch"]
    },
    {
        category: "Programlama",
        word: "DOCKER",
        forbidden: ["Container", "Image", "Virtualization", "Deploy", "Balina"]
    },
    {
        category: "Programlama",
        word: "KUBERNETES",
        foreign: ["K8s", "Orchestration", "Pod", "Cluster", "Container"]
    },
    {
        category: "Programlama",
        word: "MICROSERVICE",
        forbidden: ["Servis", "Mimarı", "Distributed", "API", "Independent"]
    },
    {
        category: "Programlama",
        word: "AGILE",
        forbidden: ["Scrum", "Sprint", "Metodoloji", "Çevik", "Iterative"]
    },
    {
        category: "Programlama",
        word: "DEVOPS",
        forbidden: ["CI/CD", "Deployment", "Automation", "Pipeline", "Infrastructure"]
    },
    
    // Veri Bilimi Kategorisi
    {
        category: "Veri Bilimi",
        word: "MACHINE LEARNING",
        forbidden: ["ML", "Öğrenme", "Model", "Algoritma", "Prediction"]
    },
    {
        category: "Veri Bilimi",
        word: "BIG DATA",
        forbidden: ["Büyük", "Veri", "Hadoop", "Analytics", "Volume"]
    },
    {
        category: "Veri Bilimi",
        word: "PANDAS",
        forbidden: ["Python", "DataFrame", "Analiz", "Library", "Data"]
    },
    {
        category: "Veri Bilimi",
        word: "TENSORFLOW",
        forbidden: ["Google", "Neural", "Deep", "Learning", "AI"]
    },
    {
        category: "Veri Bilimi",
        word: "JUPYTER",
        forbidden: ["Notebook", "Python", "Interactive", "Cell", "Code"]
    },
    {
        category: "Veri Bilimi",
        word: "VISUALIZATION",
        forbidden: ["Görselleştirme", "Chart", "Graph", "Plot", "Dashboard"]
    },
    {
        category: "Veri Bilimi",
        word: "STATISTICS",
        forbidden: ["İstatistik", "Mean", "Average", "Probability", "Analysis"]
    },
    {
        category: "Veri Bilimi",
        word: "REGRESSION",
        forbidden: ["Linear", "Predict", "Model", "Correlation", "Trend"]
    },
    
    // Mobil Geliştirme Kategorisi
    {
        category: "Mobil",
        word: "ANDROID",
        forbidden: ["Google", "Java", "Kotlin", "Mobile", "App"]
    },
    {
        category: "Mobil",
        word: "iOS",
        forbidden: ["Apple", "Swift", "iPhone", "Xcode", "Mobile"]
    },
    {
        category: "Mobil",
        word: "FLUTTER",
        forbidden: ["Dart", "Google", "Cross-platform", "Widget", "Mobile"]
    },
    {
        category: "Mobil",
        word: "REACT NATIVE",
        forbidden: ["Facebook", "JavaScript", "Cross-platform", "Mobile", "Native"]
    },
    {
        category: "Mobil",
        word: "SWIFT",
        forbidden: ["Apple", "iOS", "Programming", "Language", "Xcode"]
    },
    {
        category: "Mobil",
        word: "KOTLIN",
        forbidden: ["JetBrains", "Android", "Java", "Programming", "Language"]
    },
    
    // Genel Teknoloji Terimleri
    {
        category: "Genel",
        word: "OPEN SOURCE",
        forbidden: ["Açık", "Kaynak", "Free", "GitHub", "Community"]
    },
    {
        category: "Genel",
        word: "HACKATHON",
        forbidden: ["Yarışma", "Kod", "Geliştirici", "Etkinlik", "24 saat"]
    },
    {
        category: "Genel",
        word: "STARTUP",
        forbidden: ["Girişim", "Yeni", "Şirket", "İnovasyon", "Teknoloji"]
    },
    {
        category: "Genel",
        word: "INNOVATION",
        forbidden: ["İnovasyon", "Yenilik", "Yaratıcılık", "Buluş", "Teknoloji"]
    },
    {
        category: "Genel",
        word: "DEBUGGING",
        forbidden: ["Hata", "Bug", "Fix", "Çözüm", "Test"]
    },
    {
        category: "Genel",
        word: "PROTOTYPE",
        forbidden: ["Prototip", "İlk", "Model", "Test", "Demo"]
    }
];

// Oyun Durumu
let gameState = {
    currentCardIndex: 0,
    score: 0,
    timeLeft: 60,
    round: 1,
    correctAnswers: 0,
    skippedCards: 0,
    isGameActive: false,
    timer: null,
    shuffledCards: []
};

// DOM Elementleri
const screens = {
    mainMenu: document.getElementById('mainMenu'),
    gameScreen: document.getElementById('gameScreen'),
    rulesScreen: document.getElementById('rulesScreen'),
    gameOverScreen: document.getElementById('gameOverScreen')
};

const gameElements = {
    cardCategory: document.getElementById('cardCategory'),
    cardWord: document.getElementById('cardWord'),
    forbiddenWords: document.getElementById('forbiddenWords'),
    currentScore: document.getElementById('currentScore'),
    timeLeft: document.getElementById('timeLeft'),
    currentRound: document.getElementById('currentRound'),
    timer: document.querySelector('.timer')
};

const gameOverElements = {
    finalScore: document.getElementById('finalScore'),
    correctCount: document.getElementById('correctCount'),
    skippedCount: document.getElementById('skippedCount')
};

// Yardımcı Fonksiyonlar
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function updateGameDisplay() {
    const currentCard = gameState.shuffledCards[gameState.currentCardIndex];
    
    gameElements.cardCategory.textContent = currentCard.category;
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
    document.getElementById('gameCard').classList.add('flip-in');
    setTimeout(() => {
        document.getElementById('gameCard').classList.remove('flip-in');
    }, 500);
}

function startTimer() {
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        gameElements.timeLeft.textContent = gameState.timeLeft;
        
        // Son 10 saniyede uyarı animasyonu
        if (gameState.timeLeft <= 10) {
            gameElements.timer.classList.add('warning');
        }
        
        if (gameState.timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function stopTimer() {
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
    gameElements.timer.classList.remove('warning');
}

function nextCard() {
    gameState.currentCardIndex++;
    
    // Tüm kartlar bittiyse yeni bir karışık set oluştur
    if (gameState.currentCardIndex >= gameState.shuffledCards.length) {
        gameState.shuffledCards = shuffleArray(tabuCards);
        gameState.currentCardIndex = 0;
        gameState.round++;
    }
    
    updateGameDisplay();
}

// Ana Oyun Fonksiyonları
function startGame() {
    // Oyun durumunu sıfırla
    gameState = {
        currentCardIndex: 0,
        score: 0,
        timeLeft: 60,
        round: 1,
        correctAnswers: 0,
        skippedCards: 0,
        isGameActive: true,
        timer: null,
        shuffledCards: shuffleArray(tabuCards)
    };
    
    showScreen('gameScreen');
    updateGameDisplay();
    startTimer();
}

function correctAnswer() {
    if (!gameState.isGameActive) return;
    
    gameState.score += 10;
    gameState.correctAnswers++;
    nextCard();
    
    // Başarı efekti
    const card = document.getElementById('gameCard');
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 0 20px rgba(39, 174, 96, 0.5)';
    setTimeout(() => {
        card.style.transform = '';
        card.style.boxShadow = '';
    }, 200);
}

function skipCard() {
    if (!gameState.isGameActive) return;
    
    gameState.skippedCards++;
    nextCard();
    
    // Geçme efekti
    const card = document.getElementById('gameCard');
    card.style.transform = 'translateX(-20px)';
    setTimeout(() => {
        card.style.transform = '';
    }, 200);
}

function pauseGame() {
    if (!gameState.isGameActive) return;
    
    if (gameState.timer) {
        stopTimer();
        alert('Oyun duraklatıldı. Devam etmek için Tamam\'a basın.');
        startTimer();
    }
}

function endGame() {
    gameState.isGameActive = false;
    stopTimer();
    
    // Oyun sonu verilerini güncelle
    gameOverElements.finalScore.textContent = gameState.score;
    gameOverElements.correctCount.textContent = gameState.correctAnswers;
    gameOverElements.skippedCount.textContent = gameState.skippedCards;
    
    showScreen('gameOverScreen');
    
    // Confetti efekti (basit)
    if (gameState.score > 50) {
        document.body.style.animation = 'confetti 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
    }
}

function showRules() {
    showScreen('rulesScreen');
}

function backToMenu() {
    if (gameState.timer) {
        stopTimer();
    }
    gameState.isGameActive = false;
    showScreen('mainMenu');
}

// Klavye Kısayolları
document.addEventListener('keydown', (event) => {
    if (!gameState.isGameActive) return;
    
    switch(event.key) {
        case 'ArrowRight':
        case 'Enter':
            correctAnswer();
            break;
        case 'ArrowLeft':
        case ' ':
            event.preventDefault();
            skipCard();
            break;
        case 'Escape':
            pauseGame();
            break;
    }
});

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    showScreen('mainMenu');
    
    // Touch gestures için (mobil)
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        if (!gameState.isGameActive) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Yatay kaydırma
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                // Sola kaydırma - Geç
                skipCard();
            } else {
                // Sağa kaydırma - Doğru
                correctAnswer();
            }
        }
    });
});

// Performance monitoring (opsiyonel)
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`Sayfa yüklenme süresi: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
        }, 0);
    });
}
