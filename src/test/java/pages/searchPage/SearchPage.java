package pages.searchPage;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SearchPage {
    @FindBy(xpath = "//div[2]/div[3]/form/input")
    WebElement inputSearch;

    @FindBy(xpath = "//div[2]/div[3]/form/button")
    WebElement buttonSearch;


    public void setInputSearch(String value){
        this.inputSearch.clear();
        if (!inputSearch.equals("")) {
            this.inputSearch.sendKeys(value);
        }
    }
    public  void setButtonSearch(){
        buttonSearch.click();
    }

}
