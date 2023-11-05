import styled from "styled-components";

const Footers =  styled.footer`
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .container-title {
        text-align: center;
        width: 80%;
    }
    .container-title h2 {
        color: #fff;
    }
    .container-title h3 {
        color: #22d3ee;
        transform: translateY(-9px) scale(.8);
    }
`

export default Footers;
