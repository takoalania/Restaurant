import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <div className='container'>
       <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to='/menu'>Menu</NavLink></li>
          <li><NavLink to='/cart'>Cart</NavLink></li>
        </ul>
    </nav> 
    <Outlet/>
    </div>
    
  )
}
