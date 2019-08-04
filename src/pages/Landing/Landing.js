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
import { Title, Subtitle } from '../../components';

// --- Styling --- //
const useStyle = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
  graident: {
    background: '#1d976c', /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #1d976c, #93f9b9)', /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #1d976c, #93f9b9)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
}))

function Landing() {
  const classes = useStyle();

  return (
    <Box height="100vh" className={classes.graident} >
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center" textAlign="center" color={palette.palette.white}>
        <Container>
          <Box mb={4}>
            <img src={logo} alt="Nathan Healea Logo" />
          </Box>
          <Title variant="h3">Full Stack Engineer | Web Developer | Software Engineer</Title>
          <Subtitle variant="h4" >
            I develop applications to simplify life and work
        </Subtitle>
        </Container>

      </Box>
    </Box>
  )
}

// --- Exports --- //
export default Landing