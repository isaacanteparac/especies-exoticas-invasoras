export const styles = {
  buttonRegisterAnimal: {
    backgroundColor: "#F5f8fb",
    borderRadius: "15px",
    color: "#5d49ff",
    marginRight: "15px",
    boxShadow: "5px 5px 5px #ccc",
    "&:hover": {
      backgroundColor: "#F5f8fb",
      color: "#5d49ff",
      fontWeight: 600,
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
    p: 4,
  },
  iconItems: {
    color: "#504b4a",
    border: "none",
    borderRadius: "10px",
    width: "30px",
    height: "30px",
    padding: "2px",
    backgroundColor: "#ccc" /*262323 */,
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
    p: 4,
  },
  boxComment: {
    borderRadius: "10px",
    width: "50%",
    height: "400px",
    padding: "5px",
    float: "left",
  },
  chipComment: {
    margin: "3px",
    color: "#000",
    backgroundColor: "#F5f8fb",
    border:"1px solid #999",
    boxShadow: "3px 3px 3px #999",
  },
  boxContentComment: {
    height: "450px",
    overflowY: "scroll",
    padding: "0 5px",
    borderRadius: "15px",
  },
  addCommentInput: {
    borderRadius: "30px",
    height: "35px",
    paddingLeft: "5px",
    color: "#000",
    width: "88%",
    backgroundColor: "#F5f8fb",
    border:"1px solid #ccc",
    boxShadow: "3px 3px 3px #ccc",
  },
  buttonAddCommment: {
    backgroundColor: "#0055ff",
    height: "35px",
    width: "35px",
    marginLeft: "5px",
    border:"none",
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
    border:"1px solid #ccc"
  },
  boxDescription: {
    height: "150px",
    marginTop: "10px",
    padding: "3px 5px",
    borderRadius: "15px",
    overflowY: "scroll",
  },
  cardBoxDescription: {
    height: "71px",
    overflow: "hidden",
  },
  iconSearch: {
    color: "#0055ff",
    fontSize: "35px",
    float: "left",
  },
  boxSearch: {
    marginRight: "15%",
    background: "red",
    width:"30%",
    height: "40px",
    borderRadius: "15px",
    backgroundColor: "#F5f8fb",
    boxShadow: "5px 5px 5px #ccc",
    display:"blockInline",
    padding:"0 5px",
    border:"1px solid #ccc" 
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
      border:"3px solid #5414d4",
    },
  },
  chipSearch: {
    color: "#fff",
    border:"none",
    boxShadow: "3px 3px 3px #ccc",
    fontSize:"18px",
    height: "20px",
    textTransform: "capitalize",
    margin:"0 4px",
    display:"inline",

    backgroundColor: "#710ed6",
    "&:hover": {
      fontWeight: "600"
    },
    "&:active":{
      backgroundColor: "#440881"
    }
  },
};
