import {Link} from 'react-router-dom';


function Navibar() {
    return (
        <nav className="Navigation" class = "p-3 mb-2 bg-dark text-white">
            {/* add gap between home about and contact */}
            <div style={{gap: '100px'}}>
                <Link to='/' className="nav-link-custom">Home</Link>
                <Link to='/about' className="nav-link-custom">About</Link>
                <Link to='/color' className="nav-link-custom">Color</Link>
                <Link to='/form' className="nav-link-custom">Form</Link>
            </div>
            
        </nav>
    );
}




export default Navibar;