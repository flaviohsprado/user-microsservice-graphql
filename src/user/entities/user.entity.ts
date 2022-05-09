import { ObjectType, Field } from '@nestjs/graphql';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsOptionalStringColumn } from './../../commons/decorators/column/isOptionalStringColumn.decorator';
import { IsRequiredStringColumn } from './../../commons/decorators/column/isRequiredStringColumn.decorator';
import { File } from './file.entity';
import { Role } from './role.entity';

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryColumn()
  public id: string;

  @IsOptionalStringColumn()
  public username: string;

  @IsRequiredStringColumn()
  public password: string;

  @IsRequiredStringColumn()
  public email: string;

  @IsOptionalStringColumn()
  public dateOfBirth: string;

  @IsOptionalStringColumn()
  public phoneNumber: string;

  @IsOptionalStringColumn()
  public address: string;

  @IsOptionalStringColumn()
  public neighborhood: string;

  @IsOptionalStringColumn()
  public city: string;

  @IsOptionalStringColumn()
  public state: string;

  @IsOptionalStringColumn()
  public country: string;

  @IsOptionalStringColumn()
  public zipCode: string;

  @CreateDateColumn()
  public createdAt: string;

  @UpdateDateColumn()
  public updatedAt: string;

  @IsOptionalStringColumn({ type: 'boolean', default: false })
  public emailVerified: boolean;

  @IsOptionalStringColumn({ type: 'boolean', default: false })
  public phoneVerified: boolean;

  @IsOptionalStringColumn()
  public accessToken: string;

  //RELATIONS
  @OneToOne(() => File, (file) => file.ownerId, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'fileId' })
  public file?: File;

  @IsOptionalStringColumn()
  public fileId?: string;

  @ManyToOne(() => Role, (Role) => Role.id)
  @JoinColumn({ name: 'roleId' })
  public role?: Role;

  @IsOptionalStringColumn()
  public roleId?: string;
}
