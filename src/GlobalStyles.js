import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    
    :root{
        --darkgrey: #3d474d;
        --lightgrey: #efefef;
        --font-color: #518387;
    }
    
    * {
        box-sizing: border-box;
    }
    
    body {
        background: var(--lightgrey);
        height: 100vh;
        margin: 0;
        color: var(--font-color);
    }
    
    main {
        padding: 20px;
    } 

    h1,h2,h3,h4,h5,h6{
        text-align:center;
    }

    .hidden {
        display: none; 
    }

    .visible {
        display: block;
    }

    
`
