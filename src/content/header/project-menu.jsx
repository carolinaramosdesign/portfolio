import { useRef, useState } from 'react';
import WeightedText from 'component/weighted-text';
import projectConfig from 'project/config.json';
import styled from 'styled-components';
import { bool, number, string } from 'prop-types';
import StyledContainer from 'component/styled-container';
import LinkContainer from 'component/link-container';

const Container = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    ${({ open = false }) => `visibility: ${open ? 'visible' : 'hidden'};`}
    position: absolute;
    right: 0;
    margin: 0 5%;
    ${({ top, unit = 'px' }) => `top: calc(${top}${unit} + 0.5rem);`}
    gap: 0.5rem;
`;

ProjectList.propTypes = {
    open: bool,
    top: number,
    unit: string
};

const ProjectMenu = () => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef();
    const { bottom = 0 } = containerRef.current?.getBoundingClientRect() ?? {};

    return (
        <>
            <Container ref={containerRef} onClick={() => setOpen(!open)}>
                <WeightedText>Projects</WeightedText>
            </Container>
            <ProjectList open={open} top={bottom}>
                {Object.entries(projectConfig).map(([key, { name }]) => (
                    <LinkContainer key={key} to={`/project/${key}`} onClick={() => setOpen(false)}>
                        <StyledContainer fill alignment='right'>
                            {name}
                        </StyledContainer>
                    </LinkContainer>
                ))}
            </ProjectList>
        </>
    );
};

export default ProjectMenu;
