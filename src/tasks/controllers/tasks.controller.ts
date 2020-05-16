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
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { CreateTaskDTO, FilterDTO } from '../dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get()
  getAll(@Query(ValidationPipe) FilterDTO: FilterDTO) {
    return this.service.getAll(FilterDTO);
  }

  @Post()
  createTask(@Body() dto: CreateTaskDTO) {
    return this.service.insertEntry(dto);
  }

  @Get(':id')
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    return this.service.getTaskById(id);
  }

  @Put(':id')
  update(@Body() dto: CreateTaskDTO, @Param('id', ParseIntPipe) id: number) {
    return this.service.updateEntry(id, dto);
  }

  @Delete(':id')
  deteleTask(@Param('id', ParseIntPipe) id: number) {
    return this.service.deleteEntry(id);
  }
}
