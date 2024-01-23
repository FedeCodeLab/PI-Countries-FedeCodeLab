import './CardsModules.css';
import Card from '../card/Card'

export default function Cards ( {countries} ) {
  return (
    <div className="container">
      <article className='cards'>
        {countries.map(({ cca3, id, name, flags, continents, capital }) => (
          <Card
            key={cca3}
            id={cca3}
            name={name}
            flags={flags.png}
            continents={continents}
            capital={capital}
          />
        ))}
          
      </article>
    </div>
  )
}