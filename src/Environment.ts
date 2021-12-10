import * as dotenv from "dotenv";

export class Environment {
  private readonly qualifier: string | undefined;
  private static instance: Environment;
  private constructor() {
    this.qualifier = process.env.NODE_ENV;
    switch (this.qualifier) {
      case "test":
        dotenv.config({ path: `${process.cwd()}/.env.test` });
        break;
      case "development":
        dotenv.config({ path: `${process.cwd()}/.env.development` });
        break;
      default:
        return;
    }
  }

  static getInstance(): Environment {
    if (Environment.instance instanceof Environment) {
      return Environment.instance;
    }
    Environment.instance = new Environment(); 
    return Environment.instance;
  }

  get nodeEnv(): string {
    return process.env.NODE_ENV || "development";
  }

  logEnvObject(logger = console.log) {
    logger(process.env);
  }
}