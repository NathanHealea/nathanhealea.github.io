// --- Imports --- //
import React from 'react';

// --- Material Ui Imports --- //
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

// --- link --- //
// const logo = '/static/images/nathan-healea-logo-white.svg'
const image = 'https://avatars2.githubusercontent.com/u/6578985?v=4';

const useStyles = makeStyles(theme => ({
  image: {
    height: 'inherit',
    width: 'inherit'
  }
}));
function ProfilePicture(props) {
  const classes = useStyles();
  return (
    <Box {...props}>
      <img
        src={image}
        alt="Nathan Healea Profile Picture"
        className={classes.image}
      />
    </Box>
  );
}

// --- Exports --- //
export default ProfilePicture;
