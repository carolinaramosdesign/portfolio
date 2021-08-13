import styled from 'styled-components';
import CenteredContent from 'component/centered-content';
import { useHistory } from 'react-router-dom';
import { string, node, func } from 'prop-types';

const StyledContainer = styled(CenteredContent)`
    height: 100%;

    &:hover {
        cursor: pointer;
    }
`;

const LinkContainer = ({ to, onClick, children }) => {
    const { push } = useHistory();

    return (
        <StyledContainer
            onClick={() => {
                push(to);
                onClick?.();
            }}
        >
            {children}
        </StyledContainer>
    );
};

LinkContainer.propTypes = {
    to: string.isRequired,
    children: node.isRequired,
    onClick: func
};

export default LinkContainer;
