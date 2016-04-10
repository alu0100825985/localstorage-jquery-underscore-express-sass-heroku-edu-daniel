var expect = chai.expect

describe("CSV", function () {
  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    sandbox.restore();
  });
});