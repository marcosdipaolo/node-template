"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var types_1 = require("../../container/types");
var userValidator_1 = require("../middleware/validators/userValidator");
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController(userService) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        return _this;
    }
    UserController.prototype.createUser = function (req) {
        return this.userService.createUser(req);
    };
    __decorate([
        inversify_express_utils_1.httpPost.apply(void 0, __spreadArray(__spreadArray(["/"], userValidator_1.userValidator.createUser(), false), [userValidator_1.userValidator.errorHandler()], false)),
        __param(0, (0, inversify_express_utils_1.request)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "createUser", null);
    UserController = __decorate([
        (0, inversify_express_utils_1.controller)("/users"),
        __param(0, (0, inversify_1.inject)(types_1.TYPES.userService)),
        __metadata("design:paramtypes", [Object])
    ], UserController);
    return UserController;
}(inversify_express_utils_1.BaseHttpController));
exports.UserController = UserController;
