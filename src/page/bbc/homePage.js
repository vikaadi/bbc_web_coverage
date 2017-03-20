module.exports = {
	url : function(browser) {
	},

	elements : {
		//Page Objects
		search : {
			selector : 'input[name="q"]'
		},
  	// Search Button (Magnifier)
    searchButton : {
      selector: '//button[text()="Search"]',
      locateStrategy: 'xpath'
    },
  	// xpath for All Filter
    allFilter: {
      selector : '//p[text()="Filter"]/..//li//a[text()="All"]/..',
      locateStrategy: 'xpath'
    },
		// xpath for Programme Filter
    programmesFilter: {
      selector : '//p[text()="Filter"]/..//li//a[text()="Programmes"]/..',
      locateStrategy: 'xpath'
    },
		// xpath for News Filter
		newsFilter: {
      selector : '//p[text()="Filter"]/..//li//a[text()="News"]/..',
      locateStrategy: 'xpath'
    },
		// xpath for Sport Filter
    sportFilter: {
      selector : '//p[text()="Filter"]/..//li//a[text()="Sport"]/..',
      locateStrategy: 'xpath'
    },
		// xpath for About the BBC Filter
    aboutBBCFilter: {
      selector : '//p[text()="Filter"]/..//li//a[text()="About the BBC"]/..',
      locateStrategy: 'xpath'
    },
   //xpath for Show More Result button
    showMoreResultsBtn: {
      selector : '//a[text()="Show more results"]',
      locateStrategy: 'xpath'
    }
	},
	//Methods
	commands : [ {
				pause: function (time) {
			     this.api.pause(time);
			     return this;
			  },

			  useXpath: function () {
			     this.api.useXpath();
			     return this;
			   },

			  useCss: function () {
			     this.api.useCss();
			     return this;
			   },
        // Click on Programmes Filter
				clickProgrammesFilter : function() {
					 return this.waitForElementVisible('@programmesFilter', 10000)
					 .click('@programmesFilter')
  				 .waitForElementVisible('body', 10000);
				},

				// Click on News Filter
				clickNewsFilter : function() {
						return this.waitForElementVisible('@newsFilter', 10000)
						.click('@newsFilter')
						.waitForElementVisible('body', 10000);
				},
				// Click on Sport Filter
				clickSportFilter : function(){
						return this.waitForElementVisible('@sportFilter', 10000)
						.click('@sportFilter')
						.waitForElementVisible('body', 10000);
				},
				// Click on About the BBC Filter
				clickAboutBBCFilter : function() {
						return this.waitForElementVisible('@aboutBBCFilter', 10000)
						.click('@aboutBBCFilter')
						.waitForElementVisible('body', 10000);
				},
				// Click on the Show More Result, it will update the global pgCount value
				clickShowMoreResults : function(browser) {
						return this.waitForElementVisible('@showMoreResultsBtn', 10000)
						.click('@showMoreResultsBtn')
						.waitForElementVisible('@showMoreResultsBtn', 10000)
						.updatePgCount(browser)
				},
				// Overriding global pgCount value
				updatePgCount : function(browser){
						browser.globals.pgCount = browser.globals.pgCount + 10;
				},
				//Verification of Home Page Title
				verifyHomePageTitle : function(browser) {
						return browser.getTitle(function(title) {
						this.assert.equal(typeof title, 'string');
						this.assert.equal(title, 'BBC - Homepage');
						});
				},
				// Set search keyword **params** searchKeyword
				setSearchKeyword : function(browser, searchKeyword) {
						return this.waitForElementVisible('body', 1000)
						.waitForElementVisible('@search', 10000)
			      .setValue('@search',searchKeyword)
			    	.waitForElementVisible('@searchButton', 10000)
			      .click('@searchButton')
						.waitForElementVisible('@allFilter', 10000)
				},
				// Verification of Search Page Title **params** searchKeyword
				verifySearchPageTitle : function(browser, searchKeyword) {
						return browser.waitForElementVisible('body', 10000)
			  		.getTitle(function(title) {
						this.assert.equal(typeof title, 'string');
						this.assert.equal(title, 'BBC - Search results for '+searchKeyword+'');
						});
				},
				//Verify ALL filter is selected by default on search result page
    		verifyAllFilterSelected : function(){
      			return this.expect.element('@allFilter').to.have.attribute('class').which.contains('selected');
    		},
				//Verify filter is selected (underlined) **params** filter
				verifyFilterSelected : function(browser, filter){
      			return this.useXpath().expect.element('//p[text()="Filter"]/..//li//a[text()="'+filter+'"]/..').to.have.attribute('class').which.contains('selected');
    		},
				//Verify selected filter is showing in Tag
				verifyFilterTag : function(browser, filter, pgCount) {
						for (var i = 1; i <= pgCount; i += 1) {
							this.useXpath().pause(1000)
							.waitForElementVisible('//li[@data-result-number="'+ i +'"]//dt[text()="Tags"]/..//span[@class="signpost-site"]', 10000)
							.getText('//li[@data-result-number="'+ i +'"]//dt[text()="Tags"]/..//span[@class="signpost-site"]', function(result){
							browser.assert.equal(result.value, filter);
							 })
							 }
			 },
			// Count search results
    	countSearchResults : function(browser, pgCount){
		      return browser.elements('xpath','//li//dt[text()="Tags"]/..//span[@class="signpost-site"]', function (result) {
		    	browser.assert.equal(result.value.length, pgCount);
					});
    	},
			// Verification of Tag linked to Article
			verifyTagExist : function(browser, pgCount){
					for (var i = 1; i <= pgCount; i += 1) {
							browser.useXpath().getText('//li[@data-result-number="'+ i +'"]//span[@class="signpost-site"]', function (result) {
						  this.assert.ok(result.value);
							})
						}
			},
			// Verification of Section linked to Article
			verifySectionExist : function(browser, pgCount){
					for (var i = 1; i <= pgCount; i += 1) {
							browser.useXpath().getText('//li[@data-result-number="'+ i +'"]//span[@class="signpost-section"]', function (result) {
				  		this.assert.ok(result.value);
							})
						}
			},
			// Verify Article has a published date
		  verifyPublishDateExist : function(browser, pgCount){
					for (var i = 1; i <= pgCount; i += 1) {
							browser.useXpath().getAttribute('//ol/li[@data-result-number="'+ i +'"]/article/aside/dl/dd/time', "datetime", function (result) {
							this.assert.equal(result.status, 0);
							this.assert.ok(result.value);
							})
						}
		  },
      //In progress for Bonus Point 3, Calculate count of 'Business' tag Arcticles
		  verifyArticleExist : function(browser, pgCount){
						for (var i = 1; i <= pgCount; i += 1) {
								var date;
								browser.useXpath().getAttribute('//ol/li[@data-result-number="'+ i +'"]/article/aside/dl/dd/time', "datetime", function (result) {
								date1 = result.value; //Get Date from tag
								date = date1.substring(5,7);  //Get month
								}).getText('//li[@data-result-number="'+ i +'"]//dt[text()="Tags"]/..//span[@class="signpost-site"]', function(result){
								tag = result.value;  //Get Tag Name
								})
								.perform(function(){
			          date = date1.substring(5,7);
								if(tag == 'Programmes' && date == 01 || date == 03 || date == 05 || date == 07 || date == 08 || date == 10 || date == 12){
										browser.globals.oddMonth = browser.globals.oddMonth + 1;
									}
								else if (tag == 'Programmes' && date == 02 || date == 04 || date == 06 || date == 09 || date == 11){
										browser.globals.evenMonth = browser.globals.evenMonth + 1;
									}
									})
									}
			},
     //Verify all articles has image src in it
		 verifyImageSrc : function(browser, pgCount) {
					for (var i = 1; i <= pgCount; i += 1) {
						browser.useXpath().getAttribute('//li[@data-result-number="'+ i +'"]//picture//img', "src", function (result) {
				  	this.assert.ok(result.value);
						});
						}
		 },
		 //Verify article header has a href link
		 verifyHeadingLinks : function(browser, pgCount) {
					for (var i = 1; i <= pgCount; i += 1) {
						browser.useXpath().waitForElementVisible('//li[@data-result-number="'+ i +'"]//h1//a', 10000)
						.getAttribute('//li[@data-result-number="'+ i +'"]//h1//a', "href", function (result) {
						this.assert.equal(typeof result, "object");
					  this.assert.equal(result.status, 0);
					  this.assert.ok(result.value);
						});
						}
		 },
		 //Verify search keyword exist in either Article Header or Summary
		 verifySearchKeyword : function(browser, pgCount) {
					for (var i = 1; i <= pgCount; i += 1) {
						this.useXpath()
						.waitForElementVisible('//ol/li[@data-result-number="'+ i +'"]/article/div', 10000)
						.getText('//ol/li[@data-result-number="'+ i +'"]/article/div', function(result){
						var keyword = result.value;
						var result =true;
						if (keyword.match(/world/gi) !== null || keyword.match(/market/gi) !== null || keyword.match(/world's/gi) !== null || keyword.match(/markets/gi) !== null || keyword.match(/worlds/gi) !== null   ){
								result = true;
							}
					  else {
								result = false;
							};
						this.assert.equal(result,true)
						})
					}
		 },

		 verifyLinks : function(browser, pgCount) {
					for (var i = 1; i <= pgCount; i += 1) {
						browser.useXpath().waitForElementVisible('//li[@data-result-number="'+ i +'"]//h1//a', 10000)
						.moveToElement('//li[@data-result-number="'+ i +'"]//h1//a', 10, 10)
						.click('//li[@data-result-number="'+ i +'"]//h1//a')
						.useCss()
						.waitForElementVisible('body', 10000)
						.back();
						}
		 },
 }]
};
