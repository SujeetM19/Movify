import React , {useState} from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";

import {useTheme} from '@mui/styles';

import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import Sidebar from "./../Sidebar/Sidebar";
import useStyles from "./styles";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] =   useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width : 600px)");
  const theme = useTheme();
  const isAuthenticated = true;

  return (
    <>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}

          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 /> }
          </IconButton>

          {!isMobile && 'Search...'}

          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                    Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
              color="inherit"
              component =  {Link}
              to  = {`/profile/:id`}
              className = {classes.linkButton}
              onClick = {() => {}}>

              {!isMobile && <>My Movies &nbsp;</>}
              <Avatar
                  style={{width:30, height: 30}}
                  alt="Profile"
                  src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngfind.com%2Fmpng%2FhJmwxix_image-placeholder-png-user-profile-placeholder-image-png%2F&psig=AOvVaw3cgsb1l4VphWUCgoWigpyA&ust=1678447665514000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCND1k4Dfzv0CFQAAAAAdAAAAABAE"
               />
                 
              </Button>
            )
            }
          </div>

          {isMobile && 'Search...'}
            
        </Toolbar>
      </AppBar>

      <div>
            <nav className = {classes.drawer}>
                {isMobile ? (
                  <Drawer
                    varient='temporary'
                    anchor = 'right'
                    open = {mobileOpen}
                    onClose = {() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                    classes = {{paper: classes.drawerPaper}}
                    ModalProps = {{keepMounted:true}}
                  >

                    <Sidebar setMobileOpen = {setMobileOpen}/>

                  </Drawer>
                ) : (
                    <Drawer classes= {{paper: classes.drawerPaper}} varient="permanent">
                      <Sidebar setMobileOpen = {setMobileOpen}/>
                    </Drawer>
                )}
            </nav>
      </div>
    </>
  );
};

export default NavBar;
