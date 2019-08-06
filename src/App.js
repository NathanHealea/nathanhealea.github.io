// --- Imports --- //
import React from 'react';

// --- Rotuer Imports --- //
import { BrowserRouter } from "react-router-dom";

// --- Theme Imports --- // 
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

// --- Pages Imports --- //
import { Landing, About, Skills, Projects } from './pages';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
      <About />
      <Skills />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
