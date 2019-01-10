const request = require("supertest");
const app = require("../../../src/index");

function runRouteTest(_url, _callback) {
  request(app)
    .get(_url)
    .expect(200, _callback);
}

describe("GET /", () => {
  it("top.ejsの表示", done => {
    runRouteTest("/", done);
  });
});

describe("GET /quiz", () => {
  it("quiz.ejsの表示", done => {
    runRouteTest("/quiz", done);
  });
});
