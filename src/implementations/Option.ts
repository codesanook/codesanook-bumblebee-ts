import IOption from "../interfaces/IOption";
import IBlock from "../interfaces/IBlock";
import Element from "./Element"

export default class Option extends Element implements IOption {

	public async click<TResult extends IBlock>(
		resultType: new (...args: any[]) => TResult
	): Promise<TResult> {
		await (await this.tag).click();
		return this.session.currentBlock(resultType);
	}
}