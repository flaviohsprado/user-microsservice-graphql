import { applyDecorators } from '@nestjs/common';
import { Field } from '@nestjs/graphql';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export const IsOptionalString = (options?: ApiPropertyOptions) => {
  return applyDecorators(
    IsOptional(),
    IsString(),
    Field({ nullable: true }),
    ApiProperty({
      required: false,
      ...options,
    }),
  );
};
