import { MigrationInterface, QueryRunner } from 'typeorm';

export class FillUsers1714486165648 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO user (name, headId)
      VALUES ('John Doe', NULL),
             ('Alice Smith', 1),
             ('Bob Johnson', 1),
             ('Emma Brown', 2);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM user;
    `);
  }
}
