import { injectable } from "inversify";
import { UserAttributes } from "../entities/attributes/UserAttributes";
import { User } from "../entities/User";
import { Environment } from "../Environment";
import { IUserRepository } from "./interfaces/IUserRepository";
import { Repository } from "./Repository";

@injectable()
export class UserRepository extends Repository implements IUserRepository {
  
  constructor(protected env: Environment){
    super(env);
    this.setEntity(User);
  }

  createUser(data: UserAttributes): Promise<User> {
    const user = new User();
    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.email = data.email;
    user.password = data.password;
    return this.instance.save(user);
  }
}