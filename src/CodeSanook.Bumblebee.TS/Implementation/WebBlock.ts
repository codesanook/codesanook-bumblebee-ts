import Session from "../Setup/Session";
import Block from "./Block";
import { ElementHandle } from "puppeteer";

/// <summary>
/// Base block for typical web pages allowing for specifying a common wait timeout for finding elements.
/// </summary>
export default abstract class WebBlock extends Block {
	constructor(session: Session, tag: ElementHandle) {
		super(session, tag);
	}
}
