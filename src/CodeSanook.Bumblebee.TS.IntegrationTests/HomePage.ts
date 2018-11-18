import WebBlock from "../CodeSanook.Bumblebee.TS/Implementation/WebBlock";
import ITextField from "../CodeSanook.Bumblebee.TS/Interfaces/ITextField"
import TextField from "../CodeSanook.Bumblebee.TS/Implementation/TextField"

export default class HomePage extends WebBlock {

   get firstName() : Promise<ITextField> {
      return (async () => {
            let tag = await this.session.page.$("input[name='firstname']");
            return new TextField(this, tag);
       })();
   }
}