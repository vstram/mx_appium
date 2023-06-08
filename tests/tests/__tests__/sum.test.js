const wdio = require('webdriverio');
const findElementWait = 15000;
const testTimeOut = 30000;

describe('Appium with Jest automation testing', () => {
    let driver;
    const closeAppAndReset = true;

    const caps = {
        "platformName":"Android",
        "appium:automationName":"UiAutomator2",
        "appium:appPackage":"myapp.appiumapp.developerapp",
        "appium:appActivity":"com.mendix.nativetemplate.MainActivity",
        "appium:noReset": !closeAppAndReset,
        'appium:shouldterminateApp': closeAppAndReset,
        "appium:ensureWebviewsHavePages": true,
        "appium:nativeWebScreenshot": true,
        "appium:newCommandTimeout": 3600,
        "appium:connectHardwareKeyboard":true
    }

    beforeAll(async () => {
      opts = {
        protocol: "http",
        hostname: "127.0.0.1",
        path: '/',
        port: 4723,
        capabilities: caps
      }
     
      driver = await wdio.remote(opts);
      driver.setTimeouts(findElementWait);

      // this click is performed on the popup that appears requesting permission
      // to use the camera
      if (closeAppAndReset) {
        let el0 = await driver.$("id=com.android.permissioncontroller:id/permission_allow_foreground_only_button");
        await el0.click();          
      }

    }, testTimeOut)

    afterAll(async () => {
        await driver.deleteSession();
    })

    test('The sum using the values from textEdits are correct', async () => {
        await driver.startRecordingScreen();

        let el1 = await driver.$("~appUrl");
        await el1.waitForDisplayed();
        await el1.setValue("http://192.168.0.42:8080/");
        await el1.hideKeyboard();

        let el2 = await driver.$('id=myapp.appiumapp.developerapp:id/launch_app_button');
        await el2.click();

        let el3 = await driver.$("~Value1");
        await el3.waitForDisplayed();
        await el3.click();
        await el3.clearValue();
        await el3.setValue("5");

        let el4 = await driver.$("~Value2");
        await el4.click();
        await el4.clearValue();
        await el4.setValue("2");

        let el5 = await driver.$("~Result, Result");
        await el5.click();

        let el6 = await driver.$("~Calculate, ");
        await el6.click();

        let el7 = await driver.$("~Result, Result");
        let text7 = await el7.getAttribute('text');
        let correctText7 = 'Result: 7';

        expect(text7).toBe(correctText7);

        //await driver.saveScreenshot('test.png');
        await driver.saveRecordingScreen('./test.mp4');

    }, testTimeOut);
})
    

