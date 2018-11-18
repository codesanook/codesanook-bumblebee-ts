import { Page } from "puppeteer"
import IBlock from "../Interfaces/IBlock";
import WebBlock from "../Implementation/WebBlock";

export default class Session {

	page: Page

	constructor(page: Page) {
		this.page = page;
	}

	async navigateTo<TBlock extends WebBlock>(blockType: { new(...args: any[]): TBlock }, url: string): Promise<TBlock> {
		await this.page.goto(url, {
			waitUntil: 'domcontentloaded'
		});

		let webBlock = await (this.currentBlock<TBlock>(blockType));
	 	await webBlock.initialize();
		return webBlock;
	}

	currentBlock<TBlock extends IBlock>(blockType: { new(...args: any[]): TBlock }, tag: Element = null): Promise<TBlock> {
		if (tag != null) {
			let block = new blockType(this, tag);
			return Promise.resolve(block);
		} else {
			console.log("create page without tag");
			let block = new blockType(this, tag);
			return Promise.resolve(block);
		}
	}
}
