import React, { Component } from 'react';
import { FaUser, FaLock, FaEnvelopeO } from 'react-icons/lib/fa'



it('renders correctly', () => {
    var Input = React.createClass({
        renderlabel: function () {
            var label;
            switch (this.props.name) {
                case "name":
                    label = (<label htmlFor={this.props.name}><FaUser /></label>);
                    break;
                case "username":
                    label = (<label htmlFor={this.props.name}><FaEnvelopeO /></label>);
                    break;
                case "password":
                    label = (<label htmlFor={this.props.name}><FaLock /></label>);
                    break;

                default:
                    label = (<label htmlFor={this.props.name}><FaUser /></label>);
                    break;
            }

            return label;

        },
        render: function () {
            return (
                <div className="Input">
                    <input id={this.props.name} autoComplete="false" required type={this.props.type} placeholder={this.props.placeholder} />
                    {this.renderlabel()}
                </div>
            );
        }
    });
    expect(Input).toMatchSnapshot();
});
