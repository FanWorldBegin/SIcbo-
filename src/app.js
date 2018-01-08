import React, {Component} from 'react';
import propTypes from 'prop-types';
import ReactDOM from 'react-dom';
// import './lib/basicHelper.js';
// import GameLogic from './components/gameLogic.js';
import LotGameRedux from './components/lot.game.redux.js';
import LoginSelector from './components/login.selector.js';
import 'matrix-web-game-actions/lib/picker.lib/lottConfig.js';

/**
 * window 需要挂载的接口，如果没有，就返回没有登陆
 * LOTT_INFO
 * USER_INFO
 * PLATFORM
 * DEVICE
 * onRequest
 */
if(process.env.NODE_ENV == 'development') {
	window.LOTT_INFO = 'AHK3';
	require('./lib/deps.js');
}
window.BASE_MUL = 1;
export default class App extends Component {
	state = {
		gameplayData: null
	};
	constructor(props) {
		super(props);
		const self = this;
		if(!window.LOTT_INFO) return;
		// const gameplayData = G_F_WrapGameNavConfig(window.LOTT_INFO);
		// const _gameplayData = gameplayData.props.gameplayData;
		// if(process.env.NODE_ENV == 'development') {
		// 	G_O_EventEmitter.subscript('RESOURCE_READY', (res) => {
		// 		// const gameplayData = G_F_WrapGameNavConfig(window.LOTT_INFO);
		// 		// const _gameplayData = gameplayData.props.gameplayData;
		// 		self.setGameData();
		// 	});
		// } else {
		// 	self.setGameData();
		// }
		// self.setState({
		// this.gameplayData = gameplayData.props.gameplayData;
		// });

	}
	componentDidMount() {
		this.setGameData();
	}
	setGameData() {
		const _gameplayData = G_F_WrapGameNavConfig(window.LOTT_INFO);
		const gameplayData = _gameplayData.props.gameplayData;
		// this.gameplayData = _gameplayData;
		this.setState({
			gameplayData
		})
	}

	render() {
		const {gameplayData} = this.state;
		console.log(gameplayData);

		return gameplayData ? (
			<LoginSelector>
				<LotGameRedux
					gameplayData={gameplayData}
					sectionId={window.LOTT_INFO}/>
			</LoginSelector>
		) : <span></span>
	}
}
