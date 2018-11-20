import ITextField from "../Interfaces/ITextField";
import Element from "../Implementation/Element"
import IBlock from "../Interfaces/IBlock";

export default class TextField extends Element implements ITextField {

	async enterText<TResult extends IBlock>(resultType: { new(...args: any[]): TResult }, text: string): Promise<TResult> {
		//clear text
		await this.tag.click();
		await this.tag.focus();
		// click three times to select all
		await this.tag.click({ clickCount: 3 });
		await this.tag.press('Backspace');
		await this.tag.type(text);
		return this.session.currentBlock(resultType);
	}
}
