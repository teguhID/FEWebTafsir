const initialState = {
    url: localStorage.getItem("apiUrl"),
    statusSideButton: localStorage.getItem("sideBarKey")
}

const api = (state = initialState, action) => {
    const newUrl = {...state};

    if (action.type === 'URL_1') {
        newUrl.url = 'http://localhost:8000/Al-Fatihah'
        localStorage.setItem("apiUrl", newUrl.url)
    }
    else if (action.type === 'URL_2') {
        newUrl.url = 'http://localhost:8000/Al-Baqarah'
        localStorage.setItem("apiUrl", newUrl.url)        
    }

    return newUrl
}

export default api