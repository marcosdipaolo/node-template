"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.get("/health", function (req, res) {
    console.log("trololo");
    res.send("ok!!!!");
});
app.listen(3000, function () {
    console.log("server running @ port 3000");
});
