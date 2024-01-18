import './FooterModules.css'
import { Link } from 'react-router-dom';

export default function Footer ( {github, linkedIn, porfolio} ) {
  return (
      <footer>
        <div className="container">
          <p>Federico Guzman | PI Countries</p>
          <p>federicoguzman@gmail.com</p>
          <div className="links">
            <Link to={`${github}`} target="_blank">
              <i className="fa-brands fa-github" ></i>
            </Link>    
            <Link to={`${linkedIn}`} target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link to={`${porfolio}`} target="_blank">
              <i className="fa-solid fa-globe"></i>
            </Link>
          </div>
        </div>
      </footer>
  )
}