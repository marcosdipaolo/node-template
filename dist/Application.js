"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
var express_1 = require("express");
require("./http/controllers/HealthController");
require("./http/controllers/UserController");
var inversify_1 = require("inversify");
var morgan_1 = __importDefault(require("morgan"));
var Application = /** @class */ (function () {
    function Application() {
        var _this = this;
        this.build = function (server) {
            server.setConfig(function (app) {
                _this.addMiddlewares(app);
            });
            return server.build();
        };
        this.addMiddlewares = function (app) {
            app.use((0, express_1.json)());
            app.use((0, express_1.urlencoded)({ extended: true }));
            app.use((0, morgan_1.default)("dev"));
        };
    }
    Application = __decorate([
        (0, inversify_1.injectable)()
    ], Application);
    return Application;
}());
exports.Application = Application;
