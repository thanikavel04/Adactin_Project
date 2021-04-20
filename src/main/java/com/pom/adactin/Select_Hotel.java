package com.pom.adactin;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Select_Hotel {
	
	public WebDriver driver;
	
	@FindBy(id="radiobutton_0")
	private WebElement click_Radio;
	
	@FindBy(id="continue")
	private WebElement Continue_btn;

	public Select_Hotel(WebDriver driver2) {

		this.driver=driver2;
		PageFactory.initElements(driver, this);
			
		}

	public WebElement getClick_Radio() {
		return click_Radio;
	}

	public WebElement getContinue_btn() {
		return Continue_btn;
	}

}
