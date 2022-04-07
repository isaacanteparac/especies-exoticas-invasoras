import styled from "styled-components";
import { colorDark, fontSize } from "./variables";

const theme = {
    fontSize: null,
    color: null,
    weight: null,
    textaling: null,
    hover: null,
    height: null,
    width: null,
    background: null,
    top:null,
    bottom:null,
    left:null,
    right:null,
}

export const Ul = styled.ul`
    padding: 0;
    margin: auto;
    height: ${(props) => props.theme.height};
    width: ${(props) => props.theme.width};
    overflow-y: scroll;
    position: relative;
    background-color: ${(props) => props.theme.background};
`;

Ul.defaultProps ={
    theme:{
        height: "auto",
        width: "auto",
        background: "trasnparent",
    }
}

export const Li = styled.li`
    display:list-item;
    height: ${(props) => props.theme.height};
    width: ${(props) => props.theme.width};
    list-style: none;
    margin: 0 30px;
    margin-top: 15px;
    padding: auto;
    border: none;
    text-align: ${(props) => props.theme.textaling};
    color: ${(props) => props.theme.color};
    font-size: ${(props) => props.theme.fontSize};
    font-weight: ${(props) => props.theme.weight};
    position: relative;
    top:${(props) => props.theme.top};
    bottom:${(props) => props.theme.bottom};
    left:${(props) => props.theme.left};
    right:${(props) => props.theme.right};
    cursor: default;
    &:hover{
        color: ${(props) => props.theme.hover};
    };
`;

Li.defaultProps ={
    theme:{
        height: "auto",
        width: "auto",
        textaling: "center",
        fontSize: "12px",
        color: colorDark.black,
        hover: "transparent",
        top:"0",
        bottom:"0",
        left:"0",
        right:"0",
        weight: "300",
    }
}