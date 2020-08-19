import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface UserProps {
  username: string;
  password: string;
}

@Entity('user')
export class User extends BaseEntity implements UserProps {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;
}
