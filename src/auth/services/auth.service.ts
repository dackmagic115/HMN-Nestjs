import { Injectable, ForbiddenException } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProps, User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

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

    const salt = await bcrypt.genSalt();

    props.password = await this.hashPassword(props.password, salt);
    return this.repo.insertEntry(props);
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
