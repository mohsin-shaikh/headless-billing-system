import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Token } from './models/token.model';
import { LoginInput } from './dto/login.input';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: Token })
  login(@Body() { email, password }: LoginInput) {
    return this.authService.login(email, password);
  }
}
