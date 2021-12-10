import { Request } from "express";
import { User } from "../../entities/User";

export interface IUserService {
  createUser(req: Request): Promise<User>
}