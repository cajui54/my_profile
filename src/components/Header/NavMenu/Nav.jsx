import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuStatus, putOnClass,  openNav} from '../../../redux/slices/sliceMenu';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import * as Style from './Nav.css'

const Nav = () => {
  const {classMoveNav} = useSelector(({menuSlice}) => menuSlice)
    const dispatch = useDispatch();
    
    const handleCloseMenu = () => {
        dispatch(menuStatus(false));
        dispatch(putOnClass(''));
        dispatch(openNav('-100%'));
    }
    
  return (
    <Style.NavMenu value={classMoveNav}>
        <NavLink to='/' onClick={handleCloseMenu}>Home</NavLink>
        <Link to='aboutMe' activeClass="activeN" smooth={true} offset={-300} duration={500} onClick={handleCloseMenu}>About Me</Link>
        <Link to='skills' activeClass="active" smooth={true} offset={-100} duration={500} onClick={handleCloseMenu}>Skills</Link>
        <Link to='projects' activeClass="active" smooth={true} offset={-100} duration={500} onClick={handleCloseMenu}>Projects</Link>
        <Link to='contactMe' activeClass="active" smooth={true} offset={0} duration={500} onClick={handleCloseMenu}>Contact Me</Link>
    </Style.NavMenu>
  )
}

export default Nav
