
import IBlock from "../Interfaces/IBlock";
import Session from "../Setup/Session";
import { ElementHandle } from "puppeteer"

export default abstract class Block implements IBlock {
	session: Session
	tag: ElementHandle;

	constructor(session: Session) {
		this.session = session;
	}

	FindElement(selector): Promise<ElementHandle> {
		if (this.tag == null) {
			throw new Error("You can't call GetElements on a block without first initializing Tag.");
		}
		return this.tag.$(selector);
	}

	FindElements(selector: string): Promise<ElementHandle<Element>[]> {
		if (this.tag == null) {
			throw new Error("You can't call GetElements on a block without first initializing Tag.");
		}
		return this.tag.$$(selector);
	}

	protected delay(time) {
		return new Promise(function (resolve) {
			setTimeout(resolve, time)
		});
	}
}
