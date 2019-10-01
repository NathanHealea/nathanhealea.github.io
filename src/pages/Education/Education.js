// --- Imports --- //
import React from 'react';

// --- Material Ui Imports  --- //
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import { default as Item } from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Box from '@material-ui/core/Box';

// --- Fontawesome Imports --- //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCode, faBook } from '@fortawesome/free-solid-svg-icons';

// --- Custom Components Imports --- //
import { Section, Title, Subtitle } from '../../components';

// --- List Item Override Styles --- //
const ListItemOverrides = {
  root: {
    justifyContent: 'center'
  }
};

// --- List Item Component Override --- //
const ListItem = withStyles(ListItemOverrides)(Item);

// --- Stylings --- //
const SkillStyles = theme => ({
  educationImage: {
    width: 250
  },
  listHeader: {
    color: theme.palette.primary.main,
    fontWeight: 700
  }
});
function Education(props) {
  const { classes } = props;
  return (
    <Section>
      <Container align="center">
        <Title variant="h3">Education</Title>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box width="100%" py={2}>
              <img
                src="/static/images/jobs/oregon-state-university-logo.svg"
                alt="Oregon State University Logo"
                className={classes.educationImage}
              />
            </Box>
            <Title variant="h4">Bachelor's of Science - Computer Science</Title>
            <Subtitle variant="h6" component="p" gutterBottom>
              Business & Entrepreneurship - Minor
            </Subtitle>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box width="100%" py={2}>
              <img
                src="/static/images/education/lane-community-college-logo.svg"
                alt="Lane Community College Logo"
                className={classes.educationImage}
              />
            </Box>
            <Title variant="h4">
              Associates of Applied Science - Computer Programming
            </Title>
            <Subtitle variant="h6">
              Business & Entrepreneurship - Minor
            </Subtitle>
            <Typography paragraph>
              Computer Game Programming in C++ - Career Pathway Certificate
            </Typography>
            <Typography paragraph>
              Database Specialist - Career Pathway Certificate
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

// --- Exports --- //
export default withStyles(SkillStyles)(Education);
