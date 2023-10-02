import React from 'react';
import Card from '../shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className='about-page'>
        <h2>About Page</h2>
        <p>This is the about page of this project</p>
        <Link to='/'>Go back Home</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
