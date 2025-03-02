import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
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
    const username = userData.username;
    try {
      if (!userData.username || !userData.password) {
        throw new BadRequestException('Email and password are required');
      }
      const user = await this.usersRepository.findOne({ where: { username } });

      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      /**
 * {
    "success": boolean,
    "data": {
			"name": string,
			"token": string
		}
}
 */
      return {
        success: true,
        data: { name: user.username, token: 'token12345ficticio6789' },
      };
    } catch (error) {}
  }
}
