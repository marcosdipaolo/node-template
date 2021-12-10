import fs from 'fs';
import { toPascalCase, getFilePath, validateInput } from "./helpers";
import { Objects } from './Objects';
import { Commands } from './Commands';
import code from "./code";

try {
  const args = process.argv.slice(2);
  const task = args[0];
  const description = toPascalCase(args[1]);
  const [command, object] = task.split(":");
  
  validateInput(command as Commands, object as Objects, description, args);
  
  fs.writeFileSync(getFilePath(object, description), code[object](description), { encoding: 'utf8' });
} catch(err) {
  console.log("There has been an error: ", err.message)
  process.exit();
}


