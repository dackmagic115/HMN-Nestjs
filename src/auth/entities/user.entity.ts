import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Task } from 'src/tasks/entities/task.entity';

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

  @OneToMany(
    type => Task,
    task => task.user,
    { eager: true },
  )
  tasks?: Task[];
}
