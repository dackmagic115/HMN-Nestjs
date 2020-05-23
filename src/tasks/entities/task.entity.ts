import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/auth/entities/user.entity';

export interface taskProp {
  title: string;
  description: string;
  status: TaskStatus;
  userId: number;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

@Entity('task')
export class Task extends BaseEntity implements taskProp {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  status!: TaskStatus;

  @Column()
  userId!: number;

  @ManyToOne(
    type => User,
    user => user.tasks,
    { eager: false },
  )
  user?: User;
}
