// --- Imports --- //
import React from 'react'

// --- Material Ui Imports  --- //
import Box from '@material-ui/core/Box'

// --- Custom Components Imports --- //
import { Section, Title, Subtitle } from '../../components'

// --- Colors --- //
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


function About() {

  return (
    <Section>
      <Container align="center">
        <Title variant="h3">Hello World; I'm Nathan Healea </Title>
        <Subtitle variant="h5">
          Since beginning my joureny as a full stack engineer, I'v developed databases and parsers for research grant funded projects, REST APIs for detecting proper english, web application to simplify processes and track engagements, maintained databases aggergation scripts, intergration multiple third party, and much more. I'm always learn to expand my knowledge and look for intresting problems to solve with skills.
        </Subtitle>
      </Container>
    </Section>

  )
}

// --- Exports --- //
export default About