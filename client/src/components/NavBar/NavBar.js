import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/memories.png';
function NavBar() {
  const classes = useStyles();

  const user = null;

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Typography
        component={Link}
        to='/'
        className={classes.heading}
        variant='h2'
        align='center'
      >
        Memories
      </Typography>
      <img
        className={classes.image}
        src={memories}
        alt='memories'
        height='60'
      />
      <Toolbar>
        {user ? (
          <div>
            <Avatar alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography variant='h6'>{user.result.name}</Typography>
            <Button variant='contatined'>logout</Button>
          </div>
        ) : (
          <Button component={Link} to='/auth' variant='contained'>
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
