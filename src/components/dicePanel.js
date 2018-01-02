import React, {Component} from 'react';
import propTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Countdown from './countDown.js';
import Data from './data.js';
export default class LayoutTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: '*'
    }
  }

  componentDidMount() {
    var issue = this.props.history[0]
  }

  render() {
    var {history, countDown} = this.props;
    var {issue} = this.state;
    return (
      <div className="dice-panel">
        <div className="time-continer">{issue} 期</div>
         <div className="countDown">
           <Countdown start= {countDown} freq= {60} needBg= {false} needProgress= {false} onTimeout={e=>('sfs')}/>
           <span className="colon times"></span>
         </div>
        <div className="glass">
          <i className='dice dice-1'></i>
          <i className='dice dice-2'></i>
          <i className='dice dice-3'></i>
        </div>
        <div className="lottery-record">
          <div className="record-title">
            <span className="title0">开奖记录</span>
            <span className="title1">大小</span>
            <span className="title2">单双</span>
            <span className="title3">和值</span>
            <span className="title4">查看更多 <span id='triangle-right'></span></span>
          </div>
            <ul className="record-container">
              {
                 history.map((hlist, index) => {
                  return (
                     <li key={index}>
                       <div className="recorder-group">
                         <div className="rec1">
                           {
                             hlist.code.map((number,index) => {
                               return (
                                 <span className={`dice-number dice-number-${number}`} key={index}></span>
                               )
                             })
                           }
                         </div>
                         <div className="rec2">{hlist.bigSmall}</div>
                         <div className="rec3">{hlist.oddEven}</div>
                         <div className="rec4">{hlist.sum}</div>
                         <div className="rec5">{hlist.time}</div>
                       </div>
                     </li>
                  )
                 })
              }
            </ul>
        </div>
      </div>
    )
  }
}
