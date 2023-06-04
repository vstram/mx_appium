const {remote} = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:appPackage': 'myapp.appiumapp.developerapp',
  'appium:appActivity': 'com.mendix.nativetemplate.MainActivity',
};

const wdOpts = {
  host: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};


/* for using Make it Native 9 instead of Custom Developer App
{
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:appPackage": "com.mendix.developerapp.mx9",
  "appium:appActivity": "com.mendix.developerapp.MainActivity",
  "appium:noReset": true
}
*/

// comando util para encontrar a activity do app sendo executado
// adb shell dumpsys window windows | findStr 'imeLayeringTarget'

// $widgetId = "p1.NativeMobile.Home_Native.Value1"
// $widgetId = "p1.NativeMobile.Home_Native.Value2"
// $widgetId = "p1.NativeMobile.Home_Native.Calculate"
// $widgetId = "p1.NativeMobile.Home_Native.Result"

// myapp.appiumapp.developerapp:id/launch_app_button

// @id/app_url_input_field
//http://192.168.0.71:8080
// https://github.com/appium/appium-inspector/releases

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    const hostTextEdit = await driver.findElement("id", "myapp.appiumapp.developerapp:id/app_url_input_field");
    //console.log('>>' + hostTextEdit);
    // console.log(Object.getOwnPropertyNames(hostTextEdit).filter(function (p) {
    //   return typeof Math[p] === 'function';
    // }));
    // console.log(Object.getOwnPropertyNames(hostTextEdit));

    hostTextEdit.click();
    hostTextEdit.setValue("http://192.168.0.71:8080/");

  } finally {
    await driver.pause(1000);
    //await driver.deleteSession();
  }
}

runTest().catch(console.error);