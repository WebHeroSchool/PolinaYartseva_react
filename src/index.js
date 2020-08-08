import React from 'react';
import ReactDOM from 'react-dom';
import {element} from './App';
import App from './App';

ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('sub_root'));