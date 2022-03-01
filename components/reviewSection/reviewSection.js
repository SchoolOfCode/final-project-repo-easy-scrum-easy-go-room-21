import AddNewReview from '@components/AddNewReview/AddNewReview';
import Review from '@components/Review/Review';
import { Button, Container } from '@mui/material';
import {
  centerContentCol,
  centerContentRow,
  courseCardButton,
  showMoreLessButton,
} from 'globalCss';
import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { Box } from '@mui/system';
import SuccessAlert from '@components/SuccessAlert/SuccessAlert';

// This component holds all of the review section
// Data is review section of API
export default function ReviewSection({ data }) {
  // Used useState to re-render review section on addition of new review
  const [reviewData, setReviewData] = useState(data);
  // Used useState to set boolean to trigger AddNewReviewSection
  const [showAddReview, setShowAddReview] = useState(false);
  const { user, error, isLoading } = useUser();
  const [visible, setVisible] = useState(2);
  const [open, setOpen] = React.useState(false);

  function showMoreItems() {
    setVisible((prevValue) => prevValue + 2);
  }

  function collapseItems() {
    setVisible(2);
  }

  return (
    <Container sx={centerContentCol}>
      {!showAddReview && user && (
        <Button
          sx={courseCardButton}
          onClick={() => {
            setShowAddReview(true);
          }}
        >
          Add review
        </Button>
      )}
      {!showAddReview && !user && (
        <Button
          sx={courseCardButton}
          onClick={() => {
            setShowAddReview(true);
          }}
          disabled={true}
        >
          Log in to add review
        </Button>
      )}
      <Review visible={visible} reviews={reviewData} />
      <Box sx={centerContentRow}>
        <Button sx={showMoreLessButton} onClick={() => showMoreItems()}>
          Show more
        </Button>

        <Button sx={showMoreLessButton} onClick={() => collapseItems()}>
          Show less
        </Button>
      </Box>
      {showAddReview && (
        <AddNewReview
          reviewData={reviewData}
          setReviewData={setReviewData}
          setShowAddReview={setShowAddReview}
          setOpen={setOpen}
        />
      )}
      <SuccessAlert open={open} setOpen={setOpen} />;
    </Container>
  );
}
