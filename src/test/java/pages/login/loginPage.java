package pages.login;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;


public class loginPage {
    @FindBy(xpath = "//*[@id=\"login-button\"]")
    WebElement btnOpenForm;
    @FindBy(xpath = "/html/body/div[1]//form/div[1]/input[1]")
    WebElement email;
    @FindBy(xpath = "//div[1]/div/div/div/form/div[1]/input[2]")
    WebElement password;
    @FindBy(xpath = "//*[@id=\"ajaxLogin\"]")
    WebElement btnSubmit;
    @FindBy(xpath = "//div[1]/div[2]/div/div[2]/a")
    WebElement btnLogout;
    @FindBy(xpath = "//*[@id=\"ajaxLogin\"]")
    WebElement success;

    public void setBtnOpenForm (){
        btnOpenForm.click();
    }
    public void setEmailPassword(String email, String password){
        this.email.clear();
        if (!email.equals("null")) {
            this.email.sendKeys(email);
        }
        this.password.clear();
        if (!password.equals("null")) {
            this.password.sendKeys(password);
        }
    }
    public void setBtnSubmit(){
        btnSubmit.click();
    }
    public void setBtnLogout(){
        btnLogout.click();
    }
    
    public void verifysuccessfully(String text){
        String tx = success.getText();
        Assert.assertEquals(text, tx);
    }
}

