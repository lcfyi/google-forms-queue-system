function main() {
    var lastValue = getValue(CONFIG_SHEET, LAST_COUNT);
    var currValue = getValue(CONFIG_SHEET, CURR_COUNT);
    
    if (lastValue !== currValue) {
        // Update the tracker to memoize our progress through the list
        setValue(CONFIG_SHEET, LAST_COUNT, currValue);
        
        // Send the notice to the next applicant
        var contact = getContactInfo(RESPONSE_SHEET, EMAIL_COL, PHONE_COL, TYPE_COL, CHECKED_COL);
        sendNotice(contact, SUBJECT, BODY);
        
        // Update the queue sheet
        visualUpdate();
    } else {
        Logger.log("No change detected, no-op.");
    }
}