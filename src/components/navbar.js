import React from 'react';
import {NavLink } from 'react-router-dom';
import './display.css';



function NavBar() {
    return (
      <div className="nav">
       <NavLink style={{ fontSize: '20px',color: 'white', textDecoration: 'none', padding: '10px 0', margin:'auto' }} to='/' color="inherit">Home</NavLink>
       <img src="https://image.flaticon.com/icons/svg/74/74868.svg" width="5%" alt="navbarpic"/>
        <NavLink style={{ fontSize: '20px',color: 'white', textDecoration: 'none', padding: '10px 0', margin: 'auto' }} to="/display" >Play </NavLink>
      </div>
    );
  }
  
  export default NavBar;