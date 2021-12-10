"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidator = void 0;
var express_validator_1 = require("express-validator");
var validationMessages_1 = require("./validationMessages");
var errorHandler_1 = require("./errorHandler");
exports.userValidator = {
    createUser: function () {
        return [
            (0, express_validator_1.body)("firstName")
                .isString()
                .notEmpty()
                .withMessage(validationMessages_1.userMessages.firstNameRequired),
            (0, express_validator_1.body)("lastName")
                .isString()
                .notEmpty()
                .withMessage(validationMessages_1.userMessages.lastNameRequired),
            (0, express_validator_1.body)("email")
                .isString()
                .notEmpty()
                .withMessage(validationMessages_1.userMessages.emailRequired)
                .isEmail()
                .withMessage(validationMessages_1.userMessages.emailValid),
            (0, express_validator_1.body)("password")
                .isString()
                .notEmpty()
                .withMessage(validationMessages_1.userMessages.passwordRequired)
                .isLength({ min: 8, max: 20 })
                .withMessage(validationMessages_1.userMessages.passwordLength)
        ];
    },
    errorHandler: errorHandler_1.errorHandler
};
