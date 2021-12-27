import fs from 'fs';
import { getFilePath, validateInput } from "./helpers";
import { Objects } from './Objects';
import { Commands } from './Commands';
import code, { Code } from "./code";
import inputProcessor from './inputProcessor';

try {
  const args = process.argv.slice(2);
  const { description, command, object } = inputProcessor(args);
  
  validateInput(command as Commands, object as Objects, description, args);

  fs.writeFileSync(getFilePath(object, description), code[object as keyof Code](description), { encoding: 'utf8' });
} catch (err) {
  console.log("There has been an error: ", err.message)
  process.exit();
}


