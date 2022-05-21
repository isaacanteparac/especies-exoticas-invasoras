import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

import ListItemButton from "@mui/material/ListItemButton";

import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import ListItemText from "@mui/material/ListItemText";

import { AuthContext } from "../../auth/Context";
import { styles } from "../styles";
import { yesToken } from "../../helpers/crud_fetch";

export default function RegsiterAnimal(props) {
  const [open, setOpen] = React.useState(false);
  const [viewBtn, setViewButton] = useState({ register: true, edit: false });

  const [allTypesSpecie, setAllTypesSpecie] = useState([]);
  const [allScientificName, setAllScientificName] = useState([]);
  const [allDangerLevel, setAllDangerLevel] = useState([]);

  const { auth } = useContext(AuthContext);
  const { user } = auth;

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState("");
  const [sound, setSound] = useState("");
  const [description, setDescription] = useState("");

  const [id_ctlg_scientific_name, setId_ctlg_scientific_name] = useState("");
  const [id_ctlg_type_specie, setId_ctlg_type_specie] = useState("");
  const [id_ctlg_danger_level, setId_ctlg_danger_level] = useState("");

  const [id_users, setId_users] = useState("");

  const data = {
    name,
    photo,
    location,
    sound,
    description,
    id_ctlg_scientific_name,
    id_ctlg_type_specie,
    id_users,
    id_ctlg_danger_level
  };

  const getTypesSpecie = async () => {
    const dataTypesSpecies = await yesToken("ctlg/types-specie");
    setAllTypesSpecie(dataTypesSpecies);
  };

  const getScientificName = async () => {
    const dataScientificName = await yesToken("ctlg/scientific-name");
    setAllScientificName(dataScientificName);
  };

  const getDangerLevel = async () =>{
    const dataDangerLevel = await yesToken("ctlg/danger-level");
    setAllDangerLevel(dataDangerLevel);
  }

  const add_putAnimal = async () => {
    setOpen(false);
    if(viewBtn.register){
      await yesToken("animal/register", data, "POST");
    }
    else{
      console.log(data);
      const urlId = "animal/register/update/"+props.id_animal;
      await yesToken(urlId, data, "PUT");
    }
    clearData();
  };

  const updateData = () => {
    setName(props.nameAnimal);
    setDescription(props.description);
    setLocation(props.location);
    setId_ctlg_type_specie(props.id_ctlg_type_specie);
    setId_ctlg_scientific_name(props.id_ctlg_scientific_name);
    setId_ctlg_danger_level(props.id_ctlg_danger_level);
    setPhoto("");
    setSound("");
  };

  const clearData = () => {
    setName("");
    setDescription("");
    setLocation("");
    setId_ctlg_type_specie("");
    setPhoto("");
    setSound("");
    setId_ctlg_scientific_name("");
    setId_ctlg_danger_level("");
  };

  const handleOpen = () => {
    setOpen(true);
    if (viewBtn.edit) {
      updateData();
    }
  };

  const handleClose = () => {
    setOpen(false);
    clearData();
  };

  const getCtlg = () =>{
    getTypesSpecie();
    getScientificName();
    getDangerLevel();
  };

  useEffect(() => {
    setViewButton({ register: props.btnRegister, edit: props.btnEdit });
    setId_users(user.id);
    getCtlg();
  }, []);

  return (
    <div>
      {viewBtn.register ? (
        <Button
          variant="contained"
          sx={styles.buttonRegisterAnimal}
          onClick={handleOpen}
        >
          <AddBoxIcon />
          Registra
        </Button>
      ) : null}
      {viewBtn.edit ? (
        <ListItemButton sx={styles.contentOptionsBtn} onClick={handleOpen}>
          <EditIcon sx={styles.iconsOptions} />
          <ListItemText primary="Editar" sx={styles.textOptionsItems} />
        </ListItemButton>
      ) : null}

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
              autoComplete="off"
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
              value={id_ctlg_scientific_name}
              onChange={(e) => {
                setId_ctlg_scientific_name(e.target.value);
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
              id="id_ctlg_danger_level"
              select
              margin="dense"
              label="Nivel de peligrosidad"
              value={id_ctlg_danger_level}
              onChange={(e) => {
                setId_ctlg_danger_level(e.target.value);
              }}
              fullWidth
            >
              {allDangerLevel?.map((dangerLevel) => (
                <MenuItem key={dangerLevel.id} value={dangerLevel.id}>
                  {dangerLevel.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="description"
              multiline
              required
              label="Descripcion"
              autoComplete="off"
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
              autoComplete="off"
              value={location}
              fullWidth
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <Box
              direction="row"
              fullWidth
              sx={{
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                component="label"
                sx={{
                  fontSize: "13px",
                  fontWeight: "600",
                  borderRadius: "15px",
                  marginRight: "3px",
                  height: "50px"
                }}
              >
                <AddPhotoAlternateIcon />
                Agregar Foto o Video
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  hidden
                  onChange={(e) => {
                    setPhoto(e.target.files[0]);
                  }}
                />
              </Button>

             
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={add_putAnimal}
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
