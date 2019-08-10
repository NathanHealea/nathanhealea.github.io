// --- Imports --- //
import React from 'react'

// --- Material Ui Imports  --- //
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

// --- Custom Component Imports -- //
import { Section, Title, Subtitle } from '../../components'
import { Project } from './Components'

// --- Image imports --- //
const LibnavImage = '/static/images/projects/libnav/libnav-preview.png'
const WordSaladImage = '/static/images/projects/wordsalad/wordsalad-preview.png';
const Write365Image = '/static/images/projects/write365/write365-preview.png';
const ResearchPortalImage = '/static/images/projects/write365-research-portal/research-protal-preview.png';
const eStatementSignupImage = '/static/images/projects/estatement-signup/estatement-signup-preview.png'


function Projects() {

  return (
    <Section>
      <Container align="center">
        <Title variant="h3">Projects</Title>
        <Subtitle variant="h5">My passion, joy, and skill demonstrated in quality applications</Subtitle>

        <Grid container spacing={4}>

          <Grid item lg={4} md={6} sm={12}>
            <Project
              image={eStatementSignupImage}
              title="10.nwcu.com"
              subtitle="Northwest Community Credit Union eStatement Signup"
              link="https://10.nwcu.com"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <Project
              image={LibnavImage}
              title="Libnav"
              subtitle="Interactive map for Oregon State University Vally Library"
              link="https://github.com/VallyLibrarySeniorCapstone/Libnav"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <Project
              image={WordSaladImage}
              title="WordSalad"
              subtitle="Text Anaysis designed to analyze the authenicity of privity writing sample"
              link="https://github.com/Technology-Across-the-Curriculum/WordSalad"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
            <Project
              image={Write365Image}
              title="Write365"
              subtitle="Digitial journal to promote writting 365 words a day"
              link="#"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={12}>
          <Project
            title="Geometry of Learning"
            subtitle="Grant funded reasearch project exploring elemnets in classroom and thier effects on student learning"
            link="#"
          />
        </Grid>

          {/*<Grid item lg={4} md={6} sm={12}>
              <Project
                image={ResearchPortalImage}
              >
                <Title variant="h4" color="secondary">Research Portal</Title>
                <Box minHeight="4rem">

                <Subtitle variant="body2" color="secondary" >Display analytical information for researchers of Write365.</Subtitle>
                </Box>
                <Button variant="outlined" href="#" target="_blank"color="secondary">View Project</Button>
              </Project>
            S</Grid>*/}


        </Grid>



      </Container>

    </Section>
  )
}

// --- Exports --- //
export default Projects