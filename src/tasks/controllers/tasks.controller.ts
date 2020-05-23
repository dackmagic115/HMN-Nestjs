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
  UseGuards,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { CreateTaskDTO, FilterDTO } from '../dto/task.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Get()
  @UseGuards(AuthGuard())
  getAll(@Query(ValidationPipe) FilterDTO: FilterDTO) {
    return this.service.getAll(FilterDTO);
  }

  @Post()
  @UseGuards(AuthGuard())
  createTask(@Body() dto: CreateTaskDTO) {
    return this.service.insertEntry(dto);
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    return this.service.getTaskById(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  update(@Body() dto: CreateTaskDTO, @Param('id', ParseIntPipe) id: number) {
    return this.service.updateEntry(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  deteleTask(@Param('id', ParseIntPipe) id: number) {
    return this.service.deleteEntry(id);
  }
}
