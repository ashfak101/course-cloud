import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import CourseCard from "components/shared/coursecard/CourseCard";
import * as React from "react";
import { CourseData } from "../../../types";
type Props = {
 courses: CourseData;
};

const ExploreCourses = ({ courses }: Props) => {
 const [tabsValue, setTabsValue] = React.useState("Most Popular");
 const handleTabsChange = (event: React.SyntheticEvent, newValue: string) => {
  setTabsValue(newValue);
 };

//  console.log("logged from explore", courses);

 const [displayCourses, setDisplayCourses] = React.useState(
  courses.mainCourses
 );

 const filterCourses = (filterCourse: string) => {
  const updatedCourses = courses.mainCourses.filter((currentCourse) => {
   return currentCourse.courseType === filterCourse;
  });
  setDisplayCourses(updatedCourses);
 };

 return (
  <Container maxWidth="xl" sx={{ pb: 15, pt: 10 }}>
   <Typography variant="h3" sx={{ fontSize: "36px", textAlign: "center" }}>
    Explore Other Courses
   </Typography>
   <Box sx={{ width: "100%" }}>
    <Tabs
     value={tabsValue}
     onChange={handleTabsChange}
     textColor="inherit"
     aria-label="secondary tabs example"
     variant="scrollable"
     sx={{
      my: 3,
      "& .MuiTabs-indicator": {
       backgroundColor: "#DC9202",
       borderBottom: "3px solid #DC9202",
      },
     }}
    >
     <Tab
      value="Most Popular"
      label="Most Popular"
      onClick={() => setDisplayCourses(courses.mainCourses)}
     />
     <Tab value="Music" label="Music" onClick={() => filterCourses("Music")} />
     <Tab
      value="Film"
      label="Film &#38; Tv"
      onClick={() => filterCourses("Film & TV")}
     />
     <Tab
      value="Marketing"
      label="Marketing"
      onClick={() => filterCourses("Marketing")}
     />
     <Tab
      value="Sports"
      label="Sports &#38; Games"
      onClick={() => filterCourses("Sports")}
     />
    </Tabs>
   </Box>

   {/* Marketing  "Sports" "Music"*/}
   <Grid container spacing={2}>
    {displayCourses?.slice(0, 4).map((course) => (
     <Grid
      item
      xs={12}
      md={6}
      lg={3}
      key={course?.id}
      sx={{
       display: "flex",
       justifyContent: "center",
      }}
     >
      <CourseCard course={course} isDiscounted={false} />
     </Grid>
    ))}
   </Grid>
  </Container>
 );
};
export default ExploreCourses;
