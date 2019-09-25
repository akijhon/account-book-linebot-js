 function appendToSheet(text) {
 dateSheet.appendRow([text]);
}
function doPost(e) {
    var replyToken = JSON.parse(e.postData.contents).events[0].replyToken;
    var userMessage = JSON.parse(e.postData.contents).events[0].message.text;
    var userId=JSON.parse(e.postData.contents).events[0].source.userId;
    var messageList = userMessage.split(' ');
    var inputdate = '';
     var targetRow = getExpenseRow(dateSheet, messageList[0]);
    var targetColumn = getDateColumn(dateSheet, inputdate);
    if (messageList[2]) {
        inputdate = messageList[2];
    }
switch(userMessage){
  case 'id':
   appendToSheet(userId)
   break;
  case '今月の支出':
    var monthInfo=month()
  　var replyText=monthInfo+'円だよ'
   break;
 case '今日の支出':
   var todayInfo=todayDay();
  　var replyText=todayInfo+'円だよ'
   break;
  default:
    var newValue = setValue(dateSheet, targetRow, targetColumn, parseInt(messageList[1]));
    
    var replyText=userMessage+'を記録したよ\n今日の'+messageList[0]+'は'+newValue+'円です'
}
    return sendLineMessageFromReplyToken(replyToken, replyText)
};
