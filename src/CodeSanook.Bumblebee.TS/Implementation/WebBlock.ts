import Block from "./Block"
import Session from "../Setup/Session";
import { ElementHandle } from "puppeteer";

export default abstract class WebBlock extends Block {
    constructor(session: Session, tag: ElementHandle) {
        super(session, tag);
    }
}