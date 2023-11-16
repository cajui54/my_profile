import styled from "styled-components";
import imgBg from '../../assets/images/moon.jpg';

export const Skill = styled.div`

    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 5px;
    
    @media screen and (min-width: 1000px) and (min-height: 1000px){
        min-height: 50vh;
        padding: 10px 0;
    }
`

export const Stacks = styled.div`
    margin: 0 auto;
    width: 90%;
    min-height: 300px;

    .card-stack {
        box-shadow: 0 0 2px #000;
        background-color: #27272a;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 5px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    .card-stack svg {
        color: #39BFBD;
        font-size: 4rem;
    }
    .info {
        height: 50px;
        flex-grow: 1;
        padding: 5px;
    }
    h3 {
        letter-spacing: 1.5px;
        margin-top: 5px;
        color: #39BFBD;
    }
    p {
        margin-top: -10px; 
        letter-spacing: 1.1px;
    }

    @media screen and (min-width: 600px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        .card-stack {
        height: 20rem;
        flex-direction: column;
        justify-content: space-between;
    }
    .card-stack svg {
        margin-top: 50px;
        font-size: 7rem;
    }
    .info {
        height: 50px;
        flex-grow: 0;
        padding: 5px;
    }
    h3 {
        font-size: 2rem;
    }
    p {
        display: none;
    }
    }

    @media screen and (min-width: 1000px) {
        width: 60%;
    }
`