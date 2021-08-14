import StyledMain from 'content/main/styled-main';

import { StyledContainer, StyledImage } from 'component';
import hello from 'content/main/hello/hello.jpeg';

const Hello = () => (
    <StyledMain>
        <StyledContainer fill alignment='center'>
            <StyledImage src={hello} alt='Hello' />
        </StyledContainer>
    </StyledMain>
);

export default Hello;
