"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.getInstance = function () {
        return this;
    };
    return Person;
}());
exports.default = Person;
//# sourceMappingURL=Person.js.map