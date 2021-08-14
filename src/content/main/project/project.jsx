import { Redirect, useParams } from 'react-router-dom';
import StyledMain from 'content/main/styled-main';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { isProject, getImages, getConfig } from 'project';
import styled from 'styled-components';
import StyledContainer from 'component/styled-container';
import StyledImage from 'component/styled-image';

const CarouselContainer = styled.div`
    height: 85%;

    .control-arrow {
        padding: 10% !important;

        &:before {
            border: none !important;
        }

        &:hover {
            background: none !important;
        }
    }

    /* https://github.com/leandrowd/react-responsive-carousel/issues/265 */
    .carousel-root,
    .carousel,
    .carousel .slider-wrapper,
    ul,
    li {
        height: 100% !important;
    }
`;

const Project = () => {
    const { project } = useParams();

    if (!isProject(project)) {
        return <Redirect to='/' />;
    }

    const { description } = getConfig(project);

    return (
        <StyledMain>
            <StyledContainer fill direction='vertical' alignment='stretch' gap='1' unit='rem'>
                <CarouselContainer>
                    <Carousel
                        showThumbs={false}
                        showIndicators={false}
                        showStatus={false}
                        infiniteLoop
                    >
                        {getImages(project).map((src, index) => (
                            <StyledImage key={index} src={src} alt={`${project} ${index}`} />
                        ))}
                    </Carousel>
                </CarouselContainer>
                <StyledContainer direction='vertical' alignment='right' gap='0.75' unit='rem'>
                    {description.map(line => (
                        <StyledContainer key={line} direction='horizontal'>
                            {line}
                        </StyledContainer>
                    ))}
                </StyledContainer>
            </StyledContainer>
        </StyledMain>
    );
};

export default Project;
