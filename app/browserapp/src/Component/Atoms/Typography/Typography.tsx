import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Theme from '../../../style/Theme';

interface Props {
    children ?: string
    variant ?: 'primary' | 'secondary' | 'disabled' | 'hint';
    type ?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'  | 'h6' | 'link' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
    padding ?: string;
    margin ?: string;
    align ?: string;
}

interface StyledProps {
    children : string
    variant : 'primary' | 'secondary' | 'disabled' | 'hint';
    type : 'h1' | 'h2' | 'h3' | 'h4' | 'h5'  | 'h6' | 'link' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';   
    padding : string;
    margin : string;
    align : string;
}

const StyledTypography = styled.div<StyledProps>`
    color : ${props => props.theme.palette.text[props.variant]};

    font-family : ${props => props.theme.typographie.fontFamily};

    font-weight : ${props => props.theme.typographie[props.type].fontWeight};
    font-size : ${props => props.theme.typographie[props.type].fontSize};

    line-height : ${props => props.theme.typographie[props.type].lineHeight};
    letter-spacing : ${props => props.theme.typographie[props.type].letterSpacing};

    margin : ${props => props.margin};
    padding : ${props => props.padding};

    text-align : ${props => props.align};

`;

function Typography({ children = '', variant = 'primary', type = 'h1', padding = '0', margin = '0', align = 'left'}: Props): ReactElement {
    return (
        <StyledTypography variant={variant} type={type} padding={padding} margin={margin} align={align}>
            {children}
        </StyledTypography>
    )
}

export default Typography
