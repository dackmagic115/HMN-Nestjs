import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { CreateTaskDTO, FilterDTO } from '../dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Post()
  createTask(@Body() dto: CreateTaskDTO) {
    return this.service.insertEntry(dto);
  }

  @Get(':id')
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    return this.service.getTaskById(id);
  }

  @Delete(':id')
  deteleTask(@Param('id', ParseIntPipe) id: number) {
    return this.service.deleteEntry(id);
  }
}
