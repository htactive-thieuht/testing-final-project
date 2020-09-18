package tests;

import org.openqa.selenium.support.PageFactory;
import pages.*;
import pages.login.loginPage;
import pages.login.RegisterPage;
import pages.searchPage.SearchPage;

import runner.TestRunner;

public class ProviderTest {

    private static CommonPage commonPage;

    private static loginPage loginPages;
    private static SearchPage searchPage;
    private  static RegisterPage registerPage;


    public static RegisterPage getRegisterPage(){
        registerPage = PageFactory.initElements(TestRunner.driver, RegisterPage.class);
        return registerPage;
    }

    public static loginPage getLoginPages(){
        loginPages = PageFactory.initElements(TestRunner.driver, loginPage.class);
        return loginPages;
    }

    public static SearchPage getsearchPage(){
        searchPage = PageFactory.initElements(TestRunner.driver, SearchPage.class);
        return searchPage;
    }

    public static CommonPage getCommonPage() {
//        if (transactionsPage == null) {
        commonPage = PageFactory.initElements(TestRunner.driver, CommonPage.class);
//        }
        return commonPage;
    }

}
