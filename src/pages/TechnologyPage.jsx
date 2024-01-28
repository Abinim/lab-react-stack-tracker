// src/pages/TechnologyPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TechnologyPage.css';

const TechnologyPage = ({ technologies }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the technology with the matching slug
  const technology = technologies.find(tech => tech.slug === slug);

  if (!technology) {
    return <div>Technology not found</div>;
  }

  // Function to navigate back to the previous page in history
  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className='technology-page'>
      <h1>{technology.name} Details</h1>
      <div className='technology-details'>
        <img
          src={technology.image}
          alt={technology.name}
          className='tech-logo'
        />
        <div>
          <p>
            <strong>Description:</strong> {technology.description}
          </p>
          <button onClick={navigateBack}>Back to Company</button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
