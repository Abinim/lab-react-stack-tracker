// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

const HomePage = ({ companies }) => {
  return (
    <div className='home-page'>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className='company-grid'>
        {companies.map(company => (
          <div key={company.id} className='company-item'>
            <Link to={`/company/${company.slug}`} className='company-link'>
              <img
                src={company.logo}
                alt={company.companyName}
                className='company-logo'
              />
              <div className='company-name'>{company.companyName}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
