import React, { ReactElement } from 'react'
import styled from 'styled-components';

export const StyledSecondaryTitle = styled.h2 ` 
    display: block;
    font-size: 1.5em;
    font-weight: bold;
    margin-block-start: .83em;
    margin-block-end: .83em;
    color: #212121;

    &:hover {
        & > a {
            text-decoration : underline
        }
    }
`;

export const StyledLink = styled.a ` 
    color : inherit;
    cursor : pointer;
    text-decoration : none;
    box-sizing : border-box;
`;

interface Props {
    href ?: string,
    children : string;
};

function SecondaryTitle({href, children}: Props): ReactElement {
    return (
        <StyledSecondaryTitle> 
            <StyledLink href={(href === undefined) ? '#' : href}>
                {children}
            </StyledLink>
        </StyledSecondaryTitle>
        );
};

export default SecondaryTitle
