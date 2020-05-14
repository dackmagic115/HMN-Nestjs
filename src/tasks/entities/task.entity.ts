import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface taskProp {
  title: string;
  description: string;
  status: TaskStatus;
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
}
