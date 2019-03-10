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
        // sidebar: () => <div>bubblegum!</div>,
        ayat: () => 'Al-Fatihah',
        dataTafsir: DataTafsir
    },
    {
        path: "/ibnukatsir/al-baqarah",
        // sidebar: () => <div>bubblegum!</div>,
        ayat: () => 'Al-Baqarah',
        dataTafsir: DataTafsir
    },
];


export default route;