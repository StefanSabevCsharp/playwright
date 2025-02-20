import { chromium } from "playwright-chromium";
import { expect } from "chai";
// (async () => {
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.google.com');
//     await page.screenshot({path : "screenshot.png"});
//     await browser.close();
// })();

let browser,page ;

describe("Initial Setup" ,async function ()  {
    before(async () => {browser = await chromium.launch({});})
    after( async () => {await browser.close();})
    beforeEach( async () => {page = await browser.newPage();})
    afterEach( async () => {await page.close();})

    it("works", async () => {
        await page.goto('https://www.google.com');
        const title = await page.title();
        expect(title).to.be.a('string').that.includes('Google');
        await page.screenshot({path : "screenshot.png"});
    });

    it("one is equal to one", () => {
    expect(1).to.equal(1);
    })
    it("should have test title", async () => {
        await page.goto("http://localhost:5500/index.html");
        const content = await page.textContent("h1");
        // expect(content).to.equal("test");
        console.log(content);
    })
})

