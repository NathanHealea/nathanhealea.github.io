// --- Imports --- //
import React from 'react'

// --- Material Ui Imports  --- //
import Box from '@material-ui/core/Box'

// --- Colors --- //
import palette from '../../theme';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/MakeStyles'

// --- Assets Import --- //
import logo from '../../assets/nathan-healea-logo-white.svg';
import background from '../../assets/noah-silliman-155839-unsplash.jpg'

// --- Styling --- //
const useStyle = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }
}))

function Landing() {
  const classes = useStyle();

  return (
    <Box height="100vh" className={classes.background} >
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center" bgcolor="rgba(255,255,255,.05)" textAlign="center" color={palette.palette.white}>
        <Container>
          <Box mb={4}>
            <img src={logo} alt="Nathan Healea Logo" />
          </Box>
          <Typography variant="h3" paragraph>Full Stack Engineer | Web Developer | Software Engineer</Typography>
          <Typography variant="h3" paragraph>
            I develop applications to simplify life and work
        </Typography>
        </Container>

      </Box>
    </Box>
  )
}

// --- Exports --- //
export default Landing