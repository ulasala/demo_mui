import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Container, Grid, Typography, Divider, Box } from '@mui/material';

import Select from '../Components/Select';

const Home = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            width: '100%',
            height: 40,
            marginBottom: 5,
            bgcolor: '#f5f5f5',
          }}
        />

        <Grid container spacing={4} justifyContent={'center'}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h3" component="h2">
              MFG Ops UI
            </Typography>
            <Typography variant="h6" component="h2">
              Proof of Concept
            </Typography>
          </Grid>
          <Grid item sx={{ margin: 1.5 }}>
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" component="h2">
              Please Select a Location, Product Line, & Device Configuration
              from the options below.
            </Typography>
          </Grid>
        </Grid>

        <Divider orientation="Horizontal" sx={{ marginTop: 2, border: 1 }} />

        <Grid container spacing={6} style={{ marginTop: 10 }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              textAlign: 'center',
            }}
          >
            <Select label="Location" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              textAlign: 'center',
            }}
          >
            <Select label=" Product Line" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              textAlign: 'center',
            }}
          >
            <Select label="PC Name" />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ width: '100%', marginTop: 10, textAlign: 'center' }}
        >
          <Select label=" Station Configuration" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            width: '100%',
            marginTop: 10,
            marginRight: 20,
            marginBottom: 20,
            textAlign: 'end',
          }}
        >
          <Button
            variant="contained"
            sx={{ bgcolor: '#3d4960' }}
            startIcon={<AddIcon />}
          >
            Add Station
          </Button>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
