import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/enum/config.enum';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private configService: ConfigService) {}

  @Get()
  getHello(): string {
    console.log(
      'console print: configService DATABASE_USER >>>>>>',
      this.configService.get(ConfigEnum.DATABASE_USER),
    );
    console.log(
      'console print: configService DATABASE_PASSWORD >>>>>>',
      this.configService.get(ConfigEnum.DATABASE_PASSWORD),
    );
    console.log(
      'console print: configService DATABASE_URL >>>>>>',
      this.configService.get(ConfigEnum.DATABASE_URL),
    );

    return 'get user success';
  }
}
