// --- Imports --- //
import React from 'react'

// --- Material Ui Imports  --- //
import Box from '@material-ui/core/Box'

// --- Colors --- //
import palette from '../../theme';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

function Landing() {
  return (
    <Box height="100vh" bgcolor={palette.palette.primary.main} display="flex" justifyContent="center" alignItems="center">
      <Container>
        <Typography variant="h2" component="h1">Hello World; I'm Nathan Healea</Typography>
      </Container>
    </Box>
  )
}

// --- Exports --- //
export default Landing