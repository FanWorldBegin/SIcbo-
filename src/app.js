import React, {Component} from 'react';
import propTypes from 'prop-types';
import ReactDOM from 'react-dom';
// import './lib/basicHelper.js';
// import GameLogic from './components/gameLogic.js';
import LotGameRedux from './components/lot.game.redux.js';
import LoginSelector from './components/login.selector.js';


export default class App extends Component {
	state = {
		gameplayData: {}
	};
	constructor(props) {
		super(props);

		const self = this;

		G_O_EventEmitter.subscript('RESOURCE_READY', (res) => {
			const gameplayData = G_F_WrapGameNavConfig('JSK3');
			self.setState({
				gameplayData: gameplayData.props.gameplayData
			});
			// console.log(gameplayData);
		});
	}

	render() {
		const {gameplayData} = this.state;
		return (
			<LoginSelector>
				<LotGameRedux gameplayData={gameplayData} sectionId={'JSK3'}/>
			</LoginSelector>
		)
	}
}
