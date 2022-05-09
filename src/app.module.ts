import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connection } from './commons/config/connectionDatabase.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      cors: {
        origin: '*',
        methods: 'GET,PUT,POST,DELETE',
        optionsSuccessStatus: 200,
      },
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      ...connection,
    }),
    UserModule,
  ],
})
export class AppModule {}
