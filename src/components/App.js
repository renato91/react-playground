import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from './Modal.js';

import style from './../assets/css/style.scss';


var App = React.createClass({
    
    getInitialState: function() {
        return { mounted: false };
    },
    
    componentDidMount: function() {
        this.setState({ mounted: true });
    },
    
    handleSubmit: function(e) {
        this.setState({ mounted: false });
        e.preventDefault();
    },

    render: function() {
        var child;

        document.title = "React Example 01";
        
        if(this.state.mounted) {
            child = (<Modal onSubmit={this.handleSubmit} />);
        }
        
        return(
            <div className="${style.App}">
                <ReactCSSTransitionGroup 
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        {child}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

export default App;
