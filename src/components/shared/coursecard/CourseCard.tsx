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
};

const CourseCard = ({ course }: Props) => {
//  console.log(course);

 return (
  <Card sx={{ maxWidth: 345, bgcolor: "#21252D", color: "#fff" }}>
   <CardMedia
    component="img"
    height="212"
    image="/assets/images/cardimg.png"
    alt="green iguana"
   />
   <CardContent sx={{ px: 3 }}>
    <Typography gutterBottom component="div" sx={{ color: "#818181" }}>
     {course.courseType}
    </Typography>
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
