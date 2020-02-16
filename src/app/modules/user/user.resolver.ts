import {
  Resolver,
  Query,
  Args,
  Context,
  Mutation,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { UserService } from './service/user.service';
import { UseGuards } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query()
  async users(@Args('page') page: number) {
    return await this.userService.showAll(page);
  }

  @Query()
  async user(@Args('username') username: string) {
    return await this.userService.read(username);
  }

  //   @Query()
  //   // @UseGuards(new AuthGuard())
  //   async whoami(@Context('user') user) {
  //     const { username } = user;
  //     return await this.userService.read(username);
  //   }

  @Mutation()
  async login(@Args('user') user: UserDTO) {
    return await this.userService.login(user);
  }

  @Mutation()
  async register(@Args('user') user: UserDTO) {
    return await this.userService.register(user);
  }

  //   @ResolveProperty()
  //   async comments(@Parent() user) {
  //     const { id } = user;
  //     return await this.commentService.showByUser(id);
  //   }
}
