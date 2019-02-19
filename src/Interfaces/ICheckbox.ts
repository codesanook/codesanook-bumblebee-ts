import IElement from "./IElement";

export default interface ICheckbox extends IElement {
    check(): Promise<void>;
    uncheck(): Promise<void>;
    toggle(): Promise<void>;
}
