import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Container, Grid, Typography, Divider, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Select from '../Components/Select';

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  console.group('isSmallScreen', isSmallScreen);

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
          <Grid item xs={12} sm={12} md={5}>
            <Typography variant="h3" component="h2">
              MFG Ops UI
            </Typography>
            <Typography variant="h6" component="h2">
              Proof of Concept
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={2} justifyContent={'center'}>
            <Divider
              orientation={isSmallScreen ? 'horizontal' : 'vertical'}
            ></Divider>
          </Grid>

          <Grid item xs={12} sm={12} md={5}>
            <Typography variant="h6" component="h2">
              Please Select a Location, Product Line, & Device Configuration
              from the options below.
            </Typography>
          </Grid>
        </Grid>

        <Divider orientation="horizontal" sx={{ marginTop: 2, border: 1 }} />

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
