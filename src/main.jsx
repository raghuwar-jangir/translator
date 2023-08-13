import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const toggle = () =>{
  const root = document.getElementById('root');
  root.classList.toggle('dark');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <button onClick={toggle}>Dark</button>
    <br />
    <br />
    <App />
  </React.StrictMode>,
)
