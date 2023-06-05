function displayTemperature(response) {
    console.log(response.data); 
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");  
    let descriptionElement = document.querySelector("#description"); 
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");    
    temperatureElement.innerHTML = Math.round
    (response.data.main.temp);
    cityElement.innerHTML = response.data.name; 
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "97bed167ec49bff56e6c1b63daef9c86"; 

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=${apiKey}&units=metric`; 

axios.get(apiUrl).then(displayTemperature); 