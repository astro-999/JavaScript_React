import '../css/home.css';   
// make  a good home page for a website with icons and images and text and make it responsive and attractive with a good css design
import {useState} from 'react';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import User from '../User.jsx';
function Home() {
    return (
        <div >
            <User/>
            <h1>Welcome to the Home Page</h1>   
            <p class="text-warning-emphasis" >This is the home page of our website. 
                We are glad to have you here. Explore our website to know more about us.</p>
            {/* <img src="https://via.placeholder.com/600x300" alt="Home Image" style={{width: '100%', borderRadius: '5px', marginTop: '20px'}} /> */}
            {/*  button for list only navigate to list page */}
            <button  style={{marginTop: '10px', padding : "10px 20px", backgroundColor :"#dd195d", textColor:'#121111'}} >
                <Link to="/listgroup" style={{textDecoration: 'none', color: 'inherit'}}>List</Link>
            </button>

            
            

        </div>  
        
    );
}



function Color() {
    const [color, setColor] = useState('....');
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