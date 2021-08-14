import StyledHeader from 'content/header/styled-header';
import WeightedText from 'component/weighted-text';
import StyledContainer from 'component/styled-container';
import LinkContainer from 'component/link-container';
import StyledImage from 'component/styled-image';
import logo from 'content/header/logo.jpg';
import ProjectMenu from 'content/header/project-menu';

const Header = () => (
    <StyledHeader>
        <div>
            <WeightedText>Carolina Ramos</WeightedText> | Graphic Designer
        </div>
        <StyledContainer fill alignment='center'>
            <LinkContainer to='/'>
                <StyledImage src={logo} alt='Logo' />
            </LinkContainer>
        </StyledContainer>
        <StyledContainer fill alignment='right' gap='5' unit='%'>
            <LinkContainer to='/about'>
                <WeightedText>About</WeightedText>
            </LinkContainer>
            <ProjectMenu />
        </StyledContainer>
    </StyledHeader>
);

export default Header;
