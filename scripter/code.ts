export type CodeSnippets = {
  Migration: (description: string) => string,
  Entity: (description: string) => string,
  Service: () => string,
  Repository: () => string,
  Validator: (description: string) => string,
}

export default {
  Migration: description => `
import { MigrationInterface, QueryRunner } from "typeorm";

export default class ${description}${Date.now()} implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {}

  public async down(queryRunner: QueryRunner): Promise<void> {}
  
}
  `,
  Entity: description => `
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ${description} {
  @PrimaryGeneratedColumn()
  id!: number
}
  `,
  Service: () => ``,
  Repository: () => ``,
  Validator: (description: string) => `
import { ValidationChain } from "express-validator";
import { errorHandler } from "./errorHandler";

export const ${description} = {
  create(): ValidationChain[] {
    return [];
  },

  errorHandler
}  
  `,
} as CodeSnippets