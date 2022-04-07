import styled from "styled-components";

const theme = {
  width: null,
  height: null,
  borderRadius: null,
  background: null,
  color: null,
  backgroundHover: null,
  position: null,
  top: null,
  bottom: null,
  left: null,
  right: null,

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
  position: ${(props) => props.theme.position};
  top: ${(props) => props.theme.top};
  bottom: ${(props) => props.theme.bottom};
  left: ${(props) => props.theme.left};
  right: ${(props) => props.theme.right};
`;

DivBoxRegister.defaultProps = {
  theme:{
    position: "relative",
    top: "0",
    bottom:"0",
    left: "0",
    right: "0",
  }
}

export const FileDiv = styled.div`
  background: ${(props) => props.theme.background};
  height: ${(props) => props.theme.height};
  width: ${(props) => props.theme.width};
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  position: relative;
  top: ${(props) => props.theme.top};
  bottom: ${(props) => props.theme.bottom};
  left: ${(props) => props.theme.left};
  right: ${(props) => props.theme.right};
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
    top:"0",
    bottom: "0",
    left: "0",
    right: "0",
  },
};

export const DivColumnLeft = styled.div`
  background-color: ${(props) => props.theme.background};
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  align-items: flex-start;
  justify-content: left;
  flex-direction: column;
  margin: auto;
  top: ${(props) => props.theme.top};
  bottom: ${(props) => props.theme.bottom};
  left: ${(props) => props.theme.left};
  right: ${(props) => props.theme.right};
`;

DivColumnLeft.defaultProps = {
  theme: {
    background: "trasnparent",
    width: "270px",
    height: "80px",
    borderRadius: "10px",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
  },
};

export const DivGeneral = styled.div`
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  position: ${(props) => props.theme.position};
  top: ${(props) => props.theme.top};
  bottom: ${(props) => props.theme.bottom};
  left: ${(props) => props.theme.left};
  right: ${(props) => props.theme.right};
  background-color: ${(props) => props.theme.background};
`;

DivGeneral.defaultProps = {
  theme:{
    width: "300px",
    height: "400px",
    position: "relative",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    background: "trasnparent",
  }
}

export const DivMenu = styled.div`
  width: 300px;
  height: 100%;
  border-top-right-radius: 50px;
  background-color: ${((props) => props.theme.background)};
  margin: 0;
  box-shadow: 3px 1px 10px ${(props) => props.theme.color};
  position: fixed;
  bottom: 1px;
`;

export const Hr = styled.hr`
  width: ${((props) => props.theme.background)};
`;

Hr.defaultProps ={
  width: "250px",
}