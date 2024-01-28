// src/pages/CompanyPage.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './CompanyPage.css';

const CompanyPage = ({ companies }) => {
  const { companySlug } = useParams();

  const company = companies.find(c => c.slug === companySlug);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className='company-page'>
      <h1>{company.companyName}Company Profile</h1>
      <div className='company-details'>
        <img
          src={company.logo}
          alt={company.companyName}
          className='company-logo'
        />
        <div>
          <p>
            <strong>Website:</strong>{' '}
            <a href={company.website} target='_blank' rel='noopener noreferrer'>
              {company.website}
            </a>
          </p>
          <p>
            <strong>Description:</strong> {company.description}
          </p>
        </div>
      </div>
      <h2>Tech Stack</h2>
      <div className='tech-stack'>
        {company.techStack.map(tech => (
          <div key={tech.slug} className='tech-item'>
            <Link to={`/tech/${tech.slug}`} className='tech-link'>
              <img src={tech.image} alt={tech.name} className='tech-logo' />
              <div className='tech-name'>{tech.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyPage;
