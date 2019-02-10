import IBlock from "../interfaces/IBlock";
import Element from "../implementations/Element"
import IClickable from "../interfaces/IClickable";

export default class Clickable extends Element implements IClickable {
	public async click<TResult extends IBlock>(resultType: new (...args: any[]) => TResult): Promise<TResult> {
		const tag = await this.tag
		await tag.click();
		await this.session.page.waitFor(250);
		return this.session.currentBlock(resultType);
	}
}
