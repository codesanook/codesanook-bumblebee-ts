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
        await session.navigateTo(HomePage, 'http://codesanook.com');

        //await context.close();
        await browser.close();
    });
});