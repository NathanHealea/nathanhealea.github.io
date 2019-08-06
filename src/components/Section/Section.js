// --- Imports --- //
import React from 'react';

// --- Material Ui Imports --- //
import Box from '@material-ui/core/Box'

function Section(props) {
  const { children, ...other } = props
  return (

    <Box my={8} py={8} {...other}>
      {children}
    </Box>
  )
}


// --- Exports --- //
export default Section