import styled from "styled-components";
import { colorDark, colorLight } from "./variables";

const theme = {
    top: null,
    bottom: null,
    left: null,
    right: null,
    color: null,

}

export const Svg = styled.svg`
  position: relative;
  top:${(props) => props.theme.top};
  bottom: ${(porps) => porps.theme.bottom};
  left: ${(porps) => porps.theme.left};
  right: ${(porps) => porps.theme.right};
  color: ${(porps) => porps. theme. color}!important;
`;

Svg.defaultProps = {
    theme:{
        top:"5px",
        bottom: "0",
        left: "0",
        right: "0",
        color: colorDark.black,
    }
}

