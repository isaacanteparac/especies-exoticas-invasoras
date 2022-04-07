import styled from "styled-components";
import { colorDark, fontSize } from "./variables";

const theme = {
    fontSize: null,
    color: null,
    weight: null,
    textaling: null,
    hover: null,
    background: null,
}

export const Label = styled.label`
    font-size: ${(props) => props.theme.fontSize};
    color: ${(props) => props.theme.color};
    font-weight: ${(props) => props.theme.weight};

`;

Label.defaultProps = {
    theme:{
        fontSize: "12px",
        colorText: colorDark.black,
        weight: "0"
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


    