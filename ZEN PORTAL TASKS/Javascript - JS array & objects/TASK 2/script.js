const getCountries = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all');
    xhr.send();
    xhr.responseType = 'json';
    xhr.onload = ()=> {
        let data = xhr.response;
        //console.log(data);

        //Country names
        let countryNames = data.map((country) => country.name.common);

        // country flags in png format
        let countryFlagsPng = data.filter((country) => country.flags && country.flags.png)
        .map((country) => country.flags.png);
        //console.log(countryFlagsPng);

        // country flags in svg format
        let countryFlagsSvg = data.filter((country) => (country.flags && country.flags.svg)).map((country) => country.flags.svg);


        // lets loop
        for (var i = 0; i < data.length; i++) {
            let flagLinks = [
                name = `Country name = ${countryNames[i]}`,
                flag_png_link = `Flag png link = ${countryFlagsPng[i]}`,
                flag_svg_link = `Flag svg link = ${countryFlagsSvg[i]}`,
            ]

            console.log(flagLinks);
        }
    }
}

// the list
getCountries();