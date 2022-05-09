import { IsOptionalString } from './../../commons/decorators/validation/isOptionalString.decorator';
import { InputType } from '@nestjs/graphql';
import { CreateUserDto } from './createUser.dto';

@InputType()
export class UpdateUserDto extends CreateUserDto {
  @IsOptionalString()
  public password: string;

  @IsOptionalString()
  public username: string;

  @IsOptionalString()
  public email: string;

  constructor(props: UpdateUserDto, id: string) {
    super(props, id);
  }
}
