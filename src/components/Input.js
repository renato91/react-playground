import React, { Component } from 'react';
import { FaUser, FaLock, FaEnvelopeO } from 'react-icons/lib/fa';

var Icon = React.createClass({
    render: function (input) {
        var icon;
        switch (input) {
            case "name":
                icon = (<FaUser />);
                break;
            case "username":
                icon = (<FaEnvelopeO />);
                break;
            case "password":
                icon = (<FaLock />);
                break;

            default:
                icon = (<FaUser />);
                break;
        }

        return icon;
    }
});

var Label = (props) => (
    <label htmlFor={props.name}>
        {props.children}
    </label>
);

var Input = React.createClass({
    renderIcon: function (input) {   
        var icon;
        switch (input) {
            case "name":
                icon = (<FaUser />);
                break;
            case "username":
                icon = (<FaEnvelopeO />);
                break;
            case "password":
                icon = (<FaLock />);
                break;

            default:
                icon = (<FaUser />);
                break;
        }
       
        return icon;
},
    render: function () {
        return (
            <div className="Input">
                <input id={this.props.name} autoComplete="false" required type={this.props.type} placeholder={this.props.placeholder} />
                <Label>
                    {this.renderIcon(this.props.id)}
                </Label>
            </div>
        );
    }
});

export default Input;
