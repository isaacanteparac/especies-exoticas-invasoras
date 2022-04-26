export const styles = {
  buttonRegisterAnimal: {
    backgroundColor: "#0086ff",
    borderRadius: "10px",
    color: "#fff",
    marginRight: "15px",
    fontWeight: 600,
    textTransform:"capitalize",
    "&:hover": {
      backgroundColor: "#0086ff",
      boxShadow: "3px 3px 3px #999",
    },
  },

  regiserModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "#fff",
    borderRadius: "20px",
    color: "#000",
    p: 2,
  },
  iconItems: {
    color: "#504b4a",
    border: "none",
    borderRadius: "10px",
    width: "30px",
    height: "30px",
    padding: "2px",
    backgroundColor: "#ccc",
  },
  iconItemsListItemText: {
    color: "#504b4a",
  },
  iconItemsListItemButton: {
    borderRadius: "15px",
    height: "45px",
  },
  commentsModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 600,
    backgroundColor: "#fff",
    borderRadius: "20px",
    color: "#000",
    p: 2,
  },
  boxComment: {
    borderRadius: "10px",
    width: "50%",
    padding: "5px",
    float: "left",
  },
  chipComment: {
    margin: "3px",
    color: "#000",
    backgroundColor: "#F5f8fb",
    border: "1px solid #999",
    boxShadow: "3px 3px 3px #999",
  },
  boxContentComment: {
    height: "470px",
    overflowY: "scroll",
    padding: "0 8px",
    borderRadius: "15px",
  },
  addCommentInput: {
    borderRadius: "30px",
    height: "35px",
    paddingLeft: "5px",
    color: "#000",
    width: "88%",
    backgroundColor: "#F5f8fb",
    border: "1px solid #ccc",
    boxShadow: "3px 3px 3px #ccc",
  },
  buttonAddCommment: {
    backgroundColor: "#0055ff",
    height: "35px",
    width: "35px",
    marginLeft: "8px",
    border: "none",
    boxShadow: "3px 3px 3px #999",
    "&:hover": {
      backgroundColor: "#065dfd",
    },
  },
  oneComment: {
    backgroundColor: "#F5f8fb",
    borderRadius: "15px",
    marginBottom: "10px",
    overflow: "hidden",
    boxShadow: "3px 3px 3px #ccc",
    border: "1px solid #ccc",
  },
  boxDescription: {
    height: "200px",
    marginTop: "10px",
    padding: "3px 5px",
    borderRadius: "10px",
    overflowY: "scroll",
  },
  cardBoxDescription: {
    height: "71px",
    overflow: "hidden",
  },
  iconSearch: {
    color: "#0055ff",
    fontSize: "35px",
    marginRight: "5px",
  },
  boxSearch: {
    marginRight: "15%",
    background: "red",
    width: "30%",
    height: "40px",
    borderRadius: "15px",
    backgroundColor: "#F5f8fb",

    display: "blockInline",
    padding: "0 5px",
    border: "1px solid #ccc",
  },
  options: {
    padding: "5px",
    background: "#000",
  },
  contentOptionsBtn: {
    "&:hover": {
      borderRadius: "15px",
      backgroundColor: "#2e2e2e",
    },
  },
  textOptionsItems: {
    color: "#fff",
  },
  iconsOptions: {
    color: "#fff",
    marginRight: "5px",
  },
  btnEditComment: {
    backgroundColor: "#5414d4",
    borderRadius: "10px",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "600",
    marginTop: "8px",
    width: "150px",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
      border: "3px solid #5414d4",
    },
  },
  chipSearch: {
    color: "#fff",
    border: "none",
    fontSize: "18px",
    height: "20px",
    textTransform: "capitalize",
    margin: "0 4px",
    display: "inline",
    fontWeight: "600",
    backgroundColor: "#710ed6",
    "&:hover": {
      backgroundColor: "#710ed6",
      fontWeight: "600",
      boxShadow: "4px 4px 4px #ccc",
    },

  },
  cardSearch: {
    display: "flex",
    width: "100%",
    marginBottom: "20px",
    backgroundColor: "#F5f8fb",
    boxShadow: "5px 5px 5px #ccc",
    border: "1px solid #ccc",
    borderRadius: "20px",
  },
  iconItemSearch: {
    position: "relative",
    top: "5px",
    marginRight: "4px",
  },
  boxImagenSearch: {
    width: "200px",
    padding: "5px 2px 5px 10px",
    position:"relative",
    marginTop:"10px"
  },
  textTypoCard: {
    textTransform: "capitalize",
    cursor: "default",
    display: "inline",
    marginRight:"15px"
  },
  cardAnimal: {
    width: "90%",
    maxHeight: "550px",
    borderRadius: "15px",
    backgroundColor: "#F5f8fb",
    textTransform:"capitalize",
    "&:hover": {
      boxShadow: "5px 5px 5px #ccc",
    },
    

    
  },
  modalImagen:{
    position: "absolute",
    top: "5%",
    left: "35%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    backgroundColor: "#fff",
    borderRadius: "15px",
    color: "#000",
    p: 1,
  }
};
