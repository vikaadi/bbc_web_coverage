BBC - Search Tests

###############
Installation:
Install Node.js
From nodejs.org:

"Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices."
There are installation packages and instructions for most major Operating systems on its website nodejs.org. Remember to install also the npm tool, which is the node package manager and is distributed with the Node.js installer.

Install Nightwatch
To install the latest version using the npm command line tool, run the following:
$ npm install -g nightwatch


Setting up Test Environment
1. Clone the github repo
2. Go to src folder
3. Run npm install

Running Tests:

To run complete test suite use:
$ nightwatch

to run individual tests use:
$ nightwatch tests/search/****.js

Running on different browsers:

Chrome:
By default test will run on chrome, so there is no need of specifying environment
$ nightwatch

Firefox:
If you want to execute tests on firefox browser then run following command
$ nightwatch -e firefox

Headless:
If you want to execute tests on headless browser then run following command
$ nightwatch -e phantom

Parallel Running
Nightwatch supports the tests to be run in parallel. This works by specifying multiple environments in the command line, separated by comma. E.g.:
$ nightwatch -e default,firefox,phantom
Test suite will run on three environments named default (chrome), firefox and phantom in parallel.

To run test scripts in parallel enable test_workers in nightwatch.json
"test_workers" : {"enabled" : false, "workers" : "auto"}

Test Cases:
All Filter:
1. Verify BBC homepage title
2. Verify search page title
3. Verify all filter selected by default on search result page
4. Verify 10 search results showing on page
5. Verify all articles has image source
6. Verify all article headers has link
7. Verify search keyword exists in article header or in summary
8. Verify all articles has a tag
9. Verify every articles has a section

News Filter:
1. Select News Filter and verify it is selected
2. Verify every article has "News" tag
3. Verify 10 search results showing on page
4. Verify every articles has image source
5. Verify every article headers has link
6. Verify search keyword exists in article header or in summary
7. Verify every articles has a section

Programmes Filter:
1. Select Programmes Filter and verify it is selected
2. Verify every article has "Programmes" tag
3. Verify 10 search results showing on page
4. Verify every articles has image source
5. Verify every article headers has link
6. Verify search keyword exists in article header or in summary
7. Verify every articles has a section

Sport Filter:
1. Select Sport Filter and verify it is selected
2. Verify every article has "Sport" tag
3. Verify 10 search results showing on page
4. Verify every articles has image source
5. Verify every article headers has link
6. Verify search keyword exists in article header or in summary
7. Verify every articles has a section

About the BBC Filter:
1. Select About the BBC Filter and verify it is selected
2. Verify every article has "About the BBC" tag
3. Verify 10 search results showing on page
4. Verify every articles has image source
5. Verify every article headers has link
6. Verify search keyword exists in article header or in summary
7. Verify every articles has a section

Show More Results:
1. Verify 10 search results showing on page
2. Verify show more result button showing another 10 search results
3. Verify every articles has image source after clicking Show More Results
5. Verify every article headers has link after clicking Show More Results
6. Verify search keyword exists in article header or in summary after clicking Show More Results
7. Verify every articles has a section after clicking Show More Results
8. Verify Show More Result adding another 10 search results
9. Verify all records have search keyword, tags, sections, images and links

Test Case to be implemented:
Output the number of articles that have the "Business" tag with months that have less than
31 days and then the number of the same that occur on months with 31 days. -- Function implemented, but global value is not incrementing, debugging this issue
