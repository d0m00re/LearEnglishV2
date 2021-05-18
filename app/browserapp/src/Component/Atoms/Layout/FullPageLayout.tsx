import React, { ReactElement } from 'react'
import styled from 'styled-components';
/*
free yourself, all chain, all parasite thinking need to be remove inside yourself
*/

interface IFullPageLayout {
    backgroundColor ?: string
}

const FullPageLayout = styled.div<IFullPageLayout>`
    align-items: center;
    background-color : ${props => (props.backgroundColor) ? props.backgroundColor : 'white'};
    display: flex;
    flex-direction : column;
    height: 100vh;
    width : 100vw;
    z-index: 1;
`;

export default FullPageLayout;
