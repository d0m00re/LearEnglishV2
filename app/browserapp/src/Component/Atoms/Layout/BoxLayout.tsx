import React, { ReactElement } from 'react'
import styled from 'styled-components';

interface IBoxLayout {
    margin ?: string;
    padding ?: string;
}

const BoxLayout = styled.div<IBoxLayout> ` 
      margin : ${props =>  (props.margin === undefined) ? '0' : props.margin};
      padding : ${props =>  (props.padding === undefined) ? '0' : props.padding};
`;

export default BoxLayout
 