import * as puppeteer from 'puppeteer';
import Session from '../CodeSanook.Bumblebee.TS/Setup/Session';
import HomePage from '../CodeSanook.Bumblebee.TS.IntegrationTests/HomePage';

describe('CodeSanook HomePage', () => {

    let browser: puppeteer.Browser;
    let page: puppeteer.Page;
    let session: Session;

    beforeAll((done) => {
        jest.setTimeout(60000);
        done();
    });

    beforeEach(async (done) => {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
        session = new Session(page)
        done();
    });

    afterEach(async (done) => {
        await page.close();
        await browser.close();
        done();
    });

    it('should set correct message', async () => {

        let homePage = await session.navigateTo(
            HomePage,
            'https://www.w3schools.com/html/html_form_input_types.asp'
        );

        let firstName = await homePage.firstName;
        await firstName.enterText("hello world");

        expect(await firstName.text).toBe("hello world");
    });
});