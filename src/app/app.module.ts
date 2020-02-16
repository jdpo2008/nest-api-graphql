import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { ApiModule } from './modules/api.module';

@Module({
  imports: [
    ApiModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/app/graphql.ts'),
        outputAs: 'class',
      },
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mongodb',
        url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWD}@cluster0-2jewx.mongodb.net/test?retryWrites=true&w=majority`,
        database: process.env.DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
