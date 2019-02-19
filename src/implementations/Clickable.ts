import Element from "../implementations/Element"
import IClickable from "../interfaces/IClickable";

export default class Clickable extends Element implements IClickable {
    public async click(): Promise<void> {
        const tag = await this.tag
        await tag.click();
        await this.session.page.waitFor(250);
    }
}
