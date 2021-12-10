import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1637068619090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "char(36)",
            isPrimary: true
          },
          {
            name: "firstName",
            type: "varchar",
          },
          {
            name: "lastName",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "password",
            type: "varchar",
          },
        ]
      }), true, true, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users", true, true, true);
    }

}
