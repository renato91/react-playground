import React from 'react';
import { render } from 'react-dom';

var TimerComponent = React.createClass({
    render: function() {
      var elapsed = Math.round(this.props.elapsed  / 100);
      var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
      var message =
        'React has been successfully running for ' + seconds + ' seconds.';
        return <p>{message}</p>;
      }
  });

  export default TimerComponent;
