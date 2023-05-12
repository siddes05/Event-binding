import React, { Component } from 'react';

class ClsEventBinding extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			message: 'Welcome'
		}
	}

	clickHandler = () => {
		this.setState({
			message:'Farewell'
		})
	}

	render() {
		return (
			<div>
				<h3>{this.state.message}</h3>
				<button onClick={this.clickHandler}>
				Click
				</button>
			</div>
		)
	}
}

export default ClsEventBinding;
