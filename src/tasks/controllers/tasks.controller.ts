import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.service.getTaskById(id);
  }
}
