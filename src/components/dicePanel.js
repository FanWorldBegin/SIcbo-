/**
 * [state 上侧面板，显示骰盅, 奖期倒计时，开奖记录]
 * @type {Object}
 */
import React, {Component} from 'react';
import propTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Countdown from './countDown.js';
import Data from './data.js';
import calculate from './calculate.js';
import {prizeWinning} from './priceWinning.js'
import {PickerGameAppClass} from './lot.game.basic.helper.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {PickerActions} from 'matrix-web-game-actions';
import ConfirmWindow from './confirmWindow.js';
const {pickerActions, timerActions, orderActions} = PickerActions;
export default class dicePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: '*',
      countDown: 90000000,
      history:[],
      lastIssue: '',
    }
    this.getCountDownTime = this.getCountDownTime.bind(this);
  }


  componentDidMount() {
    var self = this;
    this.getHistory();
    var issuQuest = setInterval(function(){
      if(self.state.history.length){
        var issue = self.state.history[0].time; //奖期
        var index = issue.indexOf('-');
        var data = issue.substring(0,index);
        var number = issue.substring(index+1);
        var digit = Number(number).toString().length;
        switch(digit) {
          case 1:
          issue = data +'-00'+ (Number(number) +1); break;
          case 2:
          issue = data +'-0'+ (Number(number) +1); break;
          case 3:
          issue = data +'-'+ (Number(number) +1); break;
          default:
          issue = data +'-'+ (Number(number) +1);
        }
        self.setState({
          issue
        })
        window.clearInterval(issuQuest);
      }
    },1000)
    this.getCountDownTime();

  }
  //返回历史记录
  getHistoryCallBack(){
    // var self =this;
    // this.props.timerActions.applySyncTime(self.props.clientOrders.LottType, 'self.getHistoryCallBack()', true);
    // var openCodeList = self.props.openCodesInfo;  //历史记录列表
    // console.log('历史记录列表');
    // console.log(openCodeList);
    // var newList = [];
  }
  /**
   * [第一次获取并显示历史记录]
   * @return {[type]} [description]
   */
    getHistory() {
      var self = this;
      var getHistory=setInterval(function(){
        self.props.timerActions.applySyncTime(self.props.clientOrders.LottType, self.getHistoryCallBack(), true);
            var openCodeList = self.props.openCodesInfo;  //历史记录列表
            console.log('历史记录列表');
            console.log(openCodeList);
            var newList = [];
            openCodeList.map((item, index) => {
              var codeArr = item.Code.split('');
              var defineArr = self.defineCodeArr(codeArr);
              newList.push({code: codeArr, time: item.Issue, sum: defineArr.sum, bigSmall: defineArr.bigSmall, oddEven:defineArr.oddEven});
            })
            self.setState({
              history: newList,
            });
            console.log(openCodeList);
            if(openCodeList.length){
              self.setState({
                lastIssue: openCodeList[0].Issue,
              })
              console.log(self.state.lastIssue);
              window.clearInterval(getHistory);
            }
      },1000)
  }
  /**
   * [判断大小单双值]
   * @param  {[type]} arr [description]
   * @return {[type]}     [description]
   */
   defineCodeArr(arr){
     var rest = {};
     var sum = 0;
     var bigSmall;
     var oddEven;
     for(var i=0; i<arr.length; i++){
       sum += parseInt(arr[i]);
     }

     if(sum%2 == 0) {
       oddEven = '双';
     }else if (sum%2 == 1) {
       oddEven = '单';
     }
     if(sum >= 11 && sum <= 17) {
       bigSmall = "大";
     } else if (sum>=4 && sum<=10) {
       bigSmall = "小";
     } else if (sum==3 || sum==18) {
        bigSmall = "豹";
        oddEven = '豹'
     }
     rest = {sum:sum, bigSmall:bigSmall, oddEven:oddEven};
     return rest;

   }
  getCountDownTime() {
    var self =this;
    setInterval(function(){
      if(self.props){
        self.props.timerActions.applySyncTime('AHK3', 'callback', true);
        var countDownTime = self.props.lotTimerInfo.leftSeconds;
        self.setState({
          countDown: countDownTime
        });
        if(countDownTime == 1) {
          setTimeout(function(){
            console.log('倒计时为0');
            var openCode = setInterval(function(){
                self.props.timerActions.applySyncTime(self.props.clientOrders.LottType, 'callback', true);
                var openCodeList = self.props.openCodesInfo;  //历史记录列表
                var nowIssue = openCodeList[0].Issue; //当前期号
                var {lastIssue} = self.state; //上一期期号
                console.log('上期期号' + lastIssue);
                console.log('当前期号' + nowIssue);
                //发生变化更新
                if(nowIssue !== lastIssue){
                  var openCodes = self.props.openCodesInfo[0].Code;
                  var arr = openCodes.split('');
                  console.log('开奖号码');
                  console.log(arr);
                  self.lotteryDrawCss(arr);
                    //更新历史记录
                    var newList = [];
                    openCodeList.map((item, index) => {
                      var codeArr = item.Code.split('');
                      var defineArr = self.defineCodeArr(codeArr);
                      newList.push({code: codeArr, time: item.Issue, sum: defineArr.sum, bigSmall: defineArr.bigSmall, oddEven:defineArr.oddEven});
                    })
                    self.setState({
                      history: newList,
                    },() => {
                      var issue = self.state.history[0].time; //奖期
                      var index = issue.indexOf('-');
                      var data = issue.substring(0,index);
                      var number = issue.substring(index+1);
                      var digit = Number(number).toString().length;
                      switch(digit) {
                        case 1:
                        issue = data +'-00'+ (Number(number) +1); break;
                        case 2:
                        issue = data +'-0'+ (Number(number) +1); break;
                        case 3:
                        issue = data +'-'+ (Number(number) +1); break;
                        default:
                        issue = data +'-'+ (Number(number) +1);
                      }
                      self.setState({
                        issue
                      })
                    });
                    self.setState({
                      lastIssue: nowIssue,
                    });
                    window.clearInterval(openCode);
                }
          },1000)

          },1000)
        }
      }
    },1000);
  }

  lotteryDrawCss(arr = [4,5,6]) {
    self = this;
    var glass = document.getElementsByClassName('dice-panel')[0].getElementsByClassName('glass')[0];
    document.getElementsByClassName('dice-sheet')[0].style.pointerEvents='none';
    var RegExp =/[1-6]/;
    var resArr=[];  //记录开奖号码
    var arr = arr; //开奖号码
    // var {dataCountAmount,dataUserBalance} = this.state;
      // var dataCountAmount = parseInt(dataCountAmount);
      // var dataUserBalance = Number(dataUserBalance);
      // var balance = calculate.accSub(dataUserBalance,dataCountAmount);
      var uiBtn = document.getElementsByClassName('ui-button');
      for(var i=0; i<uiBtn.length; i++) {
        uiBtn[i].classList.add('btn-disabled')
      }
    //  console.log(arr);
      // this.setState({
      //   dataUserBalance: balance +'.00',   //修改余额
      // });
      var dices =  glass.getElementsByTagName('i');
      //console.log(typeof dices);
      for(let i=0; i<dices.length; i++) {
        console.log('i');
        dices[i].setAttribute('class','dice dice-' + Math.ceil(Math.random()*6) + ' dice-animation');
        dices[i].style.left = (i*52)+'px';
        setTimeout(function() {
          dices[i].setAttribute('class','dice dice-' + Math.ceil(Math.random()*6) + ' dice-animation');
          setTimeout(function() {
            dices[i].setAttribute('class','dice dice-' + Math.ceil(Math.random()*6) + ' dice-animation');
            setTimeout(function() {
              dices[i].setAttribute('class','dice dice-' + Math.ceil(Math.random()*6) + ' dice-animation');
              setTimeout(function() {
                dices[i].setAttribute('class','dice dice-' + Math.ceil(Math.random()*6) + ' dice-animation');
                dices[i].style.top = 80+'px';
                setTimeout(function() {
                  dices[i].setAttribute('class','dice dice-' + arr[i]);
                  resArr.push(dices[i].getAttribute('class').match(RegExp)[0]); //将结果存储到resArr中
                })
              },10)
            },150)
          },150)
        },200)
      }

      setTimeout(function() {
          var winIndex =prizeWinning(resArr);
          //中奖索引变亮
          var betType = document.getElementsByClassName('dice-sheet')[0];
          for(var i=0; i< winIndex.length; i++) {
            betType.getElementsByClassName('dice-sheet-' + winIndex[i])[0].style.visibility='visible';
          }
        //  self.saveHistory(resArr,winIndex);
          setTimeout(function(){
            for(var i=0; i< winIndex.length; i++) {
              betType.getElementsByClassName('dice-sheet-' + winIndex[i])[0].style.visibility='hidden';
            }
          // //  重置桌面计算奖金
          //   self.settleAccount(winIndex);
            document.getElementsByClassName('dice-sheet')[0].style.pointerEvents='auto';
          },2000)

      },1000)
  }

  /**
   * [settleAccount 中奖后奖金分配，筹码重置]
   * @param  {[type]} winIndex [中奖索引]
   * @return {[type]}          [description]
   */
    settleAccount(winIndex){
      var tipMoney = 0, sumMoney = 0, priceMoney = 0;
      var winWidth = document.body.clientWidth/2;
      var diceSheet = document.getElementsByClassName('dice-sheet')[0];
      var chips = diceSheet.getElementsByClassName('chip');

      for(var i=chips.length - 1; i>=0; i--) {
        chips[i].remove();
      }

      var tips = document.getElementsByClassName('dice-sheet')[0].getElementsByClassName('tip');
      for(var i=0; i<tips.length; i++){
        tips[i].getElementsByClassName('text')[0].innerHTML='0.00'
      }
      this.setState({
        dataCountAmount : '0.00',
      });
      var chipRecordArr = this.props.chipRecordArr;
      //console.log(this.state.dataCountAmount);
      for(var i=0; i<chipRecordArr.length; i++){
        var chip = this.createChip(chipRecordArr[i]);
        for(var j=0; j<winIndex.length; j++) {
          if(winIndex[j] == chipRecordArr[i].index){ //中奖号码index 与投注信息符合(赢)
            chip.className = "chip chip-add win";
            tipMoney = Number(chipRecordArr[i].chipMoney);
            priceMoney = calculate.accMul(tipMoney, Data[winIndex[j]].property.odds);
            sumMoney += calculate.accAdd(tipMoney, Number(priceMoney)); //当次可收回筹码
            break; // 当前投注记录与中奖数组中某一数据相匹配
          }else {
            chip.className = "chip chip-add lose";
          }
        }

        //跳出循环到这里
        document.body.appendChild(chip);
        var chipGroup = document.getElementById('bottom').getElementsByTagName('i');
        var targetChip = this.getDomByAttr(chipGroup,'data-money',chipRecordArr[i].chipMoney)[0];
        var targetLeft =  targetChip.getBoundingClientRect().left;
        var targetTop = targetChip.getBoundingClientRect().top;
        if(chip.className == 'chip chip-add win') {
          var styleSheet=document.styleSheets[2];
          styleSheet.deleteRule(102);
          styleSheet.insertRule(`@keyframes chipAnimation { 100%{left:${targetLeft}px;top:${targetTop}px}}`,102);
          chip.setAttribute('class', 'chip chip-add chipMove');
          var chips = document.getElementsByClassName('chipMove');
          setTimeout(function(){
            for(var i=chips.length-1; i>=0; i--) {
              chips[i].remove();
            }
          },200);
        }else if(chip.className == 'chip chip-add lose'){
          var styleSheet=document.styleSheets[2];
          styleSheet.deleteRule(104);
          styleSheet.insertRule(`@keyframes chipAnimationTop { 100%{left:${winWidth}px;top:${0}px}}`,104);
          chip.setAttribute('class', 'chip chip-add chipMoveTop');
          var chipLose = document.getElementsByClassName('chipMoveTop');
          setTimeout(function(){
            for(var i=chipLose.length-1; i>=0; i--) {
            chipLose[i].remove();
            }
          },200);
        }
      }

      var {dataUserBalance} = this.state;
      var balanceMoney = calculate.accAdd(G_F_MoneyFormat(dataUserBalance), sumMoney);
      this.setState ({
        dataUserBalance: balanceMoney+'.00',
      })
      chipRecordArr.length = 0;
      var chipArr = this.props.chipArr;
      //清空各个区块筹码个数
      for(let i = 0; i < chipArr.length; i++) {
        chipArr[i].length = 0;
      }
    }

  render() {
    var {issue, countDown} = this.state;
    var {history} = this.state;
    return (
      <div className="dice-panel">
        <div className="logo"><img src="images/logo.png" alt="" className="logo-img"/></div>
        <div className="dice-rule">规则鼠标悬浮 ？查看</div>
      <div className="time-continer"><span className="dicePanel-issue">{issue}</span>期截止</div>
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

function selector(state) {
  return {
    openCodesInfo: state.openCodesInfo,
    selectedIssue: state.selectedIssue,
    // optionalLocator: state.optionalLocator,
    // selectedGameplay: state.selectedGameplay,
    combinationInfo: state.combinationInfo,
    selectedNumbers: state.selectedNumbers,
    transactionList: state.transactionList,
    txHistoryList: state.txHistoryList,
    lotTimerInfo: state.lotTimerInfo,
    LRYLInfo: state.LRYLInfo,
    transactionStatus: state.transactionStatus
  }
}
function mapDispatchToProps(dispatch) {
  return {
    pickerActions: bindActionCreators(pickerActions, dispatch),
    timerActions: bindActionCreators(timerActions, dispatch),
    orderActions: bindActionCreators(orderActions, dispatch)
  };
}
export const DicePanelConnect = connect(selector, mapDispatchToProps)(dicePanel);
