import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled from './HeaderStyled.css';
import ButtonNav from './ButtonNav';
import Navbar from './Navbar';
import imgLogo from '../../assets/images/logoJK.png';

const Header = () => {
  return (
    <HeaderStyled>
      <Link className='logo' to={'/home'}>
        <img src={imgLogo} alt="Logo"/>
      </Link>

      <ButtonNav/>
      <Navbar/>
    </HeaderStyled>
  )
}

export default Header
