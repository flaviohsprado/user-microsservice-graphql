import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeleteResult } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @Query((returns) => User)
  public async findOne(@Args('id') id: string): Promise<User> {
    return this.service.findOne(id);
  }

  @Query((returns) => [User])
  public async findAll(): Promise<User[]> {
    return this.service.findAll();
  }

  @Mutation((returns) => User)
  public async create(@Args('user') user: CreateUserDto): Promise<User> {
    user = await user.encryptPassword();
    return this.service.create(user, undefined);
  }

  @Mutation((returns) => User)
  public async update(
    @Args('id') id: string,
    @Args('user') user: UpdateUserDto,
  ): Promise<User> {
    user = new UpdateUserDto(user, id);
    return this.service.update(id, user, undefined);
  }

  @Mutation((returns) => Boolean)
  public async delete(@Args('id') id: string): Promise<boolean> {
    return this.service.destroy(id);
  }
}
