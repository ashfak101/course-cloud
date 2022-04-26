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
import { useRouter } from "next/router";
import useAuth from "hooks/useAuth";
import LoginModal from '../Auth/LoginModal'
import { EmailAuthCredential } from "firebase/auth";

// type Email={
//     email:string;
// }
// type Auth ={
//     user:User;
//     logOut: any;
//     open:boolean;
//     setOpen:any;
// }
const Navbar = () => {
    const [navState, setNavState] = useState<boolean>(false);
    const router = useRouter()
    const { user, logOut, open, setOpen } = useAuth();
    const email: any = user.email;
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navs = [
        { name: "CATEGORIES", link: '/' },
        { name: "FREE QUIZ", link: '/quiz' },
        { name: "BLOGS", link: '/blogs' },
        { name: "CART", link: '/cart' }
    ]

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
                            {
                                navs.map((nav) =>
                                    <Link key={nav.name} href={nav.link}>
                                        <a style={{ margin: "0px 1em 0px 1em", fontWeight: "200", color: router.pathname == nav.link ? "#D19F28" : "#fff" }}>
                                            {nav.name}
                                        </a>
                                    </Link>
                                )
                            }

                            <Box
                                component="span"
                                sx={{
                                    ml: "1em",
                                    display: "inline-block",
                                    my: { xs: 1 },
                                }}
                            >
                                <CommonButton fontSize=".9rem" textValue={!email ? 'Login' : "Logout"} onClick={!user.email ? handleOpen : logOut} />
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
            <LoginModal handleClose={handleClose} open={open} />
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
                        <Link href="/blogs" passHref>
                            <Button
                                sx={{
                                    color: "#fff",
                                    textAlign: "center",
                                    my: 3,
                                }}
                            >
                                BLOGS
                            </Button>
                        </Link>
                    </Box>
                    <Box
                        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                        <SupportAgentIcon sx={{ color: "#DC9202", mr: 1 }} />
                        <Link href="/cart" passHref>
                            <Button
                                sx={{
                                    color: "#fff",
                                    textAlign: "center",
                                    my: 3,
                                }}
                            >
                                CART
                            </Button>
                        </Link>
                    </Box>
                    <Box
                        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                        <CommonButton fontSize=".9rem" textValue={!email ? 'Login' : "Logout"} onClick={!email ? handleOpen : logOut} />
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
