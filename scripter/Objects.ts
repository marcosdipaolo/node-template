export enum Objects {
  MIGRATION = 'Migration',
  ENTITY = 'Entity',
  SERVICE = 'Service',
  REPOSITORY = 'Repository',
  VALIDATOR = 'Validator',
}

const objects: Objects[] = [];

for (let item in Objects) {
  objects.push(Objects[item] as Objects);
}

export { objects };