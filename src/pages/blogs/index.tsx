import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import BlogsHero from "components/blogs/BlogsHero";
import BlogPageCard from "components/blogs/BlogPageCard";
import { GetStaticProps } from "next";
import { BlogsData, GetBlogsData } from "../../../types-blog";

interface TabPanelProps {
 children?: React.ReactNode;
 index: number;
 value: number;
}

type Props = {
 blogs: BlogsData[];
};

function TabPanel(props: TabPanelProps) {
 const { children, value, index, ...other } = props;

 return (
  <div
   role="tabpanel"
   hidden={value !== index}
   id={`simple-tabpanel-${index}`}
   aria-labelledby={`simple-tab-${index}`}
   {...other}
  >
   {value === index && (
    <Box sx={{ p: 3 }}>
     <Typography>{children}</Typography>
    </Box>
   )}
  </div>
 );
}

function a11yProps(index: number) {
 return {
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
 };
}

const Blogs = ({ blogs }: Props) => {
 const [value, setValue] = useState(0);
 const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue);
 };

 return (
  <>
   <BlogsHero />
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
    Blogs
   </Typography>
   <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
    <Box
     sx={{
      width: { xl: "620px", xs: "100%", md: "620px" },
      backgroundColor: "#21252D",
      borderRadius: { xl: "20px", md: "20px" },
      display: { xl: "flex", md: "flex" },
      justifyContent: "center",
     }}
    >
     <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
       value={value}
       onChange={handleChange}
       aria-label="basic tabs example"
       textColor="inherit"
       variant="scrollable"
       sx={{
        "& .MuiTabs-indicator": {
         backgroundColor: "#DC9202",
         borderBottom: "3px solid #DC9202",
        },
       }}
      >
       <Tab label="All" {...a11yProps(0)} />
       <Tab label="Technology" {...a11yProps(1)} />
       <Tab label="Marketing" {...a11yProps(2)} />
       <Tab label="Design" {...a11yProps(3)} />
       <Tab label="Development" {...a11yProps(4)} />
      </Tabs>
     </Box>
    </Box>
   </Box>

   <BlogPageCard blogs={blogs} />
  </>
 );
};
export default Blogs;

export const getStaticProps: GetStaticProps = async (context) => {
 const blogResponse = await fetch(
  "https://tawsifhye.github.io/data/coursecloudblogs.json"
 );
 const blogs: GetBlogsData = await blogResponse.json();

 return {
  props: {
   blogs,
  },
 };
};
