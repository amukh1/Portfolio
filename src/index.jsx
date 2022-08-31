import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Hello from './Hello'
import Contact from './contact'
import Projects from './projects'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>

    <Hello />

	<Contact />

	<Projects />

	<App />

	</React.StrictMode>
)