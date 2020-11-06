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
import { useSelector } from 'react-redux';
import { selectLogIn, selectUser } from '../features/userSlice.js';
import logo from '../logo/logo.png';

function Nav() {
  const [open, setOpen] = useState(false);

  const user = useSelector(selectUser);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

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
      path: '/leagueinfo'
    },
    {
      option: 'Waivers',
      path: '/waivers'
    },
    {
      option: 'Settings',
      path: '/settings'
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
      path: '/messageboard'
    }
  ];

  const logIn = useSelector(selectLogIn);

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
            {user?.username}
          </Typography>

          <Button color='inherit'>
            {(!logIn)
              ? <a href='/auth/google'>Log In </a>
              : (
                <a href='/auth/logout'>Log out </a>
              )}
          </Button>

          <Button color='inherit'>Folio</Button>
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
        {(!logIn)
          ? (
            <ul className='nav_navigation'>
              <Link key='home' className='nav_link' to='/'>
                <button
                  onClick={handleDrawerClose}
                  type='button'
                  className='nav_options'
                >
                  Home
                </button>
              </Link>
            </ul>
          )
          : (
            <ul className='nav_navigation'>
              {views.map((view) => (
                <Link key={view.option} className='nav_link' to={view.path}>
                  <button
                    onClick={handleDrawerClose}
                    className='nav_options'
                    type='button'
                  >
                    {view.option}
                  </button>
                </Link>
              ))}
            </ul>
          )}

      </Drawer>
    </nav>
  );
}

export default Nav;
