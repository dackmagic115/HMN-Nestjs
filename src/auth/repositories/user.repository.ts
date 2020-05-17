import { EntityRepository, Repository } from 'typeorm';
import { User, UserProps } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async insertEntry(props: UserProps): Promise<User> {
    const entry = this.create(props);
    return this.save(entry);
  }
}
