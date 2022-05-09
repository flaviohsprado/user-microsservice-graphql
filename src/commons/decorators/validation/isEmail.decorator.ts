import { applyDecorators } from '@nestjs/common';
import { Field } from '@nestjs/graphql';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail } from 'class-validator';

export const IsEmailCustom = (options?: ApiPropertyOptions) => {
  return applyDecorators(
    IsOptional(),
    IsString(),
    IsEmail(),
    Field({ nullable: true }),
    ApiProperty({ ...options }),
  );
};
