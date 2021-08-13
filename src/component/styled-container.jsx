import styled from 'styled-components';
import CenteredContent from 'component/centered-content';
import { oneOf, string } from 'prop-types';

const alignmentMap = {
    right: 'flex-start',
    center: 'center',
    left: 'flex-end',
};

const directionMap = {
    vertical: 'column',
    horizontal: 'row',
};

const StyledContainer = styled(CenteredContent)`
    height: 100%;
    width: 100%;
    ${({ alignment = 'right' }) => `justify-content: ${alignmentMap[alignment]};`}
    ${({ gap = '0' }) => `gap: ${gap};`}
    ${({ direction = 'horizontal' }) => `flex-direction: ${directionMap[direction]};`}
`;

StyledContainer.propTypes = {
    alignment: oneOf(Object.keys(alignmentMap)),
    gap: string,
    direction: oneOf(Object.keys(directionMap)),
};

export default StyledContainer;
