import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Manu from './../../pages/Manu';
import About from './../../pages/About';
import Contact from './../../pages/Contact';
import "../../styles/StylesHeader.css"
import { orange } from '@mui/material/colors';

const Header = () => {

    const [mobileOpen, setMobileOpen]=useState(false)

    //! Handle manu click
    const handleToggleDrawer=()=>{
        setMobileOpen(!mobileOpen)
    }
    //! Manu Drawer
    const drawer= (
        <Box onClick={handleToggleDrawer} sx={{textAlign:'center'}}>
            <Typography 
                    color={'goldenrod'} 
                        variant='h6' 
                        component='div' 
                        sx={{flexGrow: 1,my:2}}
            > 
                <FastfoodIcon/>
                My Reasturant
            </Typography>

                    
            <ul className='mobile-navigation'>
                <li className='active'>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/manu"}>Manu</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                <Link to={"/contact"}>Contact</Link>
                 </li>
            </ul>
                    
        </Box>
    )

  return (
    <>
        <Box>
            <AppBar cpmponent="nav" sx={{bgcolor: "Black"}}>
                <Toolbar>
                    <IconButton onClick={handleToggleDrawer}>
                        <MenuIcon color='inherit'
                        area-label='open drawer'
                        edge='start'
                        sx={{
                            mr: 2,
                            display: {sm: "none", color: 'white'}
                        }}/>
                    </IconButton>
                    <Typography 
                        color={'goldenrod'} 
                        variant='h6' 
                        component='div' 
                        sx={{flexGrow: 1}}
                    > 
                         <NavLink activeClassName="active" to={"/"}><img src="src/images/logo.svg" alt="logo" width={'200px'} height={'70px'} /></NavLink>
                    </Typography>

                    <Box sx={{display: {xs:'none', sm:'block'}}}>
                        <ul className='navigation-manu'>
                            <li sx={{color:orange[400]}}>
                                <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/menu"}>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/about"}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"}>Contact</NavLink>
                            </li>
                        </ul>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component='nav'>
                <Drawer variant='temporary' 
                open={mobileOpen} 
                onClose={handleToggleDrawer} 
                sx={{Display: {xs:'block', sm:'none'}, 
                    "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",bgcolor:'black'
              },}}>  
                    {drawer}
                </Drawer>
            </Box>
            <Box sx={{}}>
            <Toolbar/>
            </Box>
        </Box>
    </>
  )
}

export default Header