let testFailed = false;

beforeEach(() => {
    testFailed = false; // Reset for each test
});

afterEach(() => {
    if (expect.getState().currentTestName && expect.getState().testPath) {
        const { assertionCalls, numPassingAsserts } = expect.getState()
        
        testFailed = numPassingAsserts !== assertionCalls;
    }
});

afterAll(() => {
    if (testFailed) {
        process.exit(1)
    } else {
        console.log('All tests passed.');
    }
});

module.exports = testFailed;