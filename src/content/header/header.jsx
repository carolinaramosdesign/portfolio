import StyledHeader from 'content/header/styled-header';
import StyledContainer from 'component/styled-container';
import StyledImage from 'component/styled-image';

const Header = () => (
    <StyledHeader>
        <div>
            <b>Carolina Ramos</b> | Graphic Designer
        </div>
        <StyledContainer alignment="center">
            <StyledImage src="/img/logo.jpg" alt="Logo" />
        </StyledContainer>
        <StyledContainer alignment="left" gap="5%">
            <div>About</div>
            <div>Projects</div>
        </StyledContainer>
    </StyledHeader>
);

export default Header;
