import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const [country, setCountry] = useState({})
    let { id } = useParams()
    useEffect(() => {
      fetch(`http://localhost:5000/countries`)
      .then(res => res.json())
      .then((data) => {
        const filteredCountry = data.find(c => c.cca3 === id)
        if(filteredCountry){
          setCountry(filteredCountry)
        } else {
          alert('No se encontró un país con ese id')
        }
      }).catch(err => window.alert('No existe pais con ese id'))
    }, [id]);

    return(
        <div>
            {country.cca3 && <h1>ID:{country.cca3}</h1>}
            {country.name && <h1>Name:{country.name.official}</h1>}
            {country.continents && <h1>Continent/s:{country.continents}</h1>}
            {country.capital && <h1>Capital:{country.capital}</h1>}
            {country.area && <h1>Area:{country.area}</h1>}
            {country.population && <h1>Population:{country.population}</h1>}
            {country.flags && <img src={country.flags.png}></img>}
        </div>
    )
}

export default Detail
