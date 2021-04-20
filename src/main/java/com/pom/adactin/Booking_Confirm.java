package com.pom.adactin;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Booking_Confirm {

	public WebDriver driver;
	
	@FindBy(name = "my_itinerary")
	private WebElement itinerary_btn;

	public Booking_Confirm(WebDriver driver2) {

	this.driver = driver2;
	PageFactory.initElements(driver, this);
	}

	public WebElement getItinerary_btn() {
		return itinerary_btn;
	}
	
}
