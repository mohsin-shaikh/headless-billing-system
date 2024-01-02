import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Token } from './models/token.model';
import { LoginInput } from './dto/login.input';
import { SignupInput } from './dto/signup.input';
import { RefreshTokenInput } from './dto/refresh-token.input';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: Token })
  login(@Body() { email, password }: LoginInput) {
    return this.authService.login(email.toLowerCase(), password);
  }

  @Post('signup')
  @ApiOkResponse({ type: Token })
  singup(@Body() data: SignupInput) {
    data.email = data.email.toLowerCase();
    return this.authService.createUser(data);
  }

  @Post('refresh-token')
  @ApiOkResponse({ type: Token })
  refreshToken(@Body() { token }: RefreshTokenInput) {
    return this.authService.refreshToken(token);
  }
}
