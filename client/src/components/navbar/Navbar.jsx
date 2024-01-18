import './navbarModules.css'
import { Link } from 'react-router-dom';

export default function Navbar ( {exit, github, linkedIn, porfolio} ) {
  return (
      <header>
        <div className="nav-list">
          <div className="nav-left">
              <Link to='/home'>
                <p>Home</p>
              </Link>
              <Link to='/favorites'>
                <p>Favorites</p>
              </Link>
              <Link to='/about'>
                <p>About Me</p>
              </Link>
          </div>
          <div className="nav-right">
            <Link to={`${github}`} target="_blank">
              <i className="fa-brands fa-github" ></i>
            </Link>    
            <Link to={`${linkedIn}`} target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link to={`${porfolio}`} target="_blank">
              <i className="fa-solid fa-globe"></i>
            </Link>
            <button onClick={exit}><i className="fa-solid fa-right-from-bracket log-out" id="logout"></i></button>        
          </div>
        </div>
      </header>
  )
}