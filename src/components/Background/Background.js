// --- Imports --- //
import React from 'react'
import makeStyles from '@material-ui/styles/MakeStyles'
import Box from '@material-ui/core/Box'


// --- Styling --- //
const useStyle = makeStyles(theme => ({
  graident: {
    background: '#1d976c', /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #1d976c, #93f9b9)', /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #1d976c, #93f9b9)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
}))


function Background(props) {
  const classes = useStyle();
  const { children, ...rest } = props;
  return (
    <Box height="100%" width="100%"{...rest} className={classes.graident} >
      {children}
    </Box>
  )
}

// --- Exports --- //
export default Background