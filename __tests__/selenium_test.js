import { Builder, By, Key } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

export async function runScript() {

  const driver = new Builder()
    .forBrowser("chrome")
    // .setChromeOptions(options)
    .build();

  try {
    await driver.get("http://www.google.com");

    const searchBox = await driver.findElement(By.name("q"));
    await searchBox.sendKeys("webdriver", Key.ENTER);

    const title = await driver.getTitle();
    console.log(title);

    if (title === "webdriver - Google Search") {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  } finally {
    await driver.quit();
  }
}