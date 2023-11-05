import styled from "styled-components";

const Skill = styled.section`
    margin: 30px auto;
    width: 95%;
    
    .container-skills {
        margin: 10px auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5px;
    }
    .container-skills div {
        width: 50px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container-skills div i {
        font-size: 70px;
        background: -webkit-linear-gradient(-45deg, #22d3ee, #0f766e,  #2dd4bf, #06b6d4, #cffafe) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% 300%;
    }
    .container-skills div p {
        font-family: 'Ubuntu', sans-serif;
        letter-spacing: 1.2px;
        background: -webkit-linear-gradient(-45deg, #22d3ee, #0f766e, #2dd4bf, #06b6d4, #cffafe) no-repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% 300%;
    }
    .container-skills div svg {
        color: #22d3ee;
        font-size: 70px;
    }
    @media screen and (min-width: 768px) {
        .container-skills {
            width: 70%;
        }
    }
`
export default Skill;