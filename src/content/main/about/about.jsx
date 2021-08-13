import StyledMain from 'content/main/styled-main';
import StyledContainer from 'component/styled-container';
import CenteredContent from 'component/centered-content';
import StyledImage from 'component/styled-image';
import x from 'content/main/about/x.png';

const About = () => (
    <StyledMain>
        <StyledContainer alignment="center" direction="vertical" gap="2rem">
            <CenteredContent>Carolina Ramos</CenteredContent>

            <CenteredContent>Graphic Designer - Porto, Portugal</CenteredContent>
            <CenteredContent>
                Young designer Carolina Ramos is graduated in Publicity and Graphic Design since
                2014, from Escola Superior de Estudos Industriais e de Gestão, that belongs to
                Instituto Politécnico do Porto.
            </CenteredContent>
            <CenteredContent>
                Currently, she's professionally elaborating projects in Graphic Design and Web and
                personally likes to creatively stimulate herself through photography and editorial
                design projects. She also works on small illustrative projects.
            </CenteredContent>
            <StyledImage src={x} alt="X" />
            <CenteredContent>carolinaramosdesign@gmail.com</CenteredContent>
        </StyledContainer>
    </StyledMain>
);

export default About;
