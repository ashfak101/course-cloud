import { Container, Grid } from "@mui/material";
import CourseCard from "components/shared/coursecard/CourseCard";
const ExploreCourses = () => {
 const courseArray = [1, 2, 3, 4];

 return (
  <Container maxWidth="xl" sx={{ my: 10 }}>
   <Grid container spacing={2}>
    {courseArray.map((course) => (
     <Grid
      item
      xs={12}
      md={6}
      lg={3}
      key={course}
      sx={{
       display: "flex",
       justifyContent: "center",
      }}
     >
      <CourseCard />
     </Grid>
    ))}
   </Grid>
  </Container>
 );
};
export default ExploreCourses;
