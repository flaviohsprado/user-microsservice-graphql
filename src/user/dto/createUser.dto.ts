import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/swagger';
import { uuid } from 'uuidv4';
import { User } from '../entities/user.entity';
import { IsOptionalString } from './../../commons/decorators/validation/isOptionalString.decorator';
import { IsPhoneNumberCustom } from './../../commons/decorators/validation/isPhoneNumber.decorator';
import { IsRequiredString } from './../../commons/decorators/validation/isRequiredString.decorator';
import { createHash } from './../../utils/hash.utils';

@InputType()
export class CreateUserDto extends PartialType(User) {
  @IsOptionalString()
  public id?: string;

  @IsOptionalString()
  public username: string;

  @IsRequiredString()
  public password: string;

  @IsRequiredString()
  public email: string;

  @IsOptionalString()
  public dateOfBirth?: string;

  @IsPhoneNumberCustom('BR')
  public phoneNumber?: string;

  @IsOptionalString()
  public address?: string;

  @IsOptionalString()
  public neighborhood?: string;

  @IsOptionalString()
  public city?: string;

  @IsOptionalString()
  public state?: string;

  @IsOptionalString()
  public country?: string;

  @IsOptionalString()
  public zipCode?: string;

  @IsOptionalString()
  public roleId?: string;

  constructor(props: CreateUserDto, id?: string) {
    super();
    Object.assign(this, props);
    this.id = id || uuid();
  }

  public async encryptPassword?(): Promise<CreateUserDto> {
    this.password = await createHash(this.password);
    return this;
  }
}
