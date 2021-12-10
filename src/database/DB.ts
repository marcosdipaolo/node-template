import { injectable } from "inversify";
import { createConnection, getConnection, ObjectType } from "typeorm";
import { Environment } from "../Environment";
import config from "../ormconfig"

@injectable()
export class DB {

  constructor(private env: Environment){}

  async getDbConnection() {
    try {      
      const connConfig = config.find(conf => conf.name === this.env.nodeEnv);
      await createConnection(connConfig);
      const connection = getConnection(this.env.nodeEnv);
      if (connection.isConnected) {
        console.log("db connected with", connection.name, "connection");
        return connection;
      }
      throw new Error("there was a problem connecting to the database...");
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }
}