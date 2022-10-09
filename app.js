const url = "https://api.openweathermap.org/data/2.5/";
const key = "c216f63f73e31dcb0eb6bb98f053772a";
const searchBar = document.getElementById("searchBar");
const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(searchBar.value)
   
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
    
}

const displayResult = (result) => {
    let city = document.querySelector('.city');
    let temp = document.querySelector('.temp');
    let desc = document.querySelector('.desc');
    let minmax = document.querySelector('.minmax');
    let coord = document.querySelector('.coord');
    let hum = document.querySelector('.hum');
    console.log(result)
    if(result.cod == "404"){
        city.innerHTML = "Bulunamadı"
        temp.innerHTML = "Bulunamadı"
        hum.innerHTML = "Bulunamadı"
        desc.innerHTML = "Bulunamadı"
        minmax.innerHTML = "Bulunamadı"
       coord.innerHTML = "Bulunamadı"
    }else{
   
    city.innerHTML = `${result.name}, ${result.sys.country}`;

    temp.innerHTML = `${Math.floor(result.main.temp)}°C`;

    hum.innerHTML = `${result.main.humidity}%`

    desc.innerHTML = result.weather[0].description;

    minmax.innerHTML = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`

    coord.innerHTML = `${result.coord.lat}° / ${result.coord.lon}°`
    }
   
}


searchBar.addEventListener("keypress",setQuery);
