import styled from 'styled-components';

interface ICenterLayout {
    margin ?: string;
    padding ?: string;
    backgroundColor ?: string;
    zindex ?: number;
}

const CenterLayout = styled.div<ICenterLayout> ` 
    margin : ${props =>  (props === undefined) ? '0' : props.margin};
    padding : ${props =>  (props === undefined) ? '0' : props.padding};

    background-color : ${props => (props === undefined) ? 'transparent' :  props.backgroundColor};
    z-index : ${props => (props === undefined) ? 1 : props.zindex}
`;

export default CenterLayout;