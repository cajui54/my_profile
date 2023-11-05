import styled from "styled-components";

const Nav = styled.nav`
    position: absolute;
    top: 100px;
    background-color: #0f172a;
    width: 100%;
    height: 100vh;
    transition: all 1s ease-in;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 2;

    a {
        text-decoration: none;
        display: block;
        width: 100%;
        text-align: center;
        padding: 50px 0;
        font-size: 20px;
        color: #22d3ee;
        cursor: pointer;
        font-weight: bold;
        letter-spacing: 1.2px;
    }
    a:hover {
        color: #fff;
        background-color: #22d3ee;
    }

    @media screen and (min-width: 820px) {
        position: relative;
        flex-direction: row;
        left: 0;
        top: 0;
        height: 60%;
        width: 70%;
        background-color: transparent;

        a {
            font-weight: 400;
        }
        
        a:hover {
        color: #fff;
        font-weight: bold;
        background-color: transparent;
        }
    }
`

export default Nav;