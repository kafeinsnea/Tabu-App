// Tabu Kartları Veri Seti - GDG Edition (Kartlardan ayıklanmış gerçek kelimeler)
const tabuCards = [
    // MAVI KARTLAR - Kartlardaki mavi arkaplanda yazılı ana kelimeler
    {
        category: "Mavi",
        word: "ALGORİTMA",
        forbidden: ["İŞLEM", "ADIM", "MANTİK", "PROBLEM", "ÇÖZÜM"]
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
        forbidden: ["İNTERNET", "KABLOSUZ", "MODEM", "KABLOSUZ", "BAĞLANTI"]
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
        forbidden: ["GÖRSEL", "Uİ", "ESTETİK", "PHOTOSHOP", "RENK"]
    },
    {
        category: "Mavi",
        word: "GİRİŞİMCİLİK",
        forbidden: ["ŞİRKET", "KURMAK", "FİKİR", "RİSK", "YATIRIM"]
    },

    // KIRMIZI KARTLAR - Kartlardaki kırmızı arkaplanda yazılı ana kelimeler
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

    // SARI KARTLAR - Kartlardaki sarı arkaplanda yazılı ana kelimeler
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

    // YEŞİL KARTLAR - Kartlardaki yeşil arkaplanda yazılı ana kelimeler
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
    },
    {
        category: "Mavi",
        word: "OYUN",
        forbidden: ["KONSOL", "BİLGİSAYAR", "EĞLENCE", "MOBİL", "VİDEO"]
    },
    {
        category: "Mavi",
        word: "YAZILIM",
        forbidden: ["KOD", "PROGRAM", "GELİŞTİRME", "BİLGİSAYAR", "UYGULAMA"]
    },
    {
        category: "Mavi",
        word: "SİBER GÜVENLİK",
        forbidden: ["HACK", "ŞİFRE", "KORUMA", "VİRÜS", "SIZMA"]
    },
    {
        category: "Mavi",
        word: "ALGORİTMA",
        forbidden: ["İŞLEM", "ADIM", "MANTIK", "PROBLEM", "ÇÖZÜM"]
    },
    {
        category: "Mavi",
        word: "BLOCKCHAIN",
        forbidden: ["KRİPTO", "BİTCOİN", "ZİNCİR", "DİJİTAL", "VERİ"]
    },
    {
        category: "Mavi",
        word: "BULUT",
        forbidden: ["DEPOLAMA", "İNTERNET", "ONLİNE", "DOSYA", "YEDEKLEME"]
    },
    {
        category: "Mavi",
        word: "NETWORK",
        forbidden: ["BAĞLANTI", "İLETİŞİM", "ETKİNLİK", "TANIŞMA", "İŞ AĞI"]
    },
    {
        category: "Mavi",
        word: "CV",
        forbidden: ["ÖZGEÇMİŞ", "İŞ", "DENEYİM", "BAŞVURU", "EĞİTİM"]
    },
    {
        category: "Mavi",
        word: "WI-FI",
        forbidden: ["İNTERNET", "KABLOSUZ", "MODEM", "BAĞLANTI", "AĞ"]
    },
    {
        category: "Mavi",
        word: "MENTÖRLÜK",
        forbidden: ["REHBER", "ÖĞRETMEK", "DENEYİM", "ÖĞRENCİ", "DESTEK"]
    },
    {
        category: "Mavi",
        word: "MOBİL",
        forbidden: ["TELEFON", "UYGULAMA", "TAŞINABİLİR", "ANDROİD", "IOS"]
    },
    {
        category: "Mavi",
        word: "TARAYICI",
        forbidden: ["CHROME", "GOOGLE", "OPERA", "EDGE", "İNTERNET"]
    },
    {
        category: "Mavi",
        word: "E-TİCARET",
        forbidden: ["ONLİNE", "SATIŞ", "WEB", "ALIŞVERİŞ", "KARGO"]
    },
    {
        category: "Mavi",
        word: "GOOGLE DRIVE",
        forbidden: ["DOSYA", "BULUT", "DEPOLAMA", "YEDEKLEME", "SENKRONİZASYON"]
    },
    {
        category: "Mavi",
        word: "3D YAZICI",
        forbidden: ["FİLAMENT", "MODEL", "BASMAK", "ÜRETİM", "PROTOTİP"]
    },

    // SARI KARTLAR - Kartlardaki sarı arkaplanda yazılı ana kelimeler
    {
        category: "Sarı",
        word: "TEKNOLOJİ",
        forbidden: ["İLERLEME", "YENİLİK", "CİHAZ", "MODERN", "DİJİTAL"]
    },
    {
        category: "Sarı",
        word: "LİNKEDİN",
        forbidden: ["İŞ", "PROFİL", "CV", "BAĞLANTI", "KARİYER"]
    },
    {
        category: "Sarı",
        word: "PROJE YÖNETİMİ",
        forbidden: ["PLANLAMA", "TAKIM", "GÖREV", "ORGANİZASYON", "HEDEF"]
    },
    {
        category: "Sarı",
        word: "OTONOM ARAÇ",
        forbidden: ["SÜRÜCÜSÜZ", "ARABA", "HAREKET", "GPS", "OTOMATİK"]
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
        word: "HACKATHON",
        forbidden: ["KOD", "PROJE", "YARIŞMA", "TAKIM", "FİKİR"]
    },
    {
        category: "Sarı",
        word: "VERİ ANALİZİ",
        forbidden: ["GRAFİK", "İSTATİSTİK", "TABLO", "EXCEL", "BİLGİ"]
    },
    {
        category: "Sarı",
        word: "SPAM",
        forbidden: ["MAİL", "MESAJ", "İSTENMEYEN", "REKLAM", "GEREKSİZ"]
    },
    {
        category: "Sarı",
        word: "HASHTAG",
        forbidden: ["ETİKET", "SOSYAL MEDYA", "INSTAGRAM", "KONU", "PAYLAŞIM"]
    },
    {
        category: "Sarı",
        word: "AKILLI EV",
        forbidden: ["IOT", "CİHAZ", "OTOMASYON", "KONTROL", "SENSÖR"]
    },
    {
        category: "Sarı",
        word: "SUNUM",
        forbidden: ["SLAYT", "KONUŞMA", "POWERPOİNT", "GÖSTERİM", "DİNLEYİCİ"]
    },
    {
        category: "Sarı",
        word: "INFLUENCER",
        forbidden: ["SOSYAL", "TAKİPÇİ", "REKLAM", "INSTAGRAM", "POPÜLER"]
    },
    {
        category: "Sarı",
        word: "MÜLAKAT",
        forbidden: ["ADAY", "GÖRÜŞME", "DEĞERLENDİRME", "İŞ", "SORULAR"]
    },
    {
        category: "Sarı",
        word: "MONİTÖR",
        forbidden: ["ÇÖZÜNÜRLÜK", "EKRAN", "BİLGİSAYAR", "GÖRÜNTÜ", "YENİLEME"]
    },
    {
        category: "Sarı",
        word: "GOOGLE SHEET",
        forbidden: ["TABLO", "HÜCRE", "FORMÜL", "GRAFİK", "ÇALIŞMA SAYFASI"]
    },
    {
        category: "Sarı",
        word: "BLUETOOTH",
        forbidden: ["KABLOSUZ", "BAĞLANTI", "TELEFON", "SES", "CİHAZ"]
    },
    {
        category: "Sarı",
        word: "YATIRIMCI",
        forbidden: ["PARA", "GİRİŞİM", "DESTEK", "FİNANS", "PROJE"]
    },
    {
        category: "Sarı",
        word: "SANAL ASİSTAN",
        forbidden: ["SİRİ", "ALEXA", "KONUŞMA", "SES", "ROBOT"]
    },
    {
        category: "Sarı",
        word: "GDG ON CAMPUS",
        forbidden: ["CORE TEAM", "GOOGLE", "TECH TALKS", "ÜNİVERSİTE", "ETKİNLİK"]
    },
    {
        category: "Sarı",
        word: "DİSCORD",
        forbidden: ["SUNUCU", "KANAL", "VPN", "BOT", "OYUN"]
    },
    {
        category: "Sarı",
        word: "GOOGLE",
        forbidden: ["ARAMA MOTORU", "İNTERNET", "CHROME", "DRİVE", "TRANSLATE"]
    },
    {
        category: "Sarı",
        word: "İSTATİSTİK",
        forbidden: ["VERİ", "ORAN", "ANALİZ", "GRAFİK", "SPSS"]
    },
    {
        category: "Sarı",
        word: "GOOGLE SHEET",
        forbidden: ["TABLO", "HÜCRE", "FORMÜL", "GRAFİK", "ÇALIŞMA SAYFASI"]
    },
    {
        category: "Sarı",
        word: "BLOCKCHAIN",
        forbidden: ["KRİPTO", "BİTCOİN", "ZİNCİR", "DİJİTAL", "VERİ"]
    },

    // YEŞİL KARTLAR - Kartlardaki yeşil arkaplanda yazılı ana kelimeler
    {
        category: "Yeşil",
        word: "ROKET",
        forbidden: ["ASTRONOT", "UZAY", "NASA", "FIRLATMA", "FALCON"]
    },
    {
        category: "Yeşil",
        word: "KAHVE",
        forbidden: ["ENERJİ", "STARBUCKS", "SABAH", "SINAV", "UYKUSUZLUK"]
    },
    {
        category: "Yeşil",
        word: "İZBAN",
        forbidden: ["TREN", "RAY", "BANLİYÖ", "ULAŞIM", "İZMİR"]
    },
    {
        category: "Yeşil",
        word: "KORDON",
        forbidden: ["SAHİL", "ÇİM", "DENİZ", "YÜRÜYÜŞ", "ALSANCAK"]
    },
    {
        category: "Yeşil",
        word: "KARŞIYAKA",
        forbidden: ["ÇARŞI", "İZBAN", "DENİZ", "VAPUR", "35.5"]
    },
    {
        category: "Yeşil",
        word: "MİDYE",
        forbidden: ["DOLMA", "LİMON", "DENİZ", "GECE", "SOKICI"]
    },
    {
        category: "Yeşil",
        word: "KONAK",
        forbidden: ["SAAT KULESİ", "MEYDAN", "İZMİR", "MERKEZ", "TRAMVAY"]
    },
    {
        category: "Yeşil",
        word: "ÇAN EĞRİSİ",
        forbidden: ["NOT", "ORTALAMA", "SINAV", "ÜNİVERSİTE", "SİSTEM"]
    },
    {
        category: "Yeşil",
        word: "KOPYA",
        forbidden: ["SINAV", "KAĞIT", "YAKALANMAK", "VİZE", "GİZLİ"]
    },
    {
        category: "Yeşil",
        word: "METRO",
        forbidden: ["İZMİR", "HAT", "DURAK", "ULAŞIM", "BORNOVA"]
    },
    {
        category: "Yeşil",
        word: "İKTİSAT",
        forbidden: ["PARA", "EKONOMİ", "ÜLKE", "FİNANS", "PİYASA"]
    },
    {
        category: "Yeşil",
        word: "KAFE",
        forbidden: ["KAHVE", "ÇALIŞMAK", "SOHBET", "ÖĞRENCİ", "ÇAY"]
    },
    {
        category: "Yeşil",
        word: "MATEMATİK",
        forbidden: ["SAYI", "PROBLEM", "ÇÖZMEK", "DENKLEM", "FORMÜL"]
    },
    {
        category: "Yeşil",
        word: "ALAÇATI",
        forbidden: ["RÜZGAR", "TATİL", "ÇEŞME", "YAZ", "PLAJ"]
    },
    {
        category: "Yeşil",
        word: "BOYOZ",
        forbidden: ["İZMİR", "KAHVALTI", "ÇAY", "SİMİT", "HAMUR"]
    },
    {
        category: "Yeşil",
        word: "DÖNER",
        forbidden: ["ET", "EKMEK", "YEMEK", "DURUM", "TAVUK"]
    },
    {
        category: "Yeşil",
        word: "HAZIRLIK",
        forbidden: ["İNGİLİZCE", "SINIF", "DİL", "EĞİTİM", "DERS"]
    },
    {
        category: "Yeşil",
        word: "MÜHENDİSLİK",
        forbidden: ["HESAP", "PROJE", "ÇİZİM", "TEKNİK", "FAKÜLTE"]
    },
    {
        category: "Yeşil",
        word: "BORNOVA",
        forbidden: ["FORUM", "EGE", "METRO", "ÜNİVERSİTE", "390"]
    },
    {
        category: "Yeşil",
        word: "ÇAY",
        forbidden: ["TAVŞAN KANI", "KAHVE", "İÇMEK", "ŞEKER", "SICAK"]
    },
    {
        category: "Yeşil",
        word: "KOKOREÇ",
        forbidden: ["GECE", "MİDYE", "IZGARA", "EKMEK", "İZMİR"]
    },
    {
        category: "Yeşil",
        word: "SİNEMA",
        forbidden: ["FİLM", "İZLEMEK", "SALON", "PERDE", "PATLAMIŞ MISIR"]
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
        word: "KUMRU",
        forbidden: ["İZMİR", "SANDVİÇ", "SUCUK", "PEYNİR", "EKMEK"]
    },

    // KIRMIZI KARTLAR - Kartlardaki kırmızı arkaplanda yazılı ana kelimeler
    {
        category: "Kırmızı",
        word: "GOOGLE",
        forbidden: ["ARAMA", "İNTERNET", "CHROME", "ANDROID", "YOUTUBE"]
    },
    {
        category: "Kırmızı",
        word: "FACEBOOK",
        forbidden: ["SOSYAL MEDYA", "META", "INSTAGRAM", "WHATSAPP", "MARK"]
    },
    {
        category: "Kırmızı",
        word: "APPLE",
        forbidden: ["İPHONE", "MAC", "İOS", "STEVE JOBS", "ELMA"]
    },
    {
        category: "Kırmızı",
        word: "MICROSOFT",
        forbidden: ["WINDOWS", "OFFICE", "EXCEL", "WORD", "BİLL GATES"]
    },
    {
        category: "Kırmızı",
        word: "AMAZON",
        forbidden: ["E-TİCARET", "BEZOS", "KARGO", "AWS", "ALIŞVERİŞ"]
    },
    {
        category: "Kırmızı",
        word: "TESLA",
        forbidden: ["ELEKTRİKLİ ARAÇ", "ELON MUSK", "SPACEX", "MARS", "OTOMOBİL"]
    },
    {
        category: "Kırmızı",
        word: "NETFLIX",
        forbidden: ["DİZİ", "FİLM", "STREAMING", "İZLEMEK", "ABONELIK"]
    },
    {
        category: "Kırmızı",
        word: "SPOTIFY",
        forbidden: ["MÜZİK", "ÇALMA LİSTESİ", "PODCAST", "SANATÇI", "ŞARKI"]
    },
    {
        category: "Kırmızı",
        word: "UBER",
        forbidden: ["TAKSİ", "SÜRÜCÜ", "ULAŞIM", "ARAÇ", "ÇAĞIRMAK"]
    },
    {
        category: "Kırmızı",
        word: "AIRBNB",
        forbidden: ["KONAKLAMA", "EV", "TATİL", "KİRALAMAK", "SEYAHAT"]
    },
    {
        category: "Kırmızı",
        word: "ZOOM",
        forbidden: ["VİDEO KONFERANS", "TOPLANTI", "UZAKTAN", "GÖRÜŞME", "PANDEMİ"]
    },
    {
        category: "Kırmızı",
        word: "TIKTOK",
        forbidden: ["VİDEO", "DANS", "VİRAL", "GENÇLİK", "SOSYAL MEDYA"]
    },
    {
        category: "Kırmızı",
        word: "LINKEDIN",
        forbidden: ["İŞ", "PROFESYONELLİK", "CV", "NETWORK", "KARİYER"]
    },
    {
        category: "Kırmızı",
        word: "TWITTER",
        forbidden: ["TWEET", "SOSYAL MEDYA", "HABER", "TAKIP", "HASHTAG"]
    },
    {
        category: "Kırmızı",
        word: "YOUTUBE",
        forbidden: ["VİDEO", "KANAL", "İZLEMEK", "YOUTUBER", "ABONE"]
    },
    {
        category: "Kırmızı",
        word: "WHATSAPP",
        forbidden: ["MESAJLAŞMA", "GRUP", "DURUM", "ARAMA", "FACEBOOK"]
    },
    {
        category: "Kırmızı",
        word: "INSTAGRAM",
        forbidden: ["FOTOĞRAF", "STORY", "TAKIP", "BEĞENİ", "REEL"]
    },
    {
        category: "Kırmızı",
        word: "SNAPCHAT",
        forbidden: ["FOTOĞRAF", "KAYBOLMA", "FİLTRE", "ARKADAŞ", "SNAP"]
    },
    {
        category: "Kırmızı",
        word: "PINTEREST",
        forbidden: ["FOTOĞRAF", "PANO", "İLHAM", "TASARIM", "KAYDETMEK"]
    },
    {
        category: "Kırmızı",
        word: "REDDIT",
        forbidden: ["FORUM", "UPVOTE", "SUBREDDIT", "YORUM", "TARTIŞMA"]
    },
    {
        category: "Kırmızı",
        word: "DISCORD",
        forbidden: ["SOHBET", "OYUN", "SUNUCU", "SES", "KANAL"]
    },
    {
        category: "Kırmızı",
        word: "SLACK",
        forbidden: ["İŞ", "TAKIM", "MESAJLAŞMA", "KANAL", "ENTEGRASYONLAR"]
    },
    {
        category: "Kırmızı",
        word: "GITHUB",
        forbidden: ["KOD", "REPOSITORY", "VERSİYON KONTROL", "AÇIK KAYNAK", "GELİŞTİRİCİ"]
    },
    {
        category: "Kırmızı",
        word: "STACKOVERFLOW",
        forbidden: ["PROGRAMLAMA", "SORU", "CEVAP", "HATA", "GELİŞTİRİCİ"]
    },
    {
        category: "Kırmızı",
        word: "MEDIUM",
        forbidden: ["BLOG", "MAKALE", "YAZMAK", "OKUMAK", "İÇERİK"]
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

// Kategoriye göre CSS sınıfı belirleme
function getCategoryClass(category) {
    const techCategories = [
        'VERİ', 'PYTHON', 'APLİKASYON', 'GITHUB', 'YAPAY ZEKA', 'YAZILIM', 
        'SİBER GÜVENLİK', 'ALGORİTMA', 'BLOCKCHAIN', 'BULUT', 'CV', 'WI-FI', 
        'MOBİL', 'TARAYICI', 'E-TİCARET', 'GOOGLE', 'GOOGLE DRIVE', '3D YAZICI'
    ];
    
    const innovationCategories = [
        'STAJ', 'İNOVASYON', 'GİRİŞİMCİLİK', 'DİJİTAL TASARIM', 'ROBOTİK', 
        'OYUN', 'NETWORK', 'MENTÖRLÜK', 'TEKNOLOJİ', 'LİNKEDIN', 'PROJE YÖNETİMİ',
        'OTONOM ARAÇ', 'QR KOD', 'KRİPTOGRAFİ', 'HACKATHON', 'VERİ ANALİZİ',
        'SPAM', 'HASHTAG', 'AKILLI EV', 'SUNUM', 'INFLUENCER', 'MÜLAKAT',
        'MONİTÖR', 'GOOGLE SHEET', 'BLUETOOTH', 'YATIRIMCI', 'SANAL ASİSTAN',
        'GDG ON CAMPUS', 'DISCORD', 'İSTATİSTİK'
    ];
    
    if (techCategories.includes(category)) {
        return 'tech';
    } else if (innovationCategories.includes(category)) {
        return 'innovation';
    } else {
        return 'life';
    }
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
