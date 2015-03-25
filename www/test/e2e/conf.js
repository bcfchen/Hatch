exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./**/*.spec.js'],
  capabilities: {
      'browserName': 'firefox'
  },
  suites: {
    full: './**/*.spec.js',
    idea: './**/idea.spec.js',
    homeNew: './**/home.new.spec.js',
    homeTrending: './**/home.trending.spec.js'    
  },

  onPrepare: function(){
    browser.driver.manage().window().setPosition(0,0);
    browser.driver.manage().window().setSize(1280, 720);
  }
}
