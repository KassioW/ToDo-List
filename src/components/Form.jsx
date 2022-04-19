import { Button, Paper, TextField} from "@mui/material";
import React from 'react'

export default function Form() {

  return (
  <Paper style={{ padding: "1em" }}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
     <Button variant="text">Add</Button>
  </Paper>
    );
  }

