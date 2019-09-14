// --- Imports --- //
import React from 'react';

// --- Material Ui Imports  --- //
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/MakeStyles';

// --- Colors --- //
import palette from '../../theme';

// --- Assets Import --- //
import { Title, Subtitle, Background, Logo } from '../../components';

// --- Styling --- //
const useStyle = makeStyles(theme => ({
  graident: {
    background: '#1d976c' /* fallback for old browsers */,
    background:
      '-webkit-linear-gradient(to right, #1d976c, #93f9b9)' /* Chrome 10-25, Safari 5.1-6 */,
    background:
      'linear-gradient(to right, #1d976c, #93f9b9)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
}));

function Maintenance() {
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
        <Box mb={4}>
          <Logo />
        </Box>
        <Title variant="h3">
          Full Stack Engineer | Web Developer | Software Engineer
        </Title>
        <Subtitle variant="h4">
          I develop applications to enhance life and work
        </Subtitle>
      </Container>
    </Box>
  );
}

// --- Exports --- //
export default Maintenance;
