import { RequestHandler } from "express";
import { ValidationChain } from "express-validator";

export interface IUserValidator {
  create(): ValidationChain[],
  errorHandler(): RequestHandler
}