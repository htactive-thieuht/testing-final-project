package tests.loginCustomer;

import tests.ProviderTest;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterTest extends ProviderTest {
    @When("^I click register button$")
    public void register() throws InterruptedException {
        getRegisterPage().setBtnRegisterForm();
        Thread.sleep(3000);
    }

    @When("^I input information are user name as (.*), email name as (.*), address as (.*),phone number as (.*),password as (.*), confirm password as (.*)$")
    public void selectInformationUser(String username, String email, String address, String phonenumber, String password, String confirmpassword) throws InterruptedException {
        getRegisterPage().setInforUser(username, email, address, phonenumber, password, confirmpassword);
        Thread.sleep(5000);
    }

    @And("^I click submit register$")
    public void registerButton() throws InterruptedException {
        getRegisterPage().setBtnSubmitFormRegister();
        Thread.sleep(3000);
    }

//    @Then("^I verify register successfully$")
//    public void verifyRegisterSuccess() {
//        getRegisterPage().registerSuccess("Registration successful");
//    }
//
//    @Then("^I verify register unsuccessfully with invalid information$")
//    public void verifyRegisterUnSuccess() {
//        getRegisterPage().registerUnSuccess("Last name is required");
//    }
//
//    @Then("^I verify account already exit$")
//    public void verifyAccount() {
//        getRegisterPage().verifyAccountExit("Username \"lamtran\" is already taken");
//    }
}
