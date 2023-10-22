import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigService } from '@nestjs/config';
import { AppConfigModule } from './config.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get('DATABASE_USER')}:${configService.get('DATABASE_PASSWORD')}@clustertobi.esunpt6.mongodb.net/?retryWrites=true&w=majority`,
      }),
      inject: [ConfigService],
    }),    AuthModule,
    AppConfigModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
