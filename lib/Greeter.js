/// <reference path="../typings/tsd.d.ts" />
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();
exports.Greeter = Greeter;
//# sourceMappingURL=Greeter.js.map