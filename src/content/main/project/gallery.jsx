import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/components/navigation/navigation.min.css';
import { getImages, getProjects } from 'project';
import StyledImage from 'component/styled-image';
import { number, oneOf } from 'prop-types';

SwiperCore.use(Navigation);

const GalleryContainer = styled.div.withConfig({
    shouldForwardProp: prop => !['margin'].includes(prop)
})`
    width: 100%;

    .swiper-container {
        width: 100%;
        height: 100%;

        .swiper-slide-active {
            display: flex;
            justify-content: center;
        }

        .swiper-button-next,
        .swiper-button-prev {
            left: auto;
            right: auto;
            top: auto;
            margin-top: auto;
            height: 100%;
            width: 25%;

            &:after {
                content: none;
            }
        }

        .swiper-button-prev {
            ${({ margin = 0 }) => `left: ${margin}px;`}
        }

        .swiper-button-next {
            ${({ margin = 0 }) => `right: ${margin}px;`}
        }
    }
`;

GalleryContainer.propTypes = {
    margin: number
};

const Gallery = ({ project }) => {
    const containerRef = useRef();
    const [margin, setMargin] = useState(0);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const { current: container } = containerRef;
        const [swiper] = Array.from(container.children);
        const slides = Array.from(swiper.children).find(({ classList }) =>
            classList.contains('swiper-wrapper')
        ).children;
        const [activeImage] = Array.from(slides).find(({ classList }) =>
            classList.contains('swiper-slide-active')
        ).children;

        const updateMargin = () => setMargin((container.clientWidth - activeImage.width) / 2);

        if (activeImage.complete) {
            updateMargin();
            return;
        }

        activeImage.addEventListener('load', updateMargin);
    }, [project, index]);

    return (
        <GalleryContainer ref={containerRef} margin={margin}>
            <Swiper navigation loop onSlideChange={({ activeIndex }) => setIndex(activeIndex)}>
                {getImages(project).map((src, index) => (
                    <SwiperSlide key={index}>
                        <StyledImage src={src} alt={`${project} ${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </GalleryContainer>
    );
};

Gallery.propTypes = {
    project: oneOf(getProjects()).isRequired
};

export default Gallery;
