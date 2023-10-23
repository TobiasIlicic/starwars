import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: JSON.parse(configService.get('JWTCONSTANTS')).secret,
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    })
  ],
  providers: [{
    provide: APP_GUARD,
    useClass: AuthGuard,
  }, AuthService, UsersModule, JwtModule],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule { }