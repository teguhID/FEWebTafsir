
const dataAyatTafsir = {
    ayat:[
        {   no: 1,
            ayat: 2,
            arti : 3
        }
    ],

    tafsir:[
        {no: 1, tafsir : 'test'},
    ]
}

const Data = (state=dataAyatTafsir) => {
    
    const allData = {...state}
    return allData
}


export default Data