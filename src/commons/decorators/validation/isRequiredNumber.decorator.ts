import { applyDecorators } from '@nestjs/common';
import { Field } from '@nestjs/graphql';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export const IsRequiredNumber = (options?: ApiPropertyOptions) => {
  return applyDecorators(
    IsNumber(),
    IsNotEmpty(),
    Field(),
    ApiProperty({ ...options }),
  );
};
