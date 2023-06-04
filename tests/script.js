// Requires the webdriverio client library
// (npm install webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

const wdio = require('webdriverio');
async function main () {
  const caps = {"platformName":"Android","appium:automationName":"UiAutomator2","appium:appPackage":"myapp.appiumapp.developerapp","appium:appActivity":"com.mendix.nativetemplate.MainActivity","appium:noReset":true,"appium:ensureWebviewsHavePages":true,"appium:nativeWebScreenshot":true,"appium:newCommandTimeout":3600,"appium:connectHardwareKeyboard":true}
  const driver = await wdio.remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: caps
  });
//   let el1 = await driver.$("~appUrl");
//   await el1.setValue("http://192.168.0.71:8080/");
//   await el1.hideKeyboard();
  let el2 = await driver.$("myapp.appiumapp.developerapp:id/launch_app_button");
  await el2.click();
//   let el3 = await driver.$("~Value1");
//   await el3.click();
//   await el3.clearValue();
//   await el3.setValue("5");
//   let el4 = await driver.$("~Value2");
//   await el4.click();
//   await el4.clearValue();
//   await el4.setValue("2");
//   let el5 = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup");
//   await el5.click();
//   let el6 = await driver.$("~Calculate, ");
//   await el6.click();
//   await driver.deleteSession();
}

main().catch(console.log);