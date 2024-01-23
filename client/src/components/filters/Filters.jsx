import './FiltersModules.css'
import { useState, useEffect } from "react"

export default function Filters ( {countries} ) {
  const [search, setSearch] = useState('')
  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }
  return (
      <article className='filters container'>
        <input type="text" value={search} onChange={searcher} placeholder="Search"/>
        <select name="Continents" id="">
          <option value="all">All</option>
          <option value="all">South America</option>
          <option value="all">North America</option>
          <option value="all">Europe</option>
          <option value="all">Africa</option>
          <option value="all">Aceania</option>
        </select>
        <button>Reset</button>
      </article>
  )
}