import './CardsModules.css';
import Card from '../card/Card'

export default function Cards ( {countries} ) {
  return (
    <div className="container">
      <article className='cards'>
        {countries.map(({ cca3, id, nameCommon, flag, continent, capital, population, nameOfficial }) => (
          <Card
            key={cca3}
            id={cca3}
            nameCommon={nameCommon}
            nameOfficial={nameOfficial}
            flag={flag}
            continent={continent}
            capital={capital}
            population={population}
          />
        ))}
          
      </article>
    </div>
  )
}