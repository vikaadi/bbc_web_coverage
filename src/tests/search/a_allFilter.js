var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
			openBrowser: true,
			reportsDirectory: __dirname + '/reports'
});
module.exports = {
	before : function (browser) {
		 browser.resizeWindow(1500, 1600)
     .deleteCookies();
		 search = browser.page.bbc.homePage();
	},

	'Verify BBC homepage title' : function(browser) {
		browser.url(browser.globals.url);
		search.navigate().verifyHomePageTitle(browser);
	},

  'Verify search page title' : function(browser) {
    search.navigate().setSearchKeyword(browser, browser.globals.searchKeyword)
		.verifySearchPageTitle(browser, browser.globals.searchKeyword);
  },

  'Verify all filter selected by default on search result page' : function(browser) {
   search.navigate().verifyAllFilterSelected(browser);
  },

	'Verify 10 search results showing on page' : function(browser) {
		search.navigate().countSearchResults(browser, browser.globals.pgCount)
	},

	'Verify all articles has image source' : function(browser) {
		search.navigate().verifyImageSrc(browser, browser.globals.pgCount);
	},
	'Verify all article headers has link' : function(browser) {
		search.navigate().verifyHeadingLinks(browser, browser.globals.pgCount);
	},

	'Verify search keyword exists in article header or in summary' : function(browser) {
		search.navigate().verifySearchKeyword(browser, browser.globals.pgCount);
	},

	'Verify all articles has a tag' : function(browser) {
		search.navigate().verifyTagExist(browser, browser.globals.pgCount);
	},

	'Verify every articles has a section' : function(browser) {
		search.navigate().verifySectionExist(browser, browser.globals.pgCount);
	},

	'Verify Publish Date Exists for Articles' : +function(browser) {
		search.navigate().verifyArticleExist(browser, browser.globals.pgCount);
		//console.log("Article 31 days: " + browser.globals.Thirtyone);
		//console.log("Article < 31 days: " + browser.globals.Thirty);
	},

	after : function (browser) {
		 browser.end();
	},

};
