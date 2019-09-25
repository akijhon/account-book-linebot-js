function todayInfo() {

  var day = new Date();
  day.setDate(day.getDate() -1);
  var Day = Utilities.formatDate(day, 'JST', 'yyyy/M/d');
  var dateData = dateSheet.getRange(1, 2, 1, dateSheet.getLastColumn()).getValues();
    dateData[0].pop(); // 末尾の不要な要素削除
 
    // 日付フォーマット変換
    var afterDateData = [];
    dateData[0].forEach(function (it) {
        afterDateData.push(Utilities.formatDate(it, 'JST', 'yyyy/M/d'));
    });
    
    for (var index = 0; index < afterDateData.length; index++) {
        if (afterDateData[index] == Day) {
            var today=index+2
        }
    };
  var todayData=dateSheet.getRange(2,today,dateSheet.getLastRow()).getValues();
  var total= sum(todayData);
  var text='今日の支出は'+total+'円だよ'
  var id='(ラインのID)';　
return sendLineMessageFromUserId(id, text) 
  
}


function sum(todayData){
var sum=0
  for (var i=0;i<todayData.length;i++){
  sum+=Number(todayData[i]);
}
return sum
}

function today() {
  var day = new Date();
  day.setDate(day.getDate() -1);
  var Day = Utilities.formatDate(day, 'JST', 'yyyy/M/d');
  var dateData = dateSheet.getRange(1, 2, 1, dateSheet.getLastColumn()).getValues();
    dateData[0].pop(); // 末尾の不要な要素削除
 
    // 日付フォーマット変換
    var afterDateData = [];
    dateData[0].forEach(function (it) {
        afterDateData.push(Utilities.formatDate(it, 'JST', 'yyyy/M/d'));
    });
    
    for (var index = 0; index < afterDateData.length; index++) {
        if (afterDateData[index] == Day) {
            var today=index+2
        }
    };
  var todayData=dateSheet.getRange(2,today,dateSheet.getLastRow()).getValues();
  var total= sum(todayData);
  return total
  }
  
  function todayDay() {
  var day = new Date();
  var Day = Utilities.formatDate(day, 'JST', 'yyyy/M/d');
  var dateData = dateSheet.getRange(1, 2, 1, dateSheet.getLastColumn()).getValues();
    dateData[0].pop(); // 末尾の不要な要素削除
 
    // 日付フォーマット変換
    var afterDateData = [];
    dateData[0].forEach(function (it) {
        afterDateData.push(Utilities.formatDate(it, 'JST', 'yyyy/M/d'));
    });
    
    for (var index = 0; index < afterDateData.length; index++) {
        if (afterDateData[index] == Day) {
            var today=index+2
        }
    };
  var todayData=dateSheet.getRange(2,today,dateSheet.getLastRow()).getValues();
  var total= sum(todayData);
  return total
  }