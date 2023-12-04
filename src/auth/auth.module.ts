import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  // * UnComment following line's of code to use sessions instead of JWT authentication
  // imports: [UserModule, PassportModule.register({ session: true })], 
  // providers: [AuthService, LocalStrategy, SessionSerializer]
  imports: [UserModule, PassportModule, JwtModule.register({ secret: 'SECRET', signOptions: { expiresIn: '60s' } })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
