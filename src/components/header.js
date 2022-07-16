
import { Link } from "react-router-dom";

const Header=()=>{

    return(
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/home">Welcome </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">

              <li className="nav-item">
                  <Link className="nav-link"  to="/home">React</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to="/about">ES6</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to="/contact">Contact Me</Link>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
    );

}

export default Header;