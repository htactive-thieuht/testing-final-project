package tests.searchTest;
import cucumber.api.java.en.Given;
import pages.login.loginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import runner.TestRunner;
import tests.ProviderTest;

public class searchTest  extends  ProviderTest{

    @When("I type data as (.*) on search box")
    public  void setValue(String value) throws InterruptedException{
        Thread.sleep(7000);
        getsearchPage().setInputSearch(value);
        Thread.sleep(6000);
    }
    @And("I click search button")
    public void clickButton() throws InterruptedException{
        getsearchPage().setButtonSearch();
        Thread.sleep(6000);
    }
}
