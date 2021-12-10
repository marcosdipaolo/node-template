export default {
  migration: description => `
import { MigrationInterface, QueryRunner } from "typeorm";

export default class ${description}${Date.now()} implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {}

  public async down(queryRunner: QueryRunner): Promise<void> {}
  
}
  `,
  entity: description => `
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ${description} {
  @PrimaryGeneratedColumn()
  id!: number
}
  `,
  service: () => ``,
  repository: () => ``
}