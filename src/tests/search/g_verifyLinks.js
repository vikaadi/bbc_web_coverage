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

  'Verify every header link is working' : function(browser) {
   search.navigate().verifyLinks(browser,browser.globals.pgCount);
  },

	after : function (browser) {
		 browser.end();
	},

};
