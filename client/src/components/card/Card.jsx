import './CardModules.css';
import { Link } from "react-router-dom";


export default function Card ( {nameOfficial, nameCommon, flag, continent, capital, id, population} ) {
  return (
    <Link to={`/detail/${id}`}>
      <article className='card'>
        <div className="card-top">
          <img src={flag} alt="" />
        </div>
        <div className="card-middle">
          <h1>{nameCommon}</h1>
          <p><span className='continent'>Oficial Name: </span>{nameOfficial}</p>
          <p><span className='continent'>Capital: </span>{capital}</p>
          <p><span className='continent'>Population: </span>{population}</p>
        </div>
        <h2 className='continents'>{continent}</h2>
      </article>
    </Link>
  )
}