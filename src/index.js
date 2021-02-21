import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AnimatedCar from './AnimatedCar/AnimatedCar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AnimatedCar />, document.getElementById('root1'));
registerServiceWorker();
