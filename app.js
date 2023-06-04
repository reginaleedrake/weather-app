function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");  
    temperatureElement.innerHTML = Math.round
    (response.data.main.temp);
    cityElement.innerHTML = response.data.name; 
}

let apiKey = "97bed167ec49bff56e6c1b63daef9c86"; 

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`; 

axios.get(apiUrl).then(displayTemperature); 