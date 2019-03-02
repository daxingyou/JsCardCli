
/**
 ** @Author:pandayu
 ** @Version:1.0
 ** @DateTime:2018-09-09
 ** @Project:pandaCard CardGame
 ** @Contact: QQ:815099602
 **/
 var MISSIONVITACFG = {
    "1101":{
      "id":1101,
      "name":"活跃值达到35",
      "type":3,
      "chain":26,
      "trigger":26,
      "qz":0,
      "hz":1102,
      "cf":[[2,1]],
      "mb":[[1,35]],
      "reward":[[2,20],[10,1]],
      "des":"活跃值达到35",
      "st":1,
      "et":86400
    },
    "1102":{
      "id":1102,
      "name":"活跃值达到80",
      "type":3,
      "chain":26,
      "trigger":26,
      "qz":1101,
      "hz":1103,
      "cf":[[2,1]],
      "mb":[[1,80]],
      "reward":[[2,20],[10,2],[9,3]],
      "des":"活跃值达到80",
      "st":1,
      "et":86400
    },
    "1103":{
      "id":1103,
      "name":"活跃值达到110",
      "type":3,
      "chain":26,
      "trigger":26,
      "qz":1102,
      "hz":1104,
      "cf":[[2,1]],
      "mb":[[1,110]],
      "reward":[[2,50],[10,3],[9,5]],
      "des":"活跃值达到110",
      "st":1,
      "et":86400
    },
    "1104":{
      "id":1104,
      "name":"活跃值达到135",
      "type":3,
      "chain":26,
      "trigger":26,
      "qz":1103,
      "hz":0,
      "cf":[[2,1]],
      "mb":[[1,135]],
      "reward":[[2,100],[17,300],[18,1],[9,5]],
      "des":"活跃值达到135",
      "st":1,
      "et":86400
    }
  }