// --- Imports --- //
import React from 'react';
import ReactDOM from 'react-dom';

// --- Type and Styling Imports --- //
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'typeface-roboto';
import './index.css';

// --- Application Imports --- //
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
