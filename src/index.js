import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Test from './pages/Test/Test'
import Admin from './admin'
import registerServiceWorker from './registerServiceWorker';
// import App from "./App";

ReactDOM.render(<Admin />, document.getElementById('root'));
registerServiceWorker();