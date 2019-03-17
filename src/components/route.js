import DataTafsir from './content/DataTafsir/DataTafsir'
const route = [
    {
        path: "/ibnuKatsir", // alamat route
        exact: true,
        // sidebar: () => <div>home!</div>, // set button side bar active
        ayat: () => 'ayat',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-fatihah",
        ayat: () => 'Al-Fatihah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-baqarah",
        ayat: () => 'Al-Baqarah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/ali-`imran",
        ayat: () => 'Ali-`Imran',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/an-nisa`",
        ayat: () => 'An-Nisa`',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-ma`idah",
        ayat: () => 'Al-Ma`idah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-an`am",
        ayat: () => 'Al-An`am',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-a`raf",
        ayat: () => 'Al-A`raf',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-anfal",
        ayat: () => 'Al-Anfal',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/at-taubah",
        ayat: () => 'At-Taubah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/yunus",
        ayat: () => 'Yunus',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/hud",
        ayat: () => 'Hud',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/yusuf",
        ayat: () => 'Yusuf',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/ar-ra`d",
        ayat: () => 'Ar-Ra`d',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/ibrahim",
        ayat: () => 'Ibrahim',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-hijr",
        ayat: () => 'Al-Hijr',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/an-nahl",
        ayat: () => 'An-Nahl',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-isra`",
        ayat: () => 'Al-Isra`',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-kahf",
        ayat: () => 'Al-Kahf',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/maryam",
        ayat: () => 'Maryam',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/ta-ha",
        ayat: () => 'Ta-Ha',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-anbiya",
        ayat: () => 'Al-Anbiya',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-hajj",
        ayat: () => 'Al-Hajj',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-mu`minun",
        ayat: () => 'Al-Mu`minun',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/an-nur",
        ayat: () => 'An-Nur',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-furqan",
        ayat: () => 'Al-Furqan',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/asy-syu`ara`",
        ayat: () => 'Asy-Syu`ara`',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/an-naml",
        ayat: () => 'An-Naml',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-qasas",
        ayat: () => 'Al-Qasas',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-`ankabut",
        ayat: () => 'Al-`Ankabut',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/ar-rum",
        ayat: () => 'Ar-Rum',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/luqman",
        ayat: () => 'Luqman',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/as-sajdah",
        ayat: () => 'As-Sajdah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-ahzab",
        ayat: () => 'Al-Ahzab',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/saba`",
        ayat: () => 'Saba`',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/fatir",
        ayat: () => 'Fatir',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/ya-sin",
        ayat: () => 'Ya-Sin',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/as-saffat",
        ayat: () => 'As-Saffat',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/sad",
        ayat: () => 'Sad',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/az-zumar",
        ayat: () => 'Az-Zumar',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/ghafir",
        ayat: () => 'Ghafir',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/fussilat",
        ayat: () => 'Fusillat',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Asy-Syura",
        ayat: () => 'Asy-Syura',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Az-Zukhruf",
        ayat: () => 'Az-Zukhruf',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Ad-Dukhan",
        ayat: () => 'Ad-Dukhan',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Jasiyah",
        ayat: () => 'Al-Jasiyah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Ahqaf",
        ayat: () => 'Al-Ahqaf',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Muhammad",
        ayat: () => 'Muhammad',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Fath",
        ayat: () => 'Al-Fath',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Hujurat",
        ayat: () => 'Al-Hujurat',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Qaf",
        ayat: () => 'Qaf',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Az-Zariyat",
        ayat: () => 'Az-Zariyat',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/At-Tur",
        ayat: () => 'At-Tur',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/An-Najm",
        ayat: () => 'An-Najm',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Qamar",
        ayat: () => 'Al-Qamar',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Ar-Rahman",
        ayat: () => 'Ar-Rahman',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Waqi`ah",
        ayat: () => 'Al-Waqi`ah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Hadid",
        ayat: () => 'Al-Hadid',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Mujadilah",
        ayat: () => 'Al-Mujadilah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Hasyr",
        ayat: () => 'Al-Hasyr',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Mumtahanah",
        ayat: () => 'Al-Mumtahanah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/As-Saff",
        ayat: () => 'As-Saff',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Jumu`ah",
        ayat: () => 'Al-Jumu`ah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-Munafiqun",
        ayat: () => 'Al-Munafiqun',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/At-Taghabun",
        ayat: () => 'At-Taghabun',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/at-Talaq",
        ayat: () => 'At-Talaq',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/at-Tahrim",
        ayat: () => 'At-Tahrim',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-Mulk",
        ayat: () => 'Al-Mulk',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-Qalam",
        ayat: () => 'Al-Qalam',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Haqqah",
        ayat: () => 'Al-Haqqah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Ma`arij",
        ayat: () => 'Al-Ma`arij',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Nuh",
        ayat: () => 'Nuh',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-Jinn",
        ayat: () => 'Al-Jinn',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-Muzzammil",
        ayat: () => 'Al-Muzzammil',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-Muddassir",
        ayat: () => 'Al-Muddassir',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-Qiyamah",
        ayat: () => 'Al-Qiyamah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-Insan",
        ayat: () => 'Al-Insan',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-Mursalat",
        ayat: () => 'Al-Mursalat',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/an-Naba`",
        ayat: () => 'An-Naba`',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/an-Nazi`at",
        ayat: () => 'An-Nazi`at',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/`Abasa",
        ayat: () => '`Abasa',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/At-Takwir",
        ayat: () => 'At-Takwir',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-Infitar",
        ayat: () => 'Al-Infitar',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-Muthaffifiin",
        ayat: () => 'Al-Muthaffifiin',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Insyiqaq",
        ayat: () => 'Al-Insyiqaq',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Buruj",
        ayat: () => 'Al-Buruj',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/At-Tariq",
        ayat: () => 'At-Tariq',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-A`la",
        ayat: () => 'Al-A`la',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Ghasyiyah",
        ayat: () => 'Al-Ghasyiyah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-Fajr",
        ayat: () => 'Al-Fajr',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Balad",
        ayat: () => 'Al-Balad',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Asy-Syams",
        ayat: () => 'Asy-Syams',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Lail",
        ayat: () => 'Al-Lail',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Ad-Duha",
        ayat: () => 'Ad-Duha',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Insyirah",
        ayat: () => 'Al-Insyirah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/At-Tin",
        ayat: () => 'At-Tin',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-`Alaq",
        ayat: () => 'Al-`Alaq',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Qadr",
        ayat: () => 'Al-Qadr',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Bayyinah",
        ayat: () => 'Al-Bayyinah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Az-Zalzalah",
        ayat: () => 'Az-Zalzalah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-`Adiyat",
        ayat: () => 'Al-`Adiyat',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Qari`ah",
        ayat: () => 'Al-Qari`ah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/At-Takasur",
        ayat: () => 'At-Takasur',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-`Asr",
        ayat: () => 'Al-`Asr',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Humazah",
        ayat: () => 'Al-Humazah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Fil",
        ayat: () => 'Al-Fil',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Quraisy",
        ayat: () => 'Quraisy',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Ma`un",
        ayat: () => 'Al-Ma`un',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Kausar",
        ayat: () => 'Al-Kausar',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Kafirun",
        ayat: () => 'Al-Kafirun',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/An-Nasr",
        ayat: () => 'An-Nasr',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Lahab",
        ayat: () => 'Al-Lahab',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Ikhlas",
        ayat: () => 'Al-Ikhlas',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/Al-Falaq",
        ayat: () => 'Al-Falaq',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/An-Nas",
        ayat: () => 'An-Nas',
        dataTafsir: DataTafsir
    },
]
export default route;