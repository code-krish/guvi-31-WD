//console.log("Hello World!!!")

//Get all the countries from Asia continent /region using Filter function
fetch("https://restcountries.com/v3.1/all")
  .then(function (data) {
    return data.json();
  })

  .then(function (countryList) {
    var asianCountries = [];

    countryList.filter((country) => {
      if (country.region === "Asia") {
        asianCountries.push(country.name.common);
      }
    });
    console.log("Asian Countries: ", asianCountries);
  })

  .catch(function (error) {
    console.log(error);
  });

//Get all the countries with a population of less than 2 lakhs using Filter function

fetch("https://restcountries.com/v3.1/all")
  .then(function (data) {
    return data.json();
  })

  .then(function (countryList) {
    var population = [];

    countryList.filter((country) => {
      if (country.population < 200000) {
        population.push(country.name.common);
      }
    });
    console.log("Countries with population less than 2 Lakhs: ", population);
  })

  .catch(function (error) {
    console.log(error);
  });

//Print the following details name, capital, flag using forEach function
fetch("https://restcountries.com/v3.1/all")
  .then(function (data) {
    return data.json();
  })

  .then(function (countryList) {
    detail = [];

    countryList.forEach((country) => {
      list = {
        name: country.name.common,
        capital: country.capital != undefined ?country.capital[0] : "Null",
        flag: country.flag,
        flagLink: country.flags.png,
      };

      detail.push(list);
    });
    console.log("Country Detail: ", detail);
  })

  .catch(function (error) {
    console.log(error);
  });

//   Print the total population of countries using reduce function
fetch("https://restcountries.com/v3.1/all")
  .then(function (data) {
    return data.json();
  })

  .then(function (countryList) {
   
    var result = countryList.map((country) => country.population).reduce((acc,curr) => acc + curr)
console.log("Total Population of countries: ", result)
  })

  .catch(function (error) {
    console.log(error);
  });

//Print the country which uses US Dollars as currency.
fetch("https://restcountries.com/v3.1/all")
  .then(function (data) {
    return data.json();
  })
  .then(function (countryList) {
    countriesWithUSD = [];

    countryList.filter((country) => {
     
      if (country.currencies && country.currencies.USD) {
        countriesWithUSD.push(country.name.common);
      } 
     });
    console.log("Countries which uses US Dollars as currencies: ", countriesWithUSD);
  })

  .catch(function (error) {
    console.log(error);
  });
