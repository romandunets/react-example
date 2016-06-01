import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import App from './components/App';

const app = document.getElementById('app');

ReactDOM.render(<App history={browserHistory} />, app);
