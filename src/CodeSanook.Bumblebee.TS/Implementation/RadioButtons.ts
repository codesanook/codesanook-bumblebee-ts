import IRadioButtons from "../Interfaces/IRadioButtons";
import IOption from "../Interfaces/IOption";
import RadioButton from "./RadioButton";
import { ElementHandle } from "puppeteer";
import IBlock from "../Interfaces/IBlock";

export default class RadioButtons implements IRadioButtons {

	constructor(public parentBlock: IBlock, public tags: ElementHandle<Element>[]) {
	}

	get options(): Promise<IOption[]> {
		return (async () => {
			let radioButtons: RadioButton[] = [];
			for (let index = 0; index < this.tags.length; index++) {
				await this.parentBlock.session.page.waitFor(250);
				let item = new RadioButton(this.parentBlock, this.tags[index]);
				radioButtons.push(item);
			}
			return Promise.resolve(radioButtons);
		})();
	}
}
