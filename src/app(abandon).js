import React, {Component} from 'react';
import propTypes from 'prop-types';
import ReactDOM from 'react-dom';
import LayoutMiddle from "./components/layoutMiddle.js";
import GameLogic from './components/gameLogic.js';
import LayoutTop from './components/layoutTop.js';

export default class App extends Component {

	render() {
		return (
			<div className="container-main">
				<div className="dice-top">
					<LayoutTop/>
				</div>
				<div className="dice-table">
					<LayoutMiddle/>
				</div>
				<div className="layout-bottom">
  				<GameLogic/>
				</div>
			</div>
		)
	}
}
