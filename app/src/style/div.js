import styled from "styled-components";
import { colorDark, colorLight } from "./variables";

const theme = {
  width: null,
  height: null,
  borderRadius: null,
  background: null,
  color: null,
  backgroundHover: null,
};

export const DivColumnCenterElement = styled.div`
  background-color: transparent;
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  border-radius: ${(props) => props.theme.borderRadius};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
`;

DivColumnCenterElement.defaultProps = {
  theme: {
    width: "200px",
    height: "40px",
    borderRadius: "10px",
    background: "trasparent"
  },
};

export const DivBoxRegister = styled.div`
  background-color: transparent;
  width: 30%;
  max-height: 580px;
  margin: auto;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  padding: 10px 0;
  box-shadow: 5px 5px 5px #b4b4b4;
`;

export const FileDiv = styled.div`
  background: ${(props) => props.theme.background};
  height: ${(props) => props.theme.height};
  width: ${(props) => props.theme.width};
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin: 0 1px;
  margin-top: 10px;
  color: ${(props) => props.theme.color}!important;
  &:active {
    background-color: ${(props) => props.theme.backgroundHover}!important;
  }
`;

FileDiv.defaultProps = {
  theme: {
    width: "40px",
    height: "35px",
    borderRadius: "10px",
    background: "trasnparent",
  },
};

export const DivColumnLeft = styled.div`
  background-color: transparent;
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  display: flex;
  align-items: flex-start;
  justify-content: left;
  flex-direction: column;
  margin: auto;
`;

DivColumnLeft.defaultProps = {
  theme: {
    width: "270px",
    height: "80px",
  },
};



