import { body, ValidationChain } from "express-validator";
import { IUserValidator } from "./interfaces";
import { userMessages } from "./validationMessages";
import { errorHandler } from "./errorHandler";

export const userValidator: IUserValidator = {
  create(): ValidationChain[] {
    return [
      body("firstName")
        .isString()
        .notEmpty()
        .withMessage(userMessages.firstNameRequired),
      body("lastName")
        .isString()
        .notEmpty()
        .withMessage(userMessages.lastNameRequired),
      body("email")
        .isString()
        .notEmpty()
        .withMessage(userMessages.emailRequired)
        .isEmail()
        .withMessage(userMessages.emailValid),
      body("password")
        .isString()
        .notEmpty()
        .withMessage(userMessages.passwordRequired)
        .isLength({ min: 8, max: 20 })
        .withMessage(userMessages.passwordLength)
    ];
  },
  errorHandler
}