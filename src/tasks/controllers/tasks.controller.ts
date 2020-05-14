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

  //   @Get()
  //   getAllTasks(@Query() filterDTO: FilterDTO): ITask[] {
  //     if (Object.keys(filterDTO).length) {
  //       return this.service.getAllWithFilters(filterDTO);
  //     }
  //     return this.service.getAllTasks();
  //   }

  @Post()
  createTask(@Body() dto: CreateTaskDTO) {
    return this.service.insertEntry(dto);
  }

  @Get(':id')
  getTaskById(@Param('id', ParseIntPipe) id: string) {
    return this.service.getTaskById(id);
  }

  //   @Delete(':id')
  //   deteleTask(@Param('id') id: string) {
  //     return this.service.deleteTask(id);
  //   }

  //   @Patch('/:id/status')
  //   updateTaskStatus(
  //     @Param('id') id: string,
  //     @Body('status') status: TaskStatus,
  //   ) {
  //     return this.service.updateTaskStatus(id, status);
  //   }
}
