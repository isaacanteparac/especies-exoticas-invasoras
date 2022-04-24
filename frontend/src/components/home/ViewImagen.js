import React, { Component } from 'react'

export default function ViewImagen(props) {

    return (
        <Box>
    
        <IconButton aria-label="comentarios" onClick={handleOpen} sx={{position:"relative"}}>
          <ModeCommentIcon />
        </IconButton>
  
  
        <Modal open={open} onClose={handleClose}>
          <Box sx={styles.commentsModal}>
            <Box sx={styles.boxComment}>
              <Typography gutterBottom variant="h5" sx={{ fontWeight: "600", textTransform:"capitalize" }}>
                {props.animalName}
              </Typography>
              <Typography
                sx={{
                  color: "#999",
                }}
              >
                {props.nameUser} {props.lastnameUser} ({props.usernameUser})
              </Typography>
              <CardMedia component="img" height="250" image={props.animalPhoto} />
              <Box
                sx={{
                  margin: "5px 0",
                }}
              >
                <Chip
                  label={props.typeSpecie}
                  icon={<PetsIcon />}
                  sx={styles.chipComment}
                  size="small"
                />
  
                <Chip
                  icon={<LocationOnIcon />}
                  sx={styles.chipComment}
                  label={props.location}
                  size="small"
                />
  
                <Chip
                  icon={<ScienceIcon />}
                  sx={styles.chipComment}
                  label={props.scientificName}
                  size="small"
                />
              </Box>
              <Box sx={styles.boxDescription}>
                <Typography variant="body1" color="text.primary">
                  {props.description}
                </Typography>
              </Box>
            </Box>
            <CreateComment id_animal={props.id_animal} />
          </Box>
        </Modal>
      </Box>
    )
  
}
