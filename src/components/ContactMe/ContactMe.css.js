import styled from "styled-components";

export const ContactMe = styled.div`
    width: 100%;
    min-height: 90vh;
    box-sizing: border-box;
    padding: 20px;
`;

export const ListContact = styled.ul`
    li {   
        padding: 10px 5px;
        margin: 10px 0;
        border-radius: 10px;
        color: #64748b;
        display: flex;
    }
    li a {
        color: #64748b;
        text-decoration: none;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }
    li a:hover {
        color: #39BFBD;
    }
    li svg {
        font-size: 1.5rem;
        margin: 0 5px;
        color: #39BFBD;
    }
    li span {
        font-size: 1.6rem;
        color: #fff;
    }
    li:first-child {
        flex-direction: column;
        justify-content: center;
    }
    li:first-child p:first-child{ 
        font-size: 1.5rem;
    }
    li:first-child p:first-child svg {
        color: #fde68a;
    }
    li:first-child p:last-child{
        color: #fff;
        margin-top: -15px;
    }
    li:last-child svg {
        color: red;
    }
    @media screen and (min-width: 700px) {
        background-color: black;
        width: 30%;
        margin: 10px auto;
        border-radius: 10px;
    }
`