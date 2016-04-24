var Injector = (function () {
    function Injector() {
    }
    Injector.prototype.hasBinding = function (intrface) {
        return Injector.bindings.hasOwnProperty(intrface);
    };
    Injector.prototype.bind = function (intrface, implementation) {
        Injector.bindings[intrface] = implementation;
    };
    Injector.prototype.get = function (intrface) {
        if (!this.hasBinding(intrface))
            throw new Error("Interface Binding Not Set");
        return (require(Injector.bindings[intrface]));
    };
    Injector.bindings = {};
    return Injector;
}());
module.exports = Injector;
//# sourceMappingURL=injector.js.map