import StyledFooter from 'content/footer/styled-footer';
import { LinkContainer, CenteredContent, WeightedText } from 'component';

const Footer = () => (
    <StyledFooter>
        <p>Work selection 2014-2015.</p>
        <CenteredContent>
            <LinkContainer to='/about'>
                <WeightedText>Contacts</WeightedText>
            </LinkContainer>
        </CenteredContent>
    </StyledFooter>
);

export default Footer;
