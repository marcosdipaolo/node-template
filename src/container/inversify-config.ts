import { Container } from "inversify";
import { Application } from "../Application";
import { Environment } from "../Environment";
import { DB } from "../database/DB";
import { UserRepository } from "../repositories/UserRepository";
import { IUserService } from "../services/interfaces/IUserService";
import { UserService } from "../services/UserService";
import { TYPES } from "./types";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";

const container = new Container();

container.bind<Application>(Application).toSelf();
container.bind<DB>(DB).toSelf();
container.bind<Environment>(Environment).toConstantValue(Environment.getInstance());
container.bind<IUserService>(TYPES.userService).to(UserService);
container.bind<IUserRepository>(TYPES.userRepository).to(UserRepository);

export { container }

