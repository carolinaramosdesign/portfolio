import StyledHeader from 'content/header/styled-header';
import { WeightedText, StyledContainer, StyledImage, LinkContainer } from 'component';

import logo from 'content/header/logo.jpg';
import ProjectMenu from 'content/header/project-menu';

const Header = () => (
    <StyledHeader>
        <StyledContainer fill>
            <WeightedText>Carolina Ramos</WeightedText> | Graphic Designer
        </StyledContainer>
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
