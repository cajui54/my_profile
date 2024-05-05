import styled from "styled-components";
import img from "../../assets/images/moon.jpg";

export const Hero = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0), #2c2c2c), url(${img});
  background-position-x: 850px;
  width: 100%;
  min-height: 100vh;
  margin-top: 55px;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  @media screen and (min-width: 1000px) and (min-height: 1000px) {
    min-height: 40vh;
  }
`;
export const ProfileContainer = styled.div`
  margin: 20px auto;
  background-image: url(${img});
  background-size: 600px;
  background-position-y: -50px;
  border: 2px solid #fff;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  overflow: hidden;
  animation: profile 10s ease-in-out 0.5s infinite alternate-reverse forwards;

  @keyframes profile {
    to {
      background-position-x: 0;
    }
    from {
      background-position-x: 200px;
    }
  }

  img {
    width: 100%;
    display: block;
    margin-top: 40px;
    filter: brightness(0.7);
    transform: scale(1.2);
    animation: fadeDownImg 0.9s ease-in-out;
  }

  @keyframes fadeDownImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (min-width: 800px) {
    margin-top: 50px;
    margin-left: 50px;
    width: 30rem;
    height: 30rem;
    img {
      margin-top: 60px;
    }
  }
  @media screen and (min-width: 1000px) {
    position: relative;
    top: 10%;
    left: 150px;
  }
`;

export const TitlesBio = styled.div`
  top: 50%;
  margin: 30px auto;
  width: 80%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2.5rem;
    color: #cbd5e1;
  }
  span {
    color: #39bfbd;
    display: inline-block;
    position: relative;
    font-size: 3rem;
  }
  @media screen and (min-width: 800px) {
    margin-top: 80px;
    margin-left: 10px;
    justify-content: flex-start;

    h2 {
      margin-left: 0;
    }
    span {
      font-size: 4.5rem;
    }
  }
`;

export const InfoBio = styled.article`
  position: relative;
  top: 10%;
  width: 80%;
  margin: -25px auto;
  color: #cbd5e1;
  font-size: 2rem;
  text-align: center;
  animation: fadeDown 0.8s;

  @keyframes fadeDown {
    0% {
      opacity: 0;
      transform: translateY(-30px) scale(0.9);
    }
    100% {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
  }
  p {
    color: #fff;
    text-shadow: 3px 2px 2px #2c2c2c;
  }
  @media screen and (min-width: 800px) {
    width: 700px;
    height: 100%;
    p {
      width: 80%;
      line-height: 35px;
      text-align: left;
    }
  }
  @media screen and (min-height: 800px) {
    p {
      line-height: 40px;
    }
  }
`;
export const SVGIconsContainer = styled.div`
  @media screen and (max-width: 375px) {
    width: 90%;
    a svg {
      font-size: 3.5rem;
    }
    a span {
      margin: 2.5px;
      font-size: 1rem;
    }
  }
  padding: 10px;
  width: 80%;
  margin: 50px auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  a {
    color: #39bfbd;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    text-decoration: none;
  }
  a svg {
    font-size: 3.5rem;
    transition: all 0.6s ease-in-out;
  }
  a:hover > svg {
    transform: scale(1.2);
    filter: brightness(0.6);
  }
  a span {
    margin-top: 3px;
    font-size: 1.2rem;
  }

  @media screen and (min-height: 800px) and (max-width: 500px) {
    margin-top: 30px;
    width: 80%;
  }
  @media screen and (min-width: 850px) {
    width: 400px;
    margin-left: 0;
  }
`;
