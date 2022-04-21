import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import CourseCard from "components/shared/coursecard/CourseCard";
import * as React from "react";
import { CourseData } from "../../../types";
type Props = {
 courses: CourseData;
};

const ExploreCourses = ({ courses }: Props) => {
 const courseArray = [1, 2, 3, 4];
 const [tabsValue, setTabsValue] = React.useState("Most Popular");
 const handleTabsChange = (event: React.SyntheticEvent, newValue: string) => {
  setTabsValue(newValue);
 };

 console.log("logged from explore", courses);

 return (
  <Container maxWidth="xl" sx={{ my: 10 }}>
   <Typography
    variant="h3"
    sx={{ fontSize: "36px", textAlign: "center", my: 4 }}
   >
    Explore Other Courses
   </Typography>

   {/*  */}
   <Box sx={{ width: "100%" }}>
    <Tabs
     value={tabsValue}
     onChange={handleTabsChange}
     textColor="inherit"
     aria-label="secondary tabs example"
     sx={{
      my: 3,
      "& .MuiTabs-indicator": {
       backgroundColor: "#DC9202",
       borderBottom: "3px solid #DC9202",
      },
     }}
    >
     <Tab value="Most Popular" label="Most Popular" />
     <Tab value="Culinary Arts" label="Culinary Arts" />
     <Tab value="Film & Tv" label="Film & Tv" />
     <Tab value="Lifestyle" label="Lifestyle" />
     <Tab value="Sports & Games" label="Sports & Games" />
    </Tabs>
   </Box>

   {/*  */}
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
