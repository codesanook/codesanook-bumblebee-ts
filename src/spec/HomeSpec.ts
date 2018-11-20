import Session from '../CodeSanook.Bumblebee.TS/Setup/Session';
import HomePage from '../CodeSanook.Bumblebee.TS.IntegrationTests/HomePage';
import ResultPage from "../CodeSanook.Bumblebee.TS.IntegrationTests/ResultPage"

describe('CodeSanook HomePage', () => {

    let session: Session;

    beforeAll((done) => {
        jest.setTimeout(60000);
        done();
    });

    beforeEach(async (done) => {
        session = await Session.New();
        done();
    });

    afterEach(async (done) => {
        await session.close();
        done();
    });

    it('should set correct message', async () => {

        let homePage = await session.navigateTo(
            HomePage,
            'https://www.w3schools.com/html/html_form_input_types.asp'
        );

        let firstName = await homePage.firstName;
        await firstName.enterText(HomePage, "hello world");
        await session.page.waitFor(2000);

        let submitButton = await homePage.submitButton;
        await submitButton.click(ResultPage);
        await session.page.waitFor(3000);

    });
});