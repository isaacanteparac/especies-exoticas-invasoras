import React, { useState } from "react";

import Container from '@mui/material/Container';
import Home from "../home/Home";


export default function ContentComponent() {
  return (
    <Container maxWidth="lg" sx={{mt: 4, mb: 4, borderRadius:"10px"}}>
        <Home/>
    </Container>
  );
}