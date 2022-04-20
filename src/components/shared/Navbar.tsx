import {
 AppBar,
 Box,
 Button,
 Container,
 Divider,
 Drawer,
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
import { useState } from "react";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Navbar = () => {
 const [navState, setNavState] = useState(false);

 return (
  <>
   <AppBar sx={{ bgcolor: "#21252D" }} position="static">
    <Container maxWidth="xl">
     <Toolbar
      sx={{
       display: "flex",
       justifyContent: "space-between",
       height: "85px",
      }}
     >
      <Typography
       variant="h6"
       component="div"
       sx={{ display: "flex", alignItems: "center" }}
      >
       <Link href="/" passHref>
        <a
         style={{
          paddingTop: "8px",
          cursor: "pointer",
         }}
        >
         <Image
          src="/assets/images/site-logo.png"
          height="50px"
          width="200px"
          alt="logo"
          objectFit={"contain"}
         />
        </a>
       </Link>
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
      <Box sx={{ display: { xs: "none", md: "block" } }}>
       <Link href="/">
        <a style={{ margin: "0px 1em 0px 1em", fontWeight: "200" }}>
         CATEGORIES
        </a>
       </Link>
       <Link href="/quiz">
        <a style={{ margin: "0px 1em 0px 1em", fontWeight: "200" }}>
         FREE QUIZ
        </a>
       </Link>
       <Link href="/">
        <a style={{ margin: "0px 1em 0px 1em", fontWeight: "200" }}>SUPPORT</a>
       </Link>

       <Box
        component="span"
        sx={{
         ml: "1em",
         display: "inline-block",
         my: { xs: 1 },
        }}
       >
        <CommonButton textValue="Login" />
       </Box>
      </Box>
      <Button
       sx={{ display: { xs: "block", md: "none" } }}
       onClick={() => setNavState(true)}
      >
       <MenuIcon sx={{ color: "#fff" }} />
      </Button>
     </Toolbar>
    </Container>
   </AppBar>

   <Drawer anchor="right" open={navState} onClose={() => setNavState(false)}>
    <Box sx={{ width: 250, bgcolor: "#191C23", height: "100vh" }}>
     <Box sx={{ textAlign: "center", mt: 3 }}>
      <Image
       src="/assets/images/site-logo.png"
       height="60px"
       width="150px"
       alt="logo"
       objectFit={"contain"}
      />
     </Box>
     <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
     >
      <CategoryOutlinedIcon sx={{ color: "#DC9202", mr: 1 }} />
      <Link href="/" passHref>
       <Button
        sx={{
         color: "#fff",
         textAlign: "center",
         my: 3,
        }}
       >
        CATEGORIES
       </Button>
      </Link>
     </Box>
     <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
     >
      <ContactSupportOutlinedIcon sx={{ color: "#DC9202", mr: 1 }} />
      <Link href="/quiz" passHref>
       <Button
        sx={{
         color: "#fff",
         textAlign: "center",
         my: 3,
        }}
       >
        FREE QUIZ
       </Button>
      </Link>
     </Box>
     <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
     >
      <SupportAgentIcon sx={{ color: "#DC9202", mr: 1 }} />
      <Link href="/" passHref>
       <Button
        sx={{
         color: "#fff",
         textAlign: "center",
         my: 3,
        }}
       >
        SUPPORT
       </Button>
      </Link>
     </Box>
    </Box>
   </Drawer>
  </>
 );
};

export default Navbar;
