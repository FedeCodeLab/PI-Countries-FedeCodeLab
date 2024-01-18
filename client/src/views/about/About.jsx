import './AboutModules.css'
import { Link } from 'react-router-dom';

export default function About ({ github, linkedIn, porfolio }) {
  return (
    <section className='about'>
      <div className="container">
        <article>
          <div className="description-left">
            <img src="../../../img/about.jpg" alt="" />
            <h2>Federico Guzmán</h2>
            <div className="line"></div>
            <h3>Web Developer</h3>
            <div className="links">
              <Link to={`${github}`} target="_blank">
                <div className="link">
                  <i className="fa-brands fa-github" ></i>
                </div>
              </Link>    
              <Link to={`${linkedIn}`} target="_blank">
                <div className="link">
                  <i className="fa-brands fa-linkedin"></i> 
                </div>
              </Link>
              <Link to={`${porfolio}`} target="_blank">
                <div className="link">  
                  <i className="fa-solid fa-globe"></i>
                </div>
              </Link>
            </div>
          </div>
          <div className="description-right">
            <h2>Hola, soy <span>Guzmán Federico</span></h2>
            <p>Soy desarrollador fulltstack y manejo tecnologías como JavaScript | NodeJS | React | Redux | HTML | CSS | PostgreSQL | Sequelize | HTML | Express.js</p>
            <p>federicoguzman.css@gmail.com</p>
            <button>RESUME / CV</button>
          </div>
        </article>
      </div>
      
    </section>
  )
}