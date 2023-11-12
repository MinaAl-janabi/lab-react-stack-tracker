/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import companiesData from './companies.json';
import technologiesData from './technologies.json';
import Navbar from './components/Navbar';
import HomePage   from './pages/HomePage';
import { Routes, Route } from "react-router-dom";

  function App() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    const companies= companiesData;
    const technologies= technologiesData;
  return (
    
    <div className="App">
<Navbar/>
<React.StrictMode>

<Routes>
        <Route path="/HomePage" element={<HomePage />} /> 
        <Route path="/technologies" element={<technologies />} />
      <Route path="/companies.json" element={<companies />} />
      </Routes>
      </React.StrictMode>

<HomePage/>
    </div>
  );
}

export default App;
