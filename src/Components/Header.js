import React from 'react'
import Navigation from './Navigation'
import Logo from '../images/logo.png';

export default function Header() {
  return (
    <div style={{display: 'flex', justifyContent:'space-between', padding:'10px 24px', backgroundColor: '#6b705c'}}>
        <img src={Logo} alt="Logo" style={{width: '100px', height: '100px'}}/>
        <Navigation />
    </div>
  )
}
