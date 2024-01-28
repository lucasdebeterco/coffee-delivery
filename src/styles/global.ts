import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: ${(props) => props.theme['background']};
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme['base-text']};
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme['purple-dark']};
    }

    input:focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
    }
    
    button {
        border: 0;
        cursor: pointer;
    }
    
    h1, h2, h3 {
        font-family: 'Baloo 2', sans-serif;
    }
`
