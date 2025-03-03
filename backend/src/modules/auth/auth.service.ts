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
    const user = await this.usersRepository.findOne({
      where: { email: userData.email },
    });

    if (!user) {
      return null; // O manejar de otra forma
    }

    // Idealmente esto debería ser: await bcrypt.compare(userData.password, user.password)
    if (user.password !== userData.password) {
      return null; // O manejar de otra forma
    }

    return user;
  }
}

// Aquí debería haber una verificación de contraseña
// const isPasswordValid = await bcrypt.compare(
//   userData.password,
//   user.password,
// );
// if (!isPasswordValid) {
//   throw new UnauthorizedException('Invalid credentials');
// }
