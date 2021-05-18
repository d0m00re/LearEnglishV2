import React, { ReactElement } from 'react'

import FullPageLayout from './../../Atoms/Layout/FullPageLayout';

import styled from 'styled-components';

import Typography from './../../Atoms/Typography/Typography';

import BoxLayout from './../../Atoms/Layout/BoxLayout';

import MyButton, { GenButton } from './../../Atoms/Button/Button';

import Glob from './Glob';

import Header from './Header';
import LngContainer from './LngContainer';

interface Props {

}

const StyledMainPageFullPageLayout = styled(FullPageLayout)` 
    background-color : ${props => props.theme.palette.background.default};
`;


/*
                    <Typography >duolingo</Typography>
                    <Typography>Langue du site</Typography>
                    <Typography type='h1' variant='secondary'>Apprends une langue gratuitement en t'amusant.</Typography>
                    <Typography>C EST PARTI</Typography>
                    <Typography>J AI DEJA UN COMPTE</Typography>
*/

// gen primary button
// use what? basic component? 

interface ITest {
    children: string;
    variant?: 'primary' | 'secondary';
}

/*
function GenButton({children, variant = 'primary'} : ITest): ReactElement {
    return (
        <Button backgroundColor='red' borderRadius='2px' borderColor='blue'  onClick={() => {console.log('c est partis')}}>
           <Typography type='h1' variant={variant} >{children}</Typography>
        </Button>
    );

}
*/

const FlexColumn = styled.div` 
    display : flex; 
    flex-direction : column;
`;

const FlexRow = styled.div` 
    display : flex;
    flex-direction : row;
`;

//    margin : auto 48px;

const FlexColumnLayout = styled(FlexColumn)`
    width : 60%;
    justify-content : center;
    align-items : center;
`;

const FlexRowLayout = styled(FlexRow)` 
    align-items : center; 
    margin : 12px auto;
    padding : 40px;    
`;




function DualingoIndex({ }: Props): ReactElement {
    return (
        <StyledMainPageFullPageLayout>
            <Header />
            <FlexRowLayout>
                <Glob />
                <FlexColumnLayout>
                    <BoxLayout margin='0 0 26px 0'>
                        <Typography type='h1' variant='secondary' align='center'>Apprends une langue gratuitement en t amusant.</Typography>
                    </BoxLayout>
                    <GenButton variant='primary' width='50%'>
                        <Typography type='link' variant='secondary' padding='15px 24px 12px 24px' align='center'>C EST PARTIS!</Typography>
                    </GenButton>
                    <GenButton variant='secondary' width='50%' margin='10px 0 0 0'>
                        <Typography type='link' variant='secondary' padding='15px 24px 12px 24px' align='center'>J AI DEJA UN COMPTE</Typography>
                    </GenButton>
                </FlexColumnLayout>
            </FlexRowLayout>

            <LngContainer />
        </StyledMainPageFullPageLayout>
    )
}

export default DualingoIndex
