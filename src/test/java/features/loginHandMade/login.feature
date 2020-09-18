Feature: Customer login
  In order to user can log in, I want to see my profile so I can log in easily

  Background:
    Given Open website http://127.0.0.1:8000

  Scenario Outline: Login Account successfully
    When I click on Login Customer button to login
    When I type email name as <email>, password as <password>
    And I click submit login button
    And I click log out

    Examples:
      | email                 | password         |
      | thieuht@htactive.com  |   123123123      |
      | mong.hopn@gmail.com   |   1234mong       |

  Scenario Outline:  Login Account unsuccessfully with blank data
    When I click on Login Customer button to login
    When I type email name as <email>, password as <password>
    And I click submit login button
    Examples:
      |email    | password      |
      |         |               |

  Scenario Outline:  Login Account unsuccessfully with blank password
    When I click on Login Customer button to login
    When I type email name as <email>, password as <password>
    And I click submit login button
    Examples:
      |email    | password      |
      |admin    |               |


  Scenario Outline:  Login Account unsuccessfully with account not register
    When I click on Login Customer button to login
    When I type email name as <email>, password as <password>
    And I click submit login button
    Examples:
      |email                                         | password                   |
      |thieu.ho@student.passerellesnumeriques.org    |   thieuho123456            |