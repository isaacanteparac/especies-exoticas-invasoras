
export const styles = {
  buttonRegisterAnimal: {
    backgroundColor: "#e6e6e6",
    borderRadius: "20px",
    color: "#000",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
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
    color:"#000",
    p: 4,
  },
  iconItems: {
    color: "#504b4a",
    border: "none",
    borderRadius: "10px",
    width: "30px",
    height:"30px",
    padding:"2px",
    backgroundColor:"#ccc"/*262323 */
  },
  iconItemsListItemText:{
    color: "#504b4a",
  },
  iconItemsListItemButton:{
    borderRadius:"15px",
    height: "45px",
  },
  commentsModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 550,
    backgroundColor: "#fff",
    borderRadius: "20px",
    color:"#000",
    p: 4,
  },
  boxComment:{
    borderRadius: "10px",
    width: "50%",
    height: "400px",
    padding: "5px",
    float: "left",
  },
  chipComment:{
    backgroundColor:"#e6e6e6",
    marginRight:"3px",
  },
  boxContentComment:{
    height: "400px",
  },
  addCommentTextField:{
    borderRadius:"30px",
    height: "35px",
    paddingLeft: "5px",
    color:"#000",
    width: "315px",
    backgroundColor:"#D5DEE7"
  },
  buttonAddCommment:{
    backgroundColor:"#065dfd",
    height: "35px",
    width: "35px",
    marginLeft:"3px",
    "&:hover": {
      backgroundColor: "#043898",
    },
  }

};
