var Injector = (function () {
    function Injector() {
    }
    Injector.prototype.getInstance = function (iname) {
        return require("fs");
    };
    Injector.prototype.hasBinding = function (iname) {
        return false;
    };
    return Injector;
}());
module.exports = Injector;
//# sourceMappingURL=injector.js.map