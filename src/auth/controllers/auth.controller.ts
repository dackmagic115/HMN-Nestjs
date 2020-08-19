import {
  Controller,
  Injectable,
  Post,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService, TokenPayload } from '../services/auth.service';
import { AuthDTO } from '../dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../get-user.decorator';
import { User } from '../entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post()
  async signup(@Body() dto: AuthDTO) {
    return this.service.insertEntry(dto);
  }

  @Post('signIn')
  async signIn(@Body() dto: AuthDTO): Promise<TokenPayload | null> {
    return this.service.authCreadential(dto);
  }

  @Post('/testGuard')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    return { user };
  }
}
