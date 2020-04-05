import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService, ITask } from '../services/tasks.service';
import { CreateTaskDTO } from '../dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get()
  getAllTasks(): ITask[] {
    return this.service.getAllTasks();
  }

  @Post()
  createTask(@Body() dto: CreateTaskDTO): ITask {
    return this.service.createTask(dto);
  }
}
