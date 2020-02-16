import { Controller } from '@nestjs/common';
import { AuthGuard } from './guard/user.guard';

@Controller('user')
export class UserController {}
