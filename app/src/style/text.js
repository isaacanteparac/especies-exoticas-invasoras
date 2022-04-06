import styled from "styled-components";
import { colorDark } from "./variables";

const theme = {
    fontSize: null,
    color: null,
    weight: null,
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
`;

H2.defaultProps = {
    theme:{
        color: colorDark.black
    }
}
    