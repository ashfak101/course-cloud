import {
 Box,
 Button,
 Card,
 CardActions,
 CardContent,
 CardMedia,
 Typography,
} from "@mui/material";
import Image from "next/image";
import SecondaryBtn from "../buttons/SecondaryBtn";
import { CoursesOnDeal } from "../../../../types";

type Props = {
 course: CoursesOnDeal;
 isDiscounted: boolean;
};

const CourseCard = ({ course, isDiscounted }: Props) => {
//  console.log(course);

 return (
  <Card
   sx={{
    maxWidth: `${(isDiscounted && "420px") || "345px"}`,
    bgcolor: "#21252D",
    color: "#fff",
   }}
  >
   <CardMedia
    component="img"
    height="212"
    image="/assets/images/cardimg.png"
    alt="green iguana"
   />
   <CardContent sx={{ px: 3 }}>
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
     <Typography gutterBottom component="div" sx={{ color: "#818181" }}>
      {course.courseType}
     </Typography>
     <Box
      sx={{
       mt: "-52px",
       position: "relative",
       "&::before": {
        position: "absolute",
        zIndex: "100",
        content: `'${(isDiscounted && "20%") || "£399"}'`,
        fontWeight: "bold",
        color: "#FA5862",
        display: "inline-block",
        marginTop: "8px",
        top: "10%",
        left: `${(isDiscounted && "29%") || "23%"}`,
       },
       "&::after": {
        position: "absolute",
        zIndex: "100",
        content: `'${(isDiscounted && "off") || "£599"}'`,
        fontSize: ".9rem",
        color: "#000",
        textDecoration: `${(isDiscounted && "none") || "line-through"}`,
        display: "inline-block",
        marginTop: "8px",
        bottom: "35%",
        left: `${(isDiscounted && "35%") || "26%"}`,
       },
      }}
     >
      {(isDiscounted && (
       <Image
        src={`/assets/images/discounted-tag-img.png`}
        height="70px"
        width="70px"
        alt="logo"
        objectFit={"contain"}
       />
      )) || (
       <Image
        src={`/assets/images/explore-tag-img.png`}
        height="70px"
        width="70px"
        alt="logo"
        objectFit={"contain"}
       />
      )}
     </Box>
    </Box>
    <Typography gutterBottom component="div" variant="h6">
     {course.title}
    </Typography>
    <Typography variant="body2" sx={{ color: "#969696" }}>
     {course.courseDetails}
    </Typography>
   </CardContent>
   <CardActions
    sx={{ display: "flex", justifyContent: "space-between", px: 3, pb: 3 }}
   >
    <Box sx={{ display: "flex", alignItems: "center" }}>
     <Image
      height="40px"
      width="40px"
      objectFit={"contain"}
      src={
       course.instructorDetails?.avatar || "/assets/images/instructor-img.png"
      }
      alt="instructor"
      className="instructoravatar"
     />
     <Typography sx={{ ml: 1 }}>
      {course.instructorDetails?.name || "John Smith"}
     </Typography>
    </Box>
    <SecondaryBtn
     textValue="ADD TO CART"
     bgcolor="#5193F6"
     borderColor="#fff"
     hoverBorderColor="#5193F6"
    />
   </CardActions>
  </Card>
 );
};

export default CourseCard;
