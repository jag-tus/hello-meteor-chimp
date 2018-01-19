// The default chimp config (with all available options) can be found at
// https://github.com/xolvio/chimp/blob/master/src/bin/default.js

module.exports = {
    path: 'tests',
    noSessionReuse: true,

    // - - - - CHIMP - - - -
    showXolvioMessages: false,
    'fail-when-no-tests-run': true,

    // - - - - MOCHA  - - - -
    mocha: true,
    mochaCommandLineOptions: {
        bail: true
    },
    mochaConfig: {
    // tags and grep only work when watch mode is false
        tags: '',
        grep: null,
        timeout: 60000,
        reporter: 'spec',
        slow: 10000,
        useColors: true
    },

    // - - - - METEOR  - - - -
    ddp: 'http://localhost:3000',
    serverExecuteTimeout: 10000,

    // - - - - SELENIUM  - - - -
    browser: 'chrome',
    platform: 'ANY',
    name: '',
    user: '',
    key: '',
    port: null,
    host: null,

    seleniumStandaloneOptions: {
        version: '3.8.1',
        baseURL: 'https://selenium-release.storage.googleapis.com',        
        drivers: {
            chrome: {
                version: "2.35",
                arch: process.arch,
                baseURL: 'https://chromedriver.storage.googleapis.com'
            }
        }
    },    

    webdriverio: {
        desiredCapabilities: {
            chromeOptions: {
                args: ["headless", "disable-gpu"]
            },
            isHeadless: true
        }
    },

    // - - - - PHANTOM  - - - -
    // phantom_w: 1280,
    // phantom_h: 1024,
    // phantom_ignoreSSLErrors: true,

    // - - - - DEBUGGING  - - - -
    log: 'info',
    debug: false,
    seleniumDebug: null,
    debugMocha: null,
    debugBrkMocha: null
};
