import styled from "styled-components";

const theme = {
  width: null,
  height: null,
  borderRadius: null,
}


export const Input = styled.input`
  background-color: white;
  height: ${(props) => props.theme.height};
  width: ${(props) => props.theme.width};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid gray;
  margin: auto;
  margin-bottom: 15px;
  color: black;
  font-size: 15px;
  font-weight: 500;
`;

Input.defaultProps = {
  theme: {
      height: "30px",
      width: "200px",
      borderRadius: "10px",
  }
};

//TITLE: TEXTAREA
export const Textarea = styled.textarea`
  background-color: transparent;
  border: 1px solid gray;
  border-radius: ${(props) => props.theme.borderRadius};
  color: black;
  width: ${(props) => props.theme.width}; //200px
  font-size: 15px;
  overflow: auto;
  box-sizing: border-box;
  resize: none;
  margin: auto;
  height: ${(props) => props.theme.height}; //60px
`;

Textarea.defaultProps = {
  theme: {
      height: "60px",
      width: "200px",
      borderRadius: "10px",
  }
};

//TITLE: INPUT FILE

export const FileInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  opacity: 0;
  filter: alpha(opacity=0);
  width: 148px;
  height: 46px;
  cursor: pointer;
`;
