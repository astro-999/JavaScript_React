// design me a good about page for a website  with icons and images and text and make it responsive and attractive
import React from 'react';
function About() {
    return (
        <div className="About" style={{padding: '20px', textAlign: 'center'}}>
            <h1>Welcome to the About Page</h1>
            <p>This is the about page of our website. We are a team of passionate developers who love to create amazing web applications.</p>
            <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
                <div style={{width: '200px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}}>
                    {/* <img src="https://via.placeholder.com/150" alt="Team Member 1" style={{width: '100%', borderRadius: '5px'}} /> */}
                    <h3>John Doe</h3>
                    <p>Lead Developer</p>
                </div>
                <div style={{width: '200px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}}>

                    {/* <img src="https://via.placeholder.com/150" alt="Team Member 2" style={{width: '100%', borderRadius: '5px'}} /> */}
                    <h3>Jane Smith</h3>

                    <p>UI/UX Designer</p>
                </div>
                <div style={{width: '200px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px'}}>
                    {/* <img src="https://via.placeholder.com/150" alt="Team Member 3" style={{width: '100%', borderRadius: '5px'}} />        */}
                    <h3>Mike Johnson</h3>
                    <p>Project Manager</p>
                </div>
            </div>
        </div>                                               
    );

}
export default About;