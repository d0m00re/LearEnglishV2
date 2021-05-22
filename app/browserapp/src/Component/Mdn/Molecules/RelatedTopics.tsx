import React, { ReactElement, useState } from 'react'
import styled from 'styled-components';

import * as Atoms from './../Atoms/index';

import * as Particules from './../Particules/index';

import * as Molecules from './../Molecules';
import { title } from 'process';

interface ILink {
    title: string;
    link: string;
};

interface ISection {
    title: string;
    links: ILink[];
}

interface IRelatedTopics {
    title: string;
    section: ISection[];
}

let data: IRelatedTopics[] = [
    {
        title: 'Learn CSS',
        section: [{
            title: 'CSS first steps',
            links: [
                { title: 'CSS first steps overview', link: '#' },
                { title: 'What is CSS?', link: '#' },
                { title: 'Getting started with CSS', link: '#' },
                { title: 'How css is structured', link: '#' },
                { title: 'How CSS works', link: '#' },
                { title: 'Using your new knowledge', link: '#' },
            ]
        },
        {
            title: 'CSS building blocks',
            links: [
                { title: 'CSS building block overviews', link: '#' },
                { title: 'Cascade and inheritance', link: '#' },
                { title: 'CSS selectors', link: '#' },
                { title: 'The box model', link: '#' },
                { title: 'Backgrounds and borders', link: '#' },
            ]
        }
        ]
    },
    {
        title: 'Learn CSS V2',
        section: [{
            title: 'CSS first steps',
            links: [
                { title: 'CSS first steps overview', link: '#' },
                { title: 'What is CSS?', link: '#' },
                { title: 'Getting started with CSS', link: '#' },
                { title: 'How css is structured', link: '#' },
                { title: 'How CSS works', link: '#' },
                { title: 'Using your new knowledge', link: '#' },
            ]
        },
        {
            title: 'CSS building blocks',
            links: [
                { title: 'CSS building block overviews', link: '#' },
                { title: 'Cascade and inheritance', link: '#' },
                { title: 'CSS selectors', link: '#' },
                { title: 'The box model', link: '#' },
                { title: 'Backgrounds and borders', link: '#' },
            ]
        }
        ]
    }
]

interface Props {

}

const StyledContainer = styled.div` 
`;

const StyledContainerSection = styled.div` 
`;

const StyledContainerLink = styled.ul` 
  margin : 0;
  padding : 0;
`;


const StyledTitleTopic = styled.h4`

`

const StyledLabelList = styled.p`

`
const StyledRel = styled.p`

`
const StyledRelatedTopics = styled.p`

`
/*
       <Atoms.LinkNavigate href='#'>
                good link
            </Atoms.LinkNavigate>
*/


interface IPropsLinks {
    links: ILink[]
}


const StyledUl = styled.ul` 
  margin : 0;
  padding : 0;
`;

const StyledLi = styled.li ` 
    margin : 10px 0;
    list-style: none;
`;
function LinkList({ links }: IPropsLinks): ReactElement {
    return (
        <StyledContainerLink>
            {
                links.map((link, index) =>
                    <StyledLi key={link.title}>
                        <Atoms.LinkNavigate key={index}>
                            {link.title}
                        </Atoms.LinkNavigate>)
                </StyledLi>)
            }
        </StyledContainerLink>
    );
}

interface IPropsSection {
    sections: ISection[]
};

function SectionList({ sections }: IPropsSection): ReactElement {
    return (
        <StyledContainerSection>
            {
                sections.map((e2, index) => <div key={e2.title}>{e2.title}
                    <LinkList links={e2.links} />
                </div>)
            }
        </StyledContainerSection>
    )
}


interface IPropsRelatedTopic { 
    topic : IRelatedTopics
}

function RelatedTopic({topic}: IPropsRelatedTopic): ReactElement {
    const [show, setShow] = useState<boolean>(false);

    const onClick = () => {
        console.log(show)
        setShow(OLD => !OLD);
    }

    return (
            
                    <div key={topic.title} onClick={onClick}>
                        <StyledTitleTopic>
                            {topic.title}
                        </StyledTitleTopic>

                            { show &&
                                <SectionList sections={topic.section} />
                            }
                    </div>
            


    )
}

function RelatedTopics({ }: Props): ReactElement {
    return (
        <StyledContainer>
            <StyledTitleTopic>{data[0].title}</StyledTitleTopic>
            {
                data.map((topic) =>
                    <RelatedTopic key={topic.title} topic={topic} />)
            }


        </StyledContainer>
    )
}

export default RelatedTopics;
