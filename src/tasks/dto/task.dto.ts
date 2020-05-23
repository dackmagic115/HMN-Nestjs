import { IsNotEmpty, IsOptional, IsEnum, IsInt } from 'class-validator';
import { TaskStatus } from '../entities/task.entity';

export class CreateTaskDTO {
  @IsNotEmpty()
  title!: string;

  @IsNotEmpty()
  description!: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status!: TaskStatus;
}

export class UpdateTaskDTO {
  @IsNotEmpty()
  title!: string;

  @IsNotEmpty()
  description!: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status!: TaskStatus;

  @IsNotEmpty()
  @IsInt()
  userId!: number;
}

export class FilterDTO {
  @IsOptional()
  @IsEnum(TaskStatus)
  status!: TaskStatus;

  @IsOptional()
  search!: string;
}
