# Nightwatch Sample Tests for BBC Search Page


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
`'Verify BBC homepage title' : +function(browser)`

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


## Debugging
To check error details you can enable verbose logging.
`nightwatch --verbose`

Logs are also generated in src folder *.log


### Recommended Browser
Use chrome to run this test, firefox and headless support are available but there might be some more failures than chrome.

### Troubleshooting
Selenium server will automatically start with current settings. If you see error for selenium server, you can start selenium server manually.

Go to `src` folder

Run `java -jar node_modules/selenium-server/lib/runner/selenium-server-standalone-3.3.1.jar`

If you see error starting chrome or firefox drivers then you can start these with selenium server.

#### On MAC
Go to `src` folder

Run following command.

`java Dwebdriver.chrome.driver=bin/drivers/chromedriver -Dwebdriver.gecko.driver=bin/drivers/geckodriver -jar node_modules/selenium-server/lib/runner/selenium-server-standalone-3.3.1.jar`

#### On Windows

Go to `src` folder

Run following command.

`java Dwebdriver.chrome.driver=bin/drivers/chromedriver.exe -Dwebdriver.gecko.driver=bin/drivers/geckodriver.exe -jar node_modules/selenium-server/lib/runner/selenium-server-standalone-3.3.1.jar`

