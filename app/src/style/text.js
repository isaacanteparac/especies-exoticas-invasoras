import styled from "styled-components";
import { colorDark, fontSize } from "./variables";

const theme = {
    fontSize: null,
    color: null,
    weight: null,
    textaling: null,
    hover: null,
    background: null,
    top:null,
    bottom:null,
    left:null,
    right:null,
}

export const Label = styled.label`
    font-size: ${(props) => props.theme.fontSize};
    color: ${(props) => props.theme.color};
    font-weight: ${(props) => props.theme.weight};
    position: relative;
    top:${(props) => props.theme.top};
    bottom:${(props) => props.theme.bottom};
    left:${(props) => props.theme.left};
    right:${(props) => props.theme.right};

    &:hover{
        color: ${(props) => props.theme.hover};
    };
`;

Label.defaultProps = {
    theme:{
        fontSize: "12px",
        colorText: colorDark.black,
        weight: "0",
        fontSize: "12px",
        color: colorDark.black,
        hover: "transparent",
        top:"0",
        bottom:"0",
        left:"0",
        right:"0",
    }
};



export const H2 = styled.h2`
    color: ${(props) => props.theme.color};
    font-size: ${(props) => props.theme.fontSize};
    cursor: default;
`;

H2.defaultProps = {
    theme:{
        fontSize: "none",
        color: colorDark.black
    }
}

export const H1 = styled.h1`
    color: ${(props) => props.theme.color};
    font-size: ${(props) => props.theme.fontSize};
    cursor: default;
`;

H1.defaultProps = {
    theme:{
        color: colorDark.black,
        fontSize: "none",
    }
}


    