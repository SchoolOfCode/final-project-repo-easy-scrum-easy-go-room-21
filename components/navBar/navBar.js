import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Container,
  Link,
  Box,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

export default function NavBar() {
  const matches = useMediaQuery('(min-width:700px)');

  return (
    <AppBar position="relative" color="primary" style={{ background: '#fff' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          // alignContent: 'space-around',
        }}
      >
        {/* LOGO */}
        <Container sx={{ display: 'flex', flexDirection: 'row' }}>
          <img
            src="https://i1.lensdump.com/i/rSrdZa.png"
            style={{ maxWidth: '4rem' }}
          ></img>
          <Typography variant="h6" color="#000000">
            Service stack
          </Typography>
        </Container>

        <Box className="navbar-buttons" sx={{ display: 'flex', wrap: 'wrap' }}>
          {matches && (
            <Link
              sx={{ paddingRight: '2rem' }}
              color="#000000"
              underline="none"
            >
              Home
            </Link>
          )}

          {matches && (
            <Link
              sx={{ paddingRight: '2rem' }}
              color="#000000"
              underline="none"
            >
              item 1
            </Link>
          )}

          {matches && (
            <Link
              sx={{ paddingRight: '2rem' }}
              color="#000000"
              underline="none"
            >
              item 2
            </Link>
          )}
          <Link
            sx={{ paddingRight: '2rem', width: '5rem' }}
            color="#000000"
            underline="none"
          >
            Sign In
          </Link>
          <Button
            color="secondary"
            variant="outlined"
            sx={{ marginRight: '5rem' }}
          >
            Join
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
