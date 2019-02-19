import IOption from "../Interfaces/IOption";
import Element from "./Element"

export default class Option extends Element implements IOption {

	public async click(): Promise<void> {
		await (await this.tag).click();
	}
}