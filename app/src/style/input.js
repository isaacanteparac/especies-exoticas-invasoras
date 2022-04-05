import styled from "styled-components";

export const Input = styled.input`
  background-color: white;
  height: 30px;
  width: 200px;
  border-radius: 10px;
  border: 1px solid gray;
  margin: auto;
  margin-bottom: 15px;
  color: black;
  font-size: 15px;
  font-weight: 500;
`;

export const Textarea = styled.textarea`
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 10px;
  color: black;
  width: 200px;
  font-size: 15px;
  overflow: auto;
  box-sizing: border-box;
  resize: none;
  height: 60px;
`;

export const FileDiv = styled.div`
  background: transparent;
  width: 40px;
  height: 35px;
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
