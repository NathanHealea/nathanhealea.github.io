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
import {
  faLaptopCode,
  faCode,
  faBook
} from '@fortawesome/free-solid-svg-icons';

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
  listHeader: {
    color: theme.palette.primary.main,
    fontWeight: 700
  }
});
function Skills(props) {
  const { classes } = props;
  return (
    <Section>
      <Container align="center">
        <Grid container spacing={2}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box mb={3}>
              <FontAwesomeIcon icon={faLaptopCode} size="3x" />
            </Box>
            <Title variant="h3">Frontend</Title>
            <Subtitle variant="h5">
              I value user interfaces that empower users
            </Subtitle>
            <Typography variant="p" paragraph className={classes.listHeader}>
              Technologies I use:
            </Typography>
            <List>
              <ListItem>
                <Typography>HTML/HTML5</Typography>
              </ListItem>
              <ListItem>
                <Typography>CSS/CSS3</Typography>
              </ListItem>
              <ListItem>
                <Typography>JavaScript, jQuery</Typography>
              </ListItem>
              <ListItem>
                <Typography>React, VueJS</Typography>
              </ListItem>
              <ListItem>
                <Typography>Bootstrap, Bulma, Material Design</Typography>
              </ListItem>
              <ListItem>
                <Typography>SASS, LESS</Typography>
              </ListItem>
              <ListItem>
                <Typography>WebPack, Gulp</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box mb={3}>
              <FontAwesomeIcon icon={faCode} size="3x" />
            </Box>
            <Title variant="h3">Backend</Title>
            <Subtitle variant="h5">
              I write code to improve work and life
            </Subtitle>
            <Typography variant="p" paragraph className={classes.listHeader}>
              Languages I speak and framework I know:
            </Typography>
            <List>
              <ListItem>
                <Typography>ASP.Net Forms, MVC, .Net Core</Typography>
              </ListItem>
              <ListItem>
                <Typography>C, C++, C#</Typography>
              </ListItem>
              <ListItem>
                <Typography>PHP, Drupal</Typography>
              </ListItem>
              <ListItem>
                <Typography>Python, Flask</Typography>
              </ListItem>
              <ListItem>
                <Typography>NodeJs, Express, Electron</Typography>
              </ListItem>
              <ListItem>
                <Typography>PL, SQL, NoSQL</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box mb={3}>
              <FontAwesomeIcon icon={faBook} size="3x" />
            </Box>
            <Title variant="h3">More</Title>
            <Subtitle variant="h5">
              I find solutions to complex problems
            </Subtitle>
            <Typography variant="p" paragraph className={classes.listHeader}>
              Topics I study:
            </Typography>
            <List>
              <ListItem>
                <Typography>System & Software Arcature</Typography>
              </ListItem>
              <ListItem>
                <Typography>UI Design, UX Development</Typography>
              </ListItem>
              <ListItem>
                <Typography>Database Structures & Design</Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Continuous Integration & Continuous Deployment
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Version Control Structure & Flow</Typography>
              </ListItem>
              <ListItem>
                <Typography>Agile & Scrum Methodology</Typography>
              </ListItem>
              <ListItem>
                <Typography>REST API Design and Implementation </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

// --- Exports --- //
export default withStyles(SkillStyles)(Skills);
