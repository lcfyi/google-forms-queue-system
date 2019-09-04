function visualUpdate() {
    // Get the master sheet and its values
    var range = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(RESPONSE_SHEET).getDataRange().getValues();
    // Grab the queue sheet with the queue cell
    var queue = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(VISUAL_SHEET).getRange(QUEUE_CELL);
    var offset = 0;
    var i = 0;
    for each (var row in range) {
        queue.offset(i++, 0).clearContent();
        if (!row[CHECKED_COL - 1] && row[NAME_COL - 1] !== "") {
            queue.offset(offset, 0).setValue(row[NAME_COL - 1]);
            offset++;
        }
    }
}
