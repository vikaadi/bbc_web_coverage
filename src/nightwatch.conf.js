var seleniumServer = require('selenium-server');
var phantomjs = require('phantomjs-prebuilt')

module.exports = (function (settings) {
	settings.selenium.server_path=seleniumServer.path;
  //Setting chromedriver path at runtime to run on different architectures
  if (process.platform === "darwin") {
    settings.selenium.cli_args["webdriver.chrome.driver"] = "./bin/drivers/chromedriver";
  }
  else if (process.platform === "win32" || process.platform === "win64") {
    settings.selenium.cli_args["webdriver.chrome.driver"] = "./bin/drivers/chromedriver.exe";
  }

  return settings;

})(require('./nightwatch.json'));
