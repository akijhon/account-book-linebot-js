 
function monthInfo() {
var food = foodExpense()
var trafic = traficExpense()
var billing = billingExpense()
var play = playExpense()
var trip =tripExpense()
var snack = snackExpense()
var study = studyExpense()
var clothing = clothingExpense()

var monthTotal = 0;
for(var c=2;c<dateSheet.getLastColumn();c++){
var dayData=dateSheet.getRange(2,c,dateSheet.getLastRow()).getValues();
var total= sum(dayData);
monthTotal+=total;
}
var replyText='今月の支出は'+monthTotal+'円です\n'+food+trafic+billing+play+trip+snack+study+clothing;
var id='(ラインのID)';　
sendLineMessageFromUserId(id, replyText) 
}
function deleteInfo(){
dateSheet.getRange(1,2,dateSheet.getLastRow(),dateSheet.getLastColumn()).clear();
for(var i=0;i<31;i++){
var resetDay=new Date()
resetDay.setDate(resetDay.getDate() + i);
var targetDay=Utilities.formatDate(resetDay, 'JST', 'yyyy/M/d')
setValue(dateSheet,1, i+2, targetDay);
}
}

function sum(todayData){
var sum=0
  for (var i=0;i<todayData.length;i++){
  sum+=Number(todayData[i]);
}
return sum
}

function month() {
var monthTotal = 0;
for(var c=2;c<dateSheet.getLastColumn();c++){
var dayData=dateSheet.getRange(2,c,dateSheet.getLastRow()).getValues();
var total= sum(dayData);
monthTotal+=total;
}
return monthTotal;
}
