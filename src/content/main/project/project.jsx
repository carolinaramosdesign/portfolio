import { Redirect, useParams } from 'react-router-dom';
import StyledMain from 'content/main/styled-main';
import { isProject, getConfig } from 'project';
import StyledContainer from 'component/styled-container';
import Gallery from 'content/main/project/gallery';

const Project = () => {
    const { project } = useParams();

    if (!isProject(project)) {
        return <Redirect to='/' />;
    }

    const { description } = getConfig(project);

    return (
        <StyledMain>
            <StyledContainer fill direction='vertical' alignment='stretch' gap='1' unit='rem'>
                <Gallery project={project} />
                <StyledContainer direction='vertical'>
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
