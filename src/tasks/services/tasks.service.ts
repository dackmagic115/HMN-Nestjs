import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, taskProp } from '../entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from '../repositories/task.repository';

interface ITask {
  insertEntry(props: taskProp): Promise<Task>;
  getTaskById(id: number): Promise<Task>;
  deleteEntry(id: number);
}

@Injectable()
export class TasksService implements ITask {
  constructor(
    @InjectRepository(TaskRepository)
    private readonly repo: TaskRepository,
  ) {}

  async insertEntry(props: taskProp) {
    const entry = await this.repo.saveEntry(props);

    return entry;
  }

  async getTaskById(id: number): Promise<Task> {
    const found = await this.repo.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  async deleteEntry(id: number) {
    return this.repo.deleteEntry(id);
  }
}
