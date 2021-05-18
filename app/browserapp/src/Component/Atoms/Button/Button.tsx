import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components';
import Styled from 'styled-components';
import { PrimaryExpression } from 'typescript';
//type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
interface PropsMyButton {
    children : ReactNode;
    onClick : () => any;
    borderRadius ?: string;
    borderColor ?: string;
    backgroundColor ?: string;
}

const MyButton = styled.button<PropsMyButton> ` 
    background-color : ${props => (props.backgroundColor) ? props.backgroundColor : 'white'};
    border-radius : ${props => props.borderRadius};
    border-color : ${props => props.borderColor};
    border-width : ${props => props.borderRadius};
`;
//filter: brightness(1.1);
interface PropsGenButton {
    width ?: string;
    variant : 'primary' | 'secondary' | undefined;
    margin ?: string;
}

/*
    border-radius : ${props => props.borderRadius};
    border-color : ${props => props.borderColor};
    border-width : ${props => props.borderRadius};
*/
export const GenButton = styled.div<PropsGenButton> ` 
    cursor : pointer;
    background-color : ${props => (props.variant) ? props.theme.palette.backgroundButton[props.variant] : 'white'};
    border-radius : 16px;
    border : solid;
    min-width : 320px;
    border-width : 2px 2px 4px;
    border-color : rgba(0, 0, 0, 0.25);
    transition: all 0.5s ease;
    text-align: center;
    margin : ${props => (props.margin) ? props.margin : '0'};
    width : ${props => (props.width) ? props.width : '100%'};
    &:hover {
        transition: all 0.5s ease;
        filter: brightness(1.1);
    }
`;

/*
function Button({children, onClick, borderRadius, borderColor, backgroundColor}: Props): ReactElement {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}
*/
export default MyButton
