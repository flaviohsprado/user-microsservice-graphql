import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsRequiredStringColumn } from './../../commons/decorators/column/isRequiredStringColumn.decorator';
import { User } from './user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @IsRequiredStringColumn()
  public name: string;

  @IsRequiredStringColumn()
  public permissions: string;

  @OneToMany(() => User, (User) => User.role)
  public users?: User[];
}
