import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
export const Header = () => {
  return (
    <Grid container sx={{ marginBottom: 10 }}>
      <Button variant="text">
        <Link to="/"> Material UI </Link>
      </Button>
      <Button variant="text">
        <Link to="/tailwind"> Tailwind Css </Link>
      </Button>
    </Grid>
  );
};
