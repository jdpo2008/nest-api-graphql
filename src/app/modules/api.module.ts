import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpErrorFilter,
    // },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterceptor,
    // },
  ],
  exports: [UserModule],
})
export class ApiModule {}
