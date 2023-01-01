import { Box, Button, Container, Grid, IconButton, Link, Menu, MenuItem, StyledEngineProvider, TextField, Typography, useMediaQuery } from '@mui/material';
import {useStyles} from './Styles';
import {ReactComponent as Logo} from "./assets/logo.svg";
import {ReactComponent as IntroImage} from "./assets/intro_image.svg";
import {ReactComponent as Body} from "./assets/bodyImg1.svg";
import {ReactComponent as BodyImg2} from "./assets/bodyImg2.svg";
import {ReactComponent as BodyImg3} from "./assets/bodyImg3.svg";
import {ReactComponent as BodyImg4} from "./assets/bodyImg4.svg";
import {ReactComponent as BodyImg5} from "./assets/bodyImg5.svg";
import {ReactComponent as FBIcon} from "./assets/facebook.svg";
import {ReactComponent as IGIcon} from "./assets/instagram.svg";
import {ReactComponent as TTIcon} from "./assets/tiktok.svg";
import {ReactComponent as YTIcon} from "./assets/youtube.svg";
import {ReactComponent as MenuIcon} from "./assets/menu-bar-icon.svg";
import { useState } from 'react';

function App() {
  const classes = useStyles();
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const handleMenu = (event : any) => {
    setAnchor(event.currentTarget);
  };
  const isMobile = useMediaQuery((theme) => {
    const newTheme = theme as any;
    return newTheme.breakpoints.down("sm")
  });

  return (
    <StyledEngineProvider injectFirst>
        <div className={classes.App}>
          <Container className={classes.Container}>
            <Box className={classes.Header}>
              <Logo />
              {
                !isMobile ?
                <Box>
                  <Button className={classes.Button}>Home</Button>
                  <Button className={classes.Button}>About Us</Button>
                  <Button className={classes.Button}>Services</Button>
                  <Button className={`${classes.Button} ${classes.TeamsBtn}`}>Our Teams</Button>
                  <Button className={`${classes.Button} ${classes.ContactBtn}`}>Contact Us</Button>
                </Box> : 
                (
                  <>
                    <IconButton
                      color="primary"
                      className={classes.MenuButton}
                      edge="start"
                      aria-label="menu"
                      onClick={handleMenu}
                    >
                     <MenuIcon width="40px" height="auto"/> 
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchor}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                      open={open}
                      onClose={() => setAnchor(null)}
                      transitionDuration={500}
                    >
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        component={Link}
                      >
                        Home
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        component={Link}
                      >
                        About Us
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        component={Link}
                      >
                        Services
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        component={Link}
                      >
                        Our Teams
                      </MenuItem>
                      <MenuItem
                        onClick={() => setAnchor(null)}
                        component={Link}
                        style={{backgroundColor : "#2C3878", color : "white"}}
                      >
                        Contact Us
                      </MenuItem>
                    </Menu>
                  </>
                )
              }
            </Box>
            <Box className={classes.Intro}>
              <Typography className={classes.IntroTitle} variant='h2'>
                Minimalist Room
              </Typography>
              <Typography className={classes.IntroText}>
                It is a long and established fact that a reader will 
                be distracted by the readable content of a page when 
                looking at its layout.
              </Typography>
              <Box className={classes.IntroImage}>
                <IntroImage width="100%" height="auto" />
              </Box>
            </Box>
            <Box className={classes.GridBody}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Box className={classes.GridBoxContainer1}>
                    <Typography className={classes.GridBodyTitle} variant='h6'>
                      Project Overview
                    </Typography>
                    <Typography className={classes.GridBodyText}>
                      Online learning with us does not interfere with your daily life. 
                      because learning can be done anytime and anywhere. 
                      Online learning with us does not interfere with your daily life. 
                      because learning can be done anytime and anywhere. 
                      Online learning with us does not interfere with your daily life. 
                      because learning can be done anytime and anywhere. 
                    </Typography>
                    <Box marginTop="70px" display="flex">
                      <Typography className={classes.GridBodyText}>
                        July 22 - 2022
                      </Typography>
                      <Typography marginLeft="60px" className={classes.GridBodyText}>
                        Interior Design - Furniture
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box className={classes.GridBoxContainer2}>
                    <Typography className={classes.GridBodyTitle} variant='h6'>
                      Design Process
                    </Typography>
                    <Typography className={classes.GridBodyText}>
                      Online learning with us does not interfere with your daily life. 
                      because learning can be done anytime and anywhere. 
                      Online learning with us does not interfere with your daily life. 
                      because learning can be done anytime and anywhere.
                      <br/> <br/>
                      Online learning with us does not interfere with your daily life. 
                      because learning can be done anytime and anywhere. 
                      Online learning with us does not interfere with your daily life. 
                      because learning can be done anytime and anywhere.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box className={classes.GridBoxContainer1}>
                    <Body width="100%" height="auto" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box className={classes.GridBoxContainer2}>
                    <BodyImg2 width="100%" height="auto" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className={classes.GridBoxContainer}>
                    <BodyImg3 width="100%" height="auto" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box className={classes.GridBoxContainer1}>
                    <BodyImg4 width="100%" height="auto" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box className={classes.GridBoxContainer2}>
                    <BodyImg5 width="100%" height="auto" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.Banner}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Box className={classes.BannerGrid1}>
                    <Typography className={classes.BannerText1} variant='h4'>
                      let's discuss making your interior like a dream place!
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box className={classes.BannerGrid2}>
                    <Typography className={classes.BannerText2}>
                      Contact us below to work together to build your amazing interior
                    </Typography>
                    <Button className={classes.ContactBtn2}>
                      Contact Us
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.Footer}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Logo width="126px" height="54px" />
                  </Box>
                  <Typography className={classes.FooterText1}>
                    One of the best furniture agency.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box className={classes.FooterGrid2}>
                    <Box className={classes.FooterGrid2Box}>
                      <span className={classes.FooterGrid2Span}></span>
                      <Typography className={classes.FooterText2} >
                        Enter  your email to get the latest news
                      </Typography>
                    </Box>
                    <Box className={classes.FooterGrid2Input}>
                      <TextField 
                        size="small"
                        fullWidth
                        placeholder='Email Address'
                        variant="standard"
                      />
                    </Box>
                    <Box className={classes.Socials}>
                      <Typography>
                        Follow us On
                      </Typography>
                      <Box className={classes.SocialsImgs}>
                        <span className={classes.SocialsSpan}><FBIcon /></span>
                        <span className={classes.SocialsSpan}><IGIcon /></span>
                        <span className={classes.SocialsSpan}><TTIcon /></span>
                        <span className={classes.SocialsSpan}><YTIcon /></span>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </StyledEngineProvider>
  );
}

export default App;
