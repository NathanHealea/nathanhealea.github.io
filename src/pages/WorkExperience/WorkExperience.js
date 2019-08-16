// --- Imports --- //
import React from "react";

// --- Material Ui Imports  --- //
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// --- Custom Component Imports -- //
import { Section, Title, Subtitle } from "../../components";
import { Experience } from "./Components";

// --- Image imports --- //

function WorkExperience() {
  return (
    <Section>
      <Container align="center">
        <Title variant="h3" gutterBottom>
          Work Expirence
        </Title>
        <Subtitle variant="h5">TBD</Subtitle>
      </Container>

      <Experience
        position="Programmer Analyst"
        company="Northwest Community Credit Union"
        time="August 2017 - Current"
        image="/static/images/jobs/northwest-community-credit-union-logo.svg"
        alt="Northwest Community Credit Union Logo"
      />
      <Experience
        odd
        position="Student Software Developer"
        company="Technology Across the Curriculum - Oregon State University"
        time="July 2015 - August 2017"
        image="/static/images/jobs/oregon-state-university-logo.png"
        alt="Oregon State University Logo"
      />
      <Experience
        position="Student Software Developer"
        company="Integrated Plant Protection Center - Oregon State University"
        time="Mar 2015 – Jul 2015"
        image="/static/images/jobs/oregon-state-university-logo.png"
        alt="Oregon State University Logo"
      />

      <Experience
        odd
        position="Web Developer/ Programmer"
        company="Internship - Simplifed Computting LLC"
        time="Mar 2014 - June 2014"
        image="/static/images/jobs/simplified-computting-logo.png"
        alt="Simplifed Computting Logo"
      />
    </Section>
  );
}

// --- Exports --- //
export default WorkExperience;
