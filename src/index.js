import { render } from 'react-dom';
import { StrictMode } from 'react';
import App from 'app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
`;

render(
    <StrictMode>
        <GlobalStyle />
        <App />
    </StrictMode>,
    document.getElementById('root')
);
