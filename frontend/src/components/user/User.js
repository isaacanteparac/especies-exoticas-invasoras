import React, { useContext } from 'react'
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import {AuthContext} from "../../auth/Context";

const theme = createTheme();
export default function User(){
    const {auth} = useContext(AuthContext);
    const {user} = auth;

    return (
    <Stack direction="row" spacing={1} sx={{borderRadius:"10px"}}>
        <Button>
        <Typography>
        {user.name} {user.lastname}
        </Typography>
        </Button>
        
    </Stack>
    )

}
