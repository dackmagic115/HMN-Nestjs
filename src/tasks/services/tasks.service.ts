import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, taskProp } from '../entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from '../repositories/task.repository';
import { FilterDTO } from '../dto/task.dto';

interface ITask {
  insertEntry(props: taskProp): Promise<Task>;
  getAll(query: FilterDTO): Promise<Task[]>;
  getTaskById(id: number): Promise<Task>;
  deleteEntry(id: number);
  updateEntry(id: number, props: taskProp): Promise<Task>;
}

@Injectable()
export class TasksService implements ITask {
  constructor(
    @InjectRepository(TaskRepository)
    private readonly repo: TaskRepository,
  ) {}

  async getAll(query: FilterDTO): Promise<Task[]> {
    return this.repo.queryTask(query);
  }

  async insertEntry(props: taskProp): Promise<Task> {
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

  async updateEntry(id: number, props: taskProp): Promise<Task> {
    const found = await this.repo.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    const newTask = { ...found, ...props };

    return this.repo.saveEntry(newTask);
  }

  async deleteEntry(id: number) {
    return this.repo.deleteEntry(id);
  }
}
