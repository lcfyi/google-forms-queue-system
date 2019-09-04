function visualUpdate() {
    // Get the master sheet
    var range = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(RESPONSE_SHEET).getDataRange();
    // Grab the queue sheet with the queue cell
    var queue = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(VISUAL_SHEET).getRange(QUEUE_CELL);
    var offset = 0;
    for (var i = 2; i < MAX_RANGE; i++) {
        queue.offset(i - 2, 0).clearContent();
        if (!range.getCell(i, CHECKED_COL).getValue() && range.getCell(i, NAME_COL).getValue() !== "") {
        queue.offset(offset, 0).setValue(range.getCell(i, NAME_COL).getValue());
        offset++;
        }
    }
}
