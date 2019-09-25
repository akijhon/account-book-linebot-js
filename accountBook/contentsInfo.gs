function foodExpense() {
  var monthFoodExpense = 0;
  for(i=0;i<31;i++){
  var dayFoodExpense = dateSheet.getRange(2,i+2).getValue();
  monthFoodExpense+=Number(dayFoodExpense);
  }
  return '食費:'+monthFoodExpense+'円\n';
}
function traficExpense() {
  var monthTraficExpense = 0;
  for(i=0;i<31;i++){
  var dayTraficExpense = dateSheet.getRange(3,i+2).getValue();
  monthTraficExpense+=Number(dayTraficExpense);
  }
  return '交通費:'+monthTraficExpense+'円\n';
}
function billingExpense() {
  var monthBillingExpense = 0;
  for(i=0;i<31;i++){
  var dayBillingExpense = dateSheet.getRange(4,i+2).getValue();
  monthBillingExpense+=Number(dayBillingExpense);
  }
  return '課金代:'+monthBillingExpense+'円\n';
}

function playExpense() {
  var monthPlayExpense = 0;
  for(i=0;i<31;i++){
  var dayPlayExpense = dateSheet.getRange(5,i+2).getValue();
  monthPlayExpense+=Number(dayPlayExpense);
  }
  return '遊び代:'+monthPlayExpense+'円\n';
}

function tripExpense() {
  var monthTripExpense = 0;
  for(i=0;i<31;i++){
  var dayTripExpense = dateSheet.getRange(6,i+2).getValue();
  monthTripExpense+=Number(dayTripExpense);
  }
  return '旅行費:'+monthTripExpense+'円\n';
}

function snackExpense() {
  var monthSnackExpense = 0;
  for(i=0;i<31;i++){
  var daySnackExpense = dateSheet.getRange(7,i+2).getValue();
  monthSnackExpense+=Number(daySnackExpense);
  }
  return '軽食費:'+monthSnackExpense+'円\n';
}

function studyExpense() {
  var monthStudyExpense = 0;
  for(i=0;i<31;i++){
  var dayStudyExpense = dateSheet.getRange(8,i+2).getValue();
  monthStudyExpense+=Number(dayStudyExpense);
  }
  return '勉強費:'+monthStudyExpense+'円\n';
}

function clothingExpense() {
  var monthClothingExpense = 0;
  for(i=0;i<31;i++){
  var dayClothingExpense = dateSheet.getRange(9,i+2).getValue();
  monthClothingExpense+=Number(dayClothingExpense);
  }
  return '衣服代:'+monthClothingExpense+'円';
}