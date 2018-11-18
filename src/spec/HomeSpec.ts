import * as puppeteer from 'puppeteer';
import Session from '../CodeSanook.Bumblebee.TS/Setup/Session';
import HomePage from '../CodeSanook.Bumblebee.TS.IntegrationTests/HomePage';

describe('CodeSanook HomePage', () => {
    beforeAll(done => {
        jest.setTimeout(60000);
        done();
    });

    it('should reach booking form', async () => {
        const browser = await puppeteer.launch({ headless: false });
        //const context = await browser.createIncognitoBrowserContext();
        const page = await browser.newPage();
        let session = new Session(page)

        let homePage = await session.navigateTo(HomePage, 'https://www.w3schools.com/html/html_form_input_types.asp');
        let firstName = await homePage.firstName;
        await firstName.enterText("hello world");
        expect(await firstName.text).toBe("hello world2");

        await page.close();
        await browser.close();
    });
});