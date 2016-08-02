#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)

#Sample Feature Definition Template
@Top
Feature: MyKidsBank feature file
	This is the feature file that contain all the scenarios for MyKidsBank testing

@DepositOneMore
Scenario: Test Deposit into one or more accounts
Given I am in the web app 
	And I am logged in
When I click to make a deposit into one or more accounts
	And Fill the required data
	And Click on submit
Then I validate the deposit
	And Click on submit