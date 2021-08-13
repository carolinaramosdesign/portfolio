import styled from 'styled-components';
import CenteredContent from 'component/centered-content';
import { oneOf, string } from 'prop-types';

const alignmentMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
};

const directionMap = {
    vertical: 'column',
    horizontal: 'row'
};

const StyledContainer = styled(CenteredContent)`
    height: 100%;
    width: 100%;
    ${({ alignment = 'left' }) => `justify-content: ${alignmentMap[alignment]};`}
    ${({ gap = '0', unit = '%' }) => `gap: ${gap}${unit};`}
    ${({ direction = 'horizontal' }) => `flex-direction: ${directionMap[direction]};`}
`;

StyledContainer.propTypes = {
    alignment: oneOf(Object.keys(alignmentMap)),
    gap: string,
    unit: string,
    direction: oneOf(Object.keys(directionMap))
};

export default StyledContainer;
