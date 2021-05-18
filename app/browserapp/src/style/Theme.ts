import {DefaultTheme} from 'styled-components';

/*
const Theme : BaseTheme = { 
    palette : {
        common : {
            black : '#000',
            white : '#fff'
        },
        primary : {
            light: '#7986cb',
            main: '#3f51b5',
            dark: '#303f9f',
            contrastText: '#fff'
        },
        secondary : {
            light: '#ff4081',
            main: '#f50057',
            dark: '#c51162',
            contrastText: '#fff'
        },
        err : {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff'
        },
        warning : {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00',
            contrastText: 'rgba(0, 0, 0, 0.87)'
        },
        info : {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2',
            contrastText: '#fff',
        },
        success : {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
            contrastText: 'rgba(0, 0, 0, 0.87)'
        },

        text : { 
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)'
        },

        background : {
            paper: '#fff',
            default: '#235390'
        }
    },

    typographie :
    {
        fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif',
        h1 : {
            fontWeight: 300,
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: "-0.01562em"
        },
        h2 : {
            fontWeight: 300,
            fontSize: "3.75rem",
            lineHeight: 1.2,
            letterSpacing: "-0.00833em"
        },
        h3 : {
            fontWeight: 400,
            fontSize: "3rem",
            lineHeight: 1.167,
            letterSpacing: "0em"
        },
        h4 : {
            fontWeight: 400,
            fontSize: "2.125rem",
            lineHeight: 1.235,
            letterSpacing: "0.00735em"
        },
        h5 : {
            fontWeight: 400,
            fontSize: "1.5rem",
            lineHeight: 1.334,
            letterSpacing: "0em"
        },
        h6 : {
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: 1.6,
            letterSpacing: "0.0075em"
        },
        subtitle1 : {
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em"
        },
        subtitle2 : {
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.57,
            letterSpacing: "0.00714em"
        },
        body1 : {
             fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.5,
            letterSpacing: "0.00938em"
        },
        body2 : {
             fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: 1.43,
            letterSpacing: "0.01071em"
        },
        button : {
             fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.75,
            letterSpacing: "0.02857em",
            textTransform: "uppercase"
        },
        caption : {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.66,
            letterSpacing: "0.03333em"
        },
        overline : {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 2.66,
            letterSpacing: "0.08333em",
            textTransform: "uppercase"
        },
        transition : {},
        border : {},
        zIndex : {}
    }
};

*/
const Theme : DefaultTheme = {
    palette : {
        common : {
            black : '#000',
            white : '#fff'
        },
        primary : {
            light: '#7986cb',
            main: '#3f51b5',
            dark: '#303f9f',
            contrastText: '#fff'
        },
        secondary : {
            light: '#ff4081',
            main: '#f50057',
            dark: '#c51162',
            contrastText: '#fff'
        },
        err : {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff'
        },
        warning : {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00',
            contrastText: 'rgba(0, 0, 0, 0.87)'
        },
        info : {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2',
            contrastText: '#fff',
        },
        success : {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
            contrastText: 'rgba(0, 0, 0, 0.87)'
        },

        text : { 
            primary: '#000',
            secondary: '#fff',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)'
        },

        background : {
            paper: '#fff',
            default: '#235390'
        },

        backgroundButton : { 
            primary : '#58a700',
            secondary : '#235390'
        },

        link :{
            primary : '#000',
            secondary : '#fff'
        }
    },

    typographie :
    {
        fontFamily : '"Roboto", "Helvetica", "Arial", sans-serif',
        h1 : {
            fontWeight: 300,
            fontSize: "32px",
            lineHeight: '40px',
            letterSpacing: "-0.01562em"
        },
        h2 : {
            fontWeight: 300,
            fontSize: "3.75rem",
            lineHeight: 1.2,
            letterSpacing: "-0.00833em"
        },
        h3 : {
            fontWeight: 400,
            fontSize: "3rem",
            lineHeight: 1.167,
            letterSpacing: "0em"
        },
        h4 : {
            fontWeight: 400,
            fontSize: "2.125rem",
            lineHeight: 1.235,
            letterSpacing: "0.00735em"
        },
        h5 : {
            fontWeight: 400,
            fontSize: "1.5rem",
            lineHeight: 1.334,
            letterSpacing: "0em"
        },
        h6 : {
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: 1.6,
            letterSpacing: "0.0075em"
        },
        subtitle1 : {
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em"
        },
        subtitle2 : {
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.57,
            letterSpacing: "0.00714em"
        },
        body1 : {
             fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.5,
            letterSpacing: "0.00938em"
        },
        body2 : {
             fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: 1.43,
            letterSpacing: "0.01071em"
        },
        button : {
             fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.75,
            letterSpacing: "0.02857em",
            textTransform: "uppercase"
        },
        caption : {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.66,
            letterSpacing: "0.03333em"
        },
        overline : {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 2.66,
            letterSpacing: "0.08333em",
            textTransform: "uppercase"
        },
        link : {
            fontSize: "15px",
            lineHeight: "20px",
            fontWeight: '700',
            letterSpacing : '0.8px'
        },
        transition : {},
        border : {},
        zIndex : {}
    }
}

export default Theme;  