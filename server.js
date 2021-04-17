const express = require('express');
const app = express();

const ip = process.env.IP || '0.0.0.0';
const port = process.env.PORT || 8080;
//Catches requests made to localhost:3000/
	
const puppeteer = require("puppeteer");
const fs = require("fs");
const { PendingXHR } = require("pending-xhr-puppeteer");

(async function hello() {
  res.send('kam hua re bhaiya');
 const browser = await puppeteer.launch({
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
  ],
});
  const page = await browser.newPage();
  const pages = await browser.pages();
  await page.setViewport({ width: 1366, height: 768});
  const navigationPromise = page.waitForNavigation();
  if (pages.length > 1) {
      await pages[0].close();
  }
  await page._client.send("Emulation.clearDeviceMetricsOverride");

  // Reading Cookies
  const cookies = fs.readFileSync("/cookies.json", "utf8"); // we are reading from the cookies henceforth
  const deserializedCookies = JSON.parse(cookies);
  await page.setCookie(...deserializedCookies);
  
  // Navigates to the post
  
  await page.goto(
    "https://crowdsource.google.com/new-contribute/image-captioning/en", {
		waitUntil: 'load',
		// Remove the timeout
		timeout: 0
	  }
	);     
res.send('kam hua re bhaiya');
const pendingXHR = new PendingXHR(page);
async function foo4() {
await pendingXHR.waitForAllXhrFinished();
const likes = await page.waitForXPath(
	"(//div[@class='ZFr60d CeoRYc'])[2]"
  );
await pendingXHR.waitForAllXhrFinished();
console.clear();
await likes.click();
setTimeout(foo4, 500);
}
await pendingXHR.waitForAllXhrFinished();
foo4();
console.clear();
});
app.get('/', (req, res) => hello());


//Initialises the express server on the port 30000
app.listen(port, ip);
