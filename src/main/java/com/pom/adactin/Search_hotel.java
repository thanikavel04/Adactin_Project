package com.pom.adactin;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Search_hotel {
	
	public WebDriver driver;
	
	@FindBy(id="location")
	private WebElement location;
	
	@FindBy(id="hotels")
	private WebElement hotel;
	
	@FindBy(id="room_type")
	private WebElement Room_Type;
	
	
	@FindBy(id="room_nos")
	private WebElement Room_no;
	
	@FindBy(id="datepick_in")
	private WebElement check_In;
	
	@FindBy(id="datepick_out")
	private WebElement check_Out;
	
	@FindBy(id="adult_room")
	private WebElement Adult_Room;
	
	@FindBy(id="child_room")
	private WebElement Child_Room;
	
	
	
	
	@FindBy(id="Submit")
	private WebElement search_btn;

	
	public Search_hotel(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver, this);
		
	}

	public WebElement getSearch_btn() {
		return search_btn;
	}

	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotel() {
		return hotel;
	}

	public WebElement getRoom_Type() {
		return Room_Type;
	}

	public WebElement getRoom_no() {
		return Room_no;
	}

	public WebElement getCheck_In() {
		return check_In;
	}

	public WebElement getCheck_Out() {
		return check_Out;
	}

	public WebElement getAdult_Room() {
		return Adult_Room;
	}

	public WebElement getChild_Room() {
		return Child_Room;
	}
	
	
	
	
}
