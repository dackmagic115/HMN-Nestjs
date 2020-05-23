import { Controller, Injectable, Post, Body } from '@nestjs/common';
import { AuthService, TokenPayload } from '../services/auth.service';
import { AuthDTO } from '../dto/auth.dto';

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
}
