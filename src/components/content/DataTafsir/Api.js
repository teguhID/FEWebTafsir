const initialState = {
    url: localStorage.getItem("apiUrl"),
}

const url = [   {type:'URL_1', url:'http://localhost:8000/Al-Fatihah'},
                {type:'URL_2', url:'http://localhost:8000/Al-Baqarah'},
                {type:'URL_3', url:'http://localhost:8000/Ali-%60Imran'},
                {type:'URL_4', url:'http://localhost:8000/An-Nisa%60'},
                {type:'URL_5', url:'http://localhost:8000/Al-Ma%60idah'},
                {type:'URL_6', url:'http://localhost:8000/Al-An%60am'},
                {type:'URL_7', url:'http://localhost:8000/Al-A%60raf'},
                {type:'URL_8', url:'http://localhost:8000/Al-Anfal'},
                {type:'URL_9', url:'http://localhost:8000/At-Taubah'},
                {type:'URL_10', url:'http://localhost:8000/Yunus'},
                {type:'URL_11', url:'http://localhost:8000/Hud'},
                {type:'URL_12', url:'http://localhost:8000/Yusuf'},
                {type:'URL_13', url:'http://localhost:8000/Ar-Ra%60d'},
                {type:'URL_14', url:'http://localhost:8000/Ibrahim'},
                {type:'URL_15', url:'http://localhost:8000/Al-Hijr'},
                {type:'URL_16', url:'http://localhost:8000/An-Nahl'},
                {type:'URL_17', url:'http://localhost:8000/Al-Isra`'},
                {type:'URL_18', url:'http://localhost:8000/Al-Kahf'},
                {type:'URL_19', url:'http://localhost:8000/Maryam'},
                {type:'URL_20', url:'http://localhost:8000/Ta-Ha'},
                {type:'URL_21', url:'http://localhost:8000/Al-Anbiya'},
                {type:'URL_22', url:'http://localhost:8000/Al-Hajj'},
                {type:'URL_23', url:'http://localhost:8000/Al-Mu`minun'},
                {type:'URL_24', url:'http://localhost:8000/An-Nur'},
                {type:'URL_25', url:'http://localhost:8000/Al-Furqan'},
                {type:'URL_26', url:'http://localhost:8000/Asy-Syu`ara`'},
                {type:'URL_27', url:'http://localhost:8000/An-Naml'},
                {type:'URL_28', url:'http://localhost:8000/Al-Qasas'},
                {type:'URL_29', url:'http://localhost:8000/Al-`Ankabut'},
                {type:'URL_30', url:'http://localhost:8000/Ar-Rum'},
                {type:'URL_31', url:'http://localhost:8000/Luqman'},
                {type:'URL_32', url:'http://localhost:8000/As-Sajdah'},
                {type:'URL_33', url:'http://localhost:8000/Al-Ahzab'},
                {type:'URL_34', url:'http://localhost:8000/Saba`'},
                {type:'URL_35', url:'http://localhost:8000/Fatir'},
            ]

const api = (state = initialState, action) => {
    const newUrl = {...state};

    url.map(urls =>{
        if (action.type === urls.type) {
            newUrl.url = urls.url
            localStorage.setItem("apiUrl", newUrl.url)
        }    
    })

    return newUrl
}

export default api