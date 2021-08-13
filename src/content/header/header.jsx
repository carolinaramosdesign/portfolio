import StyledHeader from 'content/header/styled-header';
import WeightedText from 'component/weighted-text';
import StyledContainer from 'component/styled-container';
import LinkContainer from 'component/link-container';
import StyledImage from 'component/styled-image';
import logo from 'content/header/logo.jpg';

const Header = () => (
    <StyledHeader>
        <div>
            <WeightedText>Carolina Ramos</WeightedText> | Graphic Designer
        </div>
        <StyledContainer alignment="center">
            <LinkContainer to="/">
                <StyledImage src={logo} alt="Logo" />
            </LinkContainer>
        </StyledContainer>
        <StyledContainer alignment="left" gap="5%">
            <LinkContainer to="/about">
                <WeightedText>About</WeightedText>
            </LinkContainer>
            <div>Projects</div>
        </StyledContainer>
    </StyledHeader>
);

export default Header;
