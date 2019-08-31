// --- Imports --- //
import React from 'react';

// --- Material Ui Imports --- //
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

// --- link --- //
// const logo = '/static/images/nathan-healea-logo-white.svg'
import logo from './nh-logo.png';
import altLogo from './nh-alt-logo.png';

const useStyles = makeStyles(theme => ({
  image: {
    height: 'inherit',
    width: 'inherit'
  }
}));
function Logo(props) {
  const classes = useStyles();
  const { altlogo, ...rest } = props;
  return (
    <Box {...rest}>
      <img
        src={Boolean(props.altlogo) ? altLogo : logo}
        alt="Nathan Healea Logo"
        className={classes.image}
      />
    </Box>
  );
}

// --- Exports --- //
export default Logo;
