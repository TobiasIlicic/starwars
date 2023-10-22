// config.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make the ConfigModule global
    }),
  ],
})
export class AppConfigModule {}