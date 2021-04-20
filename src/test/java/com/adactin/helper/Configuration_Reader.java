package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;

public class Configuration_Reader {
	public static Properties p;

	public Configuration_Reader() throws Throwable {

		File f = new File(
				"D:\\Users\\mgout\\eclipse-workspace\\Adactin_Project\\src\\test\\java\\com\\adactin\\properties\\configuration.properties");

		FileInputStream fis = new FileInputStream(f);

		p = new Properties();

		p.load(fis);

	}

	public String getbrowser() {

		String browser = p.getProperty("browser");

		return browser;

	}

	public String geturl() {

		String url = p.getProperty("url");

		return url;
	}

}
