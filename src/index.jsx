import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Hello from './Hello'
import Contact from './contact'
import Projects from './projects'
import Scroll from './scroll'


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
{/* <div onScroll={handleScroll}> */}

    <Hello/>

	{/* <br />
	<br /> */}

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="hsla(238, 100%, 44%, 0.78)" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,170.7C672,160,768,96,864,90.7C960,85,1056,139,1152,160C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
	<Contact />

	<Projects />

	<App />

	<Scroll />

	{/* </div> */}
	</React.StrictMode>
)
const handleScroll = event => {
    console.log('scrollTop: ', event.currentTarget.scrollTop);
    console.log('offsetHeight: ', event.currentTarget.offsetHeight);
};