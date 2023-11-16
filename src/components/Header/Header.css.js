import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    width: 100%;
    height: 8rem;
    background-color: #2C2C2C;
    box-shadow: 0 0 2px black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 3;
    a {
        text-decoration: none;
    }
    .header__logo_Link {
        border: none;
        border-left: 3px solid #39BFBD;
        margin-left: 20px;
        width: 4rem;
        height: 4rem;
        cursor: pointer;
        text-decoration: none;
        position: relative;
        color: #fff;
    }


    .header__logo_Link p {
        width: 11rem;
        margin-left: 1px;
        text-align: center;
        font-size: .8rem;
        font-weight: bold;
        font-family: 'Ubuntu', sans-serif;
        letter-spacing: 1.1px;
    }
    .header__logo_Link h2 {
        width: 100px;
        margin-top: -10px;
        margin-left: 5px;
    }
    .header__logo_Link h2 span {
        color: #39BFBD;
    }
    .header__logo_Link h3 {
        margin-top: -15px;
        margin-left: 10px;
    }

`


