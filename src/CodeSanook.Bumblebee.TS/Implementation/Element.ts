import IBlock from "../Interfaces/IBlock";
import { ElementHandle } from "puppeteer"
import SpecificBlock from "./SpecificBlock";
export default abstract class Element extends SpecificBlock {

	//private get
	parentBlock: IBlock;

	get selected(): Promise<boolean> {
		return (async () => {
			let valueHandler = await this.tag.getProperty("selected");
			let selectedValue: string = await valueHandler.jsonValue();
			return selectedValue.toLowerCase() === 'selected';
		})();
	}

	constructor(parent: IBlock, tag: ElementHandle) {
		super(parent.session, tag);
		this.parentBlock = parent;
	}
}