import styled from "styled-components";

export const Item = styled.div`
    background-color: #27272a;
    width: 80%;
    min-height: 50rem;
    margin: 5px auto;
    box-shadow: 0 0 5px #000;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    .btnLeft, .btnRight {
        z-index: 2;
        width: 3rem;
        height: 10rem;
        position: absolute;
        top: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 5rem;    
    }
    .btnLeft {
        left: 10px;
    }
    .btnRight {
        right: 10px;
    }
    .btnLeft svg, .btnRight svg {
        transform: scale(1.2);
        cursor: pointer;
        transition: all .3s ease-in-out;
    }
    .btnLeft svg:hover, .btnRight svg:hover{
        color: #39BFBD;
    } 
  

    @media screen and (min-width: 700px){
        width: 30rem;
        height: 300px;
    }

    h2 {
        position: relative;
        z-index: 1;
        color: red;
        font-size: 2.5rem;
        text-align: center;
        margin-top: -55px;
        color: #39BFBD;
        text-shadow: 0 2px 3px #000;
    }
    @media screen and (min-width: 1000px) {
        display: none;
    }
`   

export const LinkImage = styled.div`
    z-index: 0;
    height: 200px;
    border-radius: 5px;
    width: 100%;
    position: relative;
    top: 0;
    overflow: hidden;
    a {
        overflow: hidden;
        width: 100%;
        height: 100%;
        display: block;
    }
    a img {
        z-index: 0;
        display: block;
        width: 100%;
        height: 210px;
        transition: all .5s ease-in-out;
    }
 
    .bgGradient {
        position: absolute;
        width: 100%;
        height: 200px;
        background: linear-gradient(to top, #27272a 20%, transparent);
        opacity: 1;
        transition: all .5s ease-in-out;
    }
    .bgGradient:hover {
        opacity: 0;
    }
    .bgGradient:hover + img{
       transform: scale(1.2);
    } 
`

export const StackContainer = styled.div`
    padding: 10px;
    margin: auto;
    margin-top: 10px;
    width: 80%;
    color: #39BFBD;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin: 0 5px;
    }
`

export const Description = styled.p`
    width: 80%;
    margin: 10px auto;
    font-size: 2rem;
    text-align: center;
    line-height: 30px;
`

export const LinksInfo = styled.div`
    width: 60%;
    padding: 10px 5px;
    margin: 10px auto;
    text-align: center;
    display: flex;
    justify-content: space-evenly;

    a {
        color: #64748b;
        text-decoration: none;
        font-size: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all .5s ease-in-out;
    }
    a:hover {
        color: #fff;
        transform: scale(1.2);
    }
    a svg {
        font-size: 2.5rem;
    }
    a span {
        font-size: 1rem;
    }
`