# Google Forms Queue System

This is a simple Google Forms queue system, using Apps Script to power it. It allows you to send email/SMS notifications to people in a queue as you go down the list. 

It expects a name, email, phone number, and preferred contact method. Using these values, the script will contact the next unprocessed entry based on their preferred method every time an entry is marked as processed. 

It also expects the sheet to track the number of "processed" entries (`CURR_COUNT`), and a location to store the last "processed" entries count (`LAST_COUNT`). This prevents arbitrary sheet updates to trigger a notification to the next unprocessed individual.

This was used successfully for the 2019 Supermileage electrical recruiting run, with a small change to allow the visual update to update another sheet (so that candidates can keep track of the queue themselves). 


## Setup

Refer to [this sheet](https://docs.google.com/spreadsheets/d/1Eq0w7KkYYUYIoq3Xe66ES6Ijn2bXC7IRNLsZsIPfx3g/edit?usp=sharing) for an example. Essentially, you must set up all the `Config.gs` values based on these configuration items on the sheet:
- Check box as the last column in the responses sheet
- Config sheet that tracks:
    - the current checked count (and optionally, a start box in the config sheet)
    - a mutable box for the last count (script will update this)
    - the submission count (based on non-blank entries)
- Queue sheet with mutable rows below a start cell

You can style the queue sheet formatting as you'd like as there is no formulaic input. 
