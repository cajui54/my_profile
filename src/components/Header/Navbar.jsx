import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Nav from './NavBar.css';
import { showMenu } from '../../redux/userSlice';


const Navbar = () => {
  const [widthScreen, setWidthScreen] = useState(window.screen.width);
  const dispatch = useDispatch();
  const listOptions = [
    {type: 'Home', toScroll: '#home'},
    {type: 'About Me', toScroll: '#aboutMe'},
    {type: 'My Skills', toScroll: '#mySkills'},
    {type: 'Projects', toScroll: '#projects'},
    {type: 'Contacts', toScroll: '#contactMe'}
  ];
  
  const { displayNav, menuOpen } = useSelector(state => state.profile);
  
  const handleClick = (scroll) => {
    if(widthScreen < 820) dispatch(showMenu({type: true}));
    document.querySelector(scroll).scrollIntoView({behavior: 'smooth'});
  }

  useEffect(() => {
    setWidthScreen(window.screen.width);
    if(widthScreen > 819) {
      dispatch(showMenu({type: false}));
    }
  }, [widthScreen])

  return (
    <Nav className={ displayNav }>
      {
        listOptions && (
          listOptions.map((option, index) => (
            <NavLink to={option.toScroll} key={index} onClick={() => handleClick(option.toScroll) }>
              {option.type}
            </NavLink>
          ))
        )
      }
    </Nav>
  )
}

export default Navbar
