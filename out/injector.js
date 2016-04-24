var Injector = (function () {
    function Injector(bindings) {
        this.bindings = {};
        if (!bindings) {
            bindings = {};
        }
        this.bindings = bindings;
    }
    Injector.prototype.hasBinding = function (intrface) {
        return this.bindings.hasOwnProperty(intrface);
    };
    Injector.prototype.bind = function (intrface, implementation) {
        this.bindings[intrface] = implementation;
    };
    Injector.prototype.get = function (intrface) {
        if (!this.hasBinding(intrface))
            throw new Error("Interface Binding Not Set");
        return (require(this.bindings[intrface]));
    };
    return Injector;
}());
module.exports = Injector;
//# sourceMappingURL=injector.js.map