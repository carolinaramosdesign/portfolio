import styled, { css } from 'styled-components';
import CenteredContent from 'component/centered-content';
import { oneOf, string, bool } from 'prop-types';

const alignmentMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
    stretch: 'space-between'
};

const directionMap = {
    vertical: 'column',
    horizontal: 'row'
};

// https://github.com/styled-components/styled-components/pull/3006
const StyledContainer = styled(CenteredContent).withConfig({
    shouldForwardProp: prop => !['fill', 'alignment', 'gap', 'unit', 'direction'].includes(prop)
})`
    ${({ fill = false }) =>
        fill &&
        css`
            height: 100%;
        `}
    width: 100%;
    ${({ alignment = 'left' }) => `justify-content: ${alignmentMap[alignment]};`}
    ${({ gap = '0', unit = '%' }) => `gap: ${gap}${unit};`}
    ${({ direction = 'horizontal' }) => `flex-direction: ${directionMap[direction]};`}
`;

StyledContainer.propTypes = {
    alignment: oneOf(Object.keys(alignmentMap)),
    gap: string,
    unit: string,
    direction: oneOf(Object.keys(directionMap)),
    fill: bool
};

export default StyledContainer;
