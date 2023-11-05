import styled from "styled-components";

const Projects = styled.section`
    .container-slide {
        position: relative;
    }
    .icon-btns {
        color: #fff;
        font-size: 2rem;
        position: absolute;
        top: 70%;
        filter: drop-shadow(0 0 5px black);
        cursor: pointer;
        transition: all .5s ease-in;
    }
    .icon-btns:hover {
        transform: scale(1.3);
        color: #22d3ee;
    }
    .btn-right {
        right: 10px;
    }
    .slide-Project {
        margin: 10px auto;
        width: 100%;
        height: 500px;
    }
    .slide-Project img { 
        display: block;
        width: 100%;
        height: 200px;
        filter: brightness(.6);
        cursor: pointer;
        z-index: 0;
    }
    .container-img {
        margin: 5px auto;
        width: 100%;
        height: 200px;
        position: relative;
        overflow: hidden;
        border-radius: 10px;
    }
    .container-img div {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background-image: linear-gradient(to top, black , rgba(60, 60, 60, .6) 30%, transparent);
    }
    .slide-Project img:hover {
        transform: scale(1.1);
    }
    .slide-Project h2{
        color: #fff;
        font-family: 'Oxygen', sans-serif;
        font-size: 30px;
        text-align: center;
        width: 100%;
        margin: 10px auto;  
        transform: translateY(-30px);
        z-index: 2;
    }
    .card-skills {
        background-color: #020617;
        width: 70%;
        margin: 10px auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 10px;
        border: none;
    }
    .card-skills legend{ 
        color: #fff;
        font-size: 10px;
    } 
    .card-skills svg {
        font-size: 3rem;
        color: #22d3ee;
    }
    .slide-Project p {
        text-align: center;
        width: 70%;
        margin: 20px auto;
        color: #cbd5e1;
        line-height: 30px;
        letter-spacing: 1.0px;
    }
    .container-details  {
        width: 40%;
        margin: 5px auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 25px;
        
    }
    .container-details a { 
        text-decoration: none;
        color: #22d3ee;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .container-details a span { 
        margin-top: 5px;
        font-size: .5rem;
    }
    @media screen and (min-width: 720px) {
        .container-slide {
            margin: 10px auto;
            width: 400px;
        }
    }
`
export default Projects;