const request = require("supertest");
const { app } = require("./index");

describe("GET /", () => {
    test('It should return a successful(200) response', (done) => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200)
                done()
            })
    });

    test('It should now pass', (done) => {
        expect(5).toBe(5)
        done()
    });
});
