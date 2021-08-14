import { createGlobalStyle } from 'styled-components';
import { render } from 'react-dom';
import { StrictMode } from 'react';
import App from 'app';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        min-width: 0;
        min-height: 0; 
    }

    html,
    body {  
        height: 100%;
        width:100%;
        font-size: 1.2vw;
    }

    #root,
    .react-orientation {
        width: 100%;
        height: 100%;
    }
`;

render(
    <StrictMode>
        <GlobalStyle />
        <App />
    </StrictMode>,
    document.getElementById('root')
);
