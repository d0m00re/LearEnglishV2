import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '../../../style/Theme';

interface Props {
    children ?: string
    variant ?: 'primary' | 'secondary' | 'disabled' | 'hint';
    type ?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'  | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2'
    
}

interface StyledProps {
    children : string
    variant : 'primary' | 'secondary' | 'disabled' | 'hint';
    type : 'h1' | 'h2' | 'h3' | 'h4' | 'h5'  | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
    
}

const StyledTypography = styled.div<StyledProps>`
    color : ${props => props.theme.palette.text[props.variant]};

    font-family : ${props => props.theme.typographie.fontFamily};

    font-weight : ${props => props.theme.typographie[props.type].fontWeight};
    font-size : ${props => props.theme.typographie[props.type].fontSize};

    line-height : ${props => props.theme.typographie[props.type].lineHeight};
    letter-spacing : ${props => props.theme.typographie[props.type].letterSpacing};



`;

function Typography({ children = '', variant = 'primary', type = 'h1' }: Props): ReactElement {
    return (
        <StyledTypography variant={variant} type={type}>
            {children}
        </StyledTypography>
    )
}

export default Typography
