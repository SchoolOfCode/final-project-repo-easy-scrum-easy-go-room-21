//import link from next
import Image from 'next/image';
import {
  Box,
  Button,
  Rating,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';

//import navBar, course-card and footer from components folder
import Footer from '@components/Footer/Footer';
import NavBar from '@components/navBar/navBar';
import CourseCard from '@components/course-card/CourseCard';

// Importing CSS
import {
  aboutSection,
  centerContentRow,
  footerContainerBoxLgr,
  footerContainerBoxMd,
  generalTypo,
  nameTypo,
  navbarButton,
  navbarSidePageBox,
  profileSearchBar,
  titleTypo,
} from 'globalCss';

// import api data and map through to create card content
import { API } from 'utils/API';
import { useState } from 'react';
import { createContext } from 'vm';

// from homepage, user input is taken in  and onclick of search button-----> user input is passed to results page  ----> list of results displayed on results page.

//note to self: search bar components on both pages will operate in different ways. The search component on results page WILL NOT redirect users to another page to display results whereas it will on the homepage.

//connect search button so that when it is pressed, we are redirected to the results page(which then would display course cards related to user input)
const data = API.courses;

// compare input to data.course_title

//gets search input from params of url
export async function getServerSideProps(context) {
  const homepageSearch = context.query.results;
  console.log(context);
  // console.log(text);
  return {
    props: {
      inputData: homepageSearch,
    },
  };
}
//deconstruct data from serverside props
//use data to filter through API according to input
//map that result to generate course display cards

//check if props exists // check if props object is empty
//if props object is not empty
//use those props to filter the search
//else
// only conduct search when user uses the search bar on explore page

export default function Results({ inputData }) {
  const matchesMd = useMediaQuery('(max-width:913px)');
  const matchesLrg = useMediaQuery('(min-width:913px)');

  // console.log(homepageSearchTerm);

  const [input, setInput] = useState('');
  const [search, setSearch] = useState(inputData);

  function handleChange(e) {
    // saves value into the state
    e.preventDefault();
    setInput(e.target.value);
    // console.log(input);
  }

  function onClick(e) {
    // clears the search field when user clicks button
    e.preventDefault();
    setSearch(input);
    setInput('');
    console.log(input);
  }

  // explore page filter
  const searchResult = data.filter((item) =>
    item.course_title.toUpperCase().includes(search.toUpperCase())
  );

  // homepage text search filter
  // const homepageText = data.filter((item) =>
  //   item.course_title.toUpperCase().includes(homepageSearchTerm.toUpperCase())
  // );

  // console.log(homepageText);
  // console.log(searchResult);

  return (
    <Box style={{ height: '100vh' }}>
      {/* Navbar section */}
      <Box sx={navbarSidePageBox}>
        <NavBar logoLink={'https://i.lensdump.com/i/reFewK.png'} />
      </Box>
      {/* Navbar section end*/}
      {/* Search section */}
      <Box sx={profileSearchBar}>
        <TextField
          id="outlined-basic"
          value={input}
          onChange={handleChange}
          variant="outlined"
          sx={{
            background: '#fff',
            borderRadius: '6px',
            width: '60%',
          }}
        />
        <Button variant="contained" sx={navbarButton} onClick={onClick}>
          Search
        </Button>
      </Box>
      {/* Search section end */}
      {search === 'results' ? (
        <Box sx={aboutSection}>
          <Typography>Search for item</Typography>
        </Box>
      ) : searchResult.length > 0 && search ? (
        <Box sx={aboutSection}>
          <Typography variant="h4">Results for "{search}"</Typography>
          <Typography></Typography>
          {/* search results displayed here as cards */}
          <CourseCard cards={searchResult} />
        </Box>
      ) : searchResult.length === 0 && search ? (
        <Box sx={aboutSection}>
          {' '}
          <Typography>Search results for "{search}" not found</Typography>{' '}
        </Box>
      ) : (
        <Box sx={aboutSection}>
          <Typography>Search for item</Typography>
        </Box>
      )}

      {/* When the screen width reaches atleast 913px, then this css takes place. */}
      {matchesLrg && <Footer styling={footerContainerBoxLgr} />}
      {/* When the screen width reaches at most 913px, then this css takes place. */}
      {matchesMd && <Footer styling={footerContainerBoxMd} />}
    </Box>
  );
}