import { EntityRepository, Repository } from 'typeorm';
import { Task, taskProp } from '../entities/task.entity';
import { FilterDTO } from '../dto/task.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async saveEntry(props: taskProp) {
    const entry = this.create(props);
    return this.save(entry);
  }

  async deleteEntry(id: number) {
    return this.delete(id);
  }

  async queryTask(queryString: FilterDTO): Promise<Task[]> {
    const { status, search } = queryString;
    const query = await this.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status =:status', { status });
    }

    if (search) {
      query.andWhere(
        '(task.title LIKE :search OR task.description LIKE :search)',
        { search: `%${search}%` },
      );
    }

    return query.getMany();
  }
}
