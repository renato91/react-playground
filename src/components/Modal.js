import React, { Component } from 'react';
import Input from './Input.js';

var Modal = React.createClass({
	render: function() {
		return (
			<div className="Modal">
				<form onSubmit={this.props.onSubmit} className="ModalForm">
					<Input id="name" type="text" placeholder="Ivan" />
					<Input id="username" type="email" placeholder="mrjackolai@gmail.com" />
					<Input id="password" type="password" placeholder="password" />
					<button>Login <i className="fa fa-fw fa-chevron-right"></i></button>
				</form>
			</div>
		);
	}
});

export default Modal;
