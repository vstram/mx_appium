# This sample code uses the Appium python client v2
# pip install Appium-Python-Client
# Then you can paste this into a file and simply run with Python

from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy

# For W3C actions
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.actions import interaction
from selenium.webdriver.common.actions.action_builder import ActionBuilder
from selenium.webdriver.common.actions.pointer_input import PointerInput

caps = {}
caps["platformName"] = "Android"
caps["appium:automationName"] = "UiAutomator2"
caps["appium:appPackage"] = "myapp.appiumapp.developerapp"
caps["appium:appActivity"] = "com.mendix.nativetemplate.MainActivity"
caps["appium:noReset"] = True
caps["appium:ensureWebviewsHavePages"] = True
caps["appium:nativeWebScreenshot"] = True
caps["appium:newCommandTimeout"] = 3600
caps["appium:connectHardwareKeyboard"] = True

driver = webdriver.Remote("http://127.0.0.1:4723", caps)
driver.implicitly_wait(5000)

el1 = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="appUrl")
el1.send_keys("http://192.168.0.71:8080/")
el2 = driver.find_element(
    by=AppiumBy.ID, value="myapp.appiumapp.developerapp:id/launch_app_button")
el2.click()
el3 = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="Value1")
el3.click()
el3.clear()
el3.send_keys("5")
el4 = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="Value2")
el4.click()
el4.clear()
el4.send_keys("2")
el5 = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="Result, Result")
el5.click()
el6 = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="Calculate, ")
el6.click()

driver.quit()
