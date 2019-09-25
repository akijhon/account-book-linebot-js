function setTriggerToday() {
  var triggerDay = new Date();
  triggerDay.setDate(triggerDay.getDate()+1)
  triggerDay.setHours(0);
  triggerDay.setMinutes(0);
  ScriptApp.newTrigger("todayInfo").timeBased().at(triggerDay).create();
}

function setTriggerMonth() {
  var triggerDay = new Date();
  triggerDay.setHours(1);
  triggerDay.setMinutes(0);
  ScriptApp.newTrigger("monthInfo").timeBased().at(triggerDay).create();
}

function setTriggerDelete() {
  var triggerDay = new Date();
  triggerDay.setHours(1);
  triggerDay.setMinutes(1);
  ScriptApp.newTrigger("deleteInfo").timeBased().at(triggerDay).create();
}
