import styled from 'styled-components';
import { oneOf, string } from 'prop-types';

const alignmentMap = {
    right: 'flex-start',
    center: 'center',
    left: 'flex-end',
};

const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    ${({ alignment = 'right' }) => `justify-content: ${alignmentMap[alignment]};`}
    ${({ gap = '0' }) => `gap: ${gap};`}
`;

StyledContainer.propTypes = {
    alignment: oneOf(Object.keys(alignmentMap)),
    gap: string,
};

export default StyledContainer;
