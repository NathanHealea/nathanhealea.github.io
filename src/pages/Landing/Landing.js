// --- Imports --- //
import React from 'react';

// --- Material Ui Imports  --- //
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/MakeStyles';
import Typography from '@material-ui/core/Typography';

// --- Fontawesome Imports --- //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// --- Colors --- //
import palette from '../../theme';

// --- Assets Import --- //
import { Title, Subtitle, Background, Logo } from '../../components';
import { Button } from '@material-ui/core';

// --- Styling --- //
const useStyle = makeStyles(theme => ({
  Tagline: {
    textTransform: 'uppercase'
  }
}));

function Landing() {
  const classes = useStyle();

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Container>
        <Title variant="h3">Hello, I'm Nathan Healea</Title>
        <Subtitle variant="h5">
          Full Stack Engineer | Software Developer
        </Subtitle>
        <Box mb={4}>
          <Logo height={250} />
        </Box>
        <Box pt={8}>
          <Button
            color="primary"
            onClick={() => {
              var element = document.getElementById('about-section');
              element.scrollIntoView();
            }}
          >
            <FontAwesomeIcon icon={faChevronDown} size="3x" />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

// --- Exports --- //
export default Landing;
