import { injectable, unmanaged } from "inversify";
import { getRepository } from "typeorm";
import { Environment } from "../Environment";

@injectable()
export class Repository {
  protected instance: any;
  constructor(protected env: Environment) {
    
  }
  protected setEntity(entity: Function) {
    this.instance = getRepository(entity, this.env.nodeEnv)
  }
}