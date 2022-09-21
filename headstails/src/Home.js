import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (  
    <>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/about'}>About</NavLink>
    <NavLink to={'/headtail'}>Headtail</NavLink>
    </>
    
  )
}

export default Home;