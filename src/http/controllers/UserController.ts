import { Request } from "express";
import { inject } from "inversify";
import { BaseHttpController, controller, httpPost, interfaces, request } from "inversify-express-utils";
import { TYPES } from "../../container/types";
import { IUserService } from "../../services/interfaces/IUserService";
import { userValidator } from "../middleware/validators/userValidator";

@controller("/users")
export class UserController extends BaseHttpController implements interfaces.Controller {
  constructor(
    @inject(TYPES.userService) private userService: IUserService
  ) {
    super();
  }
  
  @httpPost("/", ...userValidator.create(), userValidator.errorHandler())
  createUser(@request() req: Request) {
    return this.userService.createUser(req);
  }
}