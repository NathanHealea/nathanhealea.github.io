// --- Imports --- //
import React from 'react';

// --- Material Ui Imports  --- //
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// --- Custom Component Imports -- //
import { Section, Title, Subtitle } from '../../components';
import { Experience } from './Components';

// --- Image imports --- //

function WorkExperience() {
  return (
    <Section>
      <Title variant="h3" gutterBottom>
        Work Expirence
      </Title>
      <Subtitle variant="h5">TBD</Subtitle>

      <Grid container>
        <Experience
          position="Programmer Analyst"
          company="Northwest Community Credit Union"
          time="August 2017 - Current"
        />
      </Grid>
    </Section>
  );
}

// --- Exports --- //
export default WorkExperience;
