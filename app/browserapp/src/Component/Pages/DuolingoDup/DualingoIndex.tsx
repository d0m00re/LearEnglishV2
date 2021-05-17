import React, { ReactElement } from 'react'

import FullPageLayout from './../../Atoms/Layout/FullPageLayout';

interface Props {
    
}

function DualingoIndex({}: Props): ReactElement {
    return (
        <>
            <FullPageLayout backgroundColor='#f0f'/>
            <FullPageLayout backgroundColor='#0ff'/>

        </>
    )
}

export default DualingoIndex
