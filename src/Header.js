import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; // Update the path to your logo image

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/food">Food and Drink Spots</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/things-to-do">Things To Do</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/tips">Tips and Tricks</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/recommendations">Submit Your Recommendations</MenuItem>
                </Menu>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Madrid Memories
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;