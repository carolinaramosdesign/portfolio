import { Redirect, useParams } from 'react-router-dom';
import StyledMain from 'content/main/styled-main';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { isProject, getImages, getConfig } from 'project';
import styled from 'styled-components';
import StyledContainer from 'component/styled-container';
import StyledImage from 'component/styled-image';

const CarouselContainer = styled.div`
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
    .carousel-wrapper,
    .carousel,
    .carousel > .slider-wrapper,
    .carousel > .slider-wrapper > .slider {
        height: 100%;
    }
`;

const Project = () => {
    const { project } = useParams();

    if (!isProject(project)) {
        return <Redirect to='/' />;
    }

    const { description, year } = getConfig(project);

    return (
        <StyledMain>
            <StyledContainer direction='vertical' alignment='center' gap='2' unit='rem'>
                <CarouselContainer>
                    <Carousel
                        showThumbs={false}
                        showIndicators={false}
                        showStatus={false}
                        infiniteLoop
                        className='carousel-wrapper'
                    >
                        {getImages(project).map((src, index) => (
                            <StyledImage key={index} src={src} alt={`${project} ${index}`} />
                        ))}
                    </Carousel>
                </CarouselContainer>
                <div>
                    {description}
                    <br />
                    {year}
                </div>
            </StyledContainer>
        </StyledMain>
    );
};

export default Project;
