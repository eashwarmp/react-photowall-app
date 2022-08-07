import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from './components/App';
import './styles/stylesheet.css';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))