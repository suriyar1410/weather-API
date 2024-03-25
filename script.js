let searchBtn = document.getElementById("search-btn");

let weatherSearch = async ()=>{
    console.log("Cicked");
    const API_KEY ="430f79e6ca381fe2eeab89786d56568a";
    let citySearch = document.getElementById("city-search").value;
    let weatherIcon = document.getElementById("weather-icon");
    let climate = document.getElementById("climate");
    let city = document.getElementById("City");
    let temperature = document.getElementById("temperature");
    let humidity = document.getElementById("humidity");
    let country = document.getElementById("country");
       if(citySearch.length === 0){
    }
    try {
        
         let weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${API_KEY}&units=imperial`).then((res)=>res.json());
        weatherIcon.src=`https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`;
        climate.innerHTML=`Climate : ${weatherdata.weather[0].main}`;
        city.innerHTML=`City: ${weatherdata.name}`;
        temperature.innerHTML=`Temperature: ${weatherdata.main.temp} °F`;
        humidity.innerHTML=`Humidity : ${weatherdata.main.humidity} km/hr`;
        country.innerHTML = `Country : ${weatherdata.sys.country}`;
    console.log("weatherdata");
    } 
    catch (error) {
        console.log("error");
        climate.innerHTML="Enter the valid city name...";
    }

}
searchBtn.addEventListener("click",weatherSearch);


