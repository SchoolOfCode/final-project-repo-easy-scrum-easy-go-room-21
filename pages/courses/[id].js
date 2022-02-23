import Image from 'next/image';
import { Box, Button, Rating, Typography } from '@mui/material';
export default function CoursePage({ data }) {
  const course = data.course[0];
  const days = course.dates_available.map((date) => {
    return Object.keys(date);
  });
  const available = course.dates_available.map((date) => {
    return Object.values(date).toString();
  });

  return (
    <Box className="topLevelContainer courseProfile">
      <Image
        src={course.images.thumb}
        width="400px"
        height="260px"
        alt="painting"
      />
      <Box className="lessonCard">
        <Typography className="courseTitle" variant="h1">
          {course.course_title}{' '}
        </Typography>

        <Typography className="courseSubHead">
          {' '}
          {course.course_brief}
        </Typography>

        <Typography className="courseTeacherName" variant="h2">
          {' '}
          {course.teacher_name}
        </Typography>

        <Rating
          name="read-only"
          defaultValue={Number(course.rating)}
          precision={0.5}
          readOnly
        />
        <Box>
          {available.map((value, index) => {
            if (value == 'true') {
              return (
                <Typography sx={{ fontWeight: 'bold' }}>
                  {days[index]}{' '}
                </Typography>
              );
            } else {
              return (
                <Typography sx={{ color: 'gray' }}>{days[index]} </Typography>
              );
            }
          })}
        </Box>
        <Box className="courseOnlineStatus">
          {course.is_offline === 'true' ? (
            <Typography sx={{ fontWeight: 'bold' }}>Offline</Typography>
          ) : (
            <Typography sx={{ color: 'gray' }}>Offline</Typography>
          )}{' '}
          |{' '}
          {course.is_online === 'true' ? (
            <Typography sx={{ fontWeight: 'bold' }}>Online</Typography>
          ) : (
            <Typography sx={{ color: 'gray' }}>Online</Typography>
          )}
        </Box>
        <Button>{course.email}</Button>
      </Box>
      <Box>
        {/* <section className="courseDescription"> */}
        <Typography variant="h3">About this class</Typography>
        <Typography className="courseLongDescription">
          {course.long_description}
        </Typography>
      </Box>

      {/* 
---

- Profile (title, subtext, rating, name, date, aboutClass, content)
- Image (image)
- LessonCard(title, subText, rating, name, date)
- Action Button (text, function) (Child component)
- Description (aboutClass, content) (Child component)
*/}
    </Box>
  );
}

// export async function getServerSideProps(ctx) {
//   const number = ctx.params;
//   console.log('id:', number);
//   return { props: { id: number } };
// }

export async function getStaticPaths() {
  // call a fetch to all the courses
  // map all courses by id
  const res = await fetch('http://localhost:3000/api/courses');
  const data = await res.json();
  // data.courses
  const paths = data.courses.map((course) => {
    const id = String(course.course_id);
    return {
      params: {
        id: id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/courses/${params.id}`);
  const data = await res.json();
  return { props: { data } };
}

// data to add to dummy json file
// course_title:
// rating:
// dates_available: {Sunday: false, Monday: true, Tuesday: false, Wednesday: true, Thursday: true, Friday: false, Saturday: true}

// const fakeData = {
//   course_id: 1,
//   teacher_name: 'Simona Mountcastle',
//   email: 'smountcastle0@ebay.co.uk',
//   location: 'Skrwilno',
//   bio_text:
//     'Small batch crucifix helvetica kickstarter messenger bag before they sold out everyday carry viral ethical af next level chillwave hammock succulents pug.  Mixtape YOLO single-origin coffee sartorial, kitsch pitchfork ugh pabst letterpress.  Sartorial wayfarers lumbersexual retro before they sold out plaid etsy chillwave chicharrones portland gastropub VHS artisan tumblr.  Typewriter shaman locavore ramps, tumeric ugh pabst.  Umami kickstarter coloring book kitsch chartreuse, ramps plaid copper mug.  Offal everyday carry intelligentsia glossier, woke deep v microdosing selvage freegan hexagon scenester.  Mlkshk listicle portland raw denim, meditation lyft hoodie mustache hashtag.',
//   long_description:
//     "Heirloom gastropub whatever cardigan neutra listicle wayfarers.  Cardigan you probably haven't heard of them four dollar toast, lumbersexual iceland affogato hexagon pabst poutine live-edge vexillologist af prism.  Man bun live-edge subway tile literally lumbersexual pug.  Hella freegan iceland small batch poke slow-carb.  Try-hard vice ennui pork belly, 90's subway tile echo park heirloom bushwick blog readymade lo-fi kogi flannel street art.  Squid farm-to-table butcher ugh heirloom direct trade.",
//   is_online: 'true',
//   is_offline: 'false',
//   image: 'https://images.unsplash.com/photo-1461344577544-4e5dc9487184',
//   course_brief:
//     'Master cleanse taiyaki ethical bushwick slow-carb migas XOXO direct trade',
//   course_title: 'Painting for idiots',
//   rating: 3.2,
//   dates_available: [
//     {
//       Sunday: false,
//     },
//     { Monday: true },
//     { Tuesday: false },
//     { Wednesday: true },
//     { Thursday: true },
//     { Friday: false },
//     { Saturday: true },
//   ],
// };
