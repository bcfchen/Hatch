Hatch
=====================
Ideas sharing app based on Ionic Framework
## Getting Started
**Install Ionic**

If you don't have Ionic installed, instructions are available [here](http://ionicframework.com/getting-started/).

**Add your platform**

    $ ionic platform add ios

**Run the app on browser**

    $ ionic serve

**Run the app on device (or emulator)**

    $ ionic build ios
    $ ionic run ios

## Testing
**Setting up Protractor**

If you don't have Protractor setup yet, follow the instructions below:

1. Install protractor

    `npm install -g protractor`

2. Install/update webdriver


    `webdriver-manager update`

**Running Protractor tests**

1. Run webdriver

    `webdriver-manager start`

2. cd into the folder containing the Protractor config file, which is:

    `www/test/e2e/conf.js`

3. Run the following command to execute all tests

    `protractor conf.js`

4. Run individual tests suites with the following command

    `protractor conf.js --suite=<suite name>`
   
   Test suites are specified in conf.js

## Help

You can reach me via email at bcfchen@gmail.com
