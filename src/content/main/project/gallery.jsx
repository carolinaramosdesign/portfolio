import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/components/navigation/navigation.min.css';
import { getImages, getProjects } from 'project';
import { StyledImage, CenteredContent } from 'component';
import { number, oneOf } from 'prop-types';

SwiperCore.use(Navigation);

const GalleryContainer = styled(CenteredContent).withConfig({
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
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getImages(project));
    }, [project]);

    useEffect(() => {
        if (!images.length) {
            return;
        }

        const { current: container } = containerRef;
        const [firstChild] = Array.from(container.children);
        const [activeImage] =
            images.length === 1
                ? [firstChild]
                : Array.from(
                      Array.from(firstChild.children).find(({ classList }) =>
                          classList.contains('swiper-wrapper')
                      ).children
                  ).find(({ classList }) => classList.contains('swiper-slide-active')).children;

        const updateMargin = () => setMargin((container.clientWidth - activeImage.width) / 2);

        if (activeImage.complete) {
            updateMargin();
            return;
        }

        activeImage.addEventListener('load', updateMargin);
    }, [index, images]);

    return (
        <GalleryContainer ref={containerRef} margin={margin}>
            {images.length === 1 ? (
                <StyledImage src={images[0]} alt={project} />
            ) : (
                <Swiper
                    navigation
                    loop
                    spaceBetween={containerRef.current?.clientWidth}
                    onSlideChange={({ activeIndex }) => setIndex(activeIndex)}
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <StyledImage src={src} alt={`${project} ${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </GalleryContainer>
    );
};

Gallery.propTypes = {
    project: oneOf(getProjects()).isRequired
};

export default Gallery;
