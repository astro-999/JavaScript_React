// navigation bar for frontend
import { Link } from "react-router-dom";
import './../css/NavBar.css';
function NavBar() {
    return (
         <nav className="navbar"  >
            <div className="navbar-brand" > 
                <Link to="/" className="nav-link-class">Test App</Link>
            </div>  
            <div className="navbar-links">
                <Link to="/" className="nav-link" >Home</Link>
                <Link to="/Age" className="nav-link" >Age Calculator</Link>
                <Link to="/form" className="nav-link" >Form</Link>
            </div>  
        </nav>
    );
}
export default NavBar;

