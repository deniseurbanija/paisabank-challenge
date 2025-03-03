import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDTO } from './dto/LoginUser.dto';
import { AuthService } from './auth.service';

@Controller('paisabank')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() userData: LoginUserDTO) {
    const user = await this.authService.login(userData);

    if (!user) {
      return {
        success: false,
        message: 'Invalid credentials',
      };
    }

    return {
      success: true,
      data: {
        name: user.name,
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBhaXNhbngiLCJpYXQiOjE1MTYyMzkwMjJ9',
      },
    };
  }
}
