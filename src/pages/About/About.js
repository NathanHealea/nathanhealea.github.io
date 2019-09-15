// --- Imports --- //
import React from 'react';

// --- Material Ui Imports  --- //
import Box from '@material-ui/core/Box';

// --- Custom Components Imports --- //
import { Section, Title, Subtitle } from '../../components';

// --- Colors --- //
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function About() {
  return (
    <Section>
      <Container align="center">
        <Title variant="h3">Hello World; I'm Nathan Healea </Title>
        <Subtitle variant="h5">
          Since my journey as a software engineer, I’ve joined organizations to
          work with clients to define project scope and gather project
          requirements, architecte software infrastructure, develop high quality
          applications to simplify and improve business processes, write code
          that is maintainable, clean, and well documented, worked with
          development team create software development standards. I’m always
          learning to expand my knowledge, and looking for interesting problems
          to solve with my skill.
        </Subtitle>
      </Container>
    </Section>
  );
}

// --- Exports --- //
export default About;
