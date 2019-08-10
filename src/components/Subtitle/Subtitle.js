// --- Imports --- //
import React from 'react'
import clsx from 'clsx';

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
  const { children, className, ...rest } = props;

  const styles = className? clsx(classes.root, className) : classes.root;
  return (
    <Typography {...rest} className={styles}>
      {children}
    </Typography>
  )
}

// -- Exports --- //
export default Subtitle