import { EntityRepository, Repository } from 'typeorm';
import { Task, taskProp } from '../entities/task.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async saveEntry(props: taskProp) {
    const entry = this.create(props);
    return this.save(entry);
  }
}
