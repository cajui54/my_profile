import styled from "styled-components";

const HeaderStyled = styled.header`
    position: relative;
    background-color: #0a0a0a;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    /*
    .container-logo {
        width: 150px;
        height: 50px;
        color: #fff;
        margin-left: 20px;
        border-left: 3px solid #22d3ee;
        display: flex;
        flex-direction: column;
    }
    .container-logo h2, h3 {
        margin-left: 40px;
    }
    .container-logo h2 {
        margin-top: 10px;
        font-size: 10px;
        transform: scale(1.3) translateX(-13px);
    }
    .container-logo h3 {
        font-size: 11px;
        transform: scale(1.6);
    }*/
    .logo {
        background-color: red;
        height: 60%;
        width: 100px;
        margin-left: 50px;
    }
    .logo img{
        width: 100%;
        height: 100%;
    }

`

export default HeaderStyled;