var filter = 'News';
var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
			openBrowser: true,
			reportsDirectory: __dirname + '/reports'
});
module.exports = {
	before : function (browser) {
		 browser.windowMaximize()
     .deleteCookies();
		 search = browser.page.bbc.homePage();
	},

  'Select News Filter and verify filter is selected' : function(browser) {
   browser.url(browser.globals.url);
   search.navigate().setSearchKeyword(browser, browser.globals.searchKeyword)
   search.navigate().clickNewsFilter(browser)
   .verifyFilterSelected(browser, filter);
  },

  'Verify every article has "News" tag' : function(browser) {
   search.navigate().verifyFilterTag(browser, filter, browser.globals.pgCount);
  },

	'Verify 10 search results showing on page' : function(browser) {
		search.navigate().countSearchResults(browser, browser.globals.pgCount)
	},

	'Verify every article headers has link' : function(browser) {
		search.navigate().verifyHeadingLinks(browser, browser.globals.pgCount);
	},

	'Verify search keyword exists in article header or in summary' : function(browser) {
		search.navigate().verifySearchKeyword(browser, browser.globals.pgCount);
	},

	'Verify every articles has a section' : function(browser) {
		search.navigate().verifySectionExist(browser, browser.globals.pgCount);
	},

	'Verify every articles has image source' : function(browser) {
		search.navigate().verifyImageSrc(browser, browser.globals.pgCount);
	},

	'Verify every article has publish date' : function(browser) {
		search.navigate().verifyPublishDateExist(browser, browser.globals.pgCount);
	},

	after : function (browser) {
		 browser.end();
	},

};
