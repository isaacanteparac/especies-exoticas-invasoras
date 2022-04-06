import styled from "styled-components";

const theme = {
  width: null,
  height: null,
  borderRadius: null,
}

export const DivCenterElement = styled.div`
  background-color: transparent;
  width: 200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivBoxRegister = styled.div`
  background-color: transparent;
  width: 30%;
  max-height: 450px;
  margin: auto;
`;

export const FileDiv = styled.div`
  background: red;
  height: ${(props) => props.theme.height};
  width: ${(props) => props.theme.width};
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin: 0 1px;
  margin-top: 10px;
  color: blue!important;
  &:active {
    color: red!important;
  }
`;

FileDiv.defaultProps = {
  theme:{
    width: "40px",
    height: "35px",
    borderRadius: "10px",
  }
};
