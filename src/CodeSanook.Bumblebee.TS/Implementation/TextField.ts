import ITextField from "../Interfaces/ITextField";
import Element from "../Implementation/Element"

export default class TextField extends Element implements ITextField {
	get text(): Promise<string> {
		return (async () => {
			let valueHandler = await this.tag.getProperty("value");
			return await valueHandler.jsonValue();
		})();
	}

	async enterText(text: string): Promise<void> {
		//clear text
		await this.tag.click();
		await this.tag.focus();
		// click three times to select all
		await this.tag.click({ clickCount: 3 });
		await this.tag.press('Backspace');
		await this.tag.type(text);
	}
}
