import StyledMain from 'content/main/styled-main';
import StyledContainer from 'component/styled-container';
import StyledImage from 'component/styled-image';
import x from 'content/main/about/x.png';
import styled from 'styled-components';

const CenteredText = styled.div`
    text-align: center;
`;

const About = () => (
    <StyledMain>
        <StyledContainer alignment='center' direction='vertical' gap='2' unit='rem'>
            <CenteredText>Carolina Ramos</CenteredText>
            <CenteredText>Graphic Designer - Porto, Portugal</CenteredText>
            <CenteredText>
                Young designer Carolina Ramos is graduated in Publicity and Graphic Design since
                2014, from Escola Superior de Estudos Industriais e de Gestão, that belongs to
                Instituto Politécnico do Porto.
            </CenteredText>
            <CenteredText>
                Currently, she's professionally elaborating projects in Graphic Design and Web and
                personally likes to creatively stimulate herself through photography and editorial
                design projects. She also works on small illustrative projects.
            </CenteredText>
            <StyledImage src={x} alt='X' />
            <CenteredText>carolinaramosdesign@gmail.com</CenteredText>
        </StyledContainer>
    </StyledMain>
);

export default About;
