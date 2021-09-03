import request from "supertest";
import  app from  "../src/app";

describe("All Routes", () => {
  test("it should post a data", (done) => {
    request(app)
      .post("/products")
      .send({
        organization: "node ninja",
        products: ["developers", "pizza"],
        marketValue: "90%",
        address: "sangotedo",
        ceo: "cn",
        country: "Taiwan",
        noOfEmployees: 2,
        employees: ["james bond", "jackie chan"],
      })
      .expect(201)
      .then((res) => {
        expect(res.body && res.body.organization).toEqual("node ninja");
        done();
      });
  });

  test("it should get all post", (done) => {
    request(app)
      .get("/products")
      .expect(200)
      .then((res) => {
        done();
      });
  });

  test("it should get a single post", (done) => {
    request(app)
      .get("/products/9")
      .expect(200)
      .then((res) => {
        expect(res.body && res.body.id).toEqual(10);
        done();
      });
  });

  test("it should update a data", (done) => {
    request(app)
      .put("/products/9")
      .send({
        organization: "node ninja",
        products: ["developers", "pizza"],
        marketValue: "90%",
        address: "sangotedo",
        ceo: "cn",
        country: "Taiwan",
        noOfEmployees: 2,
        employees: ["james bond", "jackie chan"],
      })
      .expect(200)
      .then((res) => {
        expect(res.body && res.body.id).toEqual(10);
        done();
      });
  });

  test("it should delete a data", (done) => {
    request(app)
      .delete("/products/7")
      .send({
        organization: "node ninja",
        products: ["developers", "pizza"],
        marketValue: "90%",
        address: "sangotedo",
        ceo: "cn",
        country: "Taiwan",
        noOfEmployees: 2,
        employees: ["james bond", "jackie chan"],
      })
      .expect(200)
      .then((res) => {
        console.log(res.body);
        expect(res.body && res.body.message).toEqual("Product 7 removed");
        done();
      });
  });
});
