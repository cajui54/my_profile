import styled from "styled-components";

const Heros = styled.article`
    min-height: 400px;
    z-index: 1;
    position: relative;
    top: -50px;

    .container-title-hero {
        width: 90%;
        margin: 10px auto;
        overflow: hidden;
    }
    .container-title-hero h3{ 
        transform: translate(100px, -13px);
    }

    .containe_img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: 50px auto;
        overflow: hidden;
        box-shadow:  0 0 50px #22d3ee, 0 2px 40px #bae6fd;
    }
    .containe_img img {
        width: 250px;
        height: 100%;
        filter: brightness(.7);
    }

    section {
        width: 98%;
        margin: 10px auto;
        color: #fff;
    }
    section h2 {
        margin: 10px 25px;
        
    }
    section span {
        width: 70%;
        color: #22d3ee;
        font-weight: bold;
        font-size: 30px;
        display: block;
        transform: scale(1.2);
        margin-left: 35px;
    }
    section p {
        width: 90%;
        margin: 10px auto;
        padding: 10px 15px;
        font-size: 1.5rem;
        line-height: 35px;
    }

    .container-media-social { 
        width: 80%;
        margin: 10px auto;
        display: flex;
        justify-content: space-around;
    }
    .container-media-social a {
        text-decoration: none;
        color: #22d3ee;
        font-size: 2.5rem;
    }
    .container-media-social a:hover {
        color: #fff;
    }

    .container-media-social a span {
        font-size: 8px;
        display: block;
        transform: translate(5px,-12px);
    }
    .container-media-social a:nth-child(4) span{
            margin-left: 0;
    }

    @media screen and (min-width: 481px) and (max-width: 767px) {
        .container-title-hero h3{
            
            transform: scale(.8) translate(105px, -17px);
        }
        .container-hero-info p {
            font-size: 1rem;
            line-height: 30px;
        }
    }

    @media screen and (min-width: 768px)  {
        display: flex;
        margin-top: 100px;

        .container-hero-info h2 {
            transform: scale(1.1) translateX(50px);
        }
        .container-hero-info h3 {
            margin-left: 90px;
            transform: translateY(-10px) scale(1.1);
        }
        .container-hero-info {
            width: 60%;
        }
        .container-media-social {
            margin-top: 20px;
            align-items: center;
            border-radius: 10px;
        }
      
    }

`

export default Heros;