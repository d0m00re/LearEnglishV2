import React, { ReactElement } from 'react'
import glob from './_glob.svg';
import styled from 'styled-components';

interface Props {
    
}

const ContainerImg = styled.div ` 
    background-size: 360px;
height: 360px;
min-width: 360px;
width: 360px;
`;

function Glob({}: Props): ReactElement {
    return (
        <ContainerImg>        
            <img src={glob} />
        </ContainerImg>
        )
}

export default Glob;
