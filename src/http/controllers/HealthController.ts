import { BaseHttpController, controller, httpGet, interfaces } from "inversify-express-utils";

@controller("")
export class HealthController extends BaseHttpController implements interfaces.Controller  {
  @httpGet("/health")
  health(){
    return this.json({message: "Yupi!!!"});
  }
}