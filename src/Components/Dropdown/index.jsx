import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Container, Grid, Typography, Divider, Box } from '@mui/material';

const index = (props) => {
  return (
    <Container>
      <FormControl >
        <Typography variant="h5" component="h5">
          {props.label}
        </Typography>

        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
        ></InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Option A</option>
          <option value={20}>Option B</option>
          <option value={30}>Option C</option>
        </NativeSelect>
      </FormControl>
    </Container>
  );
};

export default index;
