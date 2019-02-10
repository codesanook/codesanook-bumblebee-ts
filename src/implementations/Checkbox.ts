import IBlock from "../interfaces/IBlock";
import Element from "../implementations/Element"
import ICheckbox from "../interfaces/ICheckbox";

export default class Checkbox extends Element implements ICheckbox {
	public async check<TResult extends IBlock>(resultType: new (...args: any[]) => TResult): Promise<TResult> {
		if (!this.selected) {
			const tag = await this.tag
			await tag.click();
			await this.session.page.waitFor(250);
		}
		return this.session.currentBlock(resultType);
	}

	public async uncheck<TResult extends IBlock>(resultType: new (...args: any[]) => TResult): Promise<TResult> {
		let selected = await this.selected;
		if (selected) {
			const tag = await this.tag
			await tag.click();
			await this.session.page.waitFor(250);
		}
		return this.session.currentBlock(resultType);
	}

	public async toggle<TResult extends IBlock>(resultType: new (...args: any[]) => TResult): Promise<TResult> {
		const tag = await this.tag
		await tag.click();
		await this.session.page.waitFor(250);
		return this.session.currentBlock(resultType);
	}
}