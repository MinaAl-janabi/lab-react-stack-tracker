/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Router>
    <App />
    </Router>
    <ul>
<Link to={`/App.jsx ${companies.json}`}>
<img src={companies.logo} alt={companies.name} />
</Link>

</ul>

  </React.StrictMode>

);