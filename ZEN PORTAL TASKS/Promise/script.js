async function call() {
    try {
        let data = await fetch("https://restcountries.com/v3.1/all");
        let jsonData = await data.json();
        console.log(jsonData);
        jsonData.forEach(countries => {
            let country =document.createElement("div");
            country.setAttribute("class","container");
            country.innerHTML =`
            <h3>${countries.name.common}</h3>
            <img src=${countries.flags.svg}
            class = "flag" />
            <div class="info">
            
            <p><span><b>Population:</b></span>${countries.population}</p>
            <p><span><b>Region:</b></span>${countries.region}</p>
            <p><span><b>Capital:</b></span>${countries.capital}</p>
            <p><span><b>Continents:</b></span>${countries.continents}</p>
            <p><span><b>Code:</b></span>${countries.fifa}</p>
            <button>
            <a href="https://api.openweathermap.org/data/2.5/weather?q=${countries.name.common}&appid=0cce614772ff998ddfb7a45f88155367">
            Click for weather</button></a>
            </div>`

            document.body.appendChild(country);
            
        });

    } catch (error) {
        console.log("Error")
    }
}call();