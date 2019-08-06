// --- Imports --- //
import React from 'react'

// --- Material Ui Imports  --- //
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

// --- Custom Component Imports -- //
import { Section, Title, Subtitle } from '../../components'
import { Project } from './Components'

// --- Image imports --- //
const LibnavImage = '/static/images/projects/libnav/libnav-preview.png'

function Projects() {

  return (
    <Section>
      <Container align="center">
        <Title variant="h3">Projects</Title>
        <Subtitle variant="h5">My passion, joy, and skill demonstrated in quality applications</Subtitle>

        <Box display="flex" alignItems="center">
          <Project
            name="Libnav"
            description="Interactive map for Oregon State University Vally Library"
            link=""
            image={LibnavImage}
          />
        </Box>
      </Container>

    </Section>
  )
}

// --- Exports --- //
export default Projects