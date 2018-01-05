import React, {Component} from 'react';
import propTypes from 'prop-types';
import {PickerGameAppClass} from './lot.game.basic.helper.js';
import {PickerActions} from 'matrix-web-game-actions';
export default class ConfirmWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
      betList:[],
      betInfo:'',
    }
    this.checkOrderList = this.checkOrderList.bind(this);
  }

  componentDidMount() {
    this.betClick();
  }
  betClick() {
    var self = this;
    var betbtn = document.getElementsByClassName('bet-button');
    //点击订单按钮
    betbtn[0].onclick = function() {
        self.checkOrderList();
    }

  }
  checkOrderList() {
      self.props.pickerActions.queryOrderReacords(self.props.clientOrders.LottType, ()=>{})
  }



  render() {
    var {betList} = this.state;
    return(
      <div className="order-container">
        <div className="confirm-window">
            
        </div>
      </div>
    )
  }
}
