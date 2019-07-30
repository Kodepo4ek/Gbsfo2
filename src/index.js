import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Modal from './component/modal2';
import Menu from './component/glav-menu';
import Start from './component/Start';
//import Start2 from './component/Start2';
import * as serviceWorker from './serviceWorker';

//  ReactDOM.render(<Modal />, document.getElementById('modal'));
ReactDOM.render(<Menu />, document.getElementById('Menu'));
ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Start2 />, document.getElementById('Start2'));

// ReactDOM.render(<Modal />, document.getElementById('modal'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();