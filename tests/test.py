import unittest
import time

from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from appium.options.android import UiAutomator2Options

capabilities = dict(
    platformName='Android',
    automationName='uiautomator2',
    deviceName='Android',
    appPackage='myapp.appiumapp.developerapp',
    appActivity='com.mendix.nativetemplate.MainActivity',
    language='en',
    locale='US'
)

appium_server_url = 'http://localhost:4723'


class TestCalculator(unittest.TestCase):
    def setUp(self) -> None:
        self.driver = webdriver.Remote(
            appium_server_url, options=UiAutomator2Options().load_capabilities(capabilities))

    def tearDown(self) -> None:
        if self.driver:
            self.driver.quit()

    def test_sum(self) -> None:
        url_input_field = self.driver.find_element(
            by=AppiumBy.ID, value='myapp.appiumapp.developerapp:id/app_url_input_field')
        url_input_field.click()
        url_input_field.send_keys('http://192.168.0.71:8080/')
        self.driver.hide_keyboard()

        launch_app_button = self.driver.find_element(
            by=AppiumBy.ID, value='myapp.appiumapp.developerapp:id/launch_app_button')
        launch_app_button.click()

        time.sleep(8)

        value1_input_field = self.driver.find_element(
            by=AppiumBy.ACCESSIBILITY_ID, value="Value1")
        value1_input_field.click()
        value1_input_field.clear()
        value1_input_field.send_keys('2')

        value2_input_field = self.driver.find_element(
            by=AppiumBy.ACCESSIBILITY_ID, value='Value2')
        value2_input_field.click()
        value2_input_field.clear()
        value2_input_field.send_keys('3')

        calculate_button = self.driver.find_element(
            by=AppiumBy.ACCESSIBILITY_ID, value='Calculate, ')
        calculate_button.click()

        time.sleep(2)

        result_text = self.driver.find_element(
            by=AppiumBy.ACCESSIBILITY_ID, value="Result, Result")
        attribute_text = result_text.get_attribute(name='text')

        correct_text = 'Result: 5'
        self.assertEqual(attribute_text, correct_text)


if __name__ == '__main__':
    unittest.main()
