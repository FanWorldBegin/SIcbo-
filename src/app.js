import React, {Component} from 'react';
import propTypes from 'prop-types';
import ReactDOM from 'react-dom';
// import './lib/basicHelper.js';
import GameLogic from './components/gameLogic.js';


export default class App extends Component {

	render() {
		return (
			<GameLogic />
		)
	}
}
