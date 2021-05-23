export interface IElem {
    color : {primary : string, secondary : string}
}

export interface ITheme {
    h1 : IElem,
    h2 : IElem,
    h3 : IElem,
    h4 : IElem,
    h5 : IElem 
}

export const Theme : ITheme = { 
    h1 : {
        color : {primary : 'red', secondary : 'blue'}
    },
    h2 : {
        color : {primary : 'violet', secondary : 'blue'}
    },
    h3 : {
        color : {primary : 'green', secondary : 'blue'}
    },
    h4 : {
        color : {primary : 'gold', secondary : 'blue'}
    },
    h5 : {
        color : {primary : 'cyan', secondary : 'blue'}
    },
}

