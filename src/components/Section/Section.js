// --- Imports --- //
import React from 'react';

// --- Material Ui Imports --- //
import Box from '@material-ui/core/Box'

function Section(props) {
  return (

    <Box my={8} py={8}>
      {props.children}
    </Box>
  )
}

// --- Exports --- //
export default Section