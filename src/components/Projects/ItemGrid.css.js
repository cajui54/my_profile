import styled from "styled-components"

export const ItemGrid = styled.div`
    width: 100%;
    min-height: 80vh;
    color: #fff;

    @media screen and (max-width: 999px){
        display: none;
    }
`
export const ContainerCard = styled.div`
    width: 80%;
    margin: 5px auto;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-gap: 20px;
`
export const Card = styled.div`
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 400px;
    border-radius: 10px;
    overflow: hidden;

    a {
        overflow: hidden;
        display: block;
        width: 100%;
        height: 50%;
    }
    img {
        width: 100%;
        height: 100%;
        transition: all .5s ease-in-out;
    }
    img:hover {
        transform: scale(1.3);
    }
    h2 {
        color: #fff;
        box-sizing: border-box;
        text-align: center;
        margin-top: -10px;
        text-shadow: 5px 5px 5px #475569;
        font-size: 2.5rem;
    }
`

export const ContatinerTecIcons = styled.div`
    background-color: #0f172a;
    width: 80%;
    padding: 10px 0;
    margin: 5px auto;
    border-radius: 10px;
    position: relative;
    
    .subTitle {
        position: absolute;
        top: -5px;
    }
    div {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        font-size: 1.9rem;
        color: #39BFBD;
    }
    div span svg {
        font-size: 2.5rem;
    }

`

export const Paragraph = styled.p`
    color: #fff;
    width: 80%;
    margin: 20px auto;
    font-size: 1.2rem;
    text-align: center;
`

export const ContainerSocial = styled.div`
    width: 50%;
    padding: 5px;
    margin: -10px auto;
    display: flex;
    a {
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin-left: 10px;
        transition: all .5s ease-in-out;
    }
    a:hover {
        color: #39BFBD;
    }
    a svg {
        font-size: 5.0rem;
    }
    a span {
        margin: 3px;
        font-size: .5rem;
    }
`