import { Commands } from "./Commands";
import { objects, Objects } from "./Objects";

const commands = [
  Commands.MAKE
];

const commandExist = (command: Commands) => commands.indexOf(command) !== -1;
const objectExist = (object: Objects) => objects.indexOf(object) !== -1;

export const getFilePath = (object: string, description: string) => {
  let filePath: string;
  switch (object) {
    case Objects.MIGRATION:
      filePath = `src/database/migrations/${Date.now()}-${description}.ts`;
      break;
    case Objects.SERVICE:
      filePath = `src/services/${description}.ts`;
      break;
    case Objects.ENTITY:
      filePath = `src/entities/${description}.ts`;
      break;
    case Objects.REPOSITORY:
      filePath = `src/repositories/${description}.ts`;
      break;
    case Objects.VALIDATOR:
      filePath = `src/http/middleware/validators/${description}.ts`;
      break;
  }
  return filePath;
}

export const toPascalCase = (string: string = "") => {
  return `${string}`
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w+)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\s/, 'g'), '')
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

export const validateInput = (command: Commands, object: Objects, description: string) => {
  if (!commandExist(command as Commands)) {
    console.log(`Command "${command}" does not exist.`);
    process.exit();
  };
  if (!objectExist(object as Objects)) {
    console.log(`I don't understand what you mean with: "${object}".`);
    process.exit();
  };
  if (!description) {
    console.log(`That is not a valid name: "${description}".`);
    process.exit();
  }
}