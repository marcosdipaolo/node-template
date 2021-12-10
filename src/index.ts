import "reflect-metadata";
import { Environment } from "./Environment";
Environment.getInstance();  
import { Server as HttpServer } from "http";
import { getConnection } from "typeorm";
import { container } from "./container/inversify-config";
import { InversifyExpressServer } from "inversify-express-utils";
import { Application } from "./Application";
import { DB } from "./database/DB";

let httpServer: HttpServer;
const db = container.get<DB>(DB);

(async () => {
  await db.getDbConnection();
  const inversifyExpressServer = new InversifyExpressServer(container);
  const app = container.get<Application>(Application);
  const expressApp = app.build(inversifyExpressServer);
  httpServer = expressApp.listen(3000, () => {
    console.log("server running at port 3000");    
  });
})();

["SIGINT", /*"SIGTERM",*/ "SIGQUIT"].forEach((signature: string) => {
  process.on(signature, () => {
    httpServer.close((err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`\n${signature}: Gracefuly shutting down server.`);
    });
    const conn = getConnection(process.env.NODE_ENV || "development");
    conn.close();
  });
});