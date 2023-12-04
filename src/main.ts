import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // * UnComment following line's of code to use sessions instead of JWT authentication
  // app.use(
  //   session({
  //     secret: 'keyword cat',
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: { maxAge: 3600000 }
  //   }),
  // );

  // app.use(passport.initialize());
  // app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
