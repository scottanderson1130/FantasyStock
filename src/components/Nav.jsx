/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer
} from '@material-ui/core';
import { ChevronLeft, Menu } from '@material-ui/icons';
import '../css/Nav.css';

function Nav() {
  const [open, setOpen] = useState(false);

  // Open and close Drawer functions
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  // nav bar options
  const views = [
    {
      option: 'Home',
      path: '/'
    },
    {
      option: 'Your Stocks',
      path: '/yourstocks'
    },
    {
      option: 'League Info',
      path: '/'
    },
    {
      option: 'Waivers',
      path: '/waivers'
    },
    {
      option: 'Settings',
      path: '/'
    },
    {
      option: 'Scoreboard',
      path: '/scoreboard'
    },
    {
      option: 'Standings',
      path: '/'
    },
    {
      option: 'Schedule',
      path: '/'
    },
    {
      option: 'Message Board',
      path: '/'
    }
  ];

  return (
    <nav className='nav'>
      <AppBar className='nav_bar' position='sticky'>
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            edge='start'
            color='inherit'
            aria-label='menu'
          >
            <Menu />
          </IconButton>
          <Typography className='nav_logo' variant='h6'>
            Name
          </Typography>

          <Button color='inherit'>
            <a href='/auth/google'>Log in </a>
          </Button>

          <Button color='inherit'>Logo</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='left'
        variant='temporary'
        open={open}
        onClose={() => setOpen(false)}
      >
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft className='nav_close' />
        </IconButton>
        <ul className='nav_navigation'>
          {views.map((view, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Link key={i} className='nav_link' to={view.path}>
              <li onClick={handleDrawerClose} className='nav_options'>
                {view.option}
              </li>
            </Link>
          ))}
        </ul>
      </Drawer>
    </nav>
  );
}

export default Nav;
