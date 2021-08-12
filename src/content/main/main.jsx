import StyledContainer from 'component/styled-container';
import StyledImage from 'component/styled-image';
import StyledMain from './styled-main';

const Main = () => (
    <StyledMain>
        <StyledContainer alignment="center">
            <StyledImage src="/img/hello.jpg" alt="Hello" />
        </StyledContainer>
    </StyledMain>
);

export default Main;
