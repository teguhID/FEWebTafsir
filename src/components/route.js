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
]
export default route;