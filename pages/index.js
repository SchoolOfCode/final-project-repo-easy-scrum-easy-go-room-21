import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavBar from '../components/navBar/navBar.js';

import CourseCard from '../components/course-card/CourseCard.js';

import Banner from '@components/Banner/Banner.js';
import Footer from '@components/Footer/Footer.js';
import { API } from 'utils/API.js';

const data = API.courses;
const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* NavBar start */}
      <NavBar />
      {/* NavBar end */}

      <main>
        {/* Hero unit */}

        <Banner />
        {/* course card starts*/}
        <CourseCard cards={data} />
        {/* course card ends*/}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
