import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO, FilterDTO } from '../dto/task.dto';
import { Task } from '../entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from '../repositories/task.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private readonly repo: TaskRepository,
  ) {}

  // getAllTasks() {}

  // getAllWithFilters(filterDto: FilterDTO): {

  // }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.repo.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  // createTask(CreateTaskDto: CreateTaskDTO) {

  // }

  // deleteTask(id: string): string {

  // }

  // updateTaskStatus(id: string, status: TaskStatus) {

  // }
}
