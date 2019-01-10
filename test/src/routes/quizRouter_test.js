const request = require("supertest");
const assert = require("assert");
const app = require("../../../src/index");

describe("GET /api", () => {
  it("JSONデータの確認", () => {
    return request(app)
      .get("/api/quiz")
      .set("Accept", "application/json")
      .expect(200)
      .then(res => {
        assert.equal(res.body.length, 10, "取得したクイズ数が10個ではありません。");
      });
  });
});