import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";


import {AuthContext} from "../../auth/Context";
import { styles } from "../styles";
import {yesToken} from "../../helpers/crud_fetch";

export default function BasicModal() {
  const {auth} = useContext(AuthContext);
  const {user} = auth;
  const [open, setOpen] = React.useState(false);
  const [allTypesSpecie, setAllTypesSpecie] = useState([]);
  const [allScientificName, setAllScientificName] = useState([]);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState("");
  const [sound, setSound] = useState("");
  const [description, setDescription] = useState("");

  const [id_ctlg_scientic_name, setId_ctlg_scientic_name] = useState("");
  const [id_ctlg_type_specie, setId_ctlg_type_specie] = useState("");
  const [id_users, setId_users] = useState("");

  const data = {
    name,
    photo,
    location,
    sound,
    description,
    id_ctlg_scientic_name,
    id_ctlg_type_specie,
    id_users
  };

  const getTypesSpecie = async () => {
    const dataTypesSpecies = await yesToken("ctlg/types-specie");
    setAllTypesSpecie(dataTypesSpecies);
  };

  const getScientificName = async () => {
    const dataScientificName = await yesToken("ctlg/scientific-name");
    setAllScientificName(dataScientificName);
  };

  const addAnimal = async () => {
    await yesToken("animal/register", data, "POST");
    setOpen(false);
    AllClear();

  };
  const AllClear = () =>{
    setName("");
    setDescription("");
    setLocation("");
    setId_ctlg_type_specie("");
    setPhoto("");
    setSound("");
    setId_ctlg_scientic_name("");
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false); 
    AllClear();
  };

  useEffect(() => {
    setId_users(user.id);
    getTypesSpecie();
    getScientificName();
  }, []);

  return (
    <div>
      <Button variant="contained" sx={styles.buttonRegisterAnimal} onClick={handleOpen}>
      <PlaylistAddIcon />Registrar Animal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.regiserModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Registra el animal
          </Typography>
          <Box sx={{ marginTop: "10px" }}>
            <TextField
              label="Nombre comun"
              name="name"
              autoFocus
              id="name"
              margin="dense"
              fullWidth
              type="text"
              value={name}
              sx={styles.inputs}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              id="id_ctlg_scientic_name"
              select
              label="Nombre cientifico"
              value={id_ctlg_scientic_name}
              onChange={(e) => {
                setId_ctlg_scientic_name(e.target.value);
              }}
              margin="dense"
              fullWidth
            >
              {allScientificName?.map((scientificName) => (
                <MenuItem key={scientificName.id} value={scientificName.id}>
                  {scientificName.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="id_ctlg_type_specie"
              select
              margin="dense"
              label="tipos de especies"
              value={id_ctlg_type_specie}
              onChange={(e) => {
                setId_ctlg_type_specie(e.target.value);
              }}
              fullWidth
            >
              {allTypesSpecie?.map((typeSpecie) => (
                <MenuItem key={typeSpecie.id} value={typeSpecie.id}>
                  {typeSpecie.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
                id="description"
                multiline
                required
                label="Descripcion"
                margin="dense"
                value={description}
                fullWidth
                maxRows={3}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            <TextField
                id="location"
                label="Ubicacion"
                margin="dense"
                value={location}
                fullWidth
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
              <Box direction="row" fullWidth sx={{marginTop:"10px",display: "flex",alignItems: "center", justifyContent: "center"}}>
               <Button variant="contained" component="label" 
               sx={{fontSize:"13px", fontWeight:"600",borderRadius:"20px", marginRight:"3px"}}>
               <AddPhotoAlternateIcon/>Agregar Foto
                <input type="file" accept="image/png, image/jpeg, image/jpg" hidden
                onChange={(e) => {
                  setPhoto(e.target.files[0]);
                }}/>
              </Button>
  
              <Button variant="contained" component="label" sx={{fontSize:"13px", fontWeight:"600", borderRadius:"20px"}}>
              <MusicNoteIcon/>Agregar Sonido
                <input type="file" accept="audio/mp3" hidden onChange={(e) => {
                  setSound(e.target.files[0]);
                }}/>
              </Button>
            </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={addAnimal}
                sx={{ mt: 3, mb: 2, background: "orange", fontWeight: "600" }}
              >
                Registrar
              </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
