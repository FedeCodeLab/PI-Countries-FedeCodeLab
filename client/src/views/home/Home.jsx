import { useState, useEffect } from "react";
import './HomeModules.css';
import '../../components/pagination/PaginationModules.css'
import Cards from "../../components/cards/Cards";
import Pagination from "../../components/pagination/Pagination";
import Filters from "../../components/filters/Filters";
import Cobe from "../../components/cobe/Cobe";

export default function Home () {

  // ? -------------------------------------------- Fetch y creación de estado countries
  const [countries, setCountries] = useState([])

  const countryList = async() => {
      const data = await fetch('http://localhost:5000/countries')
      const countries = await data.json()
      setCountries(countries)
  }

  useEffect(() => {
      countryList()
  }, [])

  // ? -------------------------------------------- Paginado

  const totalCountries = countries.length
  const [countriesPerPage, setCountriesPerPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)

  const lastIndex = currentPage * countriesPerPage
  const firstIndex = lastIndex - countriesPerPage
  const currentCountries = countries.slice(firstIndex, lastIndex)

  return (
    <section className="home">
      <div className="container">
        <article className="introduction">
          <div className="home-left">
            <h1>Aquí puedes obtener un listado de países de todo el mundo</h1>
            <p>Proyecto Integrador de Federico Guzmán</p>
            <button>Portfolio</button>
          </div>
          <div className="home-right">
            {/* <Cobe /> */}
          </div>
        </article>
      </div>

      <Filters countries={countries} />

      <Cards countries={currentCountries} ></Cards>

      <Pagination
        countriesPerPage={countriesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCountries={totalCountries}
      />

    </section>    
  )
}