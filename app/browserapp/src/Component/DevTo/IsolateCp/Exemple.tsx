import React, { ReactElement } from 'react'
import { ReactComponent as Logo } from './../../../../src/logo.svg'
import styled from 'styled-components';
import Theme from './../Theme/Theme';
import MiniLink from './../Atoms/MiniLink';
/*
    --syntax-background-color: #08090a;
    --syntax-text-color: #f8f8f2;
    --syntax-comment-color: #808080;
    --syntax-declaration-color: #f39c12;
    --syntax-literal-color: #dda0dd;
    --syntax-error-color: #f9690e;
    --syntax-name-color: #7ed07e;
    --syntax-string-color: #f2ca27;
}
*/


interface Props {

}

const MainTitle = styled.h1` 
    color : ${Theme.palette.text.background};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 48px;
    font-weight: 800;
    line-height: 60px;
    margin-bottom: 16px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    overflow-wrap: anywhere;
    text-rendering: optimizespeed;
    visibility: visible;
    word-break: break-word;
`;

const StyledMainTitle = styled(MainTitle)`
   &:hover {
        color : ${Theme.palette.hover.link};
    }
`;

const SecondaryTitle = styled.h2` 
color: rgb(8, 9, 10);
display: block;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
font-size: 24px;
line-height: 30px;
overflow-wrap: anywhere;
text-decoration: rgb(8, 9, 10);
text-decoration-color: rgb(8, 9, 10);
text-decoration-line: none;
text-decoration-style: solid;
text-decoration-thickness: auto;
text-rendering: optimizespeed;
visibility: visible;
word-break: break-word;
`;

const StyledSecondaryTitle = styled(SecondaryTitle)` 
    &:hover {
        color : ${Theme.palette.hover.link};
    }
`;



const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

// primary button
// secondary button
//    display: block;

const Button = styled.a` 
    text-decoration-line: none;
    text-decoration-style: solid;
    text-decoration-thickness: auto;
    text-rendering: optimizespeed;
    white-space: nowrap;
    outline-style: none;
    outline-width: 0px;
    overflow-wrap: normal;
    position: relative;
    text-align: center;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-right: 8px;
`;

// general implementation
const PrimaryButton = styled(Button)` 
    background-color: rgba(0, 0, 0, 0);
    color: rgb(59, 73, 223);
    outline-color: rgb(59, 73, 223);
    text-decoration: rgb(59, 73, 223);
    text-decoration-color: rgb(59, 73, 223);
`;

const SecondaryButton = styled(Button)` 
    background-color: rgb(55, 68, 209);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1.4358px 3.87159px 0px;
    box-sizing: border-box;
    color: rgb(249, 250, 250);
    outline-color: rgb(249, 250, 250);
    text-decoration: rgb(249, 250, 250);
    text-decoration-color: rgb(249, 250, 250);

    border-radius: 5px;
`;
// add specific element implementation
const StyledPrimaryButton = styled(PrimaryButton)` 
    padding : 8px 16px;
    &:hover {
        color: rgb(59, 73, 223);
        outline-color: rgb(59, 73, 223)
    }
`;

const StyledSecondaryButton = styled(SecondaryButton)` 
    padding : 8px 16px;

    &:hover {
        background-color: rgb(57, 70, 215);
box-shadow: rgba(0, 0, 0, 0.05) 0px 1.22904px 3.45808px 0px;
    }
`;

const FlexRow = styled.div` 
    display : flex;
    flex-direction: row;
`;

const HeaderFlexRow = styled(FlexRow)` 
    justify-content : space-between;
    padding : 8px;
`;

const StyledHeader = styled.header` 
    background-color : ${Theme.palette.bg.paper};
`;

const StyledMain = styled.main` 
    background-color : ${Theme.palette.bg.bg};


`;

const StyledBody = styled.div` 
    display : grid;

    margin: 0 auto;
    padding: 16px;

    grid-template-columns: 240px 650.667px 325.333px;

    align-self: center;
  justify-content: center;
`;


const ArtCard = styled.div` 
    background-color : ${Theme.palette.bg.paper};

    border-radius : 5px;
    box-sizing : border-box;
    border : solid;
    border-width: 1px; 

    padding : 16px;
`;

const ArtCardBody = styled.div` 
    padding : 0 0 0 40px;
`;

const ArtFlexRow = styled(FlexRow) ` 
    margin-bottom : 8px;
`;

function Exemple({ }: Props): ReactElement {
    return (
        <StyledMain>
            <StyledHeader>
                <HeaderFlexRow>
                    <Logo style={{ width: '40px', height: '40px' }} />
                    <FlexRow>
                        <StyledPrimaryButton>Log in</StyledPrimaryButton>
                        <StyledSecondaryButton>Create account</StyledSecondaryButton>
                    </FlexRow>
                </HeaderFlexRow>

            </StyledHeader>
            <StyledBody>
                <div>
                    <StyledLink>#algorithm</StyledLink>
                    <MiniLink href='#'>
                        #algo
                </MiniLink>
                </div>
                <div>


                    <ArtCard>
                        <ArtCardBody>
                            <StyledSecondaryTitle>
                                <StyledLink href='#'>
                                    🔥Awesome Resource For Your Web Projects: 75+ Background Resources🔥
                            </StyledLink>
                            </StyledSecondaryTitle>
                            <ArtFlexRow>
                                <MiniLink href='#'>#algorithm</MiniLink>
                                <MiniLink href='#'>#javascript</MiniLink>
                                <MiniLink href='#'>#java</MiniLink>
                                <MiniLink href='#'>#python</MiniLink>
                            </ArtFlexRow>
                            <FlexRow>
                                <StyledLink>2 reactions</StyledLink>
                                <StyledLink>15 comments</StyledLink>
                            3min read
                            <StyledLink>Save</StyledLink>
                            </FlexRow>
                        </ArtCardBody>
                    </ArtCard>
                </div>
                <div>
                    toi
                </div>
            </StyledBody>

        </StyledMain>
    )
}

export default Exemple
