export enum Objects {
  MIGRATION = 'migration',
  ENTITY = 'entity',
  SERVICE = 'service',
  REPOSITORY = 'repository',
  VALIDATOR = 'validator',
}

const objects: Objects[] = [];

for (let item in Objects) {
  objects.push(Objects[item] as Objects);
}

export { objects };