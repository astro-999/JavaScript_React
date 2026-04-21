// make  a good home page for a website with icons and images and text and make it responsive and attractive with a good css design
import {useState} from 'react';

function Home() {
    return (
        <div className="Home" style={{padding: '20px', textAlign: 'center'}}>
            <h1>Welcome to the Home Page</h1>   
            <p>This is the home page of our website. We are glad to have you here. Explore our website to know more about us.</p>
            <img src="https://via.placeholder.com/600x300" alt="Home Image" style={{width: '100%', borderRadius: '5px', marginTop: '20px'}} />
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