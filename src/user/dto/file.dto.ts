import { IsRequiredString } from './../../commons/decorators/validation/isRequiredString.decorator';
import { ApiProperty } from '@nestjs/swagger';
import { uuid } from 'uuidv4';

export class FileDto {
  @IsRequiredString()
  public id: string;

  @IsRequiredString()
  public ownerId: string;

  @IsRequiredString()
  public ownerTy1pe: string;

  @IsRequiredString()
  public fieldname: string;

  @IsRequiredString()
  public originalname: string;

  @IsRequiredString()
  public encoding: string;

  @IsRequiredString()
  public mimetype: string;

  @ApiProperty()
  public buffer: Uint8Array;

  @IsRequiredString()
  public key: string;

  @IsRequiredString()
  public url: string;

  constructor(file: FileDto, id?: string) {
    Object.assign(this, file, { id: id || uuid() });
  }

  public generateFileKey(): FileDto {
    const name = this.originalname.split('.')[0];
    this.key = `${this.id}.${name}`;
    return this;
  }
}
