import * as puppeteer from "puppeteer"
import { Page, ElementHandle, Browser } from "puppeteer"
import IBlock from "../Interfaces/IBlock";
import WebBlock from "../Implementation/WebBlock";

export default class Session {

	private constructor(public browser: Browser, public page: Page) {
	}

	static async New(): Promise<Session> {
		let browser = await puppeteer.launch({ headless: false });
		let page = await browser.newPage();
		let session = new Session(browser, page);
		return Promise.resolve(session);
	}

	async close(): Promise<void> {
		await this.page.close();
		await this.browser.close();
	}

	//Navigate to should be always return a new page
	async navigateTo<TBlock extends WebBlock>(blockType: { new(...args: any[]): TBlock }, url: string): Promise<TBlock> {
		await this.page.goto(url, {
			waitUntil: 'domcontentloaded'
		});

		await this.page.waitFor(500);
		await this.page.waitForSelector("body", { timeout: 5000 });
		var tag = await this.page.$("body");
		return this.currentBlock(blockType, tag);
	}

	currentBlock<TBlock extends IBlock>(blockType: { new(...args: any[]): TBlock }, tag: ElementHandle): Promise<TBlock> {
		let block = new blockType(this, tag);
		return Promise.resolve(block);
	}
}