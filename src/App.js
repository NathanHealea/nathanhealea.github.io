// --- Imports --- //
import React from 'react';

// --- Rotuer Imports --- //
import { BrowserRouter } from 'react-router-dom';

// --- Theme Imports --- //
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

// --- Pages Imports --- //
import {
  Landing,
  About,
  Skills,
  Projects,
  WorkExperience,
  Education,
  Footer,
  Maintenance
} from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Maintenance />
      {/* <Landing />
      <About />
      <Skills />
      <Projects />
      <WorkExperience />
      <Education />
      <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
