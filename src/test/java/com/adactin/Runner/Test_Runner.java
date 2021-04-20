package com.adactin.Runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.helper.FileReaderManager;
import com.baseclass.create.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//com//adactin//Featurefile", glue = "com.adactin.stepDefinition", 
monochrome = true,
tags=("@smoketest, @sanitytest"),
strict = true,dryRun = false,
plugin = {"html:Report/HTML_report"
		,"pretty","json:Reports/jsonreport.json",
		"com.cucumber.listener.ExtentCucumberFormatter:Report/Extended_Report.html"}
		)

public class Test_Runner {

	public static WebDriver driver;

	@BeforeClass
	public static void set_Up() throws Throwable {

		String browser = FileReaderManager.getInstance().getInstanceCR().getbrowser();
		driver = BaseClass.getbrowser(browser);

	}

	@AfterClass
	public static void tear_Down() {

		BaseClass.close();

	}

}
