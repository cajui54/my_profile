import styled from "styled-components";
import img from '../../assets/images/moon.jpg';

export const Project = styled.div`
    background-image: linear-gradient(to top, #2C2C2C 20%, transparent 60%), linear-gradient(to bottom, #2C2C2C 20%, transparent), url(${img});
    background-repeat: no-repeat;
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