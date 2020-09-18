$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/loginHandMade/login.feature");
formatter.feature({
  "line": 1,
  "name": "Customer login",
  "description": "In order to user can log in, I want to see my profile so I can log in easily",
  "id": "customer-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login Account successfully",
  "description": "",
  "id": "customer-login;login-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I click on Login Customer button to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I type email name as \u003cemail\u003e, password as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click submit login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click log out",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "customer-login;login-account-successfully;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 14,
      "id": "customer-login;login-account-successfully;;1"
    },
    {
      "cells": [
        "thieuht@htactive.com",
        "123123123"
      ],
      "line": 15,
      "id": "customer-login;login-account-successfully;;2"
    },
    {
      "cells": [
        "mong.hopn@gmail.com",
        "1234mong"
      ],
      "line": 16,
      "id": "customer-login;login-account-successfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open website http://127.0.0.1:8000",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://127.0.0.1:8000",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 4391735200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login Account successfully",
  "description": "",
  "id": "customer-login;login-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I click on Login Customer button to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I type email name as thieuht@htactive.com, password as 123123123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click submit login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click log out",
  "keyword": "And "
});
formatter.match({
  "location": "logintest.clickLog()"
});
formatter.result({
  "duration": 2572834500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thieuht@htactive.com",
      "offset": 21
    },
    {
      "val": "123123123",
      "offset": 55
    }
  ],
  "location": "logintest.setEmailPassword(String,String)"
});
formatter.result({
  "duration": 8114856100,
  "status": "passed"
});
formatter.match({
  "location": "logintest.clickButton()"
});
formatter.result({
  "duration": 5051326800,
  "status": "passed"
});
formatter.match({
  "location": "logintest.clickButtonLogout()"
});
formatter.result({
  "duration": 4892937400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open website http://127.0.0.1:8000",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://127.0.0.1:8000",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3586831100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login Account successfully",
  "description": "",
  "id": "customer-login;login-account-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I click on Login Customer button to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I type email name as mong.hopn@gmail.com, password as 1234mong",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click submit login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click log out",
  "keyword": "And "
});
formatter.match({
  "location": "logintest.clickLog()"
});
formatter.result({
  "duration": 2564392300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mong.hopn@gmail.com",
      "offset": 21
    },
    {
      "val": "1234mong",
      "offset": 54
    }
  ],
  "location": "logintest.setEmailPassword(String,String)"
});
formatter.result({
  "duration": 8117429900,
  "status": "passed"
});
formatter.match({
  "location": "logintest.clickButton()"
});
formatter.result({
  "duration": 5142283100,
  "status": "passed"
});
formatter.match({
  "location": "logintest.clickButtonLogout()"
});
formatter.result({
  "duration": 5144162100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Login Account unsuccessfully with blank data",
  "description": "",
  "id": "customer-login;login-account-unsuccessfully-with-blank-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I click on Login Customer button to login",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I type email name as \u003cemail\u003e, password as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click submit login button",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "customer-login;login-account-unsuccessfully-with-blank-data;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 23,
      "id": "customer-login;login-account-unsuccessfully-with-blank-data;;1"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 24,
      "id": "customer-login;login-account-unsuccessfully-with-blank-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open website http://127.0.0.1:8000",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://127.0.0.1:8000",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3594979500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login Account unsuccessfully with blank data",
  "description": "",
  "id": "customer-login;login-account-unsuccessfully-with-blank-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I click on Login Customer button to login",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I type email name as , password as ",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click submit login button",
  "keyword": "And "
});
formatter.match({
  "location": "logintest.clickLog()"
});
formatter.result({
  "duration": 2550181100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    },
    {
      "val": "",
      "offset": 35
    }
  ],
  "location": "logintest.setEmailPassword(String,String)"
});
formatter.result({
  "duration": 8084048000,
  "status": "passed"
});
formatter.match({
  "location": "logintest.clickButton()"
});
formatter.result({
  "duration": 4701559100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Login Account unsuccessfully with blank password",
  "description": "",
  "id": "customer-login;login-account-unsuccessfully-with-blank-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I click on Login Customer button to login",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I type email name as \u003cemail\u003e, password as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click submit login button",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "customer-login;login-account-unsuccessfully-with-blank-password;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 31,
      "id": "customer-login;login-account-unsuccessfully-with-blank-password;;1"
    },
    {
      "cells": [
        "admin",
        ""
      ],
      "line": 32,
      "id": "customer-login;login-account-unsuccessfully-with-blank-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open website http://127.0.0.1:8000",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://127.0.0.1:8000",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3771230300,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Login Account unsuccessfully with blank password",
  "description": "",
  "id": "customer-login;login-account-unsuccessfully-with-blank-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I click on Login Customer button to login",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I type email name as admin, password as ",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click submit login button",
  "keyword": "And "
});
formatter.match({
  "location": "logintest.clickLog()"
});
formatter.result({
  "duration": 2588269900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "logintest.setEmailPassword(String,String)"
});
formatter.result({
  "duration": 8098460500,
  "status": "passed"
});
formatter.match({
  "location": "logintest.clickButton()"
});
formatter.result({
  "duration": 4772130000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Login Account unsuccessfully with account not register",
  "description": "",
  "id": "customer-login;login-account-unsuccessfully-with-account-not-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I click on Login Customer button to login",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I type email name as \u003cemail\u003e, password as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click submit login button",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "customer-login;login-account-unsuccessfully-with-account-not-register;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 40,
      "id": "customer-login;login-account-unsuccessfully-with-account-not-register;;1"
    },
    {
      "cells": [
        "thieu.ho@student.passerellesnumeriques.org",
        "thieuho123456"
      ],
      "line": 41,
      "id": "customer-login;login-account-unsuccessfully-with-account-not-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open website http://127.0.0.1:8000",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://127.0.0.1:8000",
      "offset": 13
    }
  ],
  "location": "CommonTest.user_already_on_home_page(String)"
});
formatter.result({
  "duration": 3672448200,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Login Account unsuccessfully with account not register",
  "description": "",
  "id": "customer-login;login-account-unsuccessfully-with-account-not-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I click on Login Customer button to login",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I type email name as thieu.ho@student.passerellesnumeriques.org, password as thieuho123456",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I click submit login button",
  "keyword": "And "
});
formatter.match({
  "location": "logintest.clickLog()"
});
formatter.result({
  "duration": 2589897700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thieu.ho@student.passerellesnumeriques.org",
      "offset": 21
    },
    {
      "val": "thieuho123456",
      "offset": 77
    }
  ],
  "location": "logintest.setEmailPassword(String,String)"
});
formatter.result({
  "duration": 8099233700,
  "status": "passed"
});
formatter.match({
  "location": "logintest.clickButton()"
});
formatter.result({
  "duration": 4759366000,
  "status": "passed"
});
});