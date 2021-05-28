import React, { ReactElement } from 'react'
import styled from 'styled-components';
import {Theme} from './TitleTheme';

interface PropsTitle {
    variant : 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
    textAlign : 'center' | 'left' | 'right' | 'justify'
    color : 'primary' | 'secondary' | string
};

const h1 = styled.h1<PropsTitle> ` 
    color : ${props => (props.color === 'primary' || props.color === 'secondary') ? Theme[props.variant].color[props.color] : props.color};
    text-align : ${props => props.textAlign};
`;
 
// replace h1 tag by our specific tag
const h2 = h1.withComponent('h2');
const h3 = h1.withComponent('h3');
const h4 = h1.withComponent('h4');
const h5 = h1.withComponent('h5');

const AssociationDicoV2 = {
    h1 : h1,
    h2 : h2,
    h3 : h3,
    h4 : h4,
    h5 : h5
};

/*
variant : wich tag will be display and theme specific element
children : text about 
*/
export interface ITitleProps {
    variant ?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
    children ?: string,
    color ?: 'primary' | 'secondary' | string,
    textAlign ?: 'center' | 'left' | 'right' | 'justify'
}

function Title({variant = 'h1', children = '', color = 'primary', textAlign='left'}: ITitleProps): ReactElement {
    let Tag = AssociationDicoV2[variant];
    
    return (
        <Tag variant={variant} color={color} textAlign={textAlign}>
            {children}
        </Tag>
        )
}

export default Title
