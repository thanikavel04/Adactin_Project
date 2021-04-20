package com.adactin.helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.pom.adactin.Book_Hotel;
import com.pom.adactin.Booking_Confirm;
import com.pom.adactin.Search_hotel;
import com.pom.adactin.Select_Hotel;
import com.pom.adactin.login_page;

public class PageObjectManager {

	public PageObjectManager(WebDriver driver2) {

		this.driver = driver2;
		PageFactory.initElements(driver, this);

	}

	public static WebDriver driver;

	private login_page login;

	private Search_hotel search;

	private Select_Hotel select;
	
	private Book_Hotel hotel;
	
	private Booking_Confirm confirm;
	
	public login_page getInstanceLogin() {
		
		login= new login_page(driver);
		
		return login;
	}

	public Search_hotel getInstanceSearch() {

		search = new Search_hotel(driver);

		return search;

	}
	
	public Select_Hotel getInstanceSelect() {
		
		select= new Select_Hotel(driver);
		
		return select;
	}
	
	public Book_Hotel getInstanceHotel() {
		
		hotel=new Book_Hotel(driver);
		
		return hotel;
	}
	
	public Booking_Confirm getInstanceConfirm() {

		confirm = new Booking_Confirm(driver);
		return confirm;
	}


}