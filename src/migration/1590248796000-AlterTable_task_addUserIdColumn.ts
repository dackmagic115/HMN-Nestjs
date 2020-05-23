import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterTableTaskAddUserIdColumn1590248796000
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn(
      'task',
      new TableColumn({
        name: 'userId',
        type: 'int',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'task',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
