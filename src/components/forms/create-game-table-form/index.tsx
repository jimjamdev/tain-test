import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FunctionComponent } from 'react';

import { IForm } from '~types';

export const CreateGameTableForm: FunctionComponent<IForm> = ({ onSubmit }) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Weird MUI
    // @ts-ignore
    onSubmit && onSubmit({ name: event.target[0].value });
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        name="name"
        id="name"
        label="Table Name"
        variant="standard"
        required
      />
      <Button type="submit" variant="contained">
        Add Table
      </Button>
    </Box>
  );
};
