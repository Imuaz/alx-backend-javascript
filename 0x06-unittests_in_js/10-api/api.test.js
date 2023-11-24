const request = require("request");
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("Index page", () => {
  const options = {
    url: "http://localhost:7865/",
    method: "GET",
  };

  it("checks correct status code", (done) => {
    request(options, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("checks correct content", (done) => {
    request(options, (err, res, body) => {
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});

describe("Cart page", () => {
  it("checks correct status code for correct url", (done) => {
    request.get("http://localhost:7865/cart/12", (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("checks correct content for correct url", (done) => {
    request.get("http://localhost:7865/cart/12", (err, res, body) => {
      expect(body).to.equal("Payment methods for cart 12");
      done();
    });
  });

  it("checks correct status code for incorrect url", (done) => {
    request.get("http://localhost:7865/cart/kim", (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe("Available_payments page", () => {
  it("checks correct status for correct url", (done) => {
    request.get("http://localhost:7865/available_payments", (err, res) => {
      expect(res && res.statusCode).to.equal(200);
      done();
    });
  });

  it("checks correct body content for correct url", (done) => {
    const option = { json: true };
    const payLoad = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    };
    request.get("http://localhost:7865/available_payments", option, (err, res, body) => {
      expect(res && res.statusCode).to.equal(200);
      expect(body).to.deep.equal(payLoad);
      done();
    });
  });
});

describe("Login", () => {
  it("checks correct status code for request that's sent properly", (done) => {
    const opt = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        userName: 'JOE',
      },
    };
    request.post(opt, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("checks correct content for request that's sent properly", (done) => {
    const opts = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        userName: 'JOE',
      },
    };
    request.post(opts, (err, res, body) => {
      expect(res && res.statusCode).to.equal(200);
      expect(body).to.contain('Welcome JOE');
      done();
    });
  });

  it("checks correct status code for request that's not sent properly", (done) => {
    const op = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        usame: 'JOE',
      },
    };
    request.post(op, (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
