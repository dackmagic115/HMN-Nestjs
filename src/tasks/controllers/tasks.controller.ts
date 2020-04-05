import { Controller, Get } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get()
  getAllTasks() {
    return this.service.getAllTasks();
  }
}
