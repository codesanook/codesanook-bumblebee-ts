import ITextField from "../interfaces/ITextField";
import Element from "../implementations/Element"

export default class TextField extends Element implements ITextField {

    public async enterText(text: string): Promise<void> {
        // clear text
        const tag = await this.tag
        await tag.click();
        await tag.focus();

        // click three times to select all
        await tag.click({ clickCount: 3 });
        await tag.press('Backspace');
        for (let index = 0; index < text.length; index++) {
            const character = text.charAt(index);
            await tag.type(character);
            await this.session.page.waitFor(25);
        }
    }
}
