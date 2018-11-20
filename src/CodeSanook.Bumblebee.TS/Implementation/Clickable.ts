import IBlock from "../Interfaces/IBlock";
import Element from "../Implementation/Element"
import IClickable from "../Interfaces/IClickable";

export default class Clickable extends Element implements IClickable {
	async click<TResult extends IBlock>(resultType: { new(...args: any[]): TResult }): Promise<TResult> {
		await this.tag.click();
		return await this.session.currentBlock(resultType);
	}
}
