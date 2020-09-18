Feature: Register page

  Background:
    Given Open website http://127.0.0.1:8000

  Scenario Outline: Register successfully
    When I click register button
    When I input information are user name as <username>, email name as <email>, address as <address>,phone number as <phonenumber>,password as <password>, confirm password as <confirmpassword>
    And  I click submit register
#    Then I verify register successfully
#    And  I verify login successfully with username as <firstname> password as <password>
#    When I scroll to management tab
#    And  I click Login Account tab
#    And I log out

    Examples:
      | username         | email                    |address  |phonenumber   |password  | confirmpassword |
      | ha123            | hattt@htactive.com       |Đà Nẵng  |1231236548    |123456    | 123456          |
      | thieuthiho       | thieuthiho99@gmail.com   |Đà Nẵng  |0362223761    |123456    | 123456          |

  Scenario Outline: Register unsuccessfully with phonnumber already exit
    When I click register button
    When I input information are user name as <username>, email name as <email>, address as <address>,phone number as <phonenumber>,password as <password>, confirm password as <confirmpassword>
    And  I click submit register

    Examples:
      | username         | email                    |address  |phonenumber   |password  | confirmpassword |
      | ha123            | monght@htactive.com      |Đà Nẵng  |123156948     |123456    | 123456          |

  Scenario Outline: Register unsuccessfully with blank field username
    When I click register button
    When I input information are user name as <username>, email name as <email>, address as <address>,phone number as <phonenumber>,password as <password>, confirm password as <confirmpassword>
    And  I click submit register

    Examples:
      | username | email                |address |phonenumber|password | confirmpassword|
      |          |  vinhnt@htactive.com |Đà Nẵng |123156948  |123456   | 123456         |

  Scenario Outline: Register unsuccessfully with account already exit
    When I click register button
    When I input information are user name as <username>, email name as <email>, address as <address>,phone number as <phonenumber>,password as <password>, confirm password as <confirmpassword>
    And  I click submit register

    Examples:
      | username                | email                |address |phonenumber|password | confirmpassword|
      | thieuht@htactive.com    | thieuht@htactive.com |Đà Nẵng |123156948  |123456   | 123456         |


