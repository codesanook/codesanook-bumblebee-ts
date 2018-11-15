import * as puppeteer from "puppeteer"
import IBlock from "../Interfaces/IBlock";

export default class Session {

	page: puppeteer.Page

	constructor(page: puppeteer.Page) {
		this.page = page;
	}

	async navigateTo<TBlock extends IBlock>(type: { new(...args: any[]): TBlock }, url: string): Promise<TBlock> {
        await this.page.goto(url, {
            waitUntil: 'domcontentloaded'
		});
		return this.currentBlock<TBlock>(type);
	}

	currentBlock<TBlock extends IBlock>(type: { new(...args: any[]): TBlock }, tag: Element = null): TBlock {
		if (tag != null) {
			return new type(this, tag);
		} else {
			return new type(this);
		}
	}
}
