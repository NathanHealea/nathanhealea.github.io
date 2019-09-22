// --- Imports --- //
import React from 'react';
import clsx from 'clsx';

// --- Material Ui Imports  --- //
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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

// --- Custom Components Imports --- //
import { Section, Title, Subtitle, Logo } from '../../components';
import { withStyles, useTheme } from '@material-ui/styles';
import { Link, makeStyles } from '@material-ui/core';

// --- Helper Component --- //

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
  <Button variant="outlined" color="secondary" className={props.classes.root}>
    {props.children}
  </Button>
));

// --- Styled --- //
const useStyle = makeStyles(theme => ({
  link: {
    '&:visited': {
      color: theme.palette.secondary.main
    },
    '&:active': {
      color: theme.palette.secondary.main
    }
  }
}));

function Contact() {
  const theme = useTheme();
  const classes = useStyle();
  return (
    <Section
      bgcolor={theme.palette.primary.main}
      mb={0}
      color={theme.palette.secondary.main}
    >
      <Container align="center">
        <Logo height={150} mb={2} altlogo />
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

          <Link href="https://www.linkedin.com/in/nathanhealea" target="_blank">
            <SocialButton>
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </SocialButton>
          </Link>

          {/* <Link href="" target="_blank">
            <SocialButton>
              <FontAwesomeIcon icon={faFile} size="2x" />
            </SocialButton>
          </Link> */}
        </Box>

        <Typography>Crafted by me &copy; Nathan Healea </Typography>
        <Typography variant="caption">
          Made with{' '}
          <Link
            href="https://material-ui.com/"
            target="_blank"
            color={theme.palette.secondary.main}
            className={classes.link}
          >
            Materail Ui
          </Link>
        </Typography>
      </Container>
    </Section>
  );
}

// --- Exports --- //
export default Contact;
