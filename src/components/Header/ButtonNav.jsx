import {useRef, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showMenu } from '../../redux/userSlice';
import MenuBtn from './ButtonNav.css';

const ButtonNav = () => {
    const menuBtnRef = useRef('');
    const dispatch = useDispatch();
    const { menuOpen } = useSelector(state => state.profile);

    useEffect(() => {
      if(menuOpen) menuBtnRef.current.classList.remove('open');
     }, [menuOpen]);

    const handleClick = () => {
      
        if(menuOpen) {
            menuBtnRef.current.classList.add('open');
            dispatch(showMenu({type: false}));
        } else {
            menuBtnRef.current.classList.remove('open');
            dispatch(showMenu({type: true}));
        }
    }

  return (
    <MenuBtn className='menuBtn' onClick={handleClick}>
      <div className="menuBtn__burger" ref={menuBtnRef}></div>
    </MenuBtn>
  )
}

export default ButtonNav
