import React from 'react';
import {render} from 'react-dom';

import Common from './common';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Page 2'
		};
	}

	render () {
		return (
			<div>
				<Common title={this.state.title}></Common>
				<a href="/"> Goto Index! </a>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));