// --- Imports --- //
import tinycolor from 'tinycolor2'


// --- Material Ui Imports --- //



// --- Color Definitations --- //
const white = '#FFFFFF';
const black = '#293347';
const primary = '#1d976c'

const changeRate = 10;

// --- Exports --- //
export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: tinycolor(primary).darken(changeRate).toHexString(),
    main: primary,
    light: tinycolor(primary).lighten(changeRate).toHexString()
  },
  secondary: {
    contrastText: black,
    dark: '',
    main: white,
    light: ''
  },
  text: {
    // primary: '',
    // secondary:'',
    // link: '' 
  },
  background: {
    default: '#F4F6F8',
    paper: white
  }
};
