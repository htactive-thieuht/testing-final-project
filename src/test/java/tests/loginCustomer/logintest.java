package tests.loginCustomer;
import cucumber.api.java.en.Given;
import pages.login.loginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import runner.TestRunner;
import tests.ProviderTest;

public class logintest extends ProviderTest{

    @When("I click on Login Customer button to login")
    public void clickLog() throws InterruptedException{
       getLoginPages().setBtnOpenForm();
       Thread.sleep(2000);
    }
  @When("I type email name as (.*), password as (.*)")
    public  void setEmailPassword(String email, String password) throws InterruptedException{
        Thread.sleep(4000);
        getLoginPages().setEmailPassword(email,password);
        Thread.sleep(4000);
  }
  @And("I click submit login button")
    public void clickButton() throws InterruptedException{
        getLoginPages().setBtnSubmit();
        Thread.sleep(4000);
  }

    @And ("I click log out")
    public void clickButtonLogout() throws InterruptedException{
        getLoginPages().setBtnLogout();
        Thread.sleep(4000);
    }

//  @Then("I verify that user login successfully")
//    public void VerifySuccess() throws InterruptedException{
//        getLoginPages().verifysuccessfully("Đăng xuất");
//        Thread.sleep(3000);
//  }
}
