import styled from "styled-components";

const Contact = styled.section`
   ul {
       height: 200px;
       width: 80%;
       margin: 10px auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        color: #22d3ee;
        font-size: 1.5rem;
        font-weight: bold;
        list-style: none;
   }
   ul a {
    text-decoration: none;
   }
   ul li span {
    font-size: 1.2rem;
    color: #fff;
   }
   ul li:nth-child(1) svg{
    color: #2563eb;
   }
   ul li:nth-child(2) svg{
    color: #22c55e;
   }
   ul li:nth-child(3) svg:nth-child(1){
    color: #dc2626;
   }
   ul li:nth-child(3) svg:nth-child(3){
    color: #166534;
   }
   ul svg {
    margin: 0 10px;
   }

   
`
export default Contact;