var Data = [
  {property: {index:0, name:'large', odds:1, bs:"大"}, style: { width:126, height:69, left:21, top:29}}, //大
  {property: {index:1, name:'small', odds:1, bs:"小"}, style: {width:126, height:69, left:964, top:29}}, //小
  {property: {index:2, name:'odd', odds:1, bs:"单"}, style: {width:126, height:69, left:21, top:100 }}, //单
  {property: {index:3, name:'even', odds:1, bs:"双"}, style: {width:126, height:69, left:964, top:100}}, //双
  {property: {index:4, name:'sum4', odds:50,}, style: {width:74, height:82, left:21, top:180}}, //和值
  {property: {index:5, name:'sum5', odds:18,}, style: {width:74, height:82, left:98, top:180}}, //和值
  {property: {index:6, name:'sum6', odds:14,}, style: {width:74, height:82, left:175, top:180}}, //和值
  {property: {index:7, name:'sum7', odds:12,}, style: {width:74, height:82, left:251, top:180}}, //和值
  {property: {index:8, name:'sum8', odds:8,}, style: {width:74, height:82, left:328, top:180}}, //和值
  {property: {index:9, name:'sum9', odds:6,}, style: {width:74, height:82, left:405, top:180}}, //和值
  {property: {index:10, name:'sum10', odds:6,}, style: {width:74, height:82, left:481, top:180}}, //和值
  {property: {index:11, name:'sum11', odds:6,}, style: {width:74, height:82, left:558, top:180}}, //和值
  {property: {index:12, name:'sum12', odds:6,}, style: {width:74, height:82, left:635, top:180}}, //和值
  {property: {index:13, name:'sum13', odds:8,}, style: {width:76, height:82, left:710, top:180}}, //和值
  {property: {index:14, name:'sum14', odds:12,}, style: {width:74, height:82, left:789, top:180}}, //和值
  {property: {index:15, name:'sum15', odds:14,}, style: {width:74, height:82, left:865, top:180}}, //和值
  {property: {index:16, name:'sum16', odds:18,}, style: {width:74, height:82, left:941, top:180}}, //和值
  {property: {index:17, name:'sum17', odds:50,}, style: {width:74, height:82, left:1018, top:180}}, //和值
  {property: {index:18, name:'two11', odds:8,}, style: {width:56, height:139, left:149, top:29}}, //双骰（对子）
  {property: {index:19, name:'two22', odds:8,}, style: {width:53, height:139, left:207, top:29}}, //双骰（对子）
  {property: {index:20, name:'two33', odds:8,}, style: {width:53, height:139, left:261, top:29}}, //双骰（对子）
  {property: {index:21, name:'two44', odds:8,}, style: {width:53, height:139, left:801, top:29}}, //双骰（对子）
  {property: {index:22, name:'two55', odds:8,}, style: {width:52, height:139, left:856, top:29}}, //双骰（对子）
  {property: {index:23, name:'two66', odds:8,}, style: {width:52, height:139, left:910, top:29}}, //双骰（对子）
  {property: {index:24, name:'three111', odds:150,}, style: {width:117, height:45, left:316, top:29}}, //围骰（三颗一样）
  {property: {index:25, name:'three222', odds:150,}, style: {width:117, height:45, left:316, top:76}}, //围骰（三颗一样）
  {property: {index:26, name:'three333', odds:150,}, style: {width:117, height:45, left:316, top:121}}, //围骰（三颗一样）
  {property: {index:27, name:'three444', odds:150,}, style: {width:117, height:45, left:682, top:29}}, //围骰（三颗一样）
  {property: {index:28, name:'three555', odds:150,}, style: {width:117, height:45, left:682, top:76}}, //围骰（三颗一样）
  {property: {index:29, name:'three666', odds:150,}, style: {width:117, height:45, left:682, top:121}}, //围骰（三颗一样）
  {property: {index:30, name:'threennn', odds:24,}, style: {width:245, height:139, left:435, top:29}}, //全围（三颗一样）
  {property: {index:31, name:'pair12', odds:5}, style: {width:69, height:105, left:21, top:273}}, //二不同号(组合)
  {property: {index:32, name:'pair13', odds:5}, style: {width:70, height:105, left:92, top:273}}, //二不同号
  {property: {index:33, name:'pair14', odds:5}, style: {width:69, height:105, left:164, top:273}}, //二不同号
  {property: {index:34, name:'pair15', odds:5}, style: {width:70, height:105, left:235, top:273}}, //二不同号
  {property: {index:35, name:'pair16', odds:5}, style: {width:69, height:105, left:307, top:273}}, //二不同号
  {property: {index:36, name:'pair23', odds:5}, style: {width:70, height:105, left:378, top:273}}, //二不同号
  {property: {index:37, name:'pair24', odds:5}, style: {width:69, height:105, left:450, top:273}}, //二不同号
  {property: {index:38, name:'pair25', odds:5}, style: {width:70, height:105, left:521, top:273}}, //二不同号
  {property: {index:39, name:'pair26', odds:5}, style: {width:69, height:105, left:593, top:273}}, //二不同号
  {property: {index:40, name:'pair34', odds:5}, style: {width:70, height:105, left:664, top:273}}, //二不同号
  {property: {index:41, name:'pair35', odds:5}, style: {width:70, height:105, left:736, top:273}}, //二不同号
  {property: {index:42, name:'pair36', odds:5}, style: {width:70, height:105, left:808, top:273}}, //二不同号
  {property: {index:43, name:'pair45', odds:5}, style: {width:70, height:105, left:880, top:273}}, //二不同号
  {property: {index:44, name:'pair46', odds:5}, style: {width:70, height:105, left:951, top:273}}, //二不同号
  {property: {index:45, name:'pair56', odds:5}, style: {width:70, height:105, left:1023, top:273}}, //二不同号
  {property: {index:46, name:'one1',odds:1},    style: {width:177, height:56, left:21, top:390}}, //一颗骰子
  {property: {index:47, name:'one2',odds:1}, style: {width:177, height:56, left:200, top:390}}, //一颗骰子
  {property: {index:48, name:'one3',odds:1}, style: {width:177, height:56, left:379, top:390}}, //一颗骰子
  {property: {index:49, name:'one4',odds:1}, style: {width:177, height:56, left:558, top:390}}, //一颗骰子
  {property: {index:50, name:'one5',odds:1}, style: {width:177, height:56, left:737, top:390}}, //一颗骰子
  {property: {index:51, name:'one6',odds:1}, style: {width:177, height:56, left:916, top:390}}, //一颗骰子
  {property: {index:52, name:'one11',odds:2},}, //一颗骰子
  {property: {index:53, name:'one22',odds:2}, }, //一颗骰子
  {property: {index:54, name:'one33',odds:2},}, //一颗骰子
  {property: {index:55, name:'one44',odds:2}, }, //一颗骰子
  {property: {index:56, name:'one55',odds:2}, }, //一颗骰子
  {property: {index:57, name:'one66',odds:2}, }, //一颗骰子
  {property: {index:58, name:'one111',odds:3}, }, //一颗骰子
  {property: {index:59, name:'one222',odds:3}, }, //一颗骰子
  {property: {index:60, name:'one333',odds:3},}, //一颗骰子
  {property: {index:61, name:'one444',odds:3},}, //一颗骰子
  {property: {index:62, name:'one555',odds:3}, }, //一颗骰子
  {property: {index:63, name:'one666',odds:3},}, //一颗骰子
]
 export default Data;