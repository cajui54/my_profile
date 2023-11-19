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

    const handleSetActive = (to) => to;
    const optionsMenu = [
      {goTo: 'aboutMe', offsetValue: -300, title: 'About Me'},
      {goTo: 'skills', offsetValue: -100, title: 'Skills'},
      {goTo: 'projects', offsetValue: -100, title: 'Projects'},
      {goTo: 'contactMe', offsetValue: 500, title: 'Contact Me'},
    ]
  return (
    <Style.NavMenu value={classMoveNav}>
        <NavLink to='/' onClick={handleCloseMenu}>Home</NavLink>
        
        {
          optionsMenu && optionsMenu.map((opiton, index) => (
            <Link key={index} to={opiton.goTo}
            activeClass="active"
            smooth={true}
            offset={opiton.offsetValue}
            duration={500}
            spy={true}
            onClick={handleCloseMenu}
            onSetActive={handleSetActive}
            >{opiton.title}</Link>
          ))
        }

    </Style.NavMenu>
  )
}

export default Nav
