import styled from "styled-components";

export const ButtonMenu = styled.div`
    .menu-btn {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 3rem;
        width: 5rem;
        height: 5rem;
        cursor: pointer;
        transition: all .5s ease-in-out;
    
    }
  

    .menu-btn__burger {
        z-index: -1;
        width: 4.5rem;
        height: .6rem;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(255, 101, 47,.2);
        transition: all .5s ease-in-out;
    }
    .menu-btn__burger::before,
    .menu-btn__burger::after {
        content: '';
        position: absolute;
        width: 4.5rem;
        height: .6rem;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(255, 101, 47,.2);
        transition: all .5s ease-in-out;
    }
    .menu-btn__burger::before {
        transform: translateY(-14px);
    }
    .menu-btn__burger::after {
        transform: translateY(14px);
    }
    .menu-btn.open .menu-btn__burger {
        transform: translateX(-50px);
        background-color: transparent;
        box-shadow: none;
    }
    .menu-btn.open .menu-btn__burger::before {
        transform: rotate(45deg) translate(35px, -35px);
    }
    .menu-btn.open .menu-btn__burger::after {
        transform: rotate(-45deg) translate(35px, 35px);

    }
    @media screen and (min-width: 700px) {
        display: none;
    }
`