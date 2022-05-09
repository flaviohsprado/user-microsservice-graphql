/* istanbul ignore file */
import { ApiProperty } from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';
import { IsDate, IsNotEmpty } from 'class-validator';
import { Column, ColumnOptions } from 'typeorm';
import { Field } from '@nestjs/graphql';

export const IsRequiredDateColumn = (props?: ColumnOptions) => {
  return applyDecorators(
    Column({ type: 'date', ...props }),
    IsDate(),
    IsNotEmpty(),
    ApiProperty(),
    Field(),
  );
};
