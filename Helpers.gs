// Gets the value of a particular cell, based on A1 Notation
function getValue(sheet, cell) {
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet).getRange(cell).getValue();
}

// Sets the value of a particular cell, based on A1 Notation
function setValue(sheet, cell, value) {
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet).getRange(cell).setValue(value);
}

// Function expects the email address and interviewed counter to be side by side
// Note that the indices are 1-based, so the first column is 1 and so on
function getContactInfo(sheet, emailColIndex, phoneColIndex, preferredColIndex, checkedInColIndex) {
    var range = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet).getDataRange();
    for (var i = 2; i < MAX_RANGE; i++) {
        if (!range.getCell(i, checkedInColIndex).getValue() && range.getCell(i, preferredColIndex).getValue() !== "") {
        var type = range.getCell(i, preferredColIndex).getValue();
        switch (type) {
            case EMAIL_STRING:
            return {
                "type": type,
                "to": String(range.getCell(i, emailColIndex).getValue())
            };
            case SMS_STRING:
            return {
                "type": type,
                "to": String(range.getCell(i, phoneColIndex).getValue())
            };
        }
        }
    }
    return {"type": "failure"};
}

// Delegate our contact object to decide how to contact applicant
function sendNotice(contact, subject, body) {
    switch (contact.type) {
        case EMAIL_STRING:
        return sendEmail(contact.to, subject, body);
        case SMS_STRING:
        return sendSMS(contact.to, subject + " " + body);
        default:
        return;
    }
}

// Send email
function sendEmail(to, subject, body) {
    return MailApp.sendEmail(to, subject, body);
}

// Send SMS, ensure twilio details are properly formed
function sendSMS(to, body) {
    var messages_url = "https://api.twilio.com/2010-04-01/Accounts/" + TWILIO_ACCOUNT_ID + "/Messages.json";
    
    var payload = {
        "To": to,
        "Body": body,
        "From": TWILIO_PHONE_NUMBER
    };
    var options = {
        "method": "post",
        "payload": payload,
        "headers": {
        "Authorization": "Basic " + Utilities.base64Encode(TWILIO_ACCOUNT_ID + ":" + TWILIO_AUTH_TOKEN)
        }
    };

    UrlFetchApp.fetch(messages_url, options);
}
    