const API_KEY = "d07b6b41b93581ea70677d3b00cdeca5";
const city = document.querySelector(".weatherPrint #city");
const weather = document.querySelector(".weatherPrint #weather");
function successGeo(position){
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
    city.innerText = `${data.sys.country} / ${data.name}`;
    weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}°C`;
    })
}
function failGeo(position){
  console.log("Fail")
}
navigator.geolocation.getCurrentPosition(successGeo, failGeo);
