$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel booking in Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter the \"\u003cusername\u003e\" in username Textbox",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter the \"\u003cpassword\u003e\" in Password Textbox",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click on Login Button and It Navigates To Select Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;login-page;;1"
    },
    {
      "cells": [
        "prasanna",
        "vijay"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;login-page;;2"
    },
    {
      "cells": [
        "hems",
        "125"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;login-page;;3"
    },
    {
      "cells": [
        "Thanikavk",
        "5U273C"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;login-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter the \"prasanna\" in username Textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter the \"vijay\" in Password Textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click on Login Button and It Navigates To Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_the_Application()"
});
formatter.result({
  "duration": 1801435600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prasanna",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_the_in_username_Textbox(String)"
});
formatter.result({
  "duration": 231094300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vijay",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_the_in_Password_Textbox(String)"
});
formatter.result({
  "duration": 119875700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_on_Login_Button_and_It_Navigates_To_Select_Hotel_Page()"
});
formatter.result({
  "duration": 785680700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter the \"hems\" in username Textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter the \"125\" in Password Textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click on Login Button and It Navigates To Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_the_Application()"
});
formatter.result({
  "duration": 442703100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hems",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_the_in_username_Textbox(String)"
});
formatter.result({
  "duration": 183218100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "125",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_the_in_Password_Textbox(String)"
});
formatter.result({
  "duration": 137221300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_on_Login_Button_and_It_Navigates_To_Select_Hotel_Page()"
});
formatter.result({
  "duration": 624735000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter the \"Thanikavk\" in username Textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter the \"5U273C\" in Password Textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click on Login Button and It Navigates To Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_the_Application()"
});
formatter.result({
  "duration": 558843400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thanikavk",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_the_in_username_Textbox(String)"
});
formatter.result({
  "duration": 156062900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5U273C",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_the_in_Password_Textbox(String)"
});
formatter.result({
  "duration": 129052200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_on_Login_Button_and_It_Navigates_To_Select_Hotel_Page()"
});
formatter.result({
  "duration": 2239862100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user Select the Location",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user Select the Hotels",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Select the RoomType",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Select the NoOfRooms",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Select the CheckInDate",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Select the CheckOutDate",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Select the childrenPerRoom",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Select the AdultPerRoom",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Click on Search Button and It Navigates To Select Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_the_Location()"
});
formatter.result({
  "duration": 231737700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_the_Hotels()"
});
formatter.result({
  "duration": 225227000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_the_RoomType()"
});
formatter.result({
  "duration": 218439600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_the_NoOfRooms()"
});
formatter.result({
  "duration": 213247800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_the_CheckInDate()"
});
formatter.result({
  "duration": 116614400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_the_CheckOutDate()"
});
formatter.result({
  "duration": 111230600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_the_childrenPerRoom()"
});
formatter.result({
  "duration": 200932500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_the_AdultPerRoom()"
});
formatter.result({
  "duration": 179269200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_on_Search_Button_and_It_Navigates_To_Select_Hotel()"
});
formatter.result({
  "duration": 1138768700,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "user Select the Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user Click on Continue Button and It navigates to BookHotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_the_Hotel()"
});
formatter.result({
  "duration": 110039100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_on_Continue_Button_and_It_navigates_to_BookHotel_Page()"
});
formatter.result({
  "duration": 905283300,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "user Enter the FirstName on TextBox",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user Enter the LastName on TextBox",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user Enter the Address on TextBox",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user Enter the CreditNo on TextBox",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user Select the CreditCard Type",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user Select the ExpiryMonth",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user Select the ExpiryYear",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user Enter the CVV Number on TextBox",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user click on BookNow Button and It Navigates To ConfirmationBooking",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Enter_the_FirstName_on_TextBox()"
});
formatter.result({
  "duration": 194149000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_the_LastName_on_TextBox()"
});
formatter.result({
  "duration": 114697300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_the_Address_on_TextBox()"
});
formatter.result({
  "duration": 251703400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_the_CreditNo_on_TextBox()"
});
formatter.result({
  "duration": 142844600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_the_CreditCard_Type()"
});
formatter.result({
  "duration": 175666600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_the_ExpiryMonth()"
});
formatter.result({
  "duration": 168800700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_the_ExpiryYear()"
});
formatter.result({
  "duration": 221310800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_the_CVV_Number_on_TextBox()"
});
formatter.result({
  "duration": 111058700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_click_on_BookNow_Button_and_It_Navigates_To_ConfirmationBooking()"
});
formatter.result({
  "duration": 5088666000,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "user Click On The My Itinerary Button And It Navigates To Booked Itinerary Page",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_My_Itinerary_Button_And_It_Navigates_To_Booked_Itinerary_Page()"
});
formatter.result({
  "duration": 6370982800,
  "status": "passed"
});
});