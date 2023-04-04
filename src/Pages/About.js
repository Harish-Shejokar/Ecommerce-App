import React from 'react';
import { NavLink} from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <h3><NavLink to='/'
        className={(isActive) => {}}>Back to Home page</NavLink></h3>
    </div>
  )
}

export default About
