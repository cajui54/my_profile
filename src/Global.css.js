import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /*
        font-family: 'Oxygen', sans-serif;
        font-family: 'Roboto', sans-serif;
        font-family: 'Ubuntu', sans-serif;

    */
    *{
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #0c0a09;
        font-weight: bold;
        font-family:  'Roboto',  'Oxygen', Courier, monospace, sans-serif;
        overflow-x: hidden;
    }
    .sectionMain {
        margin: 50px auto;
        width: 95%;
    }
    //Nav 
    .displayNone {
        left: 100%;
        width: 0;
        overflow: hidden;
    }
    .displayOn {
        left: 0;
    }

    .container-titles {
        overflow-x: hidden;
        padding-left: 20px;
        height: 70px;
        text-align: left;
    }
    .container-titles h2 {
        font-size: 30px;
        color: #22d3ee;
        letter-spacing: 1.3px;
    }
    .container-titles h3 {
        font-size: 15px;
        color: #fff;
    }
    @media screen and (min-width: 768px) {
        .container-titles {
            width: 90%;
            height: 100px;
            margin: 50px auto;
            padding: 15px;
        }
        .container-titles h2 {
            font-size: 45px;
        }
        .container-titles h3 {
          transform: translateY(-10px);
          font-size: 30px;
        }
        .sectionMain {
            width: 80%;
        }
     
    }
`
