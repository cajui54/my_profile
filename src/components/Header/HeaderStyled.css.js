import styled from "styled-components";

const HeaderStyled = styled.header`
    position: relative;
    background-color: #000;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;

    .logo {
        background-color: red;
        height: 90px;
        width: 90px;
        margin-left: 10px;
        overflow: hidden;
    }
    .logo img{
        width: 100%;
        height: 100%;
    }

`

export default HeaderStyled;