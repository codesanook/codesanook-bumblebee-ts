import { Page, Browser } from 'puppeteer'
import IBlock from '../interfaces/IBlock';

export default class Session {
    public static async new(): Promise<Session> {
        const session = new Session(browser, page);
        return Promise.resolve(session);
    }

    private constructor(public browser: Browser, public page: Page) {
    }

    // Navigate to should be always return a new page
    // Using Class Types in Generics
    // https://www.typescriptlang.org/docs/handbook/generics.html#using-class-types-in-generics
    public async navigateTo<TBlock extends IBlock>(blockType: { new(...args): TBlock }, url: string): Promise<TBlock> {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
        return this.currentBlock(blockType);
    }

    public async currentBlock<TBlock extends IBlock, TParent extends IBlock>(blockType: { new(...args): TBlock }, selector: string = "body", parent: TParent = null): Promise<TBlock> {
        if (selector === "body" && parent == null) {
            const tag = await this.page.$(selector);
            return Promise.resolve(new blockType(this, tag));
        } else {
            const tag = await (await parent.tag).$(selector);
            return Promise.resolve(new blockType(this, tag, parent));
        }
    }
}
