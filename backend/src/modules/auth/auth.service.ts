import { Injectable } from '@nestjs/common';
import { LoginUserDTO } from './dto/LoginUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/db/entities/Users.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async login(userData: LoginUserDTO) {
    const user = await this.usersRepository.findOne({
      where: { email: userData.email },
    });

    if (!user) {
      return null;
    }

    if (user.password !== userData.password) {
      return null;
    }

    return user;
  }
}
