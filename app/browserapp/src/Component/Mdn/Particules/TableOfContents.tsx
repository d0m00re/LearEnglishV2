import React, { ReactElement } from 'react'
import * as Atoms from './../Atoms/index';
import styled from 'styled-components';

interface Props {
    title: string;
    list: string[];
};

const StyledUl = styled.ul` 
  margin : 0;
  padding : 0;
`;

const StyledLi = styled.li ` 
    margin : 10px 0;
    list-style: none;
`;



const TableOfContents = ({ title, list }: Props) => {
    return (
        <>
            <Atoms.TrinaryTitle>
                {title}
            </Atoms.TrinaryTitle>
            <StyledUl>
                {
                    list.map((elem: string) => <StyledLi key={elem} ><Atoms.LinkNavigate href='#'>
                        {elem}
                    </Atoms.LinkNavigate></StyledLi>)
                }
            </StyledUl>

        </>
    );
}

export default TableOfContents
