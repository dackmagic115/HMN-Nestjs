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
import { CreateTaskDTO, FilterDTO, UpdateTaskDTO } from '../dto/task.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';

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
  createTask(@GetUser() user: User, @Body() dto: CreateTaskDTO) {
    return this.service.insertEntry({ ...dto, userId: user.id });
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  getTaskById(@Param('id', ParseIntPipe) id: number) {
    return this.service.getTaskById(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard())
  update(
    @GetUser() user: User,
    @Body() dto: UpdateTaskDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.service.updateEntry(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  deteleTask(@Param('id', ParseIntPipe) id: number) {
    return this.service.deleteEntry(id);
  }
}
