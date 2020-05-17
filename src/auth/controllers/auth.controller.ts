import { Controller, Injectable, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthDTO } from '../dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post()
  async signup(@Body() dto: AuthDTO) {
    return this.service.insertEntry(dto);
  }
}
