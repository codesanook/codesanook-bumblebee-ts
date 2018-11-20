import WebBlock from "../CodeSanook.Bumblebee.TS/Implementation/WebBlock";
import ITextField from "../CodeSanook.Bumblebee.TS/Interfaces/ITextField"
import TextField from "../CodeSanook.Bumblebee.TS/Implementation/TextField"
import IClickable from "../CodeSanook.Bumblebee.TS/Interfaces/IClickable"
import Clickable from "../CodeSanook.Bumblebee.TS/Implementation/Clickable"

export default class HomePage extends WebBlock {

   get firstName() : Promise<ITextField> {
      return (async () => {
            let tag = await this.FindElement("input[name='firstname']");
            return new TextField(this, tag);
       })();
   }

   get submitButton() : Promise<IClickable> {
      return (async () => {
            let tag = await this.FindElement("input[type='submit']");
            return new Clickable(this, tag);
       })();
   }
}