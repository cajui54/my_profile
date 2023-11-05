import styled from "styled-components";

const Form = styled.form`
    width: 80%;
    padding: 10px;
    margin: 10px auto;
    border-radius: 5px;

    .container-titles-email {
        width: 80%;
        text-align: center;
        overflow: hidden;
        padding: 15px;
        margin-left: 10px;
    }
    .container-titles-email h2 {
        color: #fff;
        transform: scale(1.5);
    }
    .container-titles-email h3 {
        color: #22d3ee;
        margin-left: 5px;
        transform: scale(1.1);
    }

    .container-inputs {
        margin-top: 20px;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .container-inputs label {
        margin-bottom: 10px;
        padding: 10px 5px;
        position: relative;
    }
    .container-inputs label svg {
        color: #fff;
        position: absolute;
        top: 26px;
        left: 13px;
    }
    .container-inputs label input, textarea{
        background-color: #475569;
        color: #fff;
        padding: 15px 30px;
        border-radius: 10px;
        border: none;
        outline: none;
        font-size: 1.2rem;
        letter-spacing: 1.2px;
    }
    .container-inputs label input:focus + svg,
    .container-inputs label textarea:focus + svg {
        color: #22d3ee;
        transform: scale(1.2);
        filter: drop-shadow(0 5px 6px #7dd3fc);
    }
    
    .container-inputs label textarea {
        width: 90%;
        font-size: 1.1rem;
        
    }
    button {
        background-color: #22d3ee;
        padding: 10px 0;
        width: 100%;
        margin: 10px auto;
        border-radius: 10px;
        border: none;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }
    button svg {
        margin-left: 10px;
        font-size: 20px;
    }

    @media screen and (min-width: 768px) { 
        width: 50%;
        .container-titles-email h2{
            margin-left: 100px;
        }
        button {
            width: 90%;
        }
    }

`

export default Form;