import StyledFooter from 'content/footer/styled-footer';
import LinkContainer from 'component/link-container';
import CenteredContent from 'component/centered-content';
import WeightedText from 'component/weighted-text';

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
