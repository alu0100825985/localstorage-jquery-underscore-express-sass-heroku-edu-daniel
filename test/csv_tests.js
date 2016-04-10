var expect = chai.expect

describe("PRUEBAS CSV", function () {
  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe("Pruebas para la función calculate()", function() {
    it("Entrada con elementos entrecomillados", function() {
      var input = '"Esto", "son", "elementos", "entrecomillados"';
      var fun_cal = calculate(input);
      expect(fun_cal[0].value[0]).to.equal("Esto");
      expect(fun_cal[0].value[1]).to.equal("son");
      expect(fun_cal[0].value[2]).to.equal("elementos");
      expect(fun_cal[0].value[3]).to.equal("entrecomillados");
    });

    it ("Entrada con elementos no entrecomillados", function() {
      var input = 'Esto, son, elementos, no, entrecomillados'
      var fun_cal = calculate(input);
      expect(fun_cal[0].value[0]).to.equal("Esto");
      expect(fun_cal[0].value[1]).to.equal("son");
      expect(fun_cal[0].value[2]).to.equal("elementos");
      expect(fun_cal[0].value[3]).to.equal("no");
      expect(fun_cal[0].value[4]).to.equal("entrecomillados");
    });

    it ("Entrada con un elemento vacío", function() {
      var input = '"Elemento", "vacío", ""'
      var fun_cal = calculate(input);
      expect(fun_cal[0].value[0]).to.equal("Elemento");
      expect(fun_cal[0].value[1]).to.equal("vacío");
      expect(fun_cal[0].value[2]).to.equal("");
    });

    it ("Entrada con números entrecomillados", function() {
      var input = '"0", "1", "2", "3"';
      var fun_cal = calculate(input);
      expect(fun_cal[0].value[0]).to.equal("0");
      expect(fun_cal[0].value[1]).to.equal("1");
      expect(fun_cal[0].value[2]).to.equal("2");
      expect(fun_cal[0].value[3]).to.equal("3");
    });

    it ("Entrada con números no entrecomillados", function() {
      var input = '0, 1, 2, 3';
      var fun_cal = calculate(input);
      expect(fun_cal[0].value[0]).to.equal("0");
      expect(fun_cal[0].value[1]).to.equal("1");
      expect(fun_cal[0].value[2]).to.equal("2");
      expect(fun_cal[0].value[3]).to.equal("3");
    });

    it("Entrada como una coma en uno de los elementos", function() {
      var input = '"Hay", "una,", "coma"';
      var fun_cal = calculate(input);
      expect(fun_cal[0].value[0]).to.equal("Hay");
      expect(fun_cal[0].value[1]).to.equal("una,");
      expect(fun_cal[0].value[2]).to.equal("coma");
    });

    it("Entrada con un espacio en uno de los elementos", function() {
      var input = '"Hay", "un ", "espacio"';
      var fun_cal = calculate(input);
      expect(fun_cal[0].value[0]).to.equal("Hay");
      expect(fun_cal[0].value[1]).to.equal("un ");
      expect(fun_cal[0].value[2]).to.equal("espa");
    });
  });
});