// --- State tracking variables
var CURR_COUNT = "D6";
var LAST_COUNT = "D7";
var SUBMISSION_COUNT = "D8";

// --- Queue display
var QUEUE_CELL = "C3"; // Start of the queue

// --- Sheet names
var RESPONSE_SHEET = "Responses";
var CONFIG_SHEET = "Config";
var VISUAL_SHEET = "Queue";

// --- Notification subject/body
var SUBJECT = "Hey!";
var BODY = "We're ready for you.";

// --- Twilio SMS configuration
var TWILIO_ACCOUNT_ID = "ACCID";
var TWILIO_AUTH_TOKEN = "AUTHTOKEN";
var TWILIO_PHONE_NUMBER = "000";

// --- Column indices in the sheet; note that it's 1-based, so A is 1, B is 2, and so on
var NAME_COL = 2;
var EMAIL_COL = 6;
var PHONE_COL = 7;
var TYPE_COL = 8;
var CHECKED_COL = 9;

// --- Auxiliary variables
var MAX_RANGE = getValue(CONFIG_SHEET, SUBMISSION_COUNT) + 5; // Add some padding
var SMS_STRING = "SMS"; // Must match the form value
var EMAIL_STRING = "Email"; // Must match the form value