/// <reference path="../typings/tsd.d.ts" />
var chai = require('chai');
var lib = require('../lib/Greeter');
var expect = chai.expect;
var Greeter = lib.Greeter;
describe('Greeter Class', function () {
    it('Should Greet', function () {
        var greeter = new Greeter('Developer');
        expect(greeter.greet()).to.equal('Hello, Developer');
    });
});
//# sourceMappingURL=Greeter.spec.js.map