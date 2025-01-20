# Survey-Auto-Filler-Extension
This auto filler prepared for Çukurova University surveys. It can modify for any surveys anyways.



This project is a browser extension that automatically fills specific options in online surveys. It selects options based on the survey's content and submits the form once completed.

## Features

- **Option Selection**: Automatically selects options containing keywords like "Does not contribute," "Less," or "Disagree."
- **Numeric Input Filling**: Fills all numeric input fields with the value "3."
- **Form Submission**: Automatically finds and clicks the submit button after filling the form.

## Installation

1. Clone or download this repository from GitHub:
   ```bash
   git clone https://github.com/begumaygun/survey-auto-filler.git

2.Load the extension in your browser:

Chrome:
Go to chrome://extensions/.
Enable "Developer mode" (toggle in the top-right corner).
Click "Load unpacked" and select the project folder.
Firefox:
Go to about:debugging.
Select "This Firefox" and click "Load Temporary Add-on."
Choose the manifest.json file from the project folder.
3.Once the extension is loaded, navigate to a survey page, and the extension will automatically activate.

Usage
After the extension is installed:

Open a survey page.
The extension will:
Select options with keywords such as "Does not contribute," "Less," or "Disagree."
Fill all numeric input fields with the value "3."
Automatically submit the form.
No further action is required; the extension takes care of everything!

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch for your feature or bug fix.
Submit a pull request with a description of your changes.
