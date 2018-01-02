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
			console.log('sds');
		const gameplayData = G_F_WrapGameNavConfig('AHK3');
		self.setState({
				gameplayData: gameplayData.props.gameplayData
			});
		});
	}

	render() {
		const {gameplayData} = this.state;
		console.log(gameplayData);
		return (
			<LoginSelector>
				<LotGameRedux gameplayData={gameplayData} sectionId={'AHK3'}/>
			</LoginSelector>
		)
	}
}
