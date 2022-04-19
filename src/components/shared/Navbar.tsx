import {
 AppBar,
 Box,
 Button,
 Container,
 Divider,
 IconButton,
 InputBase,
 Paper,
 Toolbar,
 Typography,
} from "@mui/material";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CommonButton from "./buttons/CommonButton";
import Link from "next/link";

const Navbar = () => {
 return (
  <AppBar sx={{ bgcolor: "#21252D" , height: "85px" }} position="static">
   <Container maxWidth="xl">
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
     <Typography
      variant="h6"
      component="div"
      sx={{ display: "flex", alignItems: "center" }}
     >
      <Image
       src="/assets/images/site-logo.png"
       height="50px"
       width="200px"
       alt="logo"
       objectFit={"contain"}
      />
      <Paper
       component="form"
       sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 220,
        bgcolor: "#191C21",
        border: ".5px solid #918E92",
        ml: { md: 10, xs: 2 },
       }}
      >
       <InputBase
        sx={{ ml: 1, flex: 1, color: "#fff" }}
        placeholder="Search"
        inputProps={{ "aria-label": "search google maps" }}
       />
       <IconButton
        type="submit"
        sx={{ p: "5px", color: "#fff" }}
        aria-label="search"
       >
        <SearchIcon />
       </IconButton>
      </Paper>
     </Typography>
     <Box>
      <Link href="/">
       <a style={{ margin: "0px 4px 0px 4px" }}> CATEGORIES </a>
      </Link>
      <Link href="/">
       <a style={{ margin: "0px 4px 0px 4px" }}> FREE QUIZ </a>
      </Link>
      <Link href="/">
       <a style={{ margin: "0px 4px 0px 4px" }}> SUPPORT </a>
      </Link>
     </Box>
     <CommonButton textValue="Login" />
    </Toolbar>
   </Container>
  </AppBar>
 );
};

export default Navbar;
