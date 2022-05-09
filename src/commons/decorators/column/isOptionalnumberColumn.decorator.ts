import { applyDecorators } from '@nestjs/common';
import { Field, Int } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Column } from 'typeorm';

export const IsOptionalNumberColumn = () => {
  return applyDecorators(
    IsOptional(),
    Column({
      type: 'decimal',
      transformer: {
        from(value: string) {
          return parseFloat(value);
        },
        to(value: number) {
          return value;
        },
      },
      nullable: true,
    }),
    Field((type) => Int, { nullable: true }),
    ApiProperty({ type: 'number', nullable: true }),
  );
};
