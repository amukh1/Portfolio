import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Hello from './Hello'
import Contact from './contact'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>

    <Hello />

	<Contact />

	<App />

	</React.StrictMode>
)