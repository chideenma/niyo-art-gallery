import Button from '../Buttons';

import './index.css';

import Logo from "../../assets/logo.png";

const NavBar = () => {
    return (
        <nav className="nav-bar">
        <div className="nav-left">
            <img src={Logo} alt="app logo" />
        </div>
        <div className="nav">
          <div className="nav-right">
            <button>Events</button>
            <button>Museum</button>
            <button>Arts</button>
            <button>Gallaries</button>
            <Button type="login" text="Login"/>
            <Button type="explore" text="Explore arts" />
          </div>
        
        </div>
      </nav>
    )
}

export default NavBar;