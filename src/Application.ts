import { Application as ExpressApplication, json, urlencoded } from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import "./http/controllers/HealthController";
import "./http/controllers/UserController";
import { injectable } from "inversify";
import morgan from "morgan";

@injectable()
export class Application {
  build = (server: InversifyExpressServer): ExpressApplication => {    
    server.setConfig((app: ExpressApplication) => {
      this.addMiddlewares(app);
    });
    return server.build();
  };

  private addMiddlewares = (app: ExpressApplication): void => {
    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use(morgan("dev"));
  };
}