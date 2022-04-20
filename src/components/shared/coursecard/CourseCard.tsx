import {
 Button,
 Card,
 CardActions,
 CardContent,
 CardMedia,
 Typography,
} from "@mui/material";

const CourseCard = () => {
 return (
  <Card sx={{ maxWidth: 345, bgcolor: "#21252D", color: "#fff" }}>
   <CardMedia
    component="img"
    height="212"
    image="/assets/images/cardimg.png"
    alt="green iguana"
   />
   <CardContent>
    <Typography gutterBottom component="div" sx={{ color: "#818181" }}>
     Marketing
    </Typography>
    <Typography gutterBottom component="div" variant="h6">
     The Complete Digital Marketing Guide Courses
    </Typography>
    <Typography variant="body2">
     Lizards are a widespread group of squamate reptiles, with over 6,000
     species, ranging across all continents except Antarctica
    </Typography>
   </CardContent>
   <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
   </CardActions>
  </Card>
 );
};

export default CourseCard;
