import './CardModules.css';
import { Link } from "react-router-dom";


export default function Card ( {name, flags, continents, capital, id} ) {
  return (
    <Link to={`/detail/${id}`}>
      <article className='card'>
        <div className="card-top">
          <img src={flags} alt="" />
        </div>
        <div className="card-middle">
          <h1>{name.common}</h1>
          <p><span className='continent'>Oficial Name: </span>{name.official}</p>
          <p><span className='continent'>Capital: </span>{capital}</p>
        </div>
        <h2 className='continents'>{continents}</h2>
      </article>
    </Link>
  )
}