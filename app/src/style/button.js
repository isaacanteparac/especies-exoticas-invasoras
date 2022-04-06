import styled from "styled-components";

const theme = {
  fontColor: null,
  backgroundColor: null,
  activeB: null,
  borderRadius:null,
  width_: null,
  height_: null,
};

export const Button = styled.button`
  height: ${(props) => props.theme.height_};//30px
  width: ${(props) => props.theme.width_}; //200px
  border-radius: ${(props) => props.theme.borderRadius};//25px
  outline: none;
  border: none;
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
  font-weight: 600;
  text-transform: capitalize;

  &:active {
    background-color: ${(props) => props.theme.activeB};
  }
`;

Button.defaultProps = {
    theme: {
        height_: "35px",
        width_: "200px",
        borderRadius: "25px",
        fontColor: "#fff",
        backgroundColor: "#0318f7",
        activeB: "#0211ad",
    }
}

