package com.adactin.stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Sleeper;


import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.baseclass.create.BaseClass;
import com.pom.adactin.Search_hotel;
import com.pom.adactin.Select_Hotel;
import com.pom.adactin.login_page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition extends BaseClass {
	
	


	public static PageObjectManager pom = new PageObjectManager(driver);


	@Given("^user Launch the Application$")
	public void user_Launch_the_Application() throws Throwable {

		String url = FileReaderManager.getInstance().getInstanceCR().geturl();

		getUrl(url);

	}

	@When("^user Enter the \"([^\"]*)\" in username Textbox$")
	public void user_Enter_the_in_username_Textbox(String name) throws Throwable {

		inputvaluemethod(pom.getInstanceLogin().getUsername(), name);
		
	}

	@When("^user Enter the \"([^\"]*)\" in Password Textbox$")
	public void user_Enter_the_in_Password_Textbox(String pwd) throws Throwable {

		inputvaluemethod(pom.getInstanceLogin().getPwd(), pwd );
	
	}


	@Then("^user Click on Login Button and It Navigates To Select Hotel Page$")
	public void user_Click_on_Login_Button_and_It_Navigates_To_Select_Hotel_Page() throws Throwable {

		clickonelement(pom.getInstanceLogin().getLogin_btn());
	}

	@When("^user Select the Location$")
	public void user_Select_the_Location() throws Throwable {

		dropdownselect(pom.getInstanceSearch().getLocation(), "byVisibleText", "London");
	}

	@When("^user Select the Hotels$")
	public void user_Select_the_Hotels() throws Throwable {

		dropdownselect(pom.getInstanceSearch().getHotel(), "byIndex", "2");

	}

	@When("^user Select the RoomType$")
	public void user_Select_the_RoomType() throws Throwable {
		dropdownselect(pom.getInstanceSearch().getRoom_Type(), "byIndex", "3");
	}

	@When("^user Select the NoOfRooms$")
	public void user_Select_the_NoOfRooms() throws Throwable {
		dropdownselect(pom.getInstanceSearch().getRoom_no(), "byIndex", "4");
	}

	@When("^user Select the CheckInDate$")
	public void user_Select_the_CheckInDate() throws Throwable {
		inputvaluemethod(pom.getInstanceSearch().getCheck_In(), "18/04/2021");
	}

	@When("^user Select the CheckOutDate$")
	public void user_Select_the_CheckOutDate() throws Throwable {

		inputvaluemethod(pom.getInstanceSearch().getCheck_Out(), "17/04/2021");
	}

	@When("^user Select the childrenPerRoom$")
	public void user_Select_the_childrenPerRoom() throws Throwable {

		dropdownselect(pom.getInstanceSearch().getChild_Room(), "byIndex", "3");
	}

	@When("^user Select the AdultPerRoom$")
	public void user_Select_the_AdultPerRoom() throws Throwable {

		dropdownselect(pom.getInstanceSearch().getAdult_Room(), "byIndex", "2");
	}

	@Then("^user Click on Search Button and It Navigates To Select Hotel$")
	public void user_Click_on_Search_Button_and_It_Navigates_To_Select_Hotel() throws Throwable {

		clickonelement(pom.getInstanceSearch().getSearch_btn());
	}

	@When("^user Select the Hotel$")
	public void user_Select_the_Hotel() throws Throwable {

		clickonelement(pom.getInstanceSelect().getClick_Radio());
	}

	@Then("^user Click on Continue Button and It navigates to BookHotel Page$")
	public void user_Click_on_Continue_Button_and_It_navigates_to_BookHotel_Page() throws Throwable {

		clickonelement(pom.getInstanceSelect().getContinue_btn());
	}

	@When("^user Enter the FirstName on TextBox$")
	public void user_Enter_the_FirstName_on_TextBox() throws Throwable {

		inputvaluemethod(pom.getInstanceHotel().getFname(), "thanika");
	}

	@When("^user Enter the LastName on TextBox$")
	public void user_Enter_the_LastName_on_TextBox() throws Throwable {

		inputvaluemethod(pom.getInstanceHotel().getLname(), "vel");
	}

	@When("^user Enter the Address on TextBox$")
	public void user_Enter_the_Address_on_TextBox() throws Throwable {

		inputvaluemethod(pom.getInstanceHotel().getAddress(), "NO:6,RAJIVGANDHI STREET,VENKATESHWARA Nagar, AMBATTUR");
	}

	@When("^user Enter the CreditNo on TextBox$")
	public void user_Enter_the_CreditNo_on_TextBox() throws Throwable {
		inputvaluemethod(pom.getInstanceHotel().getCredit_No(), "1452365247855896");
	}

	@When("^user Select the CreditCard Type$")
	public void user_Select_the_CreditCard_Type() throws Throwable {

		dropdownselect(pom.getInstanceHotel().getCard_Type(), "byIndex", "2");
	}

	@When("^user Select the ExpiryMonth$")
	public void user_Select_the_ExpiryMonth() throws Throwable {
		dropdownselect(pom.getInstanceHotel().getExp_Month(), "byIndex", "2");
	}

	@When("^user Select the ExpiryYear$")
	public void user_Select_the_ExpiryYear() throws Throwable {
		dropdownselect(pom.getInstanceHotel().getExp_Yr(), "byIndex", "2");
	}

	@When("^user Enter the CVV Number on TextBox$")
	public void user_Enter_the_CVV_Number_on_TextBox() throws Throwable {
		inputvaluemethod(pom.getInstanceHotel().getCcv_No(), "125");
	}

	@Then("^user click on BookNow Button and It Navigates To ConfirmationBooking$")
	public void user_click_on_BookNow_Button_and_It_Navigates_To_ConfirmationBooking() throws Throwable {

		clickonelement(pom.getInstanceHotel().getBook_Now());
		
		sleep(5000);
	}


	@When("^user Click On The My Itinerary Button And It Navigates To Booked Itinerary Page$")
	public void user_Click_On_The_My_Itinerary_Button_And_It_Navigates_To_Booked_Itinerary_Page() throws Throwable {

		sleep(5000);
	clickonelement(pom.getInstanceConfirm().getItinerary_btn());
	}

	}
