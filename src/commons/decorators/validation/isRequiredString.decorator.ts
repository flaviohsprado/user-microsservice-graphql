import { applyDecorators } from '@nestjs/common';
import { Field } from '@nestjs/graphql';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export const IsRequiredString = (options?: ApiPropertyOptions) => {
  return applyDecorators(
    IsString(),
    IsNotEmpty(),
    Field(),
    ApiProperty({ ...options }),
  );
};
