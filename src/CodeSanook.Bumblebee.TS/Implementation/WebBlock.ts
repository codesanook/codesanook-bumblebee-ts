import Session from "../Setup/Session";
import Block from "./Block";

/// <summary>
/// Base block for typical web pages allowing for specifying a common wait timeout for finding elements.
/// </summary>
export default abstract class WebBlock extends Block {
	 constructor(session: Session){
		super(session);
	}

	async initialize(timeout: number = 3000): Promise<void>{
		await this.session.page.waitFor(500);
		await this.session.page.waitForSelector("body", { timeout: timeout });
		this.tag = await this.session.page.$("body");
		console.log("initialize with body");
	}
}
