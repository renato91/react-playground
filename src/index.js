import React from 'react';
import ReactDOM from 'react-dom';
import TimerComponent from './components/TimerComponent/TimerComponent';

var start = new Date().getTime(); 

setInterval(function() {
  ReactDOM.render(<TimerComponent elapsed={new Date().getTime() - start} />, 
    document.getElementById('root')
);
 }, 50);
