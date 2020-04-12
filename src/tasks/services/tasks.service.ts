import { Injectable, NotFoundException } from '@nestjs/common';
import * as uuid from 'uuid/v1';
import { CreateTaskDTO, FilterDTO } from '../dto/task.dto';

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
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

  getAllWithFilters(filterDto: FilterDTO): ITask[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter(task => task.status === status);
    }

    if (search) {
      tasks = tasks.filter(
        task =>
          task.title.includes(search) || task.description.includes(search),
      );
    }

    return tasks;
  }

  getTaskById(id: string): ITask {
    const found = this.tasks.find(task => task.id === id);
    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return found;
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

  updateTaskStatus(id: string, status: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
