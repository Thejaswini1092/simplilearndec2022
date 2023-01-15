$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/FeatureFiles/login.feature");
formatter.feature({
  "name": "Login Module",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that login is working with correct credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@login"
    },
    {
      "name": "@positive"
    },
    {
      "name": "@critical"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on login/register page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepsDefinations.openLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter the \"simplilearnaug2022\" in username field and \"simplilearnaug2022\" in password file and clicks login button",
  "keyword": "When "
});
formatter.match({
  "location": "loginStepsDefinations.login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should be successful and user is on profile page with profile name as \"simplilearnaug2022\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepsDefinations.verifyLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/FeatureFiles/profile.feature");
formatter.feature({
  "name": "Profile Module",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Login and go to profile page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on login/register page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepsDefinations.openLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter the \"simplilearnaug2022\" in username field and \"simplilearnaug2022\" in password file and clicks login button",
  "keyword": "When "
});
formatter.match({
  "location": "loginStepsDefinations.login(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should be successful and user is on profile page with profile name as \"simplilearnaug2022\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepsDefinations.verifyLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify logout functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@logout"
    },
    {
      "name": "@positive"
    },
    {
      "name": "@critical"
    }
  ]
});
formatter.step({
  "name": "The user clicks on signout link",
  "keyword": "When "
});
formatter.match({
  "location": "loginStepsDefinations.signOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should be signed out and redirected to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepsDefinations.verifySignOut()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/FeatureFiles/register.feature");
formatter.feature({
  "name": "Registration Module",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify registration functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@register"
    },
    {
      "name": "@positive"
    },
    {
      "name": "@critical"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on login/register page",
  "keyword": "Given "
});
formatter.match({
  "location": "loginStepsDefinations.openLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fills registration form with following information",
  "rows": [
    {
      "cells": [
        "username",
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "simplilearndec2022",
        "simplilearndec2022@yopmail.com",
        "Simplilearndec@2022"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "loginStepsDefinations.fillRegisterationForm(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on register button",
  "keyword": "And "
});
formatter.match({
  "location": "loginStepsDefinations.submitForm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user registration should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepsDefinations.verifyRegistration()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});