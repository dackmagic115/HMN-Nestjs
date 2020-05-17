import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface userProps {
  username: string;
  password: string;
}

@Entity()
export class User extends BaseEntity implements userProps {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;
}
