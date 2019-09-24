// --- Imports --- //
import React from 'react';

// --- Material Ui Imports  --- //
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

// --- Custom Components Imports --- //
import { Section, Title, Subtitle, ProfilePicture } from '../../components';

// --- Colors --- //
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function About() {
  return (
    <Section id="about-section" bgcolor="primary.main" color="white">
      <Container align="center">
        <Grid container spacing={4}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <ProfilePicture
              height="250px"
              width="250px"
              borderRadius={4}
              overflow="hidden"
            />
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Title variant="h3">About Me</Title>
            <Subtitle variant="h5">
              Since my journey as a software engineer began, I’ve joined teams
              to empower users by designing and developing applications to
              improve experiences and business processes. Through exploration
              and failing, I strive to expand my knowledge and skills. I'm
              always seeking new challenges to take on.
            </Subtitle>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

// --- Exports --- //
export default About;
