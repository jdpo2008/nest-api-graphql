import { AppService } from './app.service';
import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
  Mutation,
  Context,
} from '@nestjs/graphql';

@Resolver('App')
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query()
  async hello() {
    return await this.appService.getHello();
  }

  @Query()
  async saludo() {
    return await this.appService.getHello();
  }
}
