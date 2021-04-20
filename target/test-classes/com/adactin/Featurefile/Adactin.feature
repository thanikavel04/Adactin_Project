Feature: Hotel booking in Adactin Application

@smoketest
Scenario Outline:Login Page
Given  user Launch the Application
When user Enter the "<username>" in username Textbox
And user Enter the "<password>" in Password Textbox
Then user Click on Login Button and It Navigates To Select Hotel Page

Examples:
|username|password|
|prasanna|vijay|
|hems|125|
|Thanikavk|5U273C|



@sanitytest
Scenario:

When user Select the Location
And user Select the Hotels
And user Select the RoomType
And user Select the NoOfRooms
And user Select the CheckInDate
And user Select the CheckOutDate
And user Select the childrenPerRoom
And user Select the AdultPerRoom
Then user Click on Search Button and It Navigates To Select Hotel



@sanitytest
Scenario:

When user Select the Hotel
Then user Click on Continue Button and It navigates to BookHotel Page

@sanitytest
Scenario:

When user Enter the FirstName on TextBox
And user Enter the LastName on TextBox
And user Enter the Address on TextBox
And user Enter the CreditNo on TextBox
And user Select the CreditCard Type
And user Select the ExpiryMonth
And user Select the ExpiryYear
And user Enter the CVV Number on TextBox
Then user click on BookNow Button and It Navigates To ConfirmationBooking

@sanitytest	
Scenario:

When user Click On The My Itinerary Button And It Navigates To Booked Itinerary Page











	
