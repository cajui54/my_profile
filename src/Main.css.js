import styled from "styled-components";

export const Main = styled.main`
    position: relative;
    width: 100vw;
    background-color: red;
    overflow-x: hidden;
    z-index: 1;
`

export const Titles = styled.div`
    margin: 50px auto;
    width: 90%;

    h2 {
        font-size: 4.5rem;
        color: #39BFBD;
        
    }
    h3 {
        color: #d1d5db;
        margin-top: -40px;
        font-size: 1.5rem;
        font-weight: 300;
    }
    @media screen and (min-width: 700px) {
        text-align: center;
    }
`