
import { ValidationChain } from "express-validator";
import { errorHandler } from "./errorHandler";

export const StudentValidator = {
  create(): ValidationChain[] {
    return [];
  },

  errorHandler
}  
  