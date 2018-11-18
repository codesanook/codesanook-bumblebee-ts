import Block from "./Block";
import ISpecificBlock from "../Interfaces/ISpecificBlock";
import Session from "../Setup/Session";
import { ElementHandle } from "puppeteer"

export default abstract class SpecificBlock extends Block implements ISpecificBlock {
	protected constructor(session: Session, tag: ElementHandle) {
		super(session);
		this.tag = tag;
	}
}
