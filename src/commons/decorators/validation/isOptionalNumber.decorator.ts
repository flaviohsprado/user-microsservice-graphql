import { applyDecorators } from '@nestjs/common';
import { Field } from '@nestjs/graphql';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export const IsOptionalNumber = (options?: ApiPropertyOptions) => {
  return applyDecorators(
    IsNumber({}),
    Field({ nullable: true }),
    ApiProperty({
      required: false,
      ...options,
    }),
  );
};
