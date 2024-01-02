import styled from "styled-components";
import img from '../../assets/images/moon.jpg';

export const Project = styled.div`
    background-image:  linear-gradient(to bottom, #2C2C2C 10%, rgba(255,255,255, 0.1) , #2C2C2C 50%), url(${img});
    background-repeat: no-repeat;
    background-attachment: fixed 20%;
    background-position-y: 200px;
    background-size: 100%;
    min-height: 100vh;
    width: 100%;
    margin-top: 30px;
    
    @media screen and (min-width: 1000px) {

    }
    @media screen and (min-width: 1000px) and (min-height: 1000px){
        min-height: 50vh;
    }
    
`