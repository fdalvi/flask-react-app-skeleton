import React from 'react';
import {render} from 'react-dom';

import Common from './common';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Hello Index'
		};
	}

	render () {
		return (
			<div>
				<Common title={this.state.title}></Common>
				<a href="/pagetwo"> Goto page 2! </a>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));