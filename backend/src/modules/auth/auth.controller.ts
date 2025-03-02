import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDTO } from './dto/LoginUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() userData: LoginUserDTO) {
    return 'login';
  }
}
