/* istanbul ignore file */
import { applyDecorators } from '@nestjs/common';
import { Field, Int } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, ColumnOptions } from 'typeorm';

export const IsRequiredNumberColumn = (props?: ColumnOptions) => {
  return applyDecorators(
    Column({
      ...props,
      type: 'decimal',
      transformer: {
        from(value: string) {
          return parseFloat(value);
        },
        to(value: number) {
          return value;
        },
      },
    }),
    ApiProperty({ type: 'number' }),
    IsNotEmpty(),
    Field((type) => Int),
  );
};
