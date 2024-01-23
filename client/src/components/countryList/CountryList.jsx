import { useEffect, useState } from "react"
import Cards from "../cards/Cards"
import Pagination from "../pagination/Pagination"

export const CountryList = () => {

    const [countries, setCountries] = useState([])
    const totalCountries = countries.length
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const countryList = async() => {
        const data = await fetch('http://localhost:5000/countries')
        const countries = await data.json()
        setCountries(countries)
    }

    useEffect(() => {
        countryList()
    }, [])

    const lastIndex = currentPage * countriesPerPage
    const firstIndex = lastIndex - countriesPerPage
    const currentCountries = countries.slice(firstIndex, lastIndex)

    return(
        <div>
            <Cards countries={currentCountries} ></Cards>
            <Pagination
            countriesPerPage={countriesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalCountries={totalCountries}
            ></Pagination>
        </div>
    )
}
