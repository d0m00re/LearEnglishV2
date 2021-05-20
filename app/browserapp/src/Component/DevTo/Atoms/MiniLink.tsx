import React, { ReactElement } from 'react'
import Theme from '../Theme/Theme';
import styled from 'styled-components';

/*
function MiniLink({}: Props): ReactElement {
    return (
        <div>
            
        </div>
    )
}
*/
const GenLink = styled.a ` 
        text-decoration: none;
`;

const MiniLink = styled(GenLink) ` 
    color : ${Theme.palette.text.comment};
    padding : 4px;

    &:hover { 
        color : black;
    }
`;

export default MiniLink;