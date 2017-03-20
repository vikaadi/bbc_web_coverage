# BBC - Search Test


## Installation:
### Prerequisites
Java, Node and npm should be installed. Follow below steps if these software are not installed.

Install Java
Click here to download and install [Java](https://java.com/en/download/)
Install Node.js
Click here to download and install [Node.js](https://nodejs.org/en/download/):

## Install Nightwatch
To install the latest version, run the following:
`$ npm install -g nightwatch`

## Install Nightwatch-html-reporter
To install the latest version, run the following:
`$ npm install -g nightwatch-html-reporter`

### Setting up Test Environment
1. Clone the github repo
2. Go to src folder
3. Run `npm install` command

### Running Tests:

Run complete test suite use:
`$ nightwatch`

Run individual test use:
`$ nightwatch tests/search/****.js`

Skip test case:
To skip a test case from test script, add '+' sign before the function.
`'Verify BBC homepage title' : +function(browser)``

### Running on different browsers:

## Chrome:
For Chrome there is no need of specifying environment, as chrome browser specified in default settings (You can change this settings in nightwatch.json file)
`$ nightwatch`

## Firefox:
If you want to execute tests on firefox browser then run following command
`$ nightwatch -e firefox`

## Headless:
If you want to execute tests on headless browser then run following command
`$ nightwatch -e phantom`

## Parallel Execution
Nightwatch supports the tests to be run in parallel. This works by specifying multiple environments in the command line, separated by comma. E.g.:
`$ nightwatch -e default,firefox,phantom`
Test suite will run on three environments named default (chrome), firefox and phantom in parallel.

To run test scripts in parallel enable test_workers in nightwatch.json
```"test_workers" : {"enabled" : false, "workers" : "auto"}```

## HTML Report
To generate HTML report for tests, run following command
`nightwatch-html-reporter -d reports`
Look [here](https://www.npmjs.com/package/nightwatch-html-reporter) for more themes

## Test Cases:
### All Filter:
1. Verify BBC homepage title
2. Verify search page title
3. Verify all filter selected by default on search result page
4. Verify 10 search results showing on page
5. Verify all articles has image source
6. Verify all article headers has link
7. Verify search keyword exists in article header or in summary
8. Verify all articles has a tag
9. Verify every article has a section
10. Verify every article has publish date

### News Filter:
1. Select News Filter and verify it is selected
2. Verify every article has "News" tag
3. Verify 10 search results showing on page
4. Verify every article has image source
5. Verify every article header has link
6. Verify search keyword exists in article header or in summary
7. Verify every article has a section
8. Verify every article has publish date

### Programmes Filter:
1. Select Programmes Filter and verify it is selected
2. Verify every article has "Programmes" tag
3. Verify 10 search results showing on page
4. Verify every article has image source
5. Verify every article header has link
6. Verify search keyword exists in article header or in summary
7. Verify every article has a section
8. Verify every article has publish date

### Sport Filter:
1. Select Sport Filter and verify it is selected
2. Verify every article has "Sport" tag
3. Verify 10 search results showing on page
4. Verify every article has image source
5. Verify every article header has link
6. Verify search keyword exists in article header or in summary
7. Verify every article has a section
8. Verify every article has publish date

### About the BBC Filter:
1. Select About the BBC Filter and verify it is selected
2. Verify every article has "About the BBC" tag
3. Verify 10 search results showing on page
4. Verify every article has image source
5. Verify every article header has link
6. Verify search keyword exists in article header or in summary
7. Verify every article has a section
8. Verify every article has publish date

### Show More Results:
1. Verify 10 search results showing on page
2. Verify show more result button showing another 10 search results
3. Verify every article has image source after clicking Show More Results
5. Verify every article header has link after clicking Show More Results
6. Verify search keyword exists in article header or in summary after clicking Show More Results
7. Verify every article has a section after clicking Show More Results
8. Verify Show More Result adding another 10 search results
9. Verify all records have search keyword, tags, sections, images, publish date and links

## Known Issues
There are some failures for Publish date and images, as some articles does not have publish date or image.

## debugging
To check error details you can enable verbose logging.
`nightwatch --verbose`

Logs are also generated in src folder *.log

## Test Case to be implemented:
1.	Output the number of articles that have the "Business" tag with months that have less than
31 days and then the number of the same that occur on months with 31 days. -- Function implemented, but global value is not incrementing, debugging this issue
2.	Verify Article Summary Length

## Future Enhancements
1. Headless Browser: The current headless browser (phantomjs) intermittently unable to locate some elements. Will update some locators so that phantomjs will work every time
2. Implement environment base url settings. Will launch url from nightwatch test_settings file, which will help to run same scripts on different environment like qa, staging etc.
3. Test coverage for Top button
4. Validation for search box
5. Display name of article which has issue like image or publish date not available. However it is showing the failure in the test case expect the name and check in the logs to find more about error.

## Compromises:
1. g_verifyLinks test script is unable to click on article headers in firefox. This might require to change the locators to work on all browsers. Because of this reason I have separated links verification in different test script. However in every test script I am verifying header link has a href value.
2. I don't have resources to test this on Windows environment, so adding some troubleshooting steps

### Recommended Browser
Use chrome to run this test, firefox and headless support are available but there might be some more failures than chrome.

### Troubleshooting
Selenium server will automatically start with current settings. If you see error for selenium server, you can start selenium server manually.

`cd src`
Run `java -jar node_modules/selenium-server/lib/runner/selenium-server-standalone-3.3.1.jar`

If you see error starting chrome or firefox drivers then you can start these with selenium server.

#### MAC
`cd src`
Run following command.

`java Dwebdriver.chrome.driver=bin/drivers/chromedriver -Dwebdriver.gecko.driver=bin/drivers/geckodriver -jar node_modules/selenium-server/lib/runner/selenium-server-standalone-3.3.1.jar`

#### Windows
#### MAC
`cd src`
Run following command.

`java Dwebdriver.chrome.driver=bin/drivers/chromedriver.exe -Dwebdriver.gecko.driver=bin/drivers/geckodriver.exe -jar node_modules/selenium-server/lib/runner/selenium-server-standalone-3.3.1.jar`

## Approach
I have used [Nightwatch](http://nightwatchjs.org/) to automate this test. Nightwatch has lots of features like built in test runner, controls selenium server, cloud and CI supports.  It uses the powerful W3C WebDriver API to perform commands and assertions on DOM elements.

In have added coverage for verifying search, filters, page size, headers, date, images and show more results.

With the current test settings selenium server automatically start by nightwatch. Test do not abort the test if any test case fail in test script, it is continuing to execute other scripts. You can easily enable parallel test execution of test scripts in nightwatch.json settings file. [Click here](http://nightwatchjs.org/getingstarted#test-settings) to learn more about all settings and features available in nightwatch.

To generate HTML report, I am using nightwatch-html-reporter npm module. You can also enable junit reports generated by nightwatch.
