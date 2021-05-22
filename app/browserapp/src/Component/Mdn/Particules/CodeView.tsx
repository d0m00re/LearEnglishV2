import React, { ReactElement } from 'react'
import styled from 'styled-components';
import { ICode } from './../Data/Article/ArticleDisplay';

interface Props {
    code: ICode[];
}

const StyledContainer = styled.div` 
    background-color: #eeeeee;
    border-left: 5px solid #00458b;
`;

const StyledPre = styled.pre` 
    padding : 24px;
    margin-bottom: 24px;
`;

const StyledCode = styled.code` 

`;

const SyledSpanEndLine = styled.span` 
    display : block;
`;

const StyledSpan = styled.span` 
    display : block;
`;

const StyledSpanComment = styled.span` 
    color : grey;
    display : block;
`;

const StyledSpanProperty = styled.span` 
    color : red;
    display : inline-block;
`;

const StyledSpanPunctuation = styled.span` 
    display : inline;
    color : black;
`;

const StyledSpanValue = styled.span` 
    display : inline;
    color : black;
`;

const StyledSpanEnd = styled.span` 
 display:inline;
`;

function SingleCodeElem({ code }: { code: ICode }): ReactElement {
    switch (code.type) {
        case 'comment':
            return (<StyledSpanComment>{code.payload}</StyledSpanComment>);
        case 'property':
            return (<StyledSpanProperty>{code.payload}</StyledSpanProperty>);
        case 'punctuation':
            return (<StyledSpanPunctuation>{code.payload}</StyledSpanPunctuation>);
        case 'value':
            return (<StyledSpanValue>{code.payload}</StyledSpanValue>);
        case 'end':
            return (<StyledSpanEnd>{code.payload}<br /></StyledSpanEnd>);
        default:
            return (<StyledSpan>{code.payload}</StyledSpan>);

    }
};

function CodeView({ code }: Props): ReactElement {
    return (
        <StyledContainer>
            <StyledPre>
                <StyledCode>
                    {
                        code.map(elem => <SingleCodeElem key={elem.payload} code={elem} />)
                    }
                </StyledCode>
            </StyledPre>
        </StyledContainer>
    )
}


export default CodeView
