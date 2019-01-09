const request = require("supertest");
const app = require("../../../src/index");

describe("GET /", () => {
  it("top.ejsの表示", (done) => {
    request(app)
      .get("/")
      .expect(200, done);
  });
});

describe("GET /quiz", () => {
  it("quiz.ejsの表示", (done) => {
    request(app)
      .get("/quiz")
      .expect(200, done);
  });
});