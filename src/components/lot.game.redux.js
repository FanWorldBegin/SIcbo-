import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

import {PickerStores} from 'matrix-web-game-actions';

import {GameLogic} from './gameLogic.js';

const {GetAllPickerStores} = PickerStores;

export default class LotGameApp extends Component {
  componentDidMount() {
    this.storeCollections = PickerStores.GetAllPickerStores();
  }
  render() {
    const {
      onAppResponse,
      gameplayData, sectionId
    } = this.props;

    // const {collections} = PickerStores;
    const store = (PickerStores.GetAllPickerStores())[sectionId];

    return (
      <Provider store={store}>
        <GameLogic
          sectionId={sectionId}
          gameplayData={gameplayData}
          onAppResponse={onAppResponse}/>
      </Provider>
    );
  }
}
LotGameApp.propTypes = {
  gameplayData: PropTypes.object.isRequired,
  sectionId: PropTypes.string,
  onAppResponse: PropTypes.func
}
