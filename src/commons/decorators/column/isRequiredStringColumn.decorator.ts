import { applyDecorators } from '@nestjs/common';
import { Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Column, ColumnOptions } from 'typeorm';

export const IsRequiredStringColumn = (props?: ColumnOptions) => {
  return applyDecorators(
    Column(props),
    IsString(),
    IsNotEmpty(),
    ApiProperty(),
    Field(),
  );
};
