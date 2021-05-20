import React, { ReactElement } from 'react'
import styled from 'styled-components';
import Theme from '../../Theme/Theme';
import MiniLink from '../../Atoms/MiniLink';

import * as Icon from '../../../../Asset/icon/index';

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
    display : flex;
    color: inherit;
    text-decoration: none;
    align-items : center;
    cursor: pointer;

`;

const StyledLinkBottom = styled(StyledLink) ` 
    color : rgb(54, 61, 68);
    padding : 4px 12px 4px 8px;
    &:hover {
        color : rgb(22, 24, 27);
        background-color :white;
    }
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

const FlexRow = styled.div` 
    display : flex;
    flex-direction: row;
`;


const ArtCard = styled.div` 
    background-color : ${Theme.palette.bg.paper};
    margin : 8px 0;
    border-radius : 5px;
    box-sizing : border-box;
    border : solid;
    border-width: 1px; 

    padding : 16px;
`;

const ArtCardBody = styled.div` 
    padding : 0 0 0 40px;
`;

const ArtFlexRow = styled(FlexRow)` 
    margin-bottom : 8px;
`;

const FlexRowBottom = styled(FlexRow) ` 
    align-items : center;
    justify-content : center;
`;

const StyledSaveRead = styled.div ` 
        display : flex;
        margin-left : auto;

        justify-content : center;
        align-items : center;
`;

const TernaryButton = styled.button ` 
    padding : 4;
    color: rgb(54, 61, 68);
    background-color : #d2d6db;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    border-radius: 5px;
`;

const VerySmallText = styled.div ` 
    box-sizing: border-box;
    color: rgb(100, 112, 125);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 12px;
    line-height: 15px;
    margin-right: 8px;
    text-rendering: optimizespeed;
    visibility: visible;
`;

function Card({ }: Props): ReactElement {
    return (
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
                <FlexRowBottom>
                    <StyledLinkBottom>
                        <Icon.Love style={{width : '25px', height : '25px'}} />
                        2 reactions
                    </StyledLinkBottom>
                    <StyledLinkBottom>
                        <Icon.Comment style={{width : '25px', height : '25px'}}/>
                        15 comments
                    </StyledLinkBottom>
                    <StyledSaveRead>
                        <VerySmallText>
                            3min read
                        </VerySmallText>
                        <TernaryButton>Save</TernaryButton>
                    </StyledSaveRead>
                         
                </FlexRowBottom>
            </ArtCardBody>
        </ArtCard>

    )
}

export default Card;
