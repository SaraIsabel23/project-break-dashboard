



/*
fetch("https://api.weatherapi.com/v1/current.json?key=7d32a4a5cb3a469f9e5182224251012&q=Madrid&aqi=no")
.then(response => response.json())
.then(data => console.log(data))
*/
fetch("https://api.weatherapi.com/v1/forecast.json?key=7d32a4a5cb3a469f9e5182224251012&q=Madrid&aqi=no")
.then(response => response.json())
.then(data => console.log(data))