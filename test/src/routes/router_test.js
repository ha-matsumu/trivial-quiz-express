const request = require("supertest");
const app = require("../../../src/index");

function runRouteTest(_url, _statusCode) {
  return request(app)
    .get(_url)
    .expect(_statusCode);
}

describe("GET /", () => {
  it("ステータスコード200になるはず", () => {
    return runRouteTest("/", 200);
  });
});

describe("GET /quiz", () => {
  it("ステータスコード200になるはず", () => {
    return runRouteTest("/quiz", 200);
  });
});

describe("GET /abc", () => {
  it("ステータスコード404になるはず", () => {
    return runRouteTest("/abc", 404);
  });
});