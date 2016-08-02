package com.cucumber.SeleniumBDD;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class myKidsBankSteps {

	WebDriver driver;


	@Given("^I am in the web app$")
	public void shouldNavigateToMyKidsBank() throws Throwable {
		driver = new FirefoxDriver();
		driver.navigate().to("http://www.mykidsbank.org");
	}

	@And("^I am logged in$")
	public void shouldLogin() throws Throwable {
		driver.findElement(By.name("bank_id")).sendKeys("25967");
		driver.findElement(By.name("username")).sendKeys("banker");
		driver.findElement(By.name("password")).sendKeys("training");
		driver.findElement(By.className("login_submit_button_class")).click();
	}

	@When("^I click to make a deposit into one or more accounts$")
	public void shouldClickMakeDepositIntoOneOrMore() throws Throwable {
		WebElement dummyElement = (WebElement) ((JavascriptExecutor)driver).executeScript("document.new_group_transaction_form.is_deposit.value='1'; document.new_group_transaction_form.submit();");
		dummyElement = null;
	}
	
	@And("^Fill the required data$")
	public void shouldFillDepositData() throws Throwable {
		driver.findElement(By.name("desc")).sendKeys("Ten thousand dollars cash");
		driver.findElement(By.name("amount")).clear();
		driver.findElement(By.name("amount")).sendKeys("10000.00");
		driver.findElement(By.id("a0")).click();
	}

	@And("^Click on submit$")
	public void shouldClickSubmit() throws Throwable {
		WebElement dummyElement = (WebElement) ((JavascriptExecutor)driver).executeScript("submit_checkboxes_update('accounts_group_transaction_form'); if (document.accounts_group_transaction_form.onsubmit()) document.accounts_group_transaction_form.submit();");
		dummyElement = null;
	}
	
	@Then("^I validate the deposit$")
	public void shouldValidateDeposit() throws Throwable {
//		driver.findElement(By.className("login_submit_button_class")).click();
	}
	
	
}
