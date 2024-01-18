import './CardModules.css'

export default function Card () {
  return (
    <article className='card'>
      <div className="card-top">
        <img src="https://flagcdn.com/w320/ar.png" alt="" />
      </div>
      <div className="card-middle">
        <h1>Argentina</h1>
        <p><span className='continent'>Oficial Name:</span> República Argentina</p>
        <p><span className='continent'>Capital:</span> Buenos Aires</p>
      </div>
      <h2 className='continents'>South America</h2>
    </article>
  )
}