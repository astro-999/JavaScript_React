import {Link} from 'react-router-dom';
// import { useState} from 'react';


// create a proper style for the link with gap and clickable and no underline and black color
const Linkstyle = { 
    textDecoration: 'brown',
    color: '#43096d',
    padding: '10px 20px',
    // border: '1px solid black',
    borderRadius: '5px',
    backgroundColor: '#4c4747',
    cursor: 'pointer',
    // add hover effect
    '&:hover': {
        backgroundColor: 'black',
        color: 'lightgray',
    },
    // gap between the home about and contact
    marginRight: '05px',

    // click effect
    '&:active': {
        backgroundColor: 'black',
        color: 'lightgray',
    },

};

function Navibar() {
    return (
        <nav className="Navigation">
            {/* add gap bewtween home about and contact */}
            <div style={{gap: '100px'}}>
                <Link to ='/' style={Linkstyle}>Home</Link>
                <Link to='/about' style={Linkstyle}>About</Link>
                <Link to='/color' style={Linkstyle}>Color</Link>
                <Link to='/form' style={Linkstyle}>Form</Link>
            </div>
            
        </nav>
    );
}




export default Navibar;