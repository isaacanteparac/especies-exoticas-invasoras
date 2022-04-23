export const styles = {
  buttonRegisterAnimal: {
    backgroundColor: "#5d49ff",
    borderRadius: "20px",
    color: "#fff",
    marginRight: "15px",
    boxShadow:"0 0 0",
    "&:hover": {
      boxShadow:"0 0 0",
      backgroundColor: "#2f2580",
      color: "#fff",
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
    backgroundColor: "#A477cb",
    marginRight: "3px",
    color: "#fff",
  },
  boxContentComment: {
    height: "450px",
    overflowY: "scroll",
    padding: "0 5px",
    borderRadius: "15px",
  },
  addCommentTextField: {
    borderRadius: "30px",
    height: "35px",
    paddingLeft: "5px",
    color: "#fff",
    width: "310px",
    backgroundColor: "#000",
  },
  buttonAddCommment: {
    backgroundColor: "#065dfd",
    height: "35px",
    width: "35px",
    marginLeft: "3px",
    "&:hover": {
      backgroundColor: "#043898",
    },
  },
  oneComment: {
    backgroundColor: "#D5DEE7",
    borderRadius: "15px",
    marginBottom: "10px",
    overflow: "hidden",
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
  searchTextField:{
    backgroundColor:"#fff",
    width: "230px",
    borderRadius:"10px 10px 0 0",
    border:"none",
    outline: "none",
    float: "left",
  },
  iconSearch:{
    color:"#fff",
    fontSize:"35px",
    float: "left",
  },
  btnSearch:{
    color:"#fff",
    fontWeight: 600,
    border:"none",
    width: "300px",
    height: "40px",
    borderRadius:"15px",
    backgroundColor:"#000",
    overflow: "hidden",
    "&:hover": {
      boxShadow:"0 0 0",
      backgroundColor:"#000"
    },
  },
  boxSearch:{
    marginRight:"125px",
  },
  options:{
    padding: "5px",
    background:"#000"
  },
  contentOptionsBtn:{
    "&:hover": {
      borderRadius:"15px",
      backgroundColor: "#2e2e2e",
    },
  },
  textOptionsItems:{
    color:"#fff"
  },
  iconsOptions:{
    color:"#fff",marginRight:"5px"
  }
};
