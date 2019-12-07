import IElement from "./IElement";
import IHasText from "./IHasText";

export default interface ITextField extends IElement, IHasText {
    enterText(text: string): Promise<void>;
}
