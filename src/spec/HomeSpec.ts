import * as puppeteer from 'puppeteer';

describe('CodeSanook HomePage', () => {
    beforeAll(done => {
        jest.setTimeout(60000);
        done();
    });

    it('should reach booking form', async () => {
        const browser = await puppeteer.launch();
        const context = await browser.createIncognitoBrowserContext();
        const page = await context.newPage();

        await page.goto('http://codesanook.com', {
            waitUntil: 'domcontentloaded'
        });

        const bocy = await page.$('body');
        expect(bocy).toBeDefined();

        await context.close();
        await browser.close();
    });
});