import { Injectable, ForbiddenException } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProps, User } from '../entities/user.entity';

export interface IAuthService {
  insertEntry(props: UserProps): Promise<User>;
}

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @InjectRepository(UserRepository)
    private repo: UserRepository,
  ) {}

  async insertEntry(props: UserProps): Promise<User> {
    const exist = await this.repo.findOne({ username: props.username });

    if (exist) throw new ForbiddenException(`username is existing`);

    return this.repo.insertEntry(props);
  }
}
