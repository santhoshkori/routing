import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="logoullistcontainer">
    <div className="waveandimgcontainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="waveimagesty"
      />
      <h1>Wave</h1>
    </div>
    <ul className="unorderlistcontainer">
      <li className="list">
        <Link to="/">Home</Link>
      </li>
      <li className="list">
        <Link to="/about">About</Link>
      </li>
      <li className="list">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
