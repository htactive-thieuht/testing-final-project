package pages.login;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

public class RegisterPage {

    @FindBy(xpath = "//header/div[1]/div[2]/div[2]/a")
    WebElement btnRegisterForm;

    @FindBy(xpath = "//*[@id=\"username\"]")
    WebElement username;

    @FindBy(xpath = "//*[@id=\"email\"]")
    WebElement email;

    @FindBy(xpath = "//*[@id=\"address\"]")
    WebElement address;

    @FindBy(xpath = "//*[@id=\"phone\"]")
    WebElement phonenumber;

    @FindBy(xpath = "//*[@id=\"password\"]")
    WebElement password;

    @FindBy(xpath = "//*[@id=\"repassword\"]")
    WebElement confirmpassword;

    @FindBy(xpath = "//*[@id=\"ajaxRegister\"]")
    WebElement btnSubmitFormRegister;


    public void setBtnRegisterForm() {
        btnRegisterForm.click();
    }

    public void setInforUser(String username, String email, String address, String phonenumber,  String password, String confirmpassword) {
        this.username.clear();
        if (!username.equals("null")) {
            this.username.sendKeys(username);
        }

        this.email.clear();
        if (!email.equals("null")) {
            this.email.sendKeys(email);
        }

        this.address.clear();
        if (!address.equals("null")) {
            this.address.sendKeys(address);
        }

        this.phonenumber.clear();
        if (!phonenumber.equals("null")) {
            this.phonenumber.sendKeys(phonenumber);
        }

        this.password.clear();
        if (!password.equals("null")) {
            this.password.sendKeys(password);
        }
        this.confirmpassword.clear();
        if (!confirmpassword.equals("null")) {
            this.confirmpassword.sendKeys(confirmpassword);
        }
    }

    public void setBtnSubmitFormRegister() {
        btnSubmitFormRegister.click();
    }
}
