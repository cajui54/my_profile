import styled from "styled-components";

export const NavMenu = styled.nav`
  position: absolute;
  right: ${(props) => props.value};
  z-index: 1;
  margin-top: 101vh;
  height: 90vh;
  width: 100%;
  background-color: #1e293b;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease-in-out;

  a {
    font-family: "Roboto", sans-serif;
    font-size: 1.7rem;
    margin: 0;
    padding: 4rem 0;
    color: #fff;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
  }

  a::after {
    content: "";
    background-color: #39bfbd;
    display: block;
    width: 0;
    height: 6px;
    margin-top: 5px;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }
  a:hover::after,
  .active::after {
    width: 50px;
  }

  @media screen and (min-width: 700px) {
    position: relative;
    right: 0;
    flex-direction: row;
    height: 70%;
    margin-top: 5px;
    width: 600px;
    right: 20px;
    background-color: transparent;
  }
`;
