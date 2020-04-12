import { IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { TaskStatus } from '../entities/task.entity';

export class CreateTaskDTO {
  @IsNotEmpty()
  title!: string;

  @IsNotEmpty()
  description!: string;
}

// tslint:disable-next-line: max-classes-per-file
export class FilterDTO {
  @IsOptional()
  @IsEnum(TaskStatus)
  status!: TaskStatus;

  @IsOptional()
  search!: string;
}
