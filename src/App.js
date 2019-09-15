// --- Imports --- //
import React, { Fragment } from 'react';

// --- Rotuer Imports --- //
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

function Main() {
  return (
    <Fragment>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <WorkExperience />
      <Education />
      <Footer />F
    </Fragment>
  );
}

function App() {
  console.log(process.env);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route
          path="/"
          exact
          component={
            process.env.REACT_APP_MODE === 'maintenance' ? Maintenance : Main
          }
        />
        <Route path="/preview" component={Main} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
