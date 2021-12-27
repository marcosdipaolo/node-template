import { toPascalCase } from "./helpers";

export default (args: string[]) => {
  const task = args[0];
  const description = toPascalCase(args[1]);
  const [command, object] = task.split(":");
  return { description, command, object };
}