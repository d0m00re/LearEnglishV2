
export interface ICode {
    type : string;
    payload : string;
};

export interface IArt {
    mainTitle : string;
    code : ICode[];
}

const displayMaker = (value : string) : ICode[] => {
    return [
        {type : 'property', payload : 'display'},
        {type : 'punctuation', payload : ':'},
        {type : 'value', payload : value},
        {type : 'end', payload : ';'},
    ];
}

const art : IArt = {
    mainTitle : 'display',

    code : [
        {type : 'comment', payload : '/* Valeurs de type <display-outside> */'},
        
        ...displayMaker('block'),
        ...displayMaker('inline'),
        ...displayMaker('run-in'),

        {type : 'end', payload : ''},
        {type : 'comment', payload : '/* Valeurs de type <display-inside> */'},
        ...displayMaker('flow'),
        ...displayMaker('flow-root'),
        ...displayMaker('table'),
        ...displayMaker('flex'),
        ...displayMaker('grid'),
        ...displayMaker('ruby'),

        {type : 'end', payload : ''},
        {type : 'comment', payload : '/* Combinaison de valeurs */'},
        {type : 'comment', payload : '/* <display-outside> et <display-inside> */'},
        ...displayMaker('block flow'),
        ...displayMaker('inline table'),
        ...displayMaker('flex run-in'),

        {type : 'end', payload : ''},
        {type : 'comment', payload : '/* Valeurs de type <display-listitem> */'},
        ...displayMaker('list-item'),
        ...displayMaker('list-item block'),
        ...displayMaker('list-item inline'),
        ...displayMaker('list-item flow'),
        ...displayMaker('list-item flow-root'),
        ...displayMaker('list-item block flow'),
        ...displayMaker('list-item block flow-root'),
        ...displayMaker('flow list-item block'),

        {type : 'end', payload : ''},
        {type : 'comment', payload : '/* Valeurs de type <display-internal> */'},
        ...displayMaker('table-row-group'),
        ...displayMaker('table-header-group'),
        ...displayMaker('table-footer-group'),
        ...displayMaker('table-row'),
        ...displayMaker('table-cell'),
        ...displayMaker('table-column-group'),
        ...displayMaker('table-column'),
        ...displayMaker('table-caption'),
        ...displayMaker('ruby-base'),
        ...displayMaker('ruby-text'),
        ...displayMaker('ruby-base-container'),
        ...displayMaker('ruby-text-container'),


        {type : 'end', payload : ''},
        {type : 'comment', payload : '/* Valeurs de type <display-box> */'},
        ...displayMaker('contents'),
        ...displayMaker('none'),

        {type : 'end', payload : ''},
        {type : 'comment', payload : '/* Valeurs de type <display-legacy> */'},
        ...displayMaker('inline-block'),
        ...displayMaker('inline-table'),
        ...displayMaker('inline-flex'),
        ...displayMaker('inline-grid'),

        {type : 'end', payload : ''},
        {type : 'comment', payload : '/* Valeurs globales */'},
        ...displayMaker('inherit'),
        ...displayMaker('initial'),
        ...displayMaker('unset'),


    ]
}

export default art;