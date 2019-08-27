// --- Imports --- //
import React from 'react';

// --- Material Ui Imports --- //
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

// --- link --- //
const logo = '/static/images/nathan-healea-logo-white.svg';

const useStyles = makeStyles(theme => ({
  image: {
    height: 'inherit',
    width: 'inherit'
  }
}));
function Logo(props) {
  const classes = useStyles();
  return (
    <Box {...props}>
      <img src={logo} alt="Nathan Healea Logo" className={classes.image} />
    </Box>
  );
}

// --- Exports --- //
export default Logo;
