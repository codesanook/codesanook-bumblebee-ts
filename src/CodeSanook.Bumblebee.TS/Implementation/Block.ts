
import IBlock from "../Interfaces/IBlock";
import Session from "../Setup/Session";
import { ElementHandle } from "puppeteer"

export default abstract class Block implements IBlock {
	session: Session
	private _tag: ElementHandle<Element>;

	constructor(session: Session) {
		this.session = session;
	}

	get tag(): ElementHandle<Element> {
		return this._tag;
	}

	set tag(value: ElementHandle<Element>) {
		this._tag = value;
	}

	FindElement(selector): Promise<ElementHandle<Element>> {
		if (this._tag == null) {
			throw new Error("You can't call GetElements on a block without first initializing Tag.");
		}
		return this._tag.$(selector);
	}

	FindElements(selector: string): Promise<ElementHandle<Element>[]> {
		if (this._tag == null) {
			throw new Error("You can't call GetElements on a block without first initializing Tag.");
		}
		return this._tag.$$(selector);
	}

	protected delay(time) {
		return new Promise(function (resolve) {
			setTimeout(resolve, time)
		});
	}

}
