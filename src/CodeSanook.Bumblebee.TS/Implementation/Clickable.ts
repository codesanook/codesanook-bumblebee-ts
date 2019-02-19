import Element from "../Implementation/Element"
import IClickable from "../Interfaces/IClickable";

export default class Clickable extends Element implements IClickable {
	public async click(): Promise<void> {
		let tag = await this.tag
		await tag.click();
		await this.session.page.waitFor(250);
	}
}
