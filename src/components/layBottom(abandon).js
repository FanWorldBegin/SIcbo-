import React, {Component} from 'react';
import propTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Data from './Data.js';
import calculate from './calculate.js';

var chipArr=new Array(Data.length); // 创建一个空数组，长度为投注种类长度 52 存放每个投注类型中的筹码数量
for (var x=0;x < chipArr.length ;x++ ) {  //存放每个投注类型中的筹码数
  chipArr[x]=new Array();
}
var chipRecordArr= new Array();           // 数据数组记录每次投注信息
var storageArr=new Array();
export default class LayoutBottom extends Component {
  constructor(props) {
    super(props);
    this.bitTypeOnmousedown= this.bitTypeOnmousedown.bind(this);
    this.AddChipThere = this.AddChipThere.bind(this);
    this.showMoney = this.showMoney.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.repealChip = this.repealChip.bind(this);
    this.lotteryDraw = this.lotteryDraw.bind(this);
    this.prizeWinning = this.prizeWinning.bind(this);
    this.state = {
      dataCountAmount : '0.00',
      dataUserBalance :'1000.00',
    }
  }

  componentDidMount(){
    var $chip_i = $('#bottom span.chip-group i');
    $chip_i.click(function(){
      $(this).addClass('chip-seleced').siblings().removeClass('chip-seleced');
    });
    // //取消右键菜单
    // $('body').bind("contextmenu",function(e){
    //         return false;
    // });

    this.bitTypeOnmousedown();
    this.onMouseOverChip();
    this.buttonClick();
  }

  /**
   * [bitTypeOnmousedown 投注撤注的操作]
   * @return {[type]} [description]
   */
  bitTypeOnmousedown() {
    var self = this;
    var $bitType = $('.dice-table .dice-sheet .bet-container');
    var $chipSelect=$('.chip-seleced');      //选中的筹码
    var chipW=$chipSelect.width();
    var chipH=$chipSelect.height();
    $bitType.mousedown(function(event) {
      //console.log(chipRecordArr);
      // 此时this指向点击的投注；类型
      var bitTypeSelf = $(this);
      var $chipSelect=$('.chip-seleced');      //选中的筹码
      var chipMoney=$chipSelect.attr('data-money');            //获取当前选中筹码的金额
      var index = $(this).index();             //当前投注类型序号
      var x=$(this).offset().left + $(this).width()/2-chipW/2;  //筹码在投注类型中放置位置
  		var y=$(this).offset().top + $(this).height()/2-chipH/2;
      //左键投注 1	鼠标左键
      if(event.which == 1){
        var json={};
				var chipLeft=$chipSelect.offset().left;  //当前选中筹码的位置
				var chipTop=$chipSelect.offset().top;
        var chipBackpo=$chipSelect.css('backgroundPosition');  //当前选中筹码的 backgroundPosition
        var {dataCountAmount,dataUserBalance} = self.state;
        var nowCountAmount = dataCountAmount*1 + chipMoney*1; //当前投注
        if(nowCountAmount > dataUserBalance*1){
          alert('余额不足');
        }else {
          //可以设置最大投注金额
          var chipAdd = document.createElement('i'); //创建可移动的筹码
          chipAdd.className = 'chip chip-add';
          //在当前选中的筹码位置上创建筹码用于移动动画
          chipAdd.style.cssText = 'left:' + chipLeft + 'px; top:'+ chipTop + 'px; background-position:' + chipBackpo+';'; // 设置css为当前选中筹码的位置（屏幕下侧一排）
          $('body').append(chipAdd); // 先创建一个筹码添加到body里面，然后动画飞到创建位置
          $('body > i').animate({'left':`${x}px`, 'top':`${y}px`}, 200, 'linear', function(){
            //当前的 this为 chip-add
            $(this).remove(); //移动完成后删除当前的筹码
            self.AddChipThere( bitTypeSelf, chipMoney, index, chipBackpo, chipW, chipH);
            //bitTypeSelf : itemLump当前投注类型的对象
            //chipMoney : 前选中筹码的金额
            //index: 当前的投注块索引
            //chipBackpo : 当前选中筹码的 backgroundPosition
          } );
          json={
            'chipBackpo':chipBackpo,     //当前选中筹码的 backgroundPosition
            'chipMoney':chipMoney,   //获取当前选中筹码的金额
            'postLeft':x,            //筹码在投注类型中放置位置
            'postTop':y,
            'index':index,       //当前投注类型的索引值
            'bitTypeSelf': bitTypeSelf,       //指针指向当前选中的投注块
         }
         chipArr[index].length++; //当前选中类型中的筹码数加1
         chipRecordArr.push(json);
         self.showMoney(bitTypeSelf,chipMoney);
         //取消btn禁用
         $('.ui-button').removeClass('btn-disabled');

        }
     }else if(event.which == 3) {//右键撤单
       if(chipArr[index].length && chipRecordArr.length) { //如果当前区块內存在筹码，且存在投注记录
         // 获取当前撤销筹码的金额
					var chipData = $(this).find('i').eq(chipArr[index].length - 1).attr('data-money');
          var targetChip = $('#bottom .chip-group i[data-money="'+chipData+'"]'); //获取下面筹码列中为当前筹码金额的对象
          var targetL = targetChip.offset().left;     //获取下侧筹码的位置
					var targetT = targetChip.offset().top;
					var targetBackpo = targetChip.css('backgroundPosition');  //获取筹码的图片位置
					$(this).find('i').eq(chipArr[index].length -1).remove(); //移除当前最上面的筹码
          var remChip = document.createElement('i');
          remChip.className='chip chip-add';
					remChip.style.cssText='left:'+x+'px;top:'+y+'px;background-position:'+targetBackpo+';';
					$('body').append(remChip);
					$('body > i').animate({'left':targetL+'px','top':targetT+'px'},200,'linear',function(){
						$(this).remove();
					});
          //判断当前选区存在筹码，筹码个数减1，
					chipArr[index].length? chipArr[index].length-- :chipArr[index].length=0;
          for(var i=chipRecordArr.length-1; i>=0; i--){  //从后往前找到 当前区域中最后一个投注值
            if(index == chipRecordArr[i].index){
              chipRecordArr.splice(i,1);   //当投注区域的index 匹配到 投注记录最新投注的index，则删除这条记录
              break;   //不需要在执行下去(每次撤销只删除一个)
            }
          }

          if(chipRecordArr.length == 0){
            $('.ui-button').addClass('btn-disabled');
          }
       }
       self.showMoney(bitTypeSelf,-chipMoney);
     }

    });
  }
/**
 * [AddChipThere 创建筹码]
 * @param {[type]} bitTypeSelf [当前投注类型的this指针]
 * @param {[type]} chipMoney   [当前选中的筹码面额]
 * @param {[type]} index       [投注类型的索引]
 * @param {[type]} chipBackpo  [筹码的background-position]
 * @param {[type]} chipW       [筹码的宽]
 * @param {[type]} chipH       [筹码的高]
 */
  AddChipThere(bitTypeSelf, chipMoney, index, chipBackpo, chipW, chipH){
    var chipAdd = document.createElement('i'); //创建要添加的筹码对象
    chipAdd.className = 'chip chip-add';
    chipAdd.setAttribute('data-money', chipMoney);
    chipAdd.style.cssText = 'left:50%; top:50%; margin-left:' + (-chipW/2) + 'px;margin-top:' + (-chipH/2) + 'px; background-position:' + chipBackpo + ';';
    bitTypeSelf.append(chipAdd);

  }

