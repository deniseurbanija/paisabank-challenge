import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginUserDTO } from './dto/LoginUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/db/entities/Users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async login(userData: LoginUserDTO) {
    try {
      if (!userData.email || !userData.password) {
        throw new BadRequestException('Email and password are required');
      }

      const user = await this.usersRepository.findOne({
        where: { email: userData.email },
      });

      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      // Aquí debería haber una verificación de contraseña
      const isPasswordValid = await bcrypt.compare(
        userData.password,
        user.password,
      );
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid credentials');
      }

      return {
        success: true,
        data: {
          name: user.name,
          token: 'token1234ficticio5678',
        },
      };
    } catch (error) {
      throw error;
    }
  }
}
