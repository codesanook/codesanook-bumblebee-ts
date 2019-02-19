import IHasText from "./IHasText"
import IElement from "./IElement";

export default interface IClickable extends IElement, IHasText {
	click(): Promise<void>;
}