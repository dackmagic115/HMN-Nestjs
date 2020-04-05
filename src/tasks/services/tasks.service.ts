import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid/v1';
import { CreateTaskDTO } from '../dto/task.dto';

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

@Injectable()
export class TasksService {
  private tasks: ITask[] = [];

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id: string): ITask {
    return this.tasks.find(task => task.id === id);
  }

  createTask(CreateTaskDto: CreateTaskDTO): ITask {
    const { title, description } = CreateTaskDto;
    const task: ITask = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string): string {
    this.tasks = this.tasks.filter(r => r.id !== id);
    return 'success';
  }
}
