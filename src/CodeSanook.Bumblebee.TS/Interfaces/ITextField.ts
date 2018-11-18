import IElement from "./IElement";
import IHasText from "./IHasText";
import IBlock from "./IBlock";

/*
export interface ITextField extends IElement, IHasText {
	EnterText<TResult extends IBlock>(text: string): TResult;
}
*/

export default interface ITextField extends IHasText {
	enterText(text: string): Promise<void>;
}