  onMouseOverChip() {
    var $bitType = $('.dice-table .dice-sheet .bet-container');
    $bitType.hover(function(event) {
      /* Act on the event */
      $(this).find('.tip').css('display',"inline-block");
      $(this).find('.bet-type ').css('display',"inline-block");
    },function(event) {
      $(this).find('.tip').css('display',"none");
        $(this).find('.bet-type ').css('display',"none");
    });
  }
/**
 * [showMoney 1.显示tip中金额。2.更新总金额。3.计算投注钱数]
 * @param  {[type]} bitTypeSelf [当前投注类型的this指针]
 * @param  {[type]} chipMon     [当前选中筹码的面额]
 * @return {[type]}             [description]
 */
  showMoney(bitTypeSelf,chipMon){
    var chipMon = Number(chipMon);
    var text=parseInt(bitTypeSelf.find('.text').html());   //获取当前投注块的标签中的总筹码金额
    var sum = 0;
      var tipMoney = parseInt(bitTypeSelf.find('.text').html());
      var money = tipMoney + chipMon;
      if(money>=0){
          bitTypeSelf.find('.text').html(tipMoney + chipMon + '.00' );
          //计算投注总金额
          for(let i=0; i<chipRecordArr.length; i++){
            sum+=parseInt(chipRecordArr[i].chipMoney);
          }
          //$('#bottom .data-count-amount').html(sum+'.00');
          var sumchar = sum + '.00';
          this.setState({
            dataCountAmount: sumchar,
          })
      }

  }

