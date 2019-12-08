// https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#working-with-chrome-extensions
const userAgent =
    'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
module.exports = {
    launch: {
        headless: false,
        defaultViewport: {
            'width': 320,
            'height': 568,
        },
        // https://peter.sh/experiments/chromium-command-line-switches/#user-agent
        args: [
            `--user-agent=${userAgent}`,
        ]
    }
};
