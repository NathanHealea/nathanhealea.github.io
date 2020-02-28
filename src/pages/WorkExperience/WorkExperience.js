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

import config from './config';
// --- Image imports --- //

function WorkExperience() {
  return (
    <Section>
      <Container align="center">
        <Title variant="h3" gutterButtom>
          Work Experience
        </Title>
      </Container>
      {config.map((we, index) => (
        <Experience odd={index % 2} {...we} />
      ))}
    </Section>
  );
}

// --- Exports --- //
export default WorkExperience;
