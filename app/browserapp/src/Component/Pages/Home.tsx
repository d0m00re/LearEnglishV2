import React, { ReactElement } from 'react'
import Typography from '../Atoms/Typography/Typography';
import styled from 'styled-components';

interface Props {
    children : string
}


function Home(): ReactElement {
    return (
        <div>
            <Typography>React Redux Typescript StyledComponent Storybook Boilerplate</Typography>

            <Typography variant='primary' type='h1'>Title h1</Typography>
            <Typography variant='primary' type='h2'>Title h2</Typography>
            <Typography variant='primary' type='h3'>Title h3</Typography>
            <Typography variant='primary' type='h4'>Title h4</Typography>
            <Typography variant='primary' type='h5'>Title h5</Typography>
            <Typography variant='primary' type='h6'>Title h6</Typography>

            <Typography variant='primary' type='subtitle1'>primary subtitle 1</Typography>
            <Typography variant='secondary' type='subtitle1'>secondary subtitle 1</Typography>
            <Typography variant='disabled' type='subtitle1'>disabled subtitle 1</Typography>
            <Typography variant='hint' type='subtitle1'>hint subtitle 1</Typography>

            <Typography variant='primary' type='subtitle2'>subtitle 2</Typography>

            <Typography variant='primary' type='body1'>body1</Typography>
            <Typography variant='primary' type='body2'>body2</Typography>




        </div>
    )
}

export default Home
