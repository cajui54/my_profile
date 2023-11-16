import { useSelector, useDispatch } from 'react-redux';
import { menuStatus, putOnClass, openNav} from '../../../redux/slices/sliceMenu';
import * as Style from './ButtonMenu.css'

const ButtonMenu = () => {
    const {openMenu, classBtnMenu, classMoveNav} = useSelector(({menuSlice}) => menuSlice)
    const dispatch = useDispatch();
    
    const handleClickMenu = (e) => {
        if(!openMenu) {
            dispatch(putOnClass('open'));
            dispatch(menuStatus(true));
            dispatch(openNav('0%')); 
        } else {
            dispatch(putOnClass(''));
            dispatch(menuStatus(false));
            dispatch(openNav('-100%'));
        }
    }

  return (
    <Style.ButtonMenu >
        <div className={`menu-btn ${classBtnMenu}`} onClick={handleClickMenu}>
            <div className='menu-btn__burger'></div>
        </div>
    </Style.ButtonMenu>
  )
}

export default ButtonMenu
