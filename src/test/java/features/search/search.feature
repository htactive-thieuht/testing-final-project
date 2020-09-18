Feature: Search box

  Background:
    Given Open website http://127.0.0.1:8000

  Scenario Outline: Search product successfully
    When I type data as <nameProduct> on search box
    And  I click search button


    Examples:
     |nameProduct             |
     |Hoa tai thiên thu       |
     |Gấu corgi               |

  Scenario Outline: Search product unsuccessfully with valid data
    When I type data as <nameProduct> on search box
    And  I click search button


    Examples:
      |nameProduct             |
      |aaaaaaaaaaa aaa         |

  Scenario Outline: Search product unsuccessfully with blank data
    When I type data as <nameProduct> on search box
    And  I click search button
    
    Examples:
      |nameProduct             |
      |                        |
