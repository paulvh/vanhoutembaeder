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
    }
    
    main {
        
    } 

    .hidden {
        display: none; 
    }

    .visible {
        display: block;
    }

    
`
