import React, { ReactElement } from 'react'

import * as Atoms from './../Atoms/index';

import * as Particules from './../Particules/index';

import * as Molecules from './../Molecules';

import Article from './../Data/Article/ArticleDisplay';

let tableContent = [
    'Synthaxe',
    'Exemples',
    'Specifications',
    'Compatibilite des navigateurs'
];

interface Props {
    
}

function Home({}: Props): ReactElement {
    return (
        <Atoms.MainLayout>

            

            <Atoms.Sub2Layout>
            <div>
                <Particules.TableOfContents title='Table of contents' list={tableContent} />
                <Molecules.RelatedTopics />
            </div>
            <section>
            <Atoms.PrimaryTitle>display</Atoms.PrimaryTitle>
            <Atoms.Paragraph>La propriete display definit le type d affichage utilisée pour le rendu d un element (de bloc ou en ligne) et la disposition utilisée pour ses éléments fils : grille ou boîtes flexibles.</Atoms.Paragraph>

            <Atoms.Paragraph>Le type d affichage donné par display possède deux composantes : le type d affichage extérieur qui définit comment la boîte participe au flux et le type d affichage intérieur qui définit l organisation des éléments enfants.</Atoms.Paragraph>

            <Atoms.Paragraph>Certaines valeurs de display sont définies dans des spécifications séparées. Pour plus d informations, voir la section Spécifications ci-après.</Atoms.Paragraph>


            <Atoms.SecondaryTitle href='#Syntaxe'>Synthaxe</Atoms.SecondaryTitle>

            <Particules.CodeView code={Article.code} />
            </section>
            </Atoms.Sub2Layout>

        </Atoms.MainLayout>
    )
}

export default Home
