import Session from '../src/setup/Session';
import HomePage from './HomePage';

describe('Navigation', () => {
    let session: Session;
    const timeoutInSecond = 60;
    jest.setTimeout(timeoutInSecond * 1000);

    beforeEach(async () => {
        session = await Session.new();
    });

    afterEach(async () => {
        await session.close();
    });

    it('should go to codesanook.com', async () => {
        await session.navigateTo(
            HomePage,
            'https://www.codesanook.com'
        );

        await session.page.waitFor(3000);
    });
});
