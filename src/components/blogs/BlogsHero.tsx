import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CommonButton from "components/shared/buttons/CommonButton";
import React, { useEffect, useState } from "react";
import BlogInstructor from "./BlogInstructor";

const Styles = {
  blogBackground: {
    backgroundImage: `url('/assets/images/blogbackground.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
};

const BlogsHero = () => {
  const [courses, setCourses] = useState<any>(null);

  useEffect(() => {
    fetch("/api/course-data")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <>
      <Box sx={{ ...Styles.blogBackground }}>
        <Container maxWidth="xl" sx={{ pt: 18, pb: 25 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "36px",
                lineHeight: "43px",
                textAlign: "center",
                color: "white",
                marginBottom: "26px",
              }}
            >
              Find Awsome Writings by Our Authors
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "140%",
                textAlign: "center",
                color: "white",
                marginBottom: "45px",
              }}
            >
              Pursue your passion with online classes taught by award - winning chefs,{" "}
              <br /> writers, and performers.
            </Typography>
            <CommonButton
              fontSize="1rem"
              textValue="VIEW MORE"
              onClick={() => alert("hello")}
            />
          </Box>
        </Container>
      </Box>

      {courses && <BlogInstructor courses={courses} />}
    </>
  );
};

export default BlogsHero;
