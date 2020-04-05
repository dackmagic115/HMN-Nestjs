export class CreateTaskDTO {
  title: string;
  description: string;
}

export interface FilterDTO {
  status: string;
  search: string;
}
