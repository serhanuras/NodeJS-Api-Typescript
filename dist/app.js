"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Person_1 = __importDefault(require("./modules/Person"));
var app = express_1.default();
var port = 3000;
app.get('/', function (req, res) {
    var person = new Person_1.default('serhan', 'uras');
    res.json(person.getInstance());
});
app.listen(port, function (err) {
    if (err) {
        return console.error(err);
    }
    return console.log("server is listening on " + port);
});
//# sourceMappingURL=app.js.map