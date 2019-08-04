// --- Imports --- //
import React from 'react'

// --- Materail Ui Imports --- //
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles';

// --- Defining Styles --- //
const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: '300',
    marginBottom: '1.5rem',
    wordBreak: 'break-word',

  }
}));

function Subtitle(props) {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Typography {...rest} className={classes.root}>
      {children}
    </Typography>
  )
}

// -- Exports --- //
export default Subtitle