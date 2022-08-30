import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Hello from './Hello'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <Hello />
		<App />
	</React.StrictMode>
)