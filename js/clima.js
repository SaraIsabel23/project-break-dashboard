
const ciudad      = document.getElementById("ciudad");
const descripcion = document.getElementById("descripcion");
const estadoIcono = document.getElementById("estadoIcono");
const temperatura = document.getElementById("temperatura");
const masDatos    = document.getElementById("masDatos");
const pronostico  = document.getElementById("pronosticoWeather");

async function traerClima(){
    try{
        const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=7d32a4a5cb3a469f9e5182224251012&q=Madrid&aqi=no") 
        const data     = await response.json();
        console.log(data);

        const ciudadNombre = data.location.name;
        const pais         = data.location.country;
        const descrip      = data.current.condition.text;
        const icono        = data.current.condition.icon;
        const temperaturaC = data.current.temp_c;
        const lluvias      = data.current.precip_in;
        const humedad      = data.current.humidity;
        const vient        = data.current.wind_kph;
    


        ciudad.textContent      = ciudadNombre + "/" + pais;
        descripcion.textContent = descrip;
        estadoIcono.src         = icono;
        temperatura.textContent = temperaturaC;


        masDatos.innerHTML      = `
        <li>Precipitaciones: ${lluvias}</li>
        <li>Humedad: ${humedad}</li>
        <li>Viento: ${vient}</li>`



        const previsiones = data.forecast.forecastday[0].hour;
        console.log(previsiones);

        for(const prevision of previsiones ) {
            const { time, condition, temp_c} = prevision;

            const li = document.createElement("li");
            li.classList.add("previsionGrados");

            const soloHora = time.split(" ")[1]; 
            const template = `
            <span>${soloHora}</span>
            <span><img class="iconoWeather" src="${condition.icon}" alt="${condition.text}">
            <p>${temp_c}</p>
            </span>
            `

            li.innerHTML = template;

            pronostico.appendChild(li);  
        }

    }catch(error){
        console.log("Error al obtener datos:", error);
    }
};

traerClima();


