import { chromium } from "playwright-chromium";

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.screenshot({path : "screenshot.png"});
    await browser.close();
})();