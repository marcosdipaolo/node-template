import fs from 'fs';
import { getFilePath, toPascalCase, validateInput } from "./helpers";
import code, { CodeSnippets } from "./code";
import { Commands } from "./Commands";
import { Objects } from "./Objects";
import { actionPrompt, objectNamePrompt, objectPrompt } from "./prompts"

(async () => {
  try {
    const action = await actionPrompt.run();
    switch (action) {
      case Commands.MAKE:
        const objectToBeMade: Objects = await objectPrompt.run();
        const objName = toPascalCase((await objectNamePrompt(objectToBeMade)).objectName);
        validateInput(action as Commands, objectToBeMade as Objects, objName);
        fs.writeFileSync(
          getFilePath(objectToBeMade, objName), 
          code[objectToBeMade as keyof CodeSnippets](objName), 
          { encoding: 'utf8' }
        );
        break;
    }
  } catch (err) {
  }
})();


