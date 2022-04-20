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
    height="140"
    image="/static/images/cards/contemplative-reptile.jpg"
    alt="green iguana"
   />
   <CardContent>
    <Typography gutterBottom variant="h5" component="div">
     Lizard
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
