import React, { ReactElement } from 'react'
import styled from 'styled-components';

const Bottom = styled.div` 
    bottom: 0;
    position : absolute;
    width : 100%;
    background-color : #0a4a82;
    padding : 8px;
`;

const UlStyled = styled.ul ` 
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : space-around;
    list-style : none;

    &>li {
        background-color : vuiolet;
        padding : 0 8px;
        color : white;
        cursor : pointer;

        &:hover {
            color : gold;
        }
    }
`;

interface Props {

}

function LngContainer({ }: Props): ReactElement {
    return (
        <Bottom>
                <UlStyled>
                    <li>ANGLAIS</li>
                    <li>ESPAGNOL</li>
                    <li>ALLEMAND</li>
                    <li>ITALIEN</li>

                </UlStyled>
        </Bottom>
    )
}

export default LngContainer
