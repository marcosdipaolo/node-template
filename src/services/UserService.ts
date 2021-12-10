import { Request } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../container/types";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";
import { IUserService } from "./interfaces/IUserService";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(TYPES.userRepository) private userRepository: IUserRepository
  ){}

  createUser = (req: Request) => {
    const {firstName, lastName, password, email} = req.body;
    const user = this.userRepository.createUser({
      firstName, lastName, password, email
    });
    return user;
  }
  
}