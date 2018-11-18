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

		// await this.tag.focus();

		// // Move the carriage to the right
		// await this.session.page.keyboard.down('Control');
		// await this.session.page.keyboard.press('ArrowRight');
		// await this.session.page.keyboard.up('Control');

		// // Selthis.session.ect text to the left of the caret
		// await this.session.page.keyboard.down('Control');
		// await this.session.page.keyboard.down('ShiftLeft');
		// await this.session.page.keyboard.press('ArrowLeft');
		// await this.session.page.keyboard.up('ShiftLeft');
		// await this.session.page.keyboard.up('Control');

		// await this.session.page.keyboard.press('Backspace');
		// await this.tag.type(text);

		//clear text
		await this.tag.click();
		await this.tag.focus();
		// click three times to select all
		await this.tag.click({ clickCount: 3 });
		await this.tag.press('Backspace');

		await this.tag.type(text);
	}
}
