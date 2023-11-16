import React from 'react'
import *  as  Style from './Header.css';
import { Link } from 'react-router-dom';
import unDrawLogo from '../../assets/unDraw/undraw_To_the_moon_re_q21i.png'
import ButtonMenu from './ButtonMenu/ButtonMenu';
import Nav from './NavMenu/Nav';
const Header = () => {
  
  return (
    <Style.Header>

      <Link className='header__logo_Link' to='/home'>
        <p>Seja-Bem Vindo(a)!</p>
        <h2>Jackson <span>Silva</span></h2>
        <h3>Portfólio</h3>
      </Link>

      <ButtonMenu/>
      <Nav/>
    </Style.Header>
  )
}

export default Header
