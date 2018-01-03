import React, {Component} from 'react';
import propTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Countdown from './countDown.js';
import Data from './data.js';
import {prizeWinning} from './priceWinning.js'
import calculate from './calculate.js';
export default class LayoutTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: '*',
      countDown: 0,
    }
  }

  componentDidMount() {
    var self = this;
    setTimeout(function(){
      var issue = self.props.history[0].time; //奖期
      var index = issue.indexOf('-');
      var data = issue.substring(0,index);
      var number = issue.substring(index+1);
      issue = data +'-'+ (Number(number) +1)
      self.setState({
        issue
      })
    },1100)
    this.getCountDownTime();
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
        self.props.timerActions.applySyncTime('AHK3', 'callback', true);
        var openCodes = self.props.openCodesInfo[0].Code;
        var arr = openCodes.split('');
        console.log('开奖号码');
        console.log(arr);
        self.lotteryDrawCss(arr);
      },1500)
      }
    }
   },2000);
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
            document.getElementsByClassName('bet-info')[0].style.visibility='hidden';
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
    var {history} = this.props;
    var {issue, countDown} = this.state;
    if(countDown == 1) {
      this.props.timerActions.applySyncTime('AHK3', 'callback', true);
      var openCodes = this.props.lotTimerInfo.openCodesInfo;
      console.log('开奖号码哦：'+ openCodes);
    }
    return (
      <div className="dice-panel">
        <div className="logo"><img src="images/logo.png" alt="" className="logo-img"/></div>
        <div className="dice-rule">规则鼠标悬浮 ？查看</div>
        <div className="time-continer">{issue} 期截止</div>
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
