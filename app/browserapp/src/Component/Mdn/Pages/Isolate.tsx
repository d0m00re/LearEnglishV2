import React, { ReactElement } from 'react'

import * as Atoms from './../Atoms/index';

import * as Particules from './../Particules/index';

import Article from './../Data/Article/ArticleDisplay';

interface Props {

}


let tableContent = [
    'Synthaxe',
    'Exemples',
    'Specifications',
    'Compatibilite des navigateurs'
];


function Isolate({ }: Props): ReactElement {
    return (
        <div>
            <Particules.TableOfContents title='Table of contents' list={tableContent} />


            <Atoms.PrimaryTitle>display</Atoms.PrimaryTitle>
            <Atoms.Paragraph>La propriete display definit le type d affichage utilisée pour le rendu d un element (de bloc ou en ligne) et la disposition utilisée pour ses éléments fils : grille ou boîtes flexibles.</Atoms.Paragraph>

            <Atoms.SecondaryTitle href='#Syntaxe'>Synthaxe</Atoms.SecondaryTitle>

            <Particules.CodeView code={Article.code} />

            <Atoms.MainLayout>
                <p>ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
            </Atoms.MainLayout>



        </div>
    )
}

export default Isolate
