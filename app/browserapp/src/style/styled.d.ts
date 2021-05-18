import 'styled-components';

declare module 'styled-components' {
    interface IPaletteElem {
        light: string,
        main: string,
        dark: string,
        contrastText: string
    }
    
    interface IPalette { 
        common : {black : string, white : string};
        primary : IPaletteElem;
        secondary : IPaletteElem;
        err : IPaletteElem;
        warning : IPaletteElem;
        info : IPaletteElem;
        success : IPaletteElem;
        text : {primary: string, secondary: string, disabled: string, hint : string};
        background : {paper: string, default: string};
        backgroundButton : { primary : string, secondary : string},
        link : {primary : string, secondary : string}
    
    };
    
    interface ITypographieElem {
        fontWeight: string | number,
        fontSize: string | number,
        lineHeight: string | number,
        letterSpacing: string | number
    };
    
    interface ITypographie {
            fontFamily : string;
            h1 : ITypographieElem;
            h2 : ITypographieElem;
            h3 : ITypographieElem;
            h4 : ITypographieElem;
            h5 : ITypographieElem;
            h6 : ITypographieElem;
            subtitle1 :ITypographieElem;
            subtitle2 : ITypographieElem;
            body1 : ITypographieElem;
            body2 : ITypographieElem;
            button :ITypographieElem & {textTransform : string};
            caption : ITypographieElem;
            overline : ITypographieElem & {textTransform : string};
            transition : any;
            border : any;
            zIndex : any;
            link : ITypographieElem;
    }
    
    export interface DefaultTheme { 
        palette : IPalette;
        typographie : ITypographie;
    };
};