  buttonClick() {
    var self = this;
    var $btn = $('.ui-button');
    $btn.click(function(event) {
      //此时this指定的是当前点击的按钮
      if(!$(this).hasClass('btn-disabled')) {
        var index = $(this).index();
        switch(index) {
          case 0:
          self.lotteryDraw(); break;
          case 1:
          self.repealChip(); break;
          case 2:
          self.empty(); break;
        }
      }
    });
  }
  /**
   * [empty 清空筹码]
   * @return {[type]} [description]
   */
  empty() {
    $('.ui-button').addClass('btn-disabled');
    var $bitType = $('.dice-table .dice-sheet .bet-container');
    var $tips = $('.dice-sheet .tip');
    $bitType.each(function(){
      $(this).find('i').remove();
    })
    $tips.find('.text').html('0.00');
    this.setState({
      dataCountAmount: '0.00',
    });
    //撤销动画
    for(let i=0; i<chipRecordArr.length; i++){
      this.animationTip(chipRecordArr[i])
    }
    //清空各个区块筹码个数
    for(let i = 0; i < chipArr.length; i++){
      chipArr[i].length = 0;
    }
    //清空投注记录
    chipRecordArr.length = 0;
  }
  /**
   * [animationTip 筹码撤销动画]
   * @param  {[type]} arr [投注记录]
   * @return {[type]}     [description]
   */
  animationTip(arr){
    var chipRemove = document.createElement('i');
    chipRemove.className = 'chip chip-add';
    chipRemove.setAttribute('data-money', arr.chipMoney);
    chipRemove.style.cssText = 'left:' + arr.postLeft + 'px;top:' + arr.postTop + 'px;background-position:' + arr.chipBackpo+';';
    $('body').append(chipRemove);
    var targetChip = $('#bottom .chip-group i[data-money="'+arr.chipMoney+'"]');
    var targetLeft = targetChip.offset().left;
    var targetRight = targetChip.offset().top;
    $('body >i').animate({'left':targetLeft+'px','top':targetRight+'px', },200,'linear',function(){
      $(this).remove();
    })

  }
  /**
   * [repealChip 撤销]
   * @return {[type]} [description]
   */
  repealChip() {
    if(chipRecordArr.length){
      var lastChip = chipRecordArr.pop();
      lastChip.bitTypeSelf.find('i').eq(chipArr[lastChip.index].length - 1).remove(); //删除区块中最后一个筹码
      chipArr[lastChip.index].length ? chipArr[lastChip.index].length -- : chipArr[lastChip.index].length = 0;
      this.animationTip(lastChip);
      this.showMoney(lastChip.bitTypeSelf,-lastChip.chipMoney);
      if(!chipRecordArr.length){
        $('.ui-button').addClass('btn-disabled');
      }
    }
  }
 /**
  * [lotteryDraw 开奖]
  * @return {[type]} [description]
  */
  lotteryDraw() {
    var self = this;
    var off = true;
    console.log('开奖');
    var RegExp =/[1-6]/;
    var resArr=[];
    var $glass = $('.dice-panel .glass');
    var {dataCountAmount,dataUserBalance} = this.state;
    if(chipRecordArr.length) { //存在投注记录
      storageArr.length=0;  //每次清空
      for (var i=0; i<chipRecordArr.length; i++) {
        storageArr.push(chipRecordArr[i]);
      }
      var dataCountAmount = parseInt(dataCountAmount);
      var dataUserBalance = Number(dataUserBalance);
      var balance = calculate.accSub(dataUserBalance,dataCountAmount);
      $('.ui-button').addClass('btn-disabled');
      this.setState({
        dataUserBalance: balance +'.00',   //修改余额
      });
      $glass.find('i').each((index,element) => {
        $(element).attr('class','dice dice-' + Math.ceil(Math.random()*6));
        element.style.left = (index*52)+'px';
        //element.style.top = '80px';
        $(element).animate({
          top: Math.max(Math.random()*80,40) +'px',
          transform:'rotate('+Math.random()*360+'deg)',
          left: (index*52)+'px',
        },100,function(){
          $(this).attr('class','dice dice-' + Math.ceil(Math.random()*6));
          $(this).animate({
            top:  Math.max(Math.random()*80,40) +'px',
            transform:'rotate('+Math.random()*360+'deg)',
            left: (index*52)+'px',
          },100,function(){
            $(this).attr('class','dice dice-' + Math.ceil(Math.random()*6));
            $(this).animate({
              top:  Math.max(Math.random()*80,40) +'px',
              transform:'rotate('+Math.random()*360+'deg)',
              left: (index*52)+'px',
            }, 100,function(){
              $(this).attr('class','dice dice-' + Math.ceil(Math.random()*6));
              $(this).animate({
                top:  Math.max(Math.random()*80,40) +'px',
                transform:'rotate('+Math.random()*360+'deg)',
                left: (index*52)+'px',
              },100,function(){
                $(this).attr('class','dice dice-' + Math.ceil(Math.random()*6));
                $(this).animate({
                  top:'80px',
                  transform:'rotate('+Math.random()*360+'deg)',
                  left: (index*52)+'px',
                });
                resArr.push($(this).attr('class').match(RegExp)[0]);   //将结果存储到resArr中
              })
            })
          })
        });

      });
      if(off) {
        setTimeout(function(){
            var winIndex =self.prizeWinning(resArr);
            off = false;
            //中奖索引变亮
            var $betType = $('.dice-sheet');
            for(var i=0; i< winIndex.length; i++) {
              $betType.find('.dice-sheet-' + winIndex[i]).css('display',"inline-block");
            }
            setTimeout(function(){
              for(var i=0; i< winIndex.length; i++) {
                $betType.find('.dice-sheet-' + winIndex[i]).css('display',"none");
              }
            },3000)

        },1000)
      };
    }
  }
/**
 * [prizewinning 判断是否中奖]
 * @param  {[type]} arr [开奖号码]
 * @return {[type]}     [description]
 */
  prizeWinning(arr){
    var three=0; //出现三次
    var two=0;    //出现两次
    var winIndex = []; //记录中奖索引
    //和值
    var sum = parseInt(arr[0])+parseInt(arr[1])+parseInt(arr[2]);
    if(arr[0] == arr[1] && arr[0] == arr[2]){
      winIndex.push(16);         //豹子
      three = arr[0] + arr[1] + arr[2];
    }
    //对子
    if(arr[0] == arr[1]){
      two = arr[0] + arr[1];
    } else if(arr[0] == arr[2]){
      two = arr[0] + arr[2];
    } else if(arr[1] == arr[2]){
      two = arr[1] + arr[2];
    }
    console.log(two);
    //组合
    var pair1 = arr[0] < arr[1] ? arr[0] + arr[1] : arr[1] + arr[0];
    var pair2 = arr[0] < arr[2] ? arr[0] + arr[2] : arr[2] + arr[0];
    var pair3 = arr[1] < arr[2] ? arr[1] + arr[2] : arr[2] + arr[1];

   //单双
   winIndex.push(sum%2 ? 2 : 3);
   //大小
   if( sum>=4 && sum <= 10) {
     winIndex.push(1);
   }else if(sum >=11 && sum<=17) {
     winIndex.push(0);
   }
   console.log(arr);
//Data[i].name == 'one' + arr[0] || Data[i].name == 'one' + arr[1] || Data[i].name == 'one' + arr[2] ||
   for(var i=0; i<Data.length; i++) {
    if( Data[i].property.name == 'two' + two || Data[i].property.name == "three" + three || Data[i].property.name == 'sum' + sum ||
        Data[i].property.name == 'pair' + pair1 || Data[i].property.name == 'pair' + pair2 ||  Data[i].property.name == 'pair' + pair3 ||
        Data[i].property.name == 'one' + arr[0] || Data[i].property.name == 'one' + arr[1] || Data[i].property.name == 'one' + arr[2] ||
        Data[i].property.name == 'one' + two || Data[i].property.name == 'one' + three) {
        winIndex.push(i)
    }
   }
  console.log(winIndex);
   return winIndex;
  }
	render() {
    var {dataCountAmount,dataUserBalance} = this.state;
		return (
      <footer id="bottom">
        <span className='chip-group'>
          <i className='chip chip-1 chip-seleced' data-money='1.00'></i>
          <i className='chip chip-2' data-money='2.00'></i>
          <i className='chip chip-5' data-money='5.00'></i>
          <i className='chip chip-10'data-money='10.00'></i>
          <i className='chip chip-20' data-money='20.00'></i>
          <i className='chip chip-50' data-money='50.00'></i>
          <i className='chip chip-100' data-money='100.00'></i>
          <i className='chip chip-500' data-money='500.00'></i>
        </span>

        <div className="dice-balance">
          <div className="bet-amount">
            <label>下注额:</label>
            ￥<span className="data-count-amount">{dataCountAmount}</span>
          </div>
          <div className="bet-balance">
            <label>余额:</label>
            ￥<span className="data-user-balance">{dataUserBalance}</span>
          </div>
        </div>

        <div className="action-buttom">
          <div className="ui-button bet-button">下注</div>
          <div className="ui-button button-revocation">撤销</div>
          <div className="ui-button button-clear">清空</div>

        </div>
      </footer>
		)
	}
}
