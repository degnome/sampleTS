/// <reference path="../typings/tsd.d.ts" />

import chai = require('chai');
import lib = require('../lib/Greeter');
var expect = chai.expect;
var Greeter = lib.Greeter;

describe('Greeter Class', () => {
	it('Should Greet', () => {
		var greeter = new Greeter('Developer');
		expect(greeter.greet()).to.equal('Hello, Developer');
	});
});