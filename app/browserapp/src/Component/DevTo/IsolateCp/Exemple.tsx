import React, { ReactElement } from 'react'
import { ReactComponent as Logo } from './../../../../src/logo.svg'
import styled from 'styled-components';
import Theme from './../Theme/Theme';
import MiniLink from './../Atoms/MiniLink';

import * as Icon from './../../../Asset/icon/index';


import CardPreviewArt from './../Particules/CardPreviewArticle/Card';

interface Props {

}




const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

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
    white-space: nowrap;
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
//    padding : 8px 16px;

const StyledPrimaryButton = styled(PrimaryButton)` 
    padding : 8px 16px;
    &:hover {
        color: rgb(59, 73, 223);
        outline-color: rgb(59, 73, 223)
    }
`;
//   

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

const StyledHeaderInputText = styled.input ` 
    appearance: none;
    background-color: rgb(253, 253, 253);
    box-sizing: border-box;
    color: rgb(8, 9, 10);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    outline-color: rgb(8, 9, 10);
    outline-style: none;
    outline-width: 0px;
    resize: vertical;
    text-rendering: optimizelegibility;
    width: 420px;
`;

const StyledContainerHeaderLeft = styled.div ` 
    display : flex;
    flex-direction : row;
    align-items : flex-start;
    justify-content: center;
`;

function Exemple({ }: Props): ReactElement {
    return (
        <StyledMain>
            <StyledHeader>

                <HeaderFlexRow>
                
                    <div>
                    <Logo style={{ width: '20px', height: '20px' }} />
                        <StyledHeaderInputText />
                    </div>
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
                    <CardPreviewArt />
                    <CardPreviewArt />
                    <CardPreviewArt />
                    <CardPreviewArt />

                </div>
                <div>
                    toi
                </div>
            </StyledBody>

        </StyledMain>
    )
}

export default Exemple
