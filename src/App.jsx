// App.jsx
import React, { useState } from 'react';
import companiesData from './companies.json';
import technologiesData from './technologies.json';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import TechnologyPage from './pages/TechnologyPage';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [companies, setCompanies] = useState(companiesData);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage companies={companies} />} />
        <Route
          path='/company/:companySlug'
          element={<CompanyPage companies={companies} />}
        />
        <Route
          path='/tech/:slug'
          element={<TechnologyPage technologies={technologiesData} />}
        />
      </Routes>
    </div>
  );
};

export default App;
