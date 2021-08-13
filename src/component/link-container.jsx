import styled from 'styled-components';
import CenteredContent from 'component/centered-content';
import { useHistory } from 'react-router-dom';
import { string, node } from 'prop-types';

const StyledContainer = styled(CenteredContent)`
    height: 100%;

    &:hover {
        cursor: pointer;
    }
`;

const LinkContainer = ({ to, children }) => {
    const { push } = useHistory();

    return <StyledContainer onClick={() => push(to)}>{children}</StyledContainer>;
};

LinkContainer.propTypes = {
    to: string.isRequired,
    children: node.isRequired,
};

export default LinkContainer;
