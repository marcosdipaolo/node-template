import Enquirer from "enquirer";
import { Objects } from "./Objects";

export const actionPrompt = new (Enquirer as any).Select({
    name: "action",
    message: "What do you want to do?",
    choices: [
      "Make something",
      "Some other stuff"
    ]
});

export const objectPrompt = new (Enquirer as any).Select({
    name: 'objectToBeMade',
    message: 'What do you want to make?',
    choices: [
        Objects.MIGRATION,
        Objects.ENTITY,
        Objects.REPOSITORY,
        Objects.SERVICE,
        Objects.VALIDATOR,
    ]
});

export const migrationNamePrompt = () => (new Enquirer as any).prompt({
    type: 'input',
    name: 'migrationName',
    message: 'Migration Name?'
});

export const objectNamePrompt = (object: Objects) => (new Enquirer as any).prompt({
    type: 'input',
    name: 'objectName',
    message: `${object} Name?`
});