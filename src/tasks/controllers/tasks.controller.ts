import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService, ITask } from '../services/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get()
  getAllTasks(): ITask[] {
    return this.service.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): ITask {
    return this.service.createTask(title, description);
  }
}
