import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /*
        font-family: 'Oxygen', sans-serif;
        font-family: 'Roboto', sans-serif;
        font-family: 'Ubuntu', sans-serif;
        color: #39BFBD; green
    */
    html {
        font-size: 62.5%;
    }
    body {
        font-family: 'Oxygen', sans-serif;
        background-color: #2C2C2C;
        margin: 0;
        padding: 0;
        color: #fff;
        
    }
    
    main {
        width: 100vw;
        overflow-x: hidden;
    }
    .activeNav {
        color: red;
    }
`
