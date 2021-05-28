import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Theme from '../../../../style/Theme';

/*
tets another apporch for styled component
1) styled basic component with different update possibilites
2) styled button with theme inject via a theme file
3 ) cela nous permettra d avoirt un fichier d ecrivant les different style de button
puis des les incolures dans noteew application
*/

export interface IButton { 
    bg ?: string;
    padding ?: string;
    margin ?: string
};

const Button = styled.button<IButton> ` 
    background-color: ${props => (props.bg) ? props.bg : 'black'};
    padding : ${props => (props.padding) ? props.padding : 0};
    margin : ${props => (props.margin) ? props.margin : 0};
`;

let PrimaryButtonTheme = {
    bg : '#0f0',
    padding : '8px 8px 8px 8px',
    margin : '0'
}

let SecondaryButtonTheme = { 
    bg : '#0ff',
    padding : '8px 8px 8px 8px',
    margin : '0'
};

let StyleButtonTheme = {
    primary : PrimaryButtonTheme,
    secondary : SecondaryButtonTheme
};

export interface IStyledButton {
    children : any;
    variant : 'primary' | 'secondary'
}

function StyledButton({children, variant} : IStyledButton) {
    let _theme = StyleButtonTheme[variant];
    return ( 
        <Button
            bg = {_theme.bg}
            padding = {_theme.padding}
            margin = {_theme.margin}>
                {children}
            </Button>
    );
}

export default StyledButton;
