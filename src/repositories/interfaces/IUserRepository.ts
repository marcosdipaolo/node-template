import { UserAttributes } from "../../entities/attributes/UserAttributes";
import { User } from "../../entities/User";

export interface IUserRepository {
  createUser(data: UserAttributes): Promise<User>;
}