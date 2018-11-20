import IBlock from "../Interfaces/IBlock";
import { ElementHandle } from "puppeteer"
import IElement from "../Interfaces/IElement";
import Session from "../Setup/Session";

export default abstract class Element implements IElement {

	get session(): Session {
		return this.parent.session;
	}

	constructor(public parent: IBlock, public tag: ElementHandle) {
	}

	get selected(): Promise<boolean> {
		return (async () => {
			let valueHandler = await this.tag.getProperty("selected");
			let selectedValue: string = await valueHandler.jsonValue();
			return selectedValue.toLowerCase() === 'selected';
		})();
	}

	get text(): Promise<string> {
		return (async () => {
			let valueHandler = await this.tag.getProperty("value");
			return await valueHandler.jsonValue();
		})();
	}


}