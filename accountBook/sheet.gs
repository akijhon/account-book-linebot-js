var id = '(ラインのID)';
var dateSheet = SpreadsheetApp.openById(id).getSheetByName('money');
var getExpenseRow = function (sheet, key) {
    // 支出項目列取得
    var expenseData = dateSheet.getRange(2, 1, sheet.getLastRow()).getValues();
    expenseData.pop(); // 末尾の不要な要素削除
    
    // 入力された支出項目と一致する行数を返却
    for (var index = 0; index < expenseData.length; index++) {
        if (expenseData[index] == key) {
            return index + 2;
        }
    }
    return 0;
};
/**
 * getDateColumn
 * 支出金額を入力する日付が何列目かを返す
 **/
var getDateColumn = function (sheet, inputDay) {
    var compareDay = Utilities.formatDate(new Date(), 'JST', 'yyyy/M/d');
    
    if (inputDay != '') {
        var year = new Date().getFullYear();
        compareDay = year + "/" + inputDay;
    }
    // 日付行取得
    var dateData = sheet.getRange(1, 2, 1, sheet.getLastColumn()).getValues();
    dateData[0].pop(); // 末尾の不要な要素削除
 
    // 日付フォーマット変換
    var afterDateData = [];
    dateData[0].forEach(function (it) {
        afterDateData.push(Utilities.formatDate(it, 'JST', 'yyyy/M/d'));
    });
    
    for (var index = 0; index < afterDateData.length; index++) {
        if (afterDateData[index] == compareDay) {
            return index + 2;
        }
    }
    return 0;
};
/**
 * setValue
 * 支出金額を対象セルにセットする
 **/
var setValue = function (sheet, row, column, key) {
    var oldValue = 0;
    var newValue = 0;
    oldValue = sheet.getRange(row, column).getValue();
    newValue = key + oldValue;
    sheet.getRange(row, column).setValue(newValue);
    return newValue;
};