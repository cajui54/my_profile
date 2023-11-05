import styled from "styled-components";

const MenuBtn = styled.div`
    margin-right: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    cursor: pointer;
    transition: all .5s ease-in-out;

    .menuBtn__burger {
        width: 50px;
        height: 6px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(255,101,42,.2);
        transition: all .5s ease-in-out;
    }
    .menuBtn__burger::before,
    .menuBtn__burger::after {
        content: '';
        position: absolute;
        width: 50px;
        height: 6px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(255,101,42,.2);
        transition: all .5s ease-in-out;
    }
    .menuBtn__burger::before {
        transform: translateY(-16px);
    }
    .menuBtn__burger::after {
        transform: translateY(16px);
    }
    .open {
        transform: translateX(-50px);
        background-color: transparent;
        box-shadow: none;
    }
    .open::before {
        transform: rotate(45deg) translate(35px, -35px);
    }
    .open::after {
        transform: rotate(-45deg) translate(35px, 35px);
    }
    @media screen and (min-width: 820px) {
        display: none;
        
    }
`

export default MenuBtn; 