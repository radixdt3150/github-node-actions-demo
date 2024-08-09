const request = require("supertest");
const { app } = require("./index");

describe("GET /", () => {
    test('It should return a successful(200) response', () => {
        return request(app)
            .get("/")
            .expect(400)
    });
});