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
import Image from 'next/image';
import React from 'react';

export default function NavBar() {
  const matches = useMediaQuery('(min-width:900px)');

  return (
    <AppBar
      position="relative"
      color="primary"
      sx={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      style={{
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '80%',
        }}
      >
        {/* when screen goes to small screen width switches 100*/}

        {/* LOGO */}
        <Container
          sx={{
            display: 'flex',
            width: '50%',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://i1.lensdump.com/i/re9GT7.md.png"
            alt="logo"
            style={{ maxWidth: '4rem' }}
          ></img>
          <Typography variant="h6" color="#000000">
            WeAreSharers
          </Typography>
        </Container>

        <Box
          className="navbar-buttons"
          sx={{
            display: 'flex',
            wrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
            gap: '2rem',
          }}
        >
          {matches && (
            <Link color="#000000" underline="none">
              ABOUT
            </Link>
          )}

          {matches && (
            <Link color="#000000" underline="none">
              MENU1
            </Link>
          )}

          {matches && (
            <Link color="#000000" underline="none">
              MENU2
            </Link>
          )}
          <Link color="#000000" underline="none">
            SIGN IN
          </Link>
          <Button
            color="secondary"
            variant="contained"
            sx={{
              color: '#fff',
              background: '#FF8957',
              '&:hover': { background: '#FF8957' },
              fontFamily: 'Inter',
              fontStyle: 'normal',
              letterSpacing: '0em',
            }}
          >
            Join
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
