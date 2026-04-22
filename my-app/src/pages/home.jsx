import '../css/home.css';   
// make  a good home page for a website with icons and images and text and make it responsive and attractive with a good css design
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Linkstyle = { 
    textDecoration: 'brown',
    color: '#320f4bff',
    padding: '10px 20px',
    // border: '1px solid black',
    borderRadius: '5px',
    backgroundColor: '#3c2323ff',
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

function Home() {
    return (
        <div className="Home" style={{padding: '20px', textAlign: 'center'}}>
            <h1>Welcome to the Home Page</h1>   
            <p>This is the home page of our website. We are glad to have you here. Explore our website to know more about us.</p>
            {/* <img src="https://via.placeholder.com/600x300" alt="Home Image" style={{width: '100%', borderRadius: '5px', marginTop: '20px'}} /> */}
            {/*  button for list only navigate to list page */}
            <button className="btn-secondary" style={Linkstyle}>
                <Link to="/listgroup" >List</Link>
            </button>

            
            

        </div>  
        
    );
}



function Color() {
    const [color, setColor] = useState('red');
    return (
            <div>
            <h1>My favourite color is {color}</h1>
            <button onClick={() => setColor('blue')}>Blue</button>
            <button onClick={() => setColor('green')}>Green</button>
            <button onClick={() => setColor('yellow')}>Yellow</button>
        </div>
    );
}
export {Home, Color};