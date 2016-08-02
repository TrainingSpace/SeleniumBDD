$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myKidsBank.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "MyKidsBank feature file",
  "description": "This is the feature file that contain all the scenarios for MyKidsBank testing",
  "id": "mykidsbank-feature-file",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@Top"
    }
  ]
});
formatter.scenario({
  "line": 25,
  "name": "Test Deposit into one or more accounts",
  "description": "",
  "id": "mykidsbank-feature-file;test-deposit-into-one-or-more-accounts",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@DepositOneMore"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am in the web app",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I am logged in",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click to make a deposit into one or more accounts",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Fill the required data",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I validate the deposit",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Click on submit",
  "keyword": "And "
});
formatter.match({
  "location": "myKidsBankSteps.shouldNavigateToMyKidsBank()"
});
formatter.result({
  "duration": 2905736268,
  "status": "passed"
});
formatter.match({
  "location": "myKidsBankSteps.shouldLogin()"
});
formatter.result({
  "duration": 565991690,
  "status": "passed"
});
formatter.match({
  "location": "myKidsBankSteps.shouldClickMakeDepositIntoOneOrMore()"
});
formatter.result({
  "duration": 28101576,
  "status": "passed"
});
formatter.match({
  "location": "myKidsBankSteps.shouldFillDepositData()"
});
formatter.result({
  "duration": 312356790,
  "status": "passed"
});
formatter.match({
  "location": "myKidsBankSteps.shouldClickSubmit()"
});
formatter.result({
  "duration": 13695399,
  "status": "passed"
});
formatter.match({
  "location": "myKidsBankSteps.shouldValidateDeposit()"
});
formatter.result({
  "duration": 21986,
  "status": "passed"
});
formatter.match({
  "location": "myKidsBankSteps.shouldClickSubmit()"
});
formatter.result({
  "duration": 111692817,
  "error_message": "org.openqa.selenium.WebDriverException: submit_form is undefined\nCommand duration or timeout: 108 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Juliano\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d46.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 1c3b5672-4257-4a71-8068-5a9299b0886c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:577)\r\n\tat com.cucumber.SeleniumBDD.myKidsBankSteps.shouldClickSubmit(myKidsBankSteps.java:49)\r\n\tat ✽.And Click on submit(myKidsBank.feature:32)\r\nCaused by: org.openqa.selenium.WebDriverException: submit_form is undefined\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Juliano\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.submit_checkboxes_update(http://www.mykidsbank.org/:409)\r\n\tat \u003canonymous class\u003e.anonymous(http://www.mykidsbank.org/ line 69 \u003e Function:1)\r\n\tat \u003canonymous class\u003e.handleEvaluateEvent(http://www.mykidsbank.org/:69)\r\n",
  "status": "failed"
});
});