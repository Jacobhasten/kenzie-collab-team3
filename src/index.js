import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Timer from './Components/Timer';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Timer/> */}
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

