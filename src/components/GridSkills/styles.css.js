import styled from "styled-components";

export const SkillContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;
export const TitlesContainer = styled.div`
  margin: 2rem auto;
  width: 90%;

  h2 {
    font-family: "Oxygen", sans-serif;
    font-size: 20px;
    color: #39bfbd;
  }
  h3 {
    font-family: "Ubuntu", sans-serif;
    letter-spacing: 1.2px;
    line-height: 27px;
    font-size: 25px;
    color: #e5e7eb;
    margin-top: -16px;
  }
  @media screen and (min-width: 900px) {
    h2 {
      font-size: 25px;
    }
    h3 {
      margin-top: -20px;
      font-size: 35px;
    }
  }
`;

export const CartContainer = styled.div`
  width: 90%;
  margin: 10px auto;
  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const SkillTitle = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;

  svg {
    font-size: 30px;
    margin: 0 20px;
    color: ${(props) => props.color_svg};
  }
  h2 {
    font-size: 20px;
    color: ${(props) => props.color_svg};
  }
  h3 {
    margin-top: -20px;
    font-size: 10px;
    font-weight: bold;
    color: #ffff;
    letter-spacing: 1.5px;
  }
`;
export const CardSkill = styled.div`
  dt {
    margin-top: 50px;
  }
  dt,
  dd {
    background-color: #020617;
    border-radius: 5px;
    overflow: hidden;
  }
  dd {
    background-color: #0f172a;
    margin-top: 5px;
  }
  @media screen and (min-width: 500px) {
    width: 400px;
  }
`;
