// --- Imports --- //
import React from 'react';

// --- Material Ui Imports  --- //
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/MakeStyles';
import Link from '@material-ui/core/Link';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';

// --- FontAwesome Imports --- //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedinIn,
  faGithub,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode, faFile } from '@fortawesome/free-solid-svg-icons';

// --- Custom Component Import --- //
import { Title, Subtitle, Background, Logo } from '../../components';

// --- Custom Component --- //
const SocialButton = withStyles({
  root: {
    padding: '1rem',
    margin: '1rem',
    boxShadow: 'none',
    border: 'none',
    // borderRadius: '50%'
    '&:hover': {
      border: 'none'
    }
  }
})(props => (
  <Button variant="outlined" color="primary" className={props.classes.root}>
    {props.children}
  </Button>
));

// --- Styling --- //
const useStyle = makeStyles(theme => ({
  maintenance: {
    textTransform: 'uppercase'
  }
}));

function Maintenance() {
  const theme = useTheme();
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
        <Title variant="h3">Hello World; I'm Nathan Healea</Title>
        <Subtitle variant="h5">
          Full Stack Engineer | Web Developer | Software Engineer
        </Subtitle>
        <Box mb={4}>
          <Logo height={150} />
        </Box>
        <Typography variant="h4" className={classes.maintenance} paragraph>
          Website Under Maintenance
        </Typography>
        <Box mb={'1.5rem'}>
          <Link href="https://www.linkedin.com/in/nathanhealea" target="_blank">
            <SocialButton>
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </SocialButton>
          </Link>

          <Link href="https://github.com/nathanhealea" target="_blank">
            <SocialButton>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </SocialButton>
          </Link>

          <Link href="https://codesandbox.io/u/NathanHealea" target="_blank">
            <SocialButton>
              <FontAwesomeIcon icon={faCode} size="2x" />
            </SocialButton>
          </Link>

          <Link href="https://www.instagram.com/nathanhealea/" target="_blank">
            <SocialButton>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </SocialButton>
          </Link>

          {/* <Link href="" target="_blank">
            <SocialButton>
              <FontAwesomeIcon icon={faFile} size="2x" />
            </SocialButton>
          </Link> */}
        </Box>
        <Typography variant="caption" paragraph>
          Crafted by me &copy; Nathan Healea{' '}
        </Typography>
        <Typography variant="caption">
          Made with{' '}
          <Link href="https://material-ui.com/" target="_blank">
            Materail Ui
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

// --- Exports --- //
export default Maintenance;
