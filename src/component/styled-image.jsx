import styled from 'styled-components';
import { string } from 'prop-types';

const StyledImage = styled.img`
    ${({ height = '100%' }) => `max-height: ${height};`}
    ${({ width = '100%' }) => `max-width: ${width};`}
`;

StyledImage.propTypes = {
    height: string,
    width: string,
};

export default StyledImage;
