package com.pom.adactin;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class login_page {
	
	public WebDriver driver;
	
	
	@FindBy(id="username")
	private WebElement username;
	
	@FindBy(id="password")
	private WebElement pwd;
	
	@FindBy(id="login")
	private WebElement login_btn;

	public login_page(WebDriver driver2) {

	this.driver=driver2;
	PageFactory.initElements(driver, this);
		
	}

	public WebElement getPwd() {
		return pwd;
	}

	public WebElement getLogin_btn() {
		return login_btn;
	}

	public WebElement getUsername() {
		return username;
	}

	}
	
	


