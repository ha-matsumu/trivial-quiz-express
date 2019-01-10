const request = require("supertest");
const app = require("../../../src/index");

function runRouteTest(_url) {
  return request(app)
    .get(_url)
    .expect(200);
}

describe("GET /", () => {
  it("top.ejsの表示", () => {
    runRouteTest("/");
  });
});

describe("GET /quiz", () => {
  it("quiz.ejsの表示", () => {
    runRouteTest("/quiz");
  });
});
