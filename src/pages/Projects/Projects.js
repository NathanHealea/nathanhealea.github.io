// --- Imports --- //
import React from 'react';

// --- Material Ui Imports  --- //
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

// --- Custom Component Imports -- //
import { Section, Title, Subtitle } from '../../components';
import { Project } from './Components';

// --- Image imports --- //
const LibnavImage = '/static/images/projects/libnav/libnav-preview.png';
const WordSaladImage =
  '/static/images/projects/wordsalad/wordsalad-preview.png';
const Write365Image = '/static/images/projects/write365/write365-preview.png';
const ResearchPortalImage =
  '/static/images/projects/write365-research-portal/research-protal-preview.png';
const eStatementSignupImage =
  '/static/images/projects/estatement-signup/estatement-signup-preview.png';

function Projects() {
  return (
    <Section>
      <Container align="center">
        <Title variant="h3" gutterBottom>
          Recent Projects
        </Title>

        <Grid container spacing={4}>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Project
              image={eStatementSignupImage}
              title="10.nwcu.com"
              subtitle="Northwest Community Credit Union eStatement Signup"
              link="https://10.nwcu.com"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Project
              image={LibnavImage}
              title="Libnav"
              subtitle="Interactive map for Oregon State University Valley Library"
              link="https://github.com/VallyLibrarySeniorCapstone/Libnav"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Project
              image={WordSaladImage}
              title="WordSalad"
              subtitle="Text analysis service designed to analyze the authenticity of privity writing samples"
              link="https://github.com/Technology-Across-the-Curriculum/WordSalad"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Project
              image={Write365Image}
              title="Write365"
              subtitle="Digital journal to promote writing 365 words a day"
              link="https://immersivelrn.org/portfolio/write365-learning-writing-by-doing/"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Project
              image={ResearchPortalImage}
              title="Write365 Research Portal"
              subtitle="Portal to provide academic researchers insight to live anonymous data from Write365 and WordSalad."
              link="#"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <Project
              title="Geometry of Learning"
              subtitle="Grant funded research project exploring elements in classroom and there effects on student learning"
              link="#"
            />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Subtitle variant="h5" gutterBottom>
              For more checkout my{' '}
              <Link
                href="https://github.com/NathanHealea"
                underline="none"
                target="_blank"
              >
                GitHub
              </Link>
              ,{' '}
              <Link
                href="https://codesandbox.io/u/NathanHealea"
                underline="none"
                target="_blank"
              >
                CodSandBox
              </Link>
              , and{' '}
              <Link
                href="https://codepen.io/NathanHealea"
                underline="none"
                target="_blank"
              >
                CodePen
              </Link>
            </Subtitle>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

// --- Exports --- //
export default Projects;
