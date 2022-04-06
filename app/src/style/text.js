import styled from "styled-components";
import { colorDark } from "./variables";

const theme = {
    fontSize: null,
    colorText: null,
}

export const Label = styled.label`
    font-size: ${(props) => props.theme.fontSize};
    color: ${(props) => props.theme.colorText};
    font-weight: 500;

`;

Label.defaultProps = {
    theme:{
        fontSize: "12px",
        colorText: colorDark.black,
    }
};
    