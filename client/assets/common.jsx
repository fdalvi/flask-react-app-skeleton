import React from 'react';
import {render} from 'react-dom';

import "./css/common.css";

export default class Common extends React.Component {
	render () {
		return (
			<h1 className="redtext"> {this.props.title} </h1>
		);
	}
}