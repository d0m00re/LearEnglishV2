import React, { ReactElement } from 'react'
import styled from 'styled-components';

interface Props {
    
}

const StyledHeader = styled.div ` 
    background-color : transparent;
    width : 100%;
`;

const StyledFlex = styled.div ` 
    display : flex; 
    flex-direction : row;
    justify-content : space-around;

    padding : 12px 48px;
`;

const StyledDropdown = styled.div ` 
    flex-direction : row;
    flex-wrap : wrap;

    width : 300px;
    background-color : white;
    border : solid;
    border-color : grey;
    border-width : 3px;

    & > div {
        width : 100px;
    }
`;

function DropDown({} : Props) : ReactElement {
    return (
        <StyledDropdown>
        {
            lng.map((elem : string) => <div key={elem}>{elem}</div>)
        }
        </StyledDropdown>
    )
};

const StyledLanguageSelect = styled.div `
    & > div {
        display : none;
    }

    &:hover {
        & > div {
            position : absolute;
            display : flex;
        }
    }

`;

let lng = ['French', 'English', 'Deutcsh', 'Magyar', 'Polski', 'Nederlands', 'Turc', 'Japon'];

let DropDownContainer = styled.div ` 
    display : flex;
    flex-direction : row;
    width : 100%; 
`;



function Header({}: Props): ReactElement {
    return (
        <StyledHeader>
            <StyledFlex>
                <div>DUOLINGO</div>
                <StyledLanguageSelect>
                    Select Language : french
                    <DropDown>
                        <DropDownContainer>
                            
                        </DropDownContainer>
                    </DropDown>
                </StyledLanguageSelect>
            </StyledFlex>
        </StyledHeader>
    )
}

export default Header
