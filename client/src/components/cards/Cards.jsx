import './CardsModules.css';
import Card from '../card/Card'

export default function Cards () {
  return (
    <div className="container">
      <article className='cards'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </article>
    </div>
  )
}