import Element from '../implementations/Element'
import ICheckbox from '../interfaces/ICheckbox';

export default class Checkbox extends Element implements ICheckbox {
    public async check(): Promise<void> {
        if (!this.selected) {
            const tag = await this.tag
            await tag.click();
            await this.session.page.waitFor(250);
        }
    }

    public async uncheck(): Promise<void> {
        let selected = await this.selected;
        if (selected) {
            const tag = await this.tag
            await tag.click();
            await this.session.page.waitFor(250);
        }
    }

    public async toggle(): Promise<void> {
        const tag = await this.tag
        await tag.click();
        await this.session.page.waitFor(250);
    }
}
