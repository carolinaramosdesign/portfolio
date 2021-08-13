import { createGlobalStyle } from 'styled-components';
import { render } from 'react-dom';
import { StrictMode } from 'react';
import App from 'app';

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
