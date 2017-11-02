import React, {Component} from 'react';
import propTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Data from './data.js';
export default class LayoutTop extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    var {history} = this.props;
    return (
      <div className="dice-panel">
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
                             hlist.restArr.map((number,index) => {
                               return (
                                 <span className={`dice-number dice-number-${number}`} key={index}></span>
                               )
                             })
                           }
                         </div>
                         <div className="rec2">{Data[hlist.winIndex[0]].property.bs}</div>
                         <div className="rec3">{Data[hlist.winIndex[1]].property.bs}</div>
                         <div className="rec4">{hlist.winIndex[2]}</div>
                         <div className="rec5">第<span>{hlist.index}</span>期</div>
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
