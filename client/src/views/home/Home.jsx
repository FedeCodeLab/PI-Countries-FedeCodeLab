import { useState, useEffect } from "react";
import './HomeModules.css';
import '../../components/pagination/PaginationModules.css'
import { CountryList } from "../../components/countryList/CountryList";

export default function Home () {

  // const URL = `http://localhost:5000/countries?_page=${currentPage}&_limit=10`;
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/countries?_limit=10')
    // fetch(`URL?_page=${currentPage}&_limit=10`)
    .then(response => response.json())
    .then(data => setCountries(data))
    .catch(err => alert(`Error fetching data: ${err}`))
  }, [])



  return (
    <section className="home">
      <CountryList />
    </section>    
  )
}