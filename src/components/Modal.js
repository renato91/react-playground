import React, { Component } from 'react';
import { FaAngleRight } from 'react-icons/lib/fa'
import Input from './Input.js';

var Modal = React.createClass({
    render: function () {
        return (
            <div className="Modal">
                <form onSubmit={this.props.onSubmit} className="ModalForm">
                    <Input id="name" type="text" placeholder="Full name" />
                    <Input id="username" type="email" placeholder="email@email.com" />
                    <Input id="password" type="password" placeholder="password" />
                    <button>Login <FaAngleRight /></button>
                </form>
            </div>
        );
    }
});

export default Modal;